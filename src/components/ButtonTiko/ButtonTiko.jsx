import React from "react";
import HoverBtn from "../HoverBtnTikko/HoverBtnTikko";

const ButtonTikko = () => {
  return (
    <>
      <div className="flex justify-center">
      
        <HoverBtn
          icon="/public/Images/Social iconTikko.png"
          btnName="Setup Promotion Surge"
          bg="bg-[#000914]"
          textColor="text-white"
        />
      </div>
    </>
  );
};

export default ButtonTikko;
