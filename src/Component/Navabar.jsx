import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navabar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className="h-[60px] py-[10px] px-[20px] flex item-center bg-[#Ffffff] p-6 sticky top-0 z-50 mobile:px-0 border border-b-2 ">
      <div
        className="flex-1 flex justify-start
       items-center mt-2 cursor-pointer text-sm mobile:text-[10px] mobile:justify-center"
      >
        <div className="ml-[20px] mobile:ml-[5px]">
          <Link to="/register">RESGITER</Link>
        </div>
        <div className="ml-[25px] mobile:ml-[5px]">
          <Link to="/login">SIGN IN</Link>
        </div>
        <div className="ml-[25px] mobile:ml-[5px]">
          <Link to="/cart">
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </Link>
        </div>
      </div>

      <div className="flex-1 font-black text-2xl text-center cursor-pointer font-orbitron mobile:ml-6 mobile:text-2xl mobile:flex-none ">
        <Link to="/">
          Ka
          <span className="text-orange-400 font-bold text-4xl mobile:text-3xl">
            dab
          </span>
          ra
        </Link>
      </div>

      <div className="flex-1 flex item-center cursor-pointer mobile:flex-none">
        <div className="mt-2 mobile:hidden">EN</div>
        <div className=" flex item-center ml-[20px] border-[0.5px] rounded-lg mobile:ml-[5px]">
          <input type="text" className="outline-0 pl-2 mobile:w-[60px] " />
          <SearchIcon className="mt-2 text-grey-100 text-[16px] rounded-full mobile:text=[14px]" />
        </div>
      </div>
    </div>
  );
};

export default Navabar;
