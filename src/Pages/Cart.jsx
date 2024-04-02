import { Add, Remove } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../redux/CartReducer";
import { useNavigate } from "react-router-dom";

import axios from "axios";
const Cart = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch(removeProduct({ _id: id }));
  };

  const checkouthandler = async (amount) => {
    const {
      data: { key },
    } = await axios.get("http://localhost:5000/api/v1/getkey");
    const {
      data: { order },
    } = await axios.post("http://localhost:5000/api/v1/checkout", { amount });
    console.log(window);
    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "kadabra",
      description: "Razorpay tutorial",

      order_id: order.id,
      callback_url: "http://localhost:5000/verify",
      prefill: {
        name: "Lavnish Raghav",
        email: "lavnish.raghva1706@gmail.com",
        contact: "9599531459.",
      },
      notes: {
        address: "razorapy official",
      },
      theme: {
        color: "#3399cc",
      },
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
        Navigate("/");
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };

  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <div className="p-5 mobile:p-0 ">
        <h1 className="font-light text-center">YOUR BAG</h1>
        <div className="flex items-center justify-between p-5 mobile:p-0">
          <button className="flex items-center justify-between p-4 bg-black text-white hover:bg-transparent hover:text-black hover:border-2 mobile:p-0 mobile:text-[12px]">
            CONTINUE SHOPPING
          </button>
          <div className="mobile:text-[10px]">
            <span className="underline cursor-pointer mx-2.5 my-0 mobile:mx-1">
              Shopping Bag(2)
            </span>
            <span className="underline cursor-pointer mx-2.5 my-0 mobile:mr-1">
              Your Wishlist (0)
            </span>
          </div>
          <button className="flex items-center justify-between p-4 bg-black text-white hover:bg-transparent hover:text-black hover:border-2 mobile:p-0 mobile:text-[12px]">
            CHECKOUT NOW
          </button>
        </div>
        <div className="flex justify-between flex-col">
          {cart.products.map((product) => (
            <div key={product._id} className="flex-3">
              <div className="flex justify-between">
                <div className="flex-2 flex">
                  <img
                    src={product.img}
                    className="w-[150px] mobile:w-[80px]"
                  />
                  <div className="flex flex-col justify-around p-5">
                    <span>
                      <b>Product:</b> {product.title}
                    </span>
                    <span>
                      <b>ID:</b> {product._id}
                    </span>
                    <div className=" w-5 h-5 rounded-[50%] black" />
                    <span>
                      <b>Size:</b> {product.size}
                    </span>
                    <span>
                      <b>Color:</b> {product.color}
                    </span>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center">
                  <div className="flex items-center mb-5">
                    <Add />
                    <div className="text-2xl m-[5px]">{product.quantity}</div>
                    <Remove />
                  </div>
                  <div className="text-3xl font-extralight">
                    ${product.price}
                  </div>
                  <button
                    className="flex items-center justify-between p-4 bg-black text-white hover:bg-transparent hover:text-black hover:border-2 mobile:p-0 mobile:text-[12px]"
                    onClick={() => handleClick(product._id)}
                  >
                    CLEAR CART
                  </button>
                </div>
              </div>

              <hr className="bg-[#eee] h-px border-[none]" />
            </div>
          ))}

          <div className="flex-1 h-[50vh] p-5 rounded-[10px] border-[0.5px] border-solid border-[lightgray]">
            <h1 className="font-light">ORDER SUMMARY</h1>
            <div className="flex justify-between mx-0 my-[30px] font-medium text-2xl">
              <span>Subtotal</span>
              <span>₹{cart.total}</span>
            </div>
            <div className="flex justify-between mx-0 my-[30px] font-medium text-2xl">
              <span>Estimated Shipping</span>
              <span>₹ 5.90</span>
            </div>
            <span className="flex justify-between mx-0 my-[30px] font-medium text-2xl">
              <span>Shipping Discount</span>
              <span>₹ -5.90</span>
            </span>
            <div
              className="flex justify-between font-medium text-2xl mx-0 my-[30px] "
              type="total"
            >
              <span>Total</span>
              <span> ₹ {cart.total}</span>
            </div>
            <button
              className="w-full bg-black cursor-pointer text-white font-semibold p-2.5 mb-4"
              onClick={() => checkouthandler(cart.total)}
            >
              <h4>CHECK OUT</h4>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
