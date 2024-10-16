
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";

const PromotionItem = ({ promotion, isSelected, onSelect }) => {
  return (
    <li className="flex items-center justify-between border-b px-2 pt-6 pb-4 border-b-[0.5px] border-b-[#828991]">
      <div className="flex items-center">
        <div
          className="bg-white rounded-full flex items-center justify-center"
          style={{ width: "32px", height: "32px", border: "1px solid #FFFFFF" }}
        >
          <FontAwesomeIcon icon={faLayerGroup} className="text-gray-800" />
        </div>
        <span className="ml-2 text-white font-sourceSans text-[16px] font-normal leading-[20px]">
          {promotion.name} ({promotion.id})
        </span>
      </div>
      <input
        type="radio"
        checked={isSelected}
        onChange={onSelect}
        className="w-[20px] h-[20px] rounded-sm shadow-sm border border-[#FFFFFF] bg-transparent checked:bg-blue-700 checked:border-transparent"
      />
    </li>
  );
};

export default PromotionItem;
