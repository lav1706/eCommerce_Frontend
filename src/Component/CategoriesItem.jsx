import { Link } from "react-router-dom";

const CategoryItem = ({ item }) => {
  return (
    <div className="flex-1 h-[65vh] m-[3px] relative">
      <img src={item.imageUrl} className="w-[100%] h-[100%] object-cover " />
      <div className="absolute top-[70%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col justify-center text-center">
        <h1 className="text-white flex justify-center text-center mb-2 ">
          {item.title}
        </h1>
        <Link to={`/products/${item.topLavelCategory}`}>
          <button className="border-none bottom-0 p-[10px] text-sm bg-white text-black text-center mx-auto cursor-pointer h-[3vw] w-[10vw] rounded-lg">
            SHOP NOW
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryItem;
