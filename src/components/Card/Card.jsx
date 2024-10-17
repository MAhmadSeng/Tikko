import React from "react";

const Card = ({
  height,
  width,
  ImgSrc,
  title,
  subtitle,
  messageLoader,
  messageCongrat,
  children,
}) => {
  return (
    <div
      className={`h-[${height}] w-[${width}] max-w-md p-[30px] rounded-[20px] mx-auto my-4 shadow-lg bg-[#000914]`}
    >
      <div className="flex justify-center mb-4">
        {/* <img src={imgSrc} alt="Logo" className="w-[100px] h-[100px]" /> */}
        {ImgSrc}
      </div>
      <h2
        className="text-[32px] font-Family/Oswald text-white leading-[
         40.22px] font-semibold mb-2 text-center"
      >
        {title}
      </h2>

      <h4
        className="text-[18px] font-sourceSans text-white leading-[
         22.63px] font-semibold mb-2 text-center"
      >
        {subtitle}
      </h4>

      <p className="text-textdark mb-4 font-sourceSans text-center font-light leading-[20.11px] text-[16px]">
        {messageLoader}
      </p>
      <p className="text-textdark mb-4 font-sourceSans text-center font-light leading-[17.6px] text-[14px]">
        {messageCongrat}
      </p>
      {children}
    </div>
  );
};

export default Card;
