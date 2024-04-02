import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
const Announcement = () => {
  const [close, setClose] = useState(
    `bg-teal-600 text-white h-6 text-center text-sm font-black flex item-center justify-center gap-2 mobile:text-xs mobile:text-center mobile:justify-start mobile:pl-10`
  );
  const handleClose = () => {
    setClose(close + " hidden");
  };
  return (
    <div className={close}>
      Super Deal! Free Dilvery on Order Over ₹1000
      <CloseIcon className="cursor=pointer" onClick={handleClose} />
    </div>
  );
};

export default Announcement;
