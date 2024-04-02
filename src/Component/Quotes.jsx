import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Slider from "./Slider";

const Quotes = () => {
  return (
    <div className="h-[200px] w-full bg-[#ffffff] flex justify-between ">
      <div className="flex flex-col gap-4 p-2 m-2 border border-gray-400 rounded-lg  ">
        <h1 className="font-orbitron text-6xl pr-10 pt-6">
          Let's Make <hr />a new defination
        </h1>
        <button className="text-sm flex item-center justify-center gap-4 border border-black w-36 h-12  rounded-full mt-10 hover:bg-[teal] hover:text-white">
          <h1 className="p-1 mr-2">Explore More</h1>
          <span className="text-lg ">
            <ArrowForwardIcon />
          </span>
        </button>
      </div>
      <Slider />
    </div>
  );
};

export default Quotes;
