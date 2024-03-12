import { Send } from "@mui/icons-material";
const Newsletter = () => {
  return (
    <div className="h-[60vh] bg-[#fcf5f5] flex items-center justify-center flex-col">
      <div className="text-[70px] mb-5">Newsletter</div>
      <div className="text-2xl font-light mb-5">
        Get timely updates from your favorite products.
      </div>
      <div className="w-6/12 h-10 bg-[white] flex justify-between border border-solid border-[lightgray]">
        <input
          placeholder="Your email"
          className="flex-[8] pl-5 border-[none]"
        />
        <button className="flex-1 bg-[teal] text-[white] border-[none] flex justify-center text-center pt-2">
          <Send />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
