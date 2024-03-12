import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";

const Navabar = () => {
  return (
    <div className="h-[60px] py-[10px] px-[20px] flex item-center ">
      <div className="flex-1 flex item-center cursor-pointer">
        <div className="mt-2">EN</div>
        <div className=" flex item-center ml-[20px] border-[0.5px] ">
          <input type="text" className="border-b-2 outline-0 pl-2 " />
          <SearchIcon className="mt-2 text-grey-100 text-[16px] " />
        </div>
      </div>

      <div className="flex-1 font-bold mt-2 text-xl text-center cursor-pointer">
        <Link to="/">
          Ka<span className="text-orange-400 font-bold text-4xl">dab</span>ra
        </Link>
      </div>

      <div className="flex-1 flex justify-end items-center mt-2 cursor-pointer">
        <div className="ml-[20px]">
          <Link to="/register">RESGITER</Link>
        </div>
        <div className="ml-[25px]">
          <Link to="/login">SIGN IN</Link>
        </div>
        <div className="ml-[25px]">
          <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlinedIcon />
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default Navabar;
