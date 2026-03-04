import React from "react";
import { Container } from "../common/Container";
import { Flex } from "../common/Flex";
import Blankcard from "../common/Blankcard";

const WorkShowcase = () => {
  return (
    <article>
      <Container>
        <div className="pb-[100px] pt-[60px]">
          <h2 className="font-openSans font-extrabold text-[48px] text-kalo text-center pb-[47px]">
            Work Showcase{" "}
          </h2>
          <div className="flex gap-x-8 pb-[52px] ml-[20px]">
            <div className="font-openSans font-semibold text-[24px] text-gray hover:text-komla  cursor-pointer duration-500">
              <h3>All</h3>
            </div>
            <div className="font-openSans font-semibold text-[24px] text-gray hover:text-komla  cursor-pointer duration-500">
              <h3>Digital Mkt</h3>
            </div>
            <div className="font-openSans font-semibold text-[24px] text-gray hover:text-komla  cursor-pointer duration-500">
              <h3>Branding</h3>
            </div>
            <div className="font-openSans font-semibold text-[24px] text-gray hover:text-komla  cursor-pointer duration-500">
              <h3>Content Mkt</h3>
            </div>
            <div className="font-openSans font-semibold text-[24px] text-gray hover:text-komla  cursor-pointer duration-500">
              <h3>Social Media Mkt</h3>
            </div>
          </div>
          <div className="">
            <Flex className={"justify-between"}>
              <Blankcard className={"w-[276px] h-[344px]"} />
              <Blankcard className={"w-[561px] h-[344px]"} />
              <Blankcard className={"w-[270px] h-[344px]"} />
            </Flex>
          </div>
          <div className="pt-[30px]">
            <Flex className={"justify-between"}>
              <Blankcard className={"w-[413px] h-[442px]"} />
              <Blankcard className={"w-[327px] h-[432px]"} />
              <Blankcard className={"w-[370px] h-[432px]"} />
            </Flex>
          </div>
        </div>
      </Container>
    </article>
  );
};

export default WorkShowcase;
