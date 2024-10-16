import React from "react";
import {Link , NavLink} from 'react-router-dom'

const FormRoute = ({ title , spann, to}) => {
  return (
    <Link
      to={to}
      className="font-sans text-white text-[14px] 
      leading-17.6 md:text-[14px] md:leading-[17.6px] font-normal">
      {title}
      <span className="font-sans text-[14px] 
      leading-17.6 md:text-[14px] md:leading-[17.6px] font-normal  text-[#00BCD3]">{spann}</span>
    </Link>
  );
};

export default FormRoute;
