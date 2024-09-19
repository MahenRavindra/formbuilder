import React, {useState} from "react";

const ToolTitle = ({name, position, isActivate, onclick}) => {
  return (
    <>
      <div
        onClick={onclick}
        className={`text-[13px] px-[10px] py-[4px]  text-[#485460] cursor-pointer hover:text-black ${position} ${
          isActivate ? "bg-white" : " hover:bg-gray-400"
        }`}>
        {name}
      </div>
    </>
  );
};

export default ToolTitle;
