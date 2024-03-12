import { Add, Remove } from "@mui/icons-material";
const Cart = () => {
  return (
    <div>
      <div className="p-5 ">
        <h1 className="font-light text-center">YOUR BAG</h1>
        <div className="flex items-center justify-between p-5">
          <button className="flex items-center justify-between p-4 bg-black text-white hover:bg-transparent hover:text-black hover:border-2 ">
            CONTINUE SHOPPING
          </button>
          <div>
            <span className="underline cursor-pointer mx-2.5 my-0">
              Shopping Bag(2)
            </span>
            <span className="underline cursor-pointer mx-2.5 my-0">
              Your Wishlist (0)
            </span>
          </div>
          <button className="flex items-center justify-between p-4 bg-black text-white hover:bg-transparent hover:text-black hover:border-2">
            CHECKOUT NOW
          </button>
        </div>
        <div className="flex justify-between">
          <div className="flex-3">
            <div className="flex justify-between">
              <div className="flex-2 flex">
                <img
                  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                  className="w-[200px]"
                />
                <div className="flex flex-col justify-around p-5">
                  <span>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </span>
                  <span>
                    <b>ID:</b> 93813718293
                  </span>
                  <div className=" w-5 h-5 rounded-[50%] black" />
                  <span>
                    <b>Size:</b> 37.5
                  </span>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="flex items-center mb-5">
                  <Add />
                  <div className="text-2xl m-[5px]">2</div>
                  <Remove />
                </div>
                <div className="text-3xl font-extralight">$ 30</div>
              </div>
            </div>
            <hr className="bg-[#eee] h-px border-[none]" />
            <div className="flex justify-between">
              <div className="flex-2 flex ">
                <img
                  src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hpcnR8ZW58MHx8MHx8fDA%3D"
                  className="w-[200px]"
                />
                <div className="flex flex-col justify-around p-5">
                  <span>
                    <b>Product:</b> HAKURA T-SHIRT
                  </span>
                  <span>
                    <b>ID:</b> 93813718293
                  </span>
                  <div className="bg-gray w-5 h-5 rounded-[50%]" />
                  <span>
                    <b>Size:</b> M
                  </span>
                </div>
              </div>
              <div className=" flex-1 flex flex-col items-center justify-center">
                <div className=" flex items-center mb-5">
                  <Add />
                  <div className=" text-2xl m-[5px] font-medium">1</div>
                  <Remove />
                </div>
                <div className="text-3xl font-extralight ">₹ 20</div>
              </div>
            </div>
          </div>
          <div className="flex-1 h-[50vh] p-5 rounded-[10px] border-[0.5px] border-solid border-[lightgray]">
            <h1 className="font-light">ORDER SUMMARY</h1>
            <div className="flex justify-between mx-0 my-[30px] font-medium text-2xl">
              <span>Subtotal</span>
              <span>₹ 80</span>
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
              <span> ₹ 80</span>
            </div>
            <button
              className="w-full bg-black cursor-pointer text-white
             font-semibold p-2.5 mb-4"
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
