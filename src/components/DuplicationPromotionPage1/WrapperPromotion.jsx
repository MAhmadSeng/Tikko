
// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimes } from "@fortawesome/free-solid-svg-icons";

// const WrapperComponent = ({ children }) => { 
//   return (
//     <div className="sticky right-0 p-[30px] flex justify-end">
//       <div className="w-[698px] h-[780px] bg-[#000914] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-[30px] rounded-[20px] xs:h-[100%]">
//         <div className="flex justify-between items-center mb-[20px]">
//           <h4 className="text-white font-sourceSans text-[24px] font-normal leading-[30.17px]">
//             Duplicate Promotions 
//           </h4>
//           <div className="cursor-pointer text-white text-xl">
//             <FontAwesomeIcon icon={faTimes} />
//           </div>
//         </div>
//         {children} 
//       </div>
//     </div>
//   );
// };

// export default WrapperComponent;
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const WrapperComponent = ({ children, width, height }) => { 
  return (
    <div className="sticky right-0 p-[30px] flex justify-end">
      <div 
        className={`${width} ${height} bg-[#000914] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-[30px] rounded-[20px] xs:h-[100%]`}
      >
        <div className="flex justify-between items-center mb-[20px]">
          <h4 className="text-white font-sourceSans text-[24px] font-normal leading-[30.17px]">
            Duplicate Promotions 
          </h4>
          <div className="cursor-pointer text-white text-xl">
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>
        {children} 
      </div>
    </div>
  );
};

export default WrapperComponent;
