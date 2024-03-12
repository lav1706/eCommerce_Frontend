import { Add, Remove } from "@mui/icons-material";

const Product = () => {
  return (
    <div>
      <div className="flex p-10">
        <div className="flex-1">
          <image
            src="https://i.ibb.co/S6qMxwr/jean.jpg"
            className="w-full h-[90vh] object-cover"
          />
        </div>
        <div className="flex-1 my-10">
          <h1 className="font-bold mx-4">Denim Jumpsuit</h1>
          <p className="mx-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </p>
          <span className="font-thin text-[40px]">$ 20</span>
          <div className="w-6/12 flex justify-between mx-0 my-[30px]">
            <div className=" flex items-center">
              <span className="text-xl font-extralight">Color</span>
              <div className="w-5 h-5 cursor-pointer mx-[5px] my-0 rounded-[50%] bg-black" />
              <div className="w-5 h-5 cursor-pointer mx-[5px] my-0 rounded-[50%] bg-blue-800" />
              <div className="w-5 h-5 cursor-pointer mx-[5px] my-0 rounded-[50%]bg-gray-700" />
            </div>
            <div className="flex items-center">
              <span className="text-xl font-extralight">Size</span>
              <select className="ml-2.5 p-[5px]">
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
          </div>
          <div className=" w-6/12 flex items-center justify-between">
            <div className="flex items-center font-bold">
              <Remove />
              <span className="w-[30px] h-[30px] border flex items-center justify-center mx-[5px] my-0 rounded-[10px] border-solid border-[teal]">
                1
              </span>
              <Add />
            </div>
            <button className="bg-[white] cursor-pointer font-medium p-[15px] border-2 border-solid border-[teal] hover:bg-[#f8f4f4]">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
