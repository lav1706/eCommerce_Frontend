import { Add, Remove } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods.js";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/CartReducer.jsx";

const Product = () => {
  // Hook to get the current location from the React Router
  const location = useLocation();
  // Extracting the category from the pathname
  const id = location.pathname.split("/")[2];
  const [product, setProducts] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest
          .get(`http://localhost:5000/api/v1/product/find/${id}`)
          .catch(function (error) {
            if (error.response) {
              console.log("Server responded with an error");
            } else if (error.request) {
              console.log("No response received");
            } else {
              console.log("Error setting up the request");
            }
          });
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };
  return (
    <div>
      <div className="flex p-10 mobile:p-0 mobile:flex-col">
        <div className="flex-1 mobile:flex-none">
          <img
            src={product.img}
            className="w-full h-[90vh] object-cover mobile:h-[50vh]"
          />
        </div>
        <div className="flex-1 my-10 mx-4 mobile:flex-none ">
          <h1 className="font-bold text-2xl ">{product.title}</h1>
          <p className="text-xl ">{product.desc}</p>
          <span className="font-thin text-[30px] ">₹ {product.price}</span>
          <div className="w-6/12 flex justify-between mx-0 my-[30px]">
            <div className="flex items-center">
              <span className="text-xl font-extralight">Color</span>
              {product.color?.map((color, index) => (
                <div
                  key={index}
                  style={{ backgroundColor: color }}
                  onClick={() => setColor(color)}
                  className="w-5 h-5 cursor-pointer mx-[5px] my-0 rounded-[50%]"
                />
              ))}
            </div>
            <div className="flex items-center">
              <span className="text-xl font-extralight">Size</span>
              <select
                className="ml-2.5 p-[5px]"
                onChange={(e) => setSize(e.target.value)}
              >
                {product.size?.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
          <div className=" w-8/12 flex  gap-4 items-center justify-between">
            <div className="flex items-center font-bold ">
              <span className="border-[teal] border rounded-lg hover:bg-[teal] hover:text-white cursor-pointer">
                <Remove onClick={() => handleQuantity("dec")} />
              </span>
              <span className="w-[30px] h-[30px] border flex items-center justify-center mx-[5px] my-0 rounded-[10px] border-solid border-[teal]">
                {quantity}
              </span>
              <span className="border-[teal] border rounded-lg hover:bg-[teal] hover:text-white cursor-pointer">
                <Add onClick={() => handleQuantity("ace")} />
              </span>
            </div>
            <button
              className="bg-[white] cursor-pointer font-lg p-[15px] border-2 border-solid border-[teal] hover:bg-[#f8f4f4] mobile:text-xs mobile:w-20 mobile:h-10 mobile:p-0"
              onClick={handleClick}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
