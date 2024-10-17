import React from "react";

const Button = ({
  text = "",
  className = "",
  Img,
  onClick = () => {},
  onChange = () => {},
}) => {
  const defaultStyle =
    "bg-[#000914] text-[#EFF0F1] border border-[#71717147] flex items-center justify-center font-sourceSans font-bold text-[16px] rounded-full px-[30px] w-[93px] h-[40px]";
  return (
    <div className="flex justify-end mt-4">
      <button
        onClick={onClick}
        onChange={onChange}
        className={`${defaultStyle} ${className}`}
      >
        {Img && <img src={icon} alt="icon" className="mr-2 h-5 w-5" />}
        {text}
      </button>
    </div>
  );
};

export default Button;
