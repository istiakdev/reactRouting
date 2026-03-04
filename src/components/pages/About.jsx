import React from "react";
import { Container } from "../common/Container";
import { Flex } from "../common/Flex";
import { Image } from "../common/Image";
import blank from "/src/assets/blank.png";

export const About = () => {
  return (
    
    <article className="bg-gradient-to-b from-white from-[30%] to-[#f2f2f2] min-h-screen">
     <div>
       <Container>
        <Flex className={""}>
          <div className="">
            <Image className={"pt-[100px] pb-[80px]"} imgSrc={blank} />
          </div>
          <div className="">
            <h2
              className="font-openSans font-extrabold text-[48px] text-kalo ml-[100px] mt-[-120px]
            "
            >
              Who We Are
            </h2>
            <p className="font-paprika text-[18px] text-gray w-[442px] ml-[100px] mt-[15px] pb-[26px] leading-[30px]">
              We are a Dhaka based Digital Communication Agency committed to
              creating an actionable strategy, online marketing & technology
              solution for our partners. As a multidisciplinary company, we
              operate as a unified,{" "}
            </p>
            <div className="flex justify-between items-center ml-[80px]">
              <div className="py-[12px] px-[25px]"><img src="/src/assets/Frame.png" alt="" /></div>
              <div className="py-[12px] px-[25px]"><img src="/src/assets/Frame1.png" alt="" /></div>
              <div className="py-[12px] px-[25px]"><img src="/src/assets/Frame 2.png" alt="" /></div>
            </div>
            <div className="flex justify-between ml-[85px] items-center mt-[25px]">
              <div className="py-[12px] px-[25px]"><img src="/src/assets/Frame3.png" alt="" /></div>
              <div className="py-[12px] px-[25px] ml-[38px]"><img src="/src/assets/Frame4.png" alt="" /></div>
              <div className="py-[12px] px-[25px] "><img src="/src/assets/Frame6.png" alt="" /></div>
            </div>
          </div>
        </Flex>
      </Container>
</div>
    </article>
  );
};
