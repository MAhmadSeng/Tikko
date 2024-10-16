import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const IntervalFeild = () => {
  const [value, setValue] = useState("5");
  const [options, setoptions] = useState("hour");
  const [isOpen, setIsOpen] = useState(false);

  const dropDownOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleOptions = (optionSelected) => {
    setoptions(optionSelected);
    setIsOpen(false);
  };

  return (
    <div className="relative mb-4">
      <label className="text-[#EFF0F1] font-normal text-base leading-[20.11px] font-sourceSans">Select an Interval</label>
      <div className="flex items-center w-full bg-bgInputFeild p-4 rounded-[5px]">
        <input 
          type="text" 
          value={value} 
          onChange={(e) => setValue(e.target.value.replace(/[^0-9]/g, ''))}
          className="text-[#EFF0F1] bg-transparent focus:outline-none w-[70%] sm:w-[75%] border-none outline-none" 
        />
        <span className="mx-2 text-[#828991] hidden sm:block">|</span>
        <div className="flex gap-2 sm:gap-28 items-end cursor-pointer" onClick={dropDownOpen}>
          <span className="text-white font-normal text-base leading-[20.11px] font-sourceSans">{options}</span>
          <FaChevronDown className="text-[#828991] h-[24px] w-[12px]" />
        </div>
      </div>
      {isOpen && (
        <div className="mt-2 w-full bg-[#19222B] rounded-lg shadow-lg">
          <ul className="py-2">
            <li className="px-4 py-2 text-white hover:bg-gray-600 cursor-pointer" 
                onClick={() => handleOptions("Hour")}>Hours</li>
            <li className="px-4 py-2 text-white hover:bg-gray-600 cursor-pointer" 
                onClick={() => handleOptions("Minute")}>Minutes</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default IntervalFeild;
