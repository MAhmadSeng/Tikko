import React from "react";

const Input = ({
  type = "text",
  placeholder = "Your Text",
  value,
  onChange,
  onClick,
  checked,
  className,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      className={className}
      onChange={onChange}
      onClick={onClick}
      checked={checked}
    />
  );
};

export default Input;
