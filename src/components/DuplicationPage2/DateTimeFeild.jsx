import React from 'react';
import { FaCalendar} from 'react-icons/fa';

const DateTimeField = () => {
  return (
    <div className="mb-4">
      <label className="text-[#EFF0F1] font-normal text-base leading-[20.11px] font-sourceSans">Start Time</label>
      <div className="flex justify-between items-center w-full bg-bgInputFeild  p-4 rounded-[5px]">
        <span className="text-[#EFF0F1] font-normal text-base leading-[20.11px] font-sourceSans">10/10/2024 10:00 AM</span>
        <FaCalendar className="text-[#828991]" />
      </div>
    </div>
  );
};

export default DateTimeField;
