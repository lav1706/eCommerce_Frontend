import { Send } from "@mui/icons-material";

const Newsletter = () => {
  return (
    <div className="h-[60vh] bg-[#edc7ba] flex items-center justify-center flex-col mobile:h-[80vh] mobile:px-4">
      <div className="text-[70px] mb-5 mobile:text-[50px]">Newsletter</div>
      <div className="text-2xl font-light mb-5 mobile:text-xl">
        Get timely updates from your favorite products.
      </div>
      <div className="w-6/12 h-10 bg-[white] flex justify-between border border-solid border-[lightgray] mobile:w-full">
        <input
          placeholder="Your email"
          className="flex-[8] pl-5 border-[none] outline-none mobile:text-sm"
        />
        <button className="flex-1 bg-[teal] text-[white] border-[none] flex justify-center text-center pt-2 mobile:text-xs">
          <Send />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
