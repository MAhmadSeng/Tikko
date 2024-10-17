import React, { useState } from "react";

const HoverBtn = ({ btnName, bg, textColor, border, borderColor, ImageSrc }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="">
      <button
        className={`flex items-center justify-start ${bg} ${textColor} ${border} ${borderColor} 
          rounded-[80px] transition-all duration-300  
          ${isHovered ? "w-[230px]" : "w-[60px]"} h-[60px] relative overflow-hidden`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
      <div className="transition-all duration-800 object-cover ml-4 w-[24px] h-[24px]">
          {ImageSrc}
        </div>
        {/* <img
          src={ImageSrc}
          alt="icon"
         className="transition-all duration-800 object-cover ml-4 w-[24px] h-[24px]"
        /> */}

        <span
          className={`whitespace-nowrap font-normal px-2 text-base leading-[22.63px] transition-transform duration-300 
            ${isHovered ? "translate-x-0 scale-100 opacity-100" : "translate-x-[-10px] scale-50 opacity-0"}`}
          style={{ transformOrigin: 'left center' }} 
        >
          {btnName}
        </span>
      </button>
    </div>
  );
};

export default HoverBtn;
