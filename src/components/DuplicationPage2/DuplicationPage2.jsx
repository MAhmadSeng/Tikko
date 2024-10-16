import React from "react";
import WrapperComponent from "../DuplicationPromotionPage1/WrapperPromotion";
import ButtonNext from "../DuplicationPromotionPage1/ButtonNext";
import DateTimeField from "../DuplicationPage2/DateTimeFeild";
import ReplicateFeild from "../DuplicationPage2/ReplicateFeild";
import IntervalFeild from "../DuplicationPage2/IntervalFeild";

const DuplicationPage2 = () => {
  return (
    <WrapperComponent width="w-[698px]" height="h-[780px]">
      <div>
        <p className="mb-1 text-white font-sourceSans text-[18px] font-semibold leading-[22.63px]">
          Customize Recurrence
        </p>
        <p className="mb-4 text-[#EFF0F1] font-sourceSans text-[16px] font-normal leading-[20.11px]">
          Customize your promotion recurrence settings.
        </p>
      </div>
      <div className="flex flex-col ">
        <DateTimeField />
        <ReplicateFeild />
        <IntervalFeild/>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          className="w-[20px] h-[20px] rounded-[5px] shadow-sm border border-[#FFFFFF] bg-transparent  appearance-none checked:bg-blue-700 checked:border-transparent"
        />
        <p className="text-base font-normal font-sourceSans leading-[20.11px] text-[#EFF0F1]">
          Send automated message to your affiliated who are promoting the
          product?
        </p>
      </div>

      <div className="flex justify-end gap-2 mt-60">
        <ButtonNext
          btnName="Back"
          bg="bg-[#000914]"
          textColor="text-[#EFF0F1]"
          bordercolor="border-[#71717147;]"
          border="border"
        />
        <ButtonNext btnName="Next" bg="bg-[#00BCD3]" textColor="text-black" />
      </div>
    </WrapperComponent>
  );
};

export default DuplicationPage2;
