import Categories from "../Component/Categories";
import Products from "../Component/Products";
import Quotes from "../Component/Quotes";

const Home = () => {
  return (
    <div className="bg-[#Ffffff] px-16">
      <Quotes />

      <Categories />

      <Products />
    </div>
  );
};

export default Home;
