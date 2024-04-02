import {
  ShoppingCartOutlined,
  SearchOutlined,
  FavoriteBorderOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Product = ({ item }) => {
  return (
    <div className="flex-1 min-w-[260px] md:min-w-[240px] h-[350px] mobile:h-[300px] flex items-center justify-center bg-[rgba(0,0,0,0.2)] relative m-[5px] opacity-100 hover:bg-[#aae1f3] mobile:flex-none ">
      <div className="w-[200px] mobile:w-[200px] h-[200px] mobile:h-[200px] bg-[white] absolute rounded-[50%]">
        <img
          src={item.img}
          className=" rounded-full object-cover overflow-hidden h-[100%] w-[100%] "
        />
        <div className="opacity-0 w-full h-full absolute  z-[3] flex items-center justify-center transition-all duration-[0.5s] ease-[ease] cursor-pointer left-0 top-0 hover:opacity-100 ">
          <div className="w-10 h-10 bg-[white] flex items-center justify-center text-black transition-all duration-[0.5s] ease-[ease] m-2.5 rounded-[50%] hover:bg-gray-400 hover:scale-110">
            <ShoppingCartOutlined />
          </div>
          <div className="w-10 h-10 bg-[white] flex items-center justify-center transition-all duration-[0.5s] ease-[ease] m-2.5 rounded-[50%] hover:bg-gray-400 hover:scale-110 text-black">
            <Link to={`/product/${item._id}`}>
              <SearchOutlined />
            </Link>
          </div>
          <div className="w-10 h-10 bg-[white] flex items-center justify-center transition-all duration-[0.5s] ease-[ease] m-2.5 rounded-[50%] hover:bg-gray-400 hover:scale-110 text-black">
            <FavoriteBorderOutlined />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
