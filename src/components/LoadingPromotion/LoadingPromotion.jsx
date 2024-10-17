import React from "react";
import Card from "../Card/Card"; 
import Image18 from "../../../public/Images/Image18";

function LoaderPromotion() {
  return (
    <Card
     height="355px"
      width="400px"
      // imgSrc="../../../public/Images/image 18.png"
      ImgSrc={
      <Image18/>
      }
      title="Duplicate Promotions"
      messageLoader="Please wait while we are sending messages to affiliates"
    >
      <div className="flex justify-between items-center mb-2">
        <p className="text-textdark text-sm font-light leading-[17.6px] font-sourceSans">
          Sending message to John-jueoes
        </p>
        <span className="text-textdark text-base font-normal">40%</span>
      </div>
      <div className=" border border-1 border-[#00BCD3] rounded-full overflow-hidden">
        <div className="h-[20px] bg-[#00BCD3]" style={{ width: "40%" }}></div>
      </div>
    </Card>
  );
}

export default LoaderPromotion;
