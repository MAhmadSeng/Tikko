// import React, { useState } from "react";
// import { FaCalendar } from "react-icons/fa";
// import DatePickerComponent from "../DuplicationPage2/DatePicker";
// import dayjs from "dayjs";

// const DateTimeField = () => {
//   const [startDate, setStartDate] = useState(new Date());
//   const [open, setOpen] = useState(false);

//   const handleCalendarClick = () => {
//     setOpen(!open);
//   };

//   const onChangeHandler = (date) => {
//     const dayDateJs = dayjs(date).format("MM/DD/YY hh:mm A");
//     setStartDate(dayDateJs);
//     setOpen(false);
//   };
//   // console.log("dayDateJs", dayDateJs)
//   // console.log("Started", startDate)
//   return (
//     <div className="mb-4">
//       <label className="text-[#EFF0F1] font-normal text-base leading-[20.11px] font-sourceSans">
//         Start Time
//       </label>
//       <div className="flex justify-between items-center w-full bg-bgInputFeild p-4 rounded-[5px] relative">
//         <DatePickerComponent
//           selected={startDate}
//           onChange={(date) => onChangeHandler(date)}
//           open={open}
//           onClickOutside={() => setOpen(false)}
//         />
//         <FaCalendar
//           className="text-[#828991] cursor-pointer"
//           onClick={handleCalendarClick}
//         />
//       </div>
//     </div>
//   );
// };

// export default DateTimeField;
import React, { useState } from "react";
import { FaCalendar } from "react-icons/fa";
import DatePickerComponent from "../DuplicationPage2/DatePicker";
import dayjs from "dayjs";

const DateTimeField = () => {
  const [startDate, setStartDate] = useState(new Date()); 
  const [open, setOpen] = useState(false);

  const handleCalendarClick = () => {
    setOpen(!open);
  };

  const onChangeHandler = (date) => {
    const formattedDate = dayjs(date).format("MM/DD/YY hh:mm A");
    setStartDate(formattedDate);
    console.log(formattedDate);
    if (date) {
      setOpen(false);
    }
  };

  return (
    <div className="mb-4">
      <label className="text-[#EFF0F1] font-normal text-base leading-[20.11px] font-sourceSans">
        Start Time
      </label>
      <div className="flex justify-between items-center w-full bg-bgInputFeild p-4 rounded-[5px] relative">
        <DatePickerComponent
          selected={startDate ? dayjs(startDate, "MM/DD/YY hh:mm A").toDate() : null} 
          onChange={onChangeHandler}
          open={open}
          onClickOutside={() => setOpen(false)}
        />
        <FaCalendar
          className="text-[#828991] cursor-pointer"
          onClick={handleCalendarClick}
        />
      </div>
    </div>
  );
};

export default DateTimeField;
