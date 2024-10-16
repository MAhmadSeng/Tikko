import React, { useState } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const ReplicateFeild = () => {
  const [count, setCount] = useState(10); 

  const incReplicate = () => {
    setCount(count + 1);
    console.log("increment", count)
  }
  const decReplicate = () => {
    setCount(count > 0 ? count - 1 : 0);
  console.log("decrement", count)
  } 

  return (
    <div className="relative mb-4">
      <label className="text-[#EFF0F1] font-normal text-base leading-[20.11px] font-sourceSans">Replicates</label>
      <div className="flex justify-between items-center w-full bg-bgInputFeild py-2 px-4 rounded-[5px]">
        <span className="text-[#EFF0F1] font-normal text-base leading-[20.11px] font-sourceSans">{count} Replicates</span>
        <div className="flex flex-col items-center">
          <FaChevronUp onClick={incReplicate} className="text-[#828991] cursor-pointer h-[24px] w-[12px]" />
          <FaChevronDown onClick={decReplicate} className="text-[#828991] cursor-pointer h-[24px] w-[12px]" />
        </div>
      </div>
    </div>
  );
};

export default ReplicateFeild;
