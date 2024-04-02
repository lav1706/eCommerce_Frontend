import { Link } from "react-router-dom";

const CategoryItem = ({ item }) => {
  return (
    <div className="flex-1 h-[50vh] m-[3px] relative mobile:m-[1px] mobile:h-[30vh] mobile:w-full mobile:flex-none mobile:p-2">
      <img
        src={item.imageUrl}
        className="w-[100%] h-[100%] object-cover rounded-lg mobile:object-cover"
      />
      <div className="flex absolute w-[100%] h-[100%] left-0 top-0 items-center justify-center flex-col">
        <h1 className="text-white flex justify-center text-center mb-2 mobile:text-sm">
          {item.title}
        </h1>
        <Link to={`/products/${item.cat}`}>
          <button className="border-none bottom-0 p-[10px] text-sm bg-white text-black text-center mx-auto cursor-pointer h-[3vw] w-[10vw] rounded-lg hover:bg-gray-200 mobile:text-xs mobile:m-0 mobile:p-2 mobile:w-full">
            SHOP NOW
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryItem;
