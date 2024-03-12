import Categories from "../Component/Categories";
import Products from "../Component/Products";
import Slider from "../Component/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <Categories />
      <Products />
    </div>
  );
};

export default Home;
