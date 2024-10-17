import React from "react";
import HoverBtn from "../HoverBtnTikko/HoverBtnTikko";
import SocialIconTikko from '../../../public/Images/SocialIconTikko'
const ButtonTikko = () => {
  return (
    <>
      <div className="flex justify-center">
      
        <HoverBtn
          // icon="/public/Images/Social iconTikko.png"
          ImageSrc={<SocialIconTikko/>}
          btnName="Setup Promotion Surge"
          bg="bg-[#000914]"
          textColor="text-white"
        />
      </div>
    </>
  );
};

export default ButtonTikko;
