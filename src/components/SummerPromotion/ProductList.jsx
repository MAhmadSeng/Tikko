import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ProductList = ({ products }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="font-normal text-[18px] leading-[22.63px] font-sourceSans">
          Products ({products.length})
        </p>
        <button className="text-[#A3A8AE]">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>

      {isOpen && (
        <div className="mt-2">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col sm:flex-row items-start sm:items-center mb-4"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-[60px] h-[60px]  rounded-[10px] mr-4 mb-2 sm:mb-0"
              />
              <div>
                <p className="font-normal lg:text-[18px] leading-[22.63px] font-sourceSans sm:text-sm">
                  {product.name}
                </p>
                <p className="font-normal lg:text-base leading-[20.11px] font-sourceSans sm:text-sm">
                  Deal Price: {product.dealPrice}
                </p>
                <p className="font-normal lg:text-base leading-[20.11px] font-sourceSans sm:text-sm">
                  Original Price: {product.originalPrice}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
