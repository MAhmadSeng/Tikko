import React from 'react';

const ButtonNext = ({btnName, bg, textColor,  border, bordercolor, icon, width, height , }) => {
  return (
    <div className="flex justify-end mt-4">
      <button className={`${bg} ${textColor} ${border} ${bordercolor} flex items-center justify-center font-sourceSans font-bold text-[16px] rounded-full px-[30px] w-[93px] h-[40px]`}>
      {icon && <img src={icon} alt="icon" className="mr-2 h-5 w-5" />} 
        {btnName}
      </button>
    </div>
  );
};

export default ButtonNext;






