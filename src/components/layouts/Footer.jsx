import React from "react";
import { Flex } from "../common/Flex";
import { Image } from "../common/Image";
import fLogo from "/src/assets/Logo.png";
import { Container } from "../common/Container";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <article className="bg-[#E8E6E3]">
      <Container>
        <Flex className={"justify-between items-center pt-[140px] pb-[57px]"}>
          <div className="pb-[280px]">
          <Link to={"/"}>  <picture>
              <Image className={"pb-[48px]"} imgSrc={fLogo} />
            </picture></Link>

            <p className="font-nunito text-[18px] w-[449px]  text-gray">
              Install any demo or template with a single click. You can mix and
              match all the demos & templates. Every demo can be turned into one
              or multi-page.
            </p>
          </div>
          <div className="font-openSans text-[24px] font-semibold text-kalo">
            <h3 className="pb-[48px]">Features</h3>
            <h4 className="font-nunito text-[20px] font-semibold text-gray pb-[30px] hover:text-komla duration-500 cursor-pointer">
              Home
            </h4>
            <h4 className="font-nunito text-[20px] font-semibold text-gray pb-[30px] hover:text-komla duration-500 cursor-pointer">
              About
            </h4>
            <h4 className="font-nunito text-[20px] font-semibold text-gray pb-[30px] hover:text-komla duration-500 cursor-pointer">
              Benifit
            </h4>
            <h4 className="font-nunito text-[20px] font-semibold text-gray pb-[30px] hover:text-komla duration-500 cursor-pointer">
              Pricing
            </h4>
            <h4 className="font-nunito text-[20px] font-semibold text-gray pb-[80px] hover:text-komla duration-500 cursor-pointer">
              Blog
            </h4>
          </div>
          <div className="font-openSans text-[24px] font-semibold text-kalo ">
            <h3 className="pb-[48px]">Products</h3>

            <h4 className="font-nunito text-[20px] font-semibold text-gray pb-[30px] hover:text-komla duration-500 cursor-pointer">
              Task Management
            </h4>
            <h4 className="font-nunito text-[20px] font-semibold text-gray pb-[30px] hover:text-komla duration-500 cursor-pointer">
              Company Growth
            </h4>
            <h4 className="font-nunito text-[20px] font-semibold text-gray pb-[200px] hover:text-komla duration-500 cursor-pointer">
              Time Tracking
            </h4>
          </div>
          <div className="font-openSans text-[24px] font-semibold text-kalo">
            <h3 className="pb-[48px]">Support</h3>
            <h4 className="font-nunito text-[20px] font-semibold text-gray pb-[30px] hover:text-komla duration-500 cursor-pointer">Customer Service</h4>
            <h4 className="font-nunito text-[20px] font-semibold text-gray pb-[30px] hover:text-komla duration-500 cursor-pointer">Accessibility</h4>
            <h4 className="font-nunito text-[20px] font-semibold text-gray pb-[200px] hover:text-komla duration-500 cursor-pointer">Contact Us</h4>
          </div>
        </Flex>
        <Flex className={"justify-between mt-[-100px] pb-[57px]"}>
          <div className="font-nunito text-[18px] text-gray">
            <h3>@20201 Innovate.All rights reserved.</h3>
          </div>
          <div className="flex gap-30">
            <div className="font-nunito text-[18px] text-gray">
              <h3>Privacy policy</h3>
            </div>
            <div className="font-nunito text-[18px] text-gray">
              <h3>Terms & condition</h3>
            </div>
          </div>
        </Flex>
      </Container>
    </article>
  );
};
