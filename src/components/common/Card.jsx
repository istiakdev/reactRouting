// Card.jsx
import React from "react";
import { Button } from "./Button";

const Card = ({ image, title, description,pText,className }) => {
  return (
    <div className="max-w-sm  rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 pb-[57px]">
      
      {/* Image */}
    <img
        className=" m-auto pt-[52px]"
        src={image}
        alt={title}
      />

      {/* Content */}
      <div className="">
        <h2 className="font-semibold font-openSans text-[30px] text-center items-center px-[25px] pt-[28px] text-kalo mb-2">
          {title}
        </h2>
        <span>{pText}</span>
        <p className={`text-gray-600 text-sm mb-4 ${className}`}>
          {description}
        </p>
<Button className={"text-kalo font-openSans font-bold text-[18px] ml-[110px]"} btnText={"Read More"}/>
        
      </div>
    </div>
  );
};

export default Card;