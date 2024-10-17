import React from "react";
import TitleAndHeading from "../TikkoWelcomePage/FormHeader";
import CommonButton from "../TikkoWelcomePage/CommonButton";
import FormRoute from "../TikkoWelcomePage/FormRoute";
import FormLogo from "../TikkoWelcomePage/FormLogo";
import TikkoBlackLogo from '../../../public/Images/TikkoBlackLogo'

const TikkoWelcomePage = () => {
  return (
    <>
      <div className="sticky right-0 p-[30px] flex justify-end">
        <div
          className="w-[380px] h-[633px] xs:h-[auto] bg-bgmain shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] 
          p-[30px] rounded-[18px] flex flex-col items-center"
        >
          <FormLogo />
          <div className="mb-8">
            <TitleAndHeading
              title="Welcome!"
              description="Please log in with your TikTok account to continue..."
            />
          </div>
          <div className="flex flex-col w-full mb-4 gap-4">
            <CommonButton
              ImageSrc={<TikkoBlackLogo/>}
              ImageAlt="Tikko"
              text="TikTok"
              textColor="#151718"
              bgColor="#00BCD3"
              borderColor="#00BCD3"
              borderRadius="rounded-[60px]"
            />
            <CommonButton
              text="Login with email"
              textColor="#00BCD3"
              bgColor="#1C1C1E"
              borderColor="#00BCD3"
              borderRadius="rounded-[60px]"
            />
          </div>

          <p
            className="font-sans text-white text-[14px] 
            leading-17.6 md:text-[14px] md:leading-[17.6px] font-normal text-center mb-24 "
          >
            By logging in with TikTok, you agree to our Terms of Service and
            acknowledge.
          </p>

          <div className="mt-4">
            <FormRoute title="Don't have an account? " spann="Sign up" to="/"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default TikkoWelcomePage;
