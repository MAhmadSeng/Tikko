import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Input = ({
  type = "text",
  placeholder = "Search",
  value,
  onChange,
  className,
  showSearchIcon = true,
}) => {
  return (
    <div className="flex items-center mb-[20px]">
      <div className="relative w-full">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={className}
        />
        {showSearchIcon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <FontAwesomeIcon icon={faSearch} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
