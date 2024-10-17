import React from "react";
import WrapperComponent from "../DuplicationPromotionPage1/WrapperPromotion";
import Button from "../DuplicationPromotionPage1/ButtonNext";
import TextArea from "./TextAreaa";

const DPInsert = () => {
  return (
    <WrapperComponent
      width="md:w-[500px] lg:w-[698px] w-[698px]"
      height="h-[780px]"
    >
      <div className="flex justify-start my-4">
        <div className="font-sourceSans leading-20.11 text-base text-textlight px-2 py-2 bg-[#19212B] rounded">
          Insert creator name <span className="bg-bgInputFeild">|</span>
        </div>
      </div>
      <TextArea
        label="Reminder message"
        placeholder=""
        text="Hi John,


This is a quick reminder about your upcoming promotion for your latest product.



Product Name: Serum 
Promotion Start Date: 12th September 2024



Don't forget to share your affiliate link to maximize your sales!"
        height="463px"
        width="638px"
        className="w-full max-w-[638px] h-[463px] sm:h-[400px] xs:h-[350px]"
      />

      <div className="flex justify-end gap-2 mt-16 flex-wrap ">
        <Button
          text="Back"
          className="bg-[#000914] text-[#EFF0F1] border-[#71717147] border"
        />
        <Button text="Publish" className="bg-[#00BCD3] text-black" />
      </div>
    </WrapperComponent>
  );
};

export default DPInsert;
