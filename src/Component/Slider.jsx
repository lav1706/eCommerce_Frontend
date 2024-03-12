import { SliderData } from "../data";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const items = SliderData.map((item) => (
  <img
    src={item.image}
    alt=""
    key={item.id}
    className="w-[100%] h-[60vh] object-cover"
  />
));

const Slider = () => (
  <AliceCarousel
    items={items}
    autoPlay
    disableButtonsControls
    autoPlayInterval={1000}
    infinite
  />
);
export default Slider;
