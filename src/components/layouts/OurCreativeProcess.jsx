import React from "react";
import { Container } from "../common/Container";

const OurCreativeProcess = () => {
  return (
    <article>
      <div class="bg-[linear-gradient(90deg,rgba(247,247,247,1)_0%,rgba(255,255,255,1)_51%,rgba(193,225,245,1)_100%)] pb-[100px]">
        <Container>
          <div className="">
            <h1 className="pt-[60px] font-openSans font-extrabold text-[48px] text-kalo text-center pb-[20px]">
              Our creative process.
            </h1>
            <p className="font-paprika text-gray text-[18px] m-auto text-center w-[412px] leading-[32px] pb-[50px]">
              We provide digital experience services to startups and small
              businesses.
            </p>
          </div>
          <div className="">
            <div className="flex justify-between">
              <div className="bg-[#EBF7E9] w-[465px] h-[207px] mt-[55px] rounded-2xl shadow-2xl hover:scale-110 duration-500 p-[24px]">
                <h3 className="font-openSans font-bold text-[18px] text-kalo">
                  Step-1
                </h3>
                <h3 className="font-openSans font-semibold text-[30px] pt-[18px] text-kalo">
                  Global SEO Research
                </h3>
                <p className="leading-[30px] w-[356px] text-[#6C7D93] text-[18px]">
                  Practical tools and features make it easier to build and
                  manage your site.
                </p>
              </div>
              <div className="bg-[#C4C4C4] w-[570px] h-[324px] rounded-2xl shadow-2xl hover:scale-110 duration-500"></div>
            </div>
            <div className="flex justify-between">
              
              <div className="bg-[#C4C4C4] w-[570px] h-[324px] rounded-2xl shadow-2xl hover:scale-110 duration-500"></div>
              <div className="bg-[#D8EAFF] w-[465px] h-[207px] mt-[55px] rounded-2xl shadow-2xl hover:scale-110 duration-500 p-[24px]">
                <h3 className="font-openSans font-bold text-[18px] text-kalo">
                  Step-2
                </h3>
                <h3 className="font-openSans font-semibold text-[30px] pt-[18px] text-kalo">
                  Social media integration
                </h3>
                <p className="leading-[30px] w-[356px] text-[#6C7D93] text-[18px]">
                  Practical tools and features make it easier to build and
                  manage your site.
                </p>
              </div>
            </div>
              <div className="flex justify-between">
              <div className="bg-[#FBF1EC] w-[465px] h-[207px] mt-[70px] rounded-2xl shadow-2xl hover:scale-110 duration-500 p-[24px]">
                <h3 className="font-openSans font-bold text-[18px] text-kalo">
                  Step-3
                </h3>
                <h3 className="font-openSans font-semibold text-[30px] pt-[18px] text-kalo">
                  Launching the Application
                </h3>
                <p className="leading-[30px] w-[356px] text-[#6C7D93] text-[18px]">
                  Practical tools and features make it easier to build and
                  manage your site.
                </p>
              </div>
              <div className="bg-[#C4C4C4] w-[570px] h-[324px] rounded-2xl shadow-2xl hover:scale-110 duration-500"></div>
            </div>
          </div>
        </Container>
      </div>
    </article>
  );
};

export default OurCreativeProcess;
