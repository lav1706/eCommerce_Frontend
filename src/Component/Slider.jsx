import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { SliderData } from "../data";
import { useState } from "react";
import "./Slider.css";

const Slider = () => {
  const [slides] = useState(SliderData);
  const [activeSlide, setActiveSlide] = useState(0);

  const prevSlide = () => {
    setActiveSlide(activeSlide === 0 ? slides.length - 1 : activeSlide - 1);
  };

  const nextSlide = () => {
    setActiveSlide(activeSlide === slides.length - 1 ? 0 : activeSlide + 1);
  };

  const style = { fontSize: "30px", mobile: { fontSize: "20px" } };

  return (
    <div className="h-[300px]  w-[45%] bg-[#F1F6F9] relative mobile:h-[300px] ">
      <div className="absolute flex justify-between items-center z-20 w-full h-full">
        <div
          className="rounded-full bg-gray-100 flex justify-center items-center shadow-sm hover:cursor-pointer mobile:p-0"
          onClick={prevSlide}
        >
          <ArrowLeftOutlined style={style} />
        </div>
        <div
          className="rounded-full bg-gray-100 flex justify-center items-center shadow-sm hover:cursor-pointer mobile:p-0"
          onClick={nextSlide}
        >
          <ArrowRightOutlined style={style} />
        </div>
      </div>

      {SliderData.map((item, index) => (
        <div
          className={`wrapper flex w-full h-[300px] items-center justify-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden mobile:h-[300px] ${
            index === activeSlide ? "block" : "hidden"
          }`}
          key={item.id}
        >
          <div className="slideStyle">
            <div className="flex-1 flex justify-center items-center h-full">
              <img
                className="h-full object-cover"
                src={item.image}
                alt={item.id}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
