import React from "react";

const CommonButton = ({ text, textColor, bgColor, borderColor, borderRadius, ImageSrc, width, height, ImageAlt, lineHeight}) => {
  return (
    <button
      className={` ${width} ${height}font-sourceSans font-semibold text-base border leading-[19.5px] text-center
        ${textColor ? `text-[${textColor}]` : "text-[#151718]"}
        ${bgColor ? `bg-[${bgColor}]` : "bg-[#00BCD3]"}
        ${borderColor ? `border-[${borderColor}]` : "border-none"}
         ${lineHeight ? `leading-[${lineHeight}]` : "leading-[19.5px]"}
        ${borderRadius} p-[15px] flex justify-center items-center gap-2`}
    >
      {/* {ImageSrc && (
        <img src={ImageSrc} alt={ImageAlt} className="h-[24px] w-[24px]" />
      )} */}
      {ImageSrc && (
        <div className="h-[24px] w-[24px]">
          {ImageSrc} 
        </div>
      )}
      {text}
    </button>
  );
};

export default CommonButton;
