import React from "react";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerComponent = ({ selected, onChange, open, onClickOutside }) => {
  return (
    <DatePicker
      selected={selected}
      onChange={onChange}
      showTimeSelect
      dateFormat="MM/dd/yy hh:mm aa"
      className="bg-transparent text-[#EFF0F1] font-normal text-base leading-[20.11px] font-sourceSans outline-none w-full"
      customInput={
        <span className="text-[#EFF0F1]">
          {dayjs(selected).format("MM/DD/YY hh:mm A")}
        </span>
      }
      open={open}
      onClickOutside={onClickOutside}
    />
  );
};
export default DatePickerComponent;
