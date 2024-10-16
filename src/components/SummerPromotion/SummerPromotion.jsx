import React from "react";
import WrapperComponent from "../DuplicationPromotionPage1/WrapperPromotion";
import ButtonNext from "../DuplicationPromotionPage1/ButtonNext";
import PromotionList from "../SummerPromotion/PromotionList";
import ProductList from "../SummerPromotion/ProductList";

const SummerPromotion = () => {
  const promotions = [
    { name: "Summer Special 1", date: "9/22/2024", time: "12:00pm - 12:59pm" },
    { name: "Summer Special 2", date: "9/23/2024", time: "1:00pm - 1:59pm" },
    { name: "Summer Special 3", date: "9/24/2024", time: "2:00pm - 2:59pm" },
  ];
  
  const products = [
    {
      name: "Wearable Blanket Hoodie",
      dealPrice: "$42",
      originalPrice: "$55 - $73",
      image: "/public/Images/Wearable Blanket Hoodie.png",
    },
    {
      name: "Women's Nonslip Lightweight Gym Shoes",
      dealPrice: "$36",
      originalPrice: "$40 - $45",
      image: "/public/Images/women sneakers.png",
    },
    {
      name: "Portable Waterproof Bluetooth Speaker",
      dealPrice: "$25",
      originalPrice: "$30 - $35",
      image: "/public/Images/Portable Waterproof Bluetooth Speaker.png",
    },
  ];

  return (
    <WrapperComponent  width="md:w-[500px] lg:w-[638px] w-[638px]" height="h-[780px]">
      <div>
        <p className="mb-4 text-white font-sourceSans text-[18px] font-semibold leading-[22.63px]">
          Review the promotion duplication
        </p>
        <p className="mb-4 text-white font-sourceSans text-[18px] font-medium leading-[26.68px]">
          Summer Special Promotion
        </p>
      </div>
      <div className="text-white">
        <div className="mb-6 flex items-center justify-between">
          <p className="font-normal text-[18px] leading-[22.63px] font-sourceSans">Summer Special 1</p>
          <p className="font-normal text-base leading-[20.11px] font-sourceSans">12:00pm - 12:59pm</p>
        </div>
        <div className="mb-6 flex items-center justify-between">
          <p className="font-normal text-[18px] leading-[22.63px] font-sourceSans">Number of Affiliates</p>
          <p className="font-normal text-[18px] leading-[22.63px] font-sourceSans">125</p>
        </div>
        <div className="mb-6 flex items-center justify-between">
          <p className="font-normal text-[18px] leading-[22.63px] font-sourceSans">Intervals</p>
          <p className="font-normal text-[18px] leading-[22.63px] font-sourceSans">1 hour</p>
        </div>
        <div className="mb-6 flex items-center justify-between">
          <p className="font-normal text-[18px] leading-[22.63px] font-sourceSans">Duplicate</p>
          <p className="font-normal text-[18px] leading-[22.63px] font-sourceSans">3 times</p>
        </div>
      </div>
      <div className="text-white">
        <PromotionList promotions={promotions} />
        <ProductList products={products} />
      </div>
      <div className="flex justify-end gap-2 mt-16">
        <ButtonNext
          btnName="Back"
          bg="bg-[#000914]"
          textColor="text-[#EFF0F1]"
          bordercolor="border-[#71717147]"
          border="border"
        />
        <ButtonNext
          btnName="Publish"
          bg="bg-[#00BCD3]"
          textColor="text-black"
        />
      </div>
    </WrapperComponent>
  );
};

export default SummerPromotion;