import { lazy, Suspense, useState } from "react";
import Announcement from "./Component/Announcement";
import Footer from "./Component/Footer";
import Navabar from "./Component/Navabar";
import Newsletter from "./Component/Newsletter";
const Cart = lazy(() => import("./Pages/Cart"));
const Home = lazy(() => import("./Pages/Home"));
const Login = lazy(() => import("./Pages/Login"));
const Product = lazy(() => import("./Pages/Product"));
const ProductLists = lazy(() => import("./Pages/ProductLists"));
const Register = lazy(() => import("./Pages/Register"));

import { Routes, Route, Navigate } from "react-router-dom";
import Loader from "./Component/Loader";

const App = () => {
  const [user] = useState(false);
  return (
    <>
      <Announcement />
      <Navabar />
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />

          <Route
            path="/register"
            element={user ? <Navigate to="/" /> : <Register />}
          />
          <Route path="cart" element={<Cart />} />
          <Route path={`product/:id`} element={<Product />} />
          <Route path={`products/:cat`} element={<ProductLists />} />
        </Routes>
      </Suspense>
      <Newsletter />
      <Footer />
    </>
  );
};

export default App;
