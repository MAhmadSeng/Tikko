import React from "react";
import WrapperComponent from "../DuplicationPromotionPage1/WrapperPromotion";
import ButtonNext from "../DuplicationPromotionPage1/ButtonNext";
import TextArea from "./TextAreaa";

const DPInsert = () => {
  return (
    <WrapperComponent width="w-[698px]" height="h-[780px]">
      <div className="flex justify-start my-4">
        <button className="font-sourceSans leading-20.11 text-base text-textlight px-2 py-2 bg-[#19212B] rounded">
          Insert creator name <span className="bg-bgInputFeild ">|</span>
        </button>
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
        <ButtonNext
          btnName="Back"
          bg="bg-bgmain"
          textColor="text-textlight"
          bordercolor="border-[#71717147]"
          border="border"
        />
        <ButtonNext btnName="Next" bg="bg-[#00BCD3]" textColor="text-black" />
      </div>
    </WrapperComponent>
  );
};

export default DPInsert;
