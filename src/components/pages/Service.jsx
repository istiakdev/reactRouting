import React from "react";
import { Container } from "../common/Container";
import Card from "../common/Card";
import onePic from "/src/assets/results 1.png";
import twoPic from "/src/assets/social-marketing 1.png";
import threePic from "/src/assets/social-media 1.png";
import { Flex } from "../common/Flex";


const Service = () => {
  return (
    <article className="bg-[linear-gradient(90deg,rgba(207,243,252,1)_0%,rgba(255,255,255,1)_52%,rgba(250,248,227,1)_100%)]"> 
      <Container>
        <div className="">
          <h1 className="font-openSans font-extrabold text-kalo text-[48px] text-center pt-[30px]">Our Services</h1>
          <p className="font-paprika text-gray text-[18px] m-auto text-center pt-[15px] leading-[32px] w-[332px]">We have been providing great flooring solutions service.</p>
        </div>
        <Flex className={"justify-between"}>
   <div className="pb-[99px] pt-[52px]">
           <div className=" bg-[#EBF7E9] rounded-2xl">
            <Card
              image={onePic}
              title={"MARKETING STRATEGY"}
              className={
                "w-[257px] text-center items-center px-[20px] pb-[24px] leading-[25px] font-paprika m-auto"
              }
              description={
                "Social Media has changed the way we interact & do business while creating"
              }
            
            />
            
          </div>
   </div>
   <div className="pb-[99px] pt-[52px]">
           <div className=" bg-[#D8EAFF] rounded-2xl">
            <Card
              image={twoPic}
              title={"Social Marketing GRP"}
              className={
                "w-[257px] text-center items-center px-[20px] pb-[24px] leading-[25px] font-paprika m-auto"
              }
              description={
                "Social Media has changed the way we interact & do business while creating"
              }
            
            />
            
          </div>
   </div>
   <div className="pb-[99px] pt-[52px]">
           <div className=" bg-[#FBF1EC] rounded-2xl ">
            <Card
              image={threePic}
              title={"Content Marketing GP"}
              className={
                "w-[257px] text-center items-center px-[20px] pb-[24px] leading-[25px] font-paprika m-auto"
              }
              description={
                "Social Media has changed the way we interact & do business while creating"
              }
            
            />
            
          </div>
   </div>
        </Flex>
      </Container>
    </article>
  );
};

export default Service;
