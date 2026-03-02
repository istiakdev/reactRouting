import React from "react";

export const Button = ({ btnText, className }) => {
  return (
    <button
      className={` px-7 py-3.5  rounded-2xl  bg-[#FF7628] text-white hover:bg-white hover:text-black hover:border hover:border-[#FF7628] hover:scale-100 duration-500 cursor-pointer  ${className}`}
    >
      {btnText}
    </button>
  );
};
