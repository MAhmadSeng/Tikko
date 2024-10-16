import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const InputFeild = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        setInputValue(value); 
        console.log(value);  
    };

    return (
        <div className="flex items-center mb-[20px]">
            <div className="relative w-full">
                <input 
                    type="text" 
                    placeholder="Search" 
                    value={inputValue} 
                    onChange={handleChange} 
                    className="rounded pl-10 pr-4 py-2 w-full text-textdark bg-bgInputFeild text-base font-sourceSans font-normal leading-[20.11px]"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <FontAwesomeIcon icon={faSearch} />
                </div>
            </div>
        </div>
    );
}

export default InputFeild;
