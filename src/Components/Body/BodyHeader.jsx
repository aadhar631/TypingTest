import React, { useState } from "react";
import { IoTime } from "react-icons/io5";
import { FaQuoteLeft } from "react-icons/fa";
import { BsTriangleHalf } from "react-icons/bs";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";

const BodyHeader = ({ isNumber, setIsNumber, isPunctuation, setIsPunctuation, setIsTimer, isFirstStart, setIsFirstStart, isEsc, setIsEsc}) => {

  const [selected, setSelected] = useState(null);
  const [onNumberClick, setOnNumberClick] = useState(false);
  const [onPunctuationClick, setOnPunctuationClick] = useState(false);

  const handleItemClick = (index, value) => {
    setSelected(index);
    setIsTimer(value);
    console.log(`bodyHeader ${value}`);
    setIsFirstStart(false);
  };

  function handleIsNumber() {
    setOnNumberClick(!onNumberClick);
    setIsNumber(!isNumber);
  }

  function handleIsPunctuation() {
    setOnPunctuationClick(!onPunctuationClick);
    setIsPunctuation(!isPunctuation);
  }

  return (
    <div className="flex font-Roboto text-[13px] items-center gap-[15px] dark:bg-[#2C2E31] bg-white py-[8px] px-[15px] rounded-lg">
      <div className="flex items-center">
        <div onClick={handleIsPunctuation} className={`flex items-center cursor-pointer font-medium ${isPunctuation ? 'text-[#e2b714]' : 'text-[#646669]'} hover:text-black dark:hover:text-white ease-in-out duration-500`}>
          <h1 className="font-poppins" >@</h1>
          <h1 className="font-poppins ml-[5px]" >punctuation</h1>
        </div>

        <div onClick={handleIsNumber} className={`flex items-center ml-[20px] cursor-pointer font-medium ${isNumber ? 'text-[#e2b714]' : 'text-[#646669]'} hover:text-black dark:hover:text-white ease-in-out duration-500`}>
          <h1 className="font-poppins" >#</h1>
          <h1 className="font-poppins ml-[5px]" >numbers</h1>
        </div>
      </div>

      <div className="flex gap-[15px] items-center border-r-2 border-l-2 border-r-[#646669] border-l-[#646669] px-[15px]">
        <div className={`flex items-center cursor-pointer font-medium text-[#e2b714] hover:text-black dark:hover:text-white ease-in-out duration-500`}>
          <h1 className="" ><IoTime /></h1>
          <h1 className="font-poppins ml-[5px]" >time</h1>
        </div>

        {/* ... (other menu items) ... */}

        <div className={`flex items-center cursor-pointer font-medium text-[#646669] hover:text-black dark:hover:text-white ease-in-out duration-500`}>
          <h1 className="text-[13px]" ><HiMiniWrenchScrewdriver /></h1>
          <h1 className="font-poppins ml-[5px]" >custom</h1>
        </div>
      </div>

      <div className="flex item-center">
        <div className="flex items-center gap-[15px]">
          {[15, 30, 60, 120, <HiMiniWrenchScrewdriver />].map((value, index) => (
            <h1
              key={index}
              className={`font-poppins cursor-pointer font-medium hover:text-black dark:hover:text-white ease-in-out duration-500 ${
                selected === index ? 'text-[#e2b714]' : 'text-[#646669]'
              }`}
              onClick={() => handleItemClick(index, value)}
            >
              {value}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BodyHeader;
