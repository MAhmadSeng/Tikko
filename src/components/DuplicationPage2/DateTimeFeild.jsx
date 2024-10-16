// import React from 'react';
// import { FaCalendar} from 'react-icons/fa';

// const DateTimeField = () => {
//   return (
//     <div className="mb-4">
//       <label className="text-[#EFF0F1] font-normal text-base leading-[20.11px] font-sourceSans">Start Time</label>
//       <div className="flex justify-between items-center w-full bg-bgInputFeild  p-4 rounded-[5px]">
//         <span className="text-[#EFF0F1] font-normal text-base leading-[20.11px] font-sourceSans">10/10/2024 10:00 AM</span>
//         <FaCalendar className="text-[#828991]" />
//       </div>
//     </div>
//   );
// };

// export default DateTimeField;

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { FaCalendar } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import '../../index.css';


const DateTimeField = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="mb-4">
      <label className="text-[#EFF0F1] font-normal text-base leading-[20.11px] font-sourceSans">
        Start Time
      </label>
      <div className="flex justify-between items-center w-full bg-bgInputFeild p-4 rounded-[5px]">
        <DatePicker 
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showTimeSelect
          dateFormat="MM/dd/yy hh:mm aa"
          className="bg-transparent text-[#EFF0F1] font-normal text-base leading-[20.11px] font-sourceSans outline-none w-full"
          customInput={
            <span className="text-[#EFF0F1]">
              {startDate
                .toLocaleString("en-US", {
                  year: "2-digit",
                  month: "2-digit",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })
                .replace(",", "")}
            </span>
          }
        />
        <FaCalendar
          className="text-[#828991] cursor-pointer"
          onClick={() => setStartDate(new Date())}
        />
      </div>
    </div>
  );
};

export default DateTimeField;
