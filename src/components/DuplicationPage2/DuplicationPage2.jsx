import React from "react";
import WrapperComponent from "../DuplicationPromotionPage1/WrapperPromotion";
import Button from "../DuplicationPromotionPage1/ButtonNext";
import DateTimeField from "../DuplicationPage2/DateTimeFeild";
import ReplicateFeild from "../DuplicationPage2/ReplicateFeild";
import IntervalFeild from "../DuplicationPage2/IntervalFeild";

const DuplicationPage2 = () => {
  return (
    <WrapperComponent
      width="md:w-[500px] lg:w-[698px] w-[698px]"
      height="h-[780px]"
    >
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
        <IntervalFeild />
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
        <Button
          text="Back"
          className="bg-[#000914] text-[#EFF0F1] border border-[#71717147] "
        />
        <Button text="Next" className="bg-[#00BCD3] text-black" />
      </div>
    </WrapperComponent>
  );
};

export default DuplicationPage2;
