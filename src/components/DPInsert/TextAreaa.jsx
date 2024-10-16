import React from "react";

const TextArea = ({ label, text, placeholder }) => {
  return (
    <>
      <label className="font-normal text-textlight text-base font-sourceSans">
        {label}
      </label>
      <div className="mt-2">
        <textarea
          className="w-full max-w-[638px] h-[463px] rounded-[5px] bg-bgInputFeild  leading-[20.11px] text-base 
          font-light font-sourceSans text-white p-4 resize-none border-none"
          placeholder={placeholder}
          value={text}
          readOnly
        />
      </div>
    </>
  );
};

export default TextArea;
