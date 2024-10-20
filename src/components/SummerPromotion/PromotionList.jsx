import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const PromotionList = ({ promotions }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="font-normal text-[18px] leading-[22.63px] font-sourceSans">
          Promotions ({promotions.length})
        </p>
        <button className="text-[#A3A8AE]">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>

      {isOpen && (
        <div className="mt-2">
          {promotions.map((promotion) => (
            <div key={promotion.id} className="flex justify-between mb-2">
              <p className="font-normal lg:text-base  text-base leading-[20.11px] font-sourceSans sm:text-sm">{promotion.name}</p>
              <p className="font-normal lg:text-base  text-base leading-[20.11px] font-sourceSans sm:text-sm">{promotion.date} | {promotion.time}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PromotionList;