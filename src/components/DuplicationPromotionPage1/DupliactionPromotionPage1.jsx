
import React, { useState } from "react";
import WrapperComponent from "../DuplicationPromotionPage1/WrapperPromotion";
import InputFeild from "../DuplicationPromotionPage1/InputFeild";
import PromotionItem from "../DuplicationPromotionPage1/PromotionList";
import ButtonNext from "../DuplicationPromotionPage1/ButtonNext";

const DuplicatePromotionPage1 = () => {
  const [selectedPromotionId, setSelectedPromotionId] = useState(null);

  const promotions = [
    { id: 8010, name: "Promotion Name" },
    { id: 8011, name: "Promotion Name" },
    { id: 8012, name: "Promotion Name" },
    { id: 8099, name: "Promotion Name" },
    { id: 8014, name: "Promotion Name" },
    { id: 8016, name: "Promotion Name" },
  ];

  const handleSelect = (id) => {
    console.log("Id No", selectedPromotionId)
    setSelectedPromotionId(id);
  };

  return (
    <WrapperComponent  width="md:w-[500px] lg:w-[698px] w-[698px]" height="h-[780px]">
      <div>
        <InputFeild />

        <p className="mb-1 text-white font-sourceSans text-[18px] font-semibold leading-[22.63px]">
          Your Promotions
        </p>
        <p className="mb-4 text-[#EFF0F1] font-sourceSans text-[16px] font-normal leading-[20.11px]">
          Select a promotion to duplicate
        </p>
      </div>

      <div>
        <ul>
          {promotions.map((promotion) => (
            <PromotionItem
              key={promotion.id}
              promotion={promotion}
              isSelected={selectedPromotionId === promotion.id}
              onSelect={() => handleSelect(promotion.id)}
            />
          ))}
        </ul>
      </div>
      <div>
        <ButtonNext btnName="Next" bg="bg-[#00BCD3]" textColor="text-black" />
      </div>
    </WrapperComponent>
  );
};

export default DuplicatePromotionPage1;
