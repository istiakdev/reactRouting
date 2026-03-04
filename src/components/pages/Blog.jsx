import React from "react";
import { Container } from "../common/Container";
import { Flex } from "../common/Flex";
import Card from "../common/Card";

const Blog = () => {
  return (
    <article>
      <div class="bg-[linear-gradient(90deg,rgba(207,243,252,1)_0%,rgba(255,255,255,1)_52%,rgba(250,248,227,1)_100%)]">
        <Container>
          <div className="">
            <h2 className="pt-[60px] font-openSans font-extrabold text-[48px] text-kalo text-center pb-[20px]">
              Our Latest Blog
            </h2>
            <p className=" text-gray text-[18px] font-nunito m-auto text-center w-[412px] leading-[32px] pb-[50px]">
              We provide digital experience services to startups and small
              businesses.
            </p>
          </div>
          <div className="pb-[118px]">
            <Flex className={"justify-between"}>
            <div className="w-[370px] h-[468px] hover:scale-105 duration-500 rounded-2xl shadow-2xl">
              <div className="bg-[#C4C4C4] w-[370px] h-[234px] border-none outline-0 rounded-t-2xl"></div>
              <div className=" bg-white h-[234px] rounded-b-[20px] p-[30px]">
                <h3 className="font-medium font-nunito text-[24px] text-[#413F45] text-start w-[200px] pb-[16px]">
                  How to Be Ahead of Stock Changes
                </h3>
                <p className="font-nunito text-[18px] text-[#474747] pb-[30px]">By John  - 5 Comments</p>
                <button className="text-kalo font-openSans font-bold text-[18px] cursor-pointer">Read more</button>
              </div>
            </div>
            <div className="w-[370px] h-[468px] hover:scale-105 duration-500 rounded-2xl shadow-2xl">
              <div className="bg-[#C4C4C4] w-[370px] h-[234px] border-none outline-0 rounded-t-2xl"></div>
              <div className=" bg-white h-[234px] rounded-b-[20px] p-[30px]">
                <h3 className="font-medium font-nunito text-[24px] text-[#413F45] text-start w-[200px] pb-[16px]">
                  Online Reputation And Management
                </h3>
                <p className="font-nunito text-[18px] text-[#474747] pb-[30px]">By John  - 10 Comments</p>
                <button className="text-kalo font-openSans font-bold text-[18px] cursor-pointer">Read more</button>
              </div>
            </div>
            <div className="w-[370px] h-[468px] hover:scale-105 duration-500 rounded-2xl shadow-2xl">
              <div className="bg-[#C4C4C4] w-[370px] h-[234px] border-none outline-0 rounded-t-2xl"></div>
              <div className=" bg-white h-[234px] rounded-b-[20px] p-[30px]">
                <h3 className="font-medium font-nunito text-[24px] text-[#413F45] text-start w-[270px] pb-[16px]">
                  Tips To Move Your Project More Forward
                </h3>
                <p className="font-nunito text-[18px] text-[#474747] pb-[30px]">By John  - 15 Comments</p>
                <button className="text-kalo font-openSans font-bold text-[18px] cursor-pointer">Read more</button>
              </div>
            </div>
          </Flex>
          </div>
        </Container>
      </div>
    </article>
  );
};

export default Blog;
