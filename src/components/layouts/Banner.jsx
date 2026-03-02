import React from "react";
import { Container } from "../common/Container";
import { Button } from "../common/Button";

export const Banner = () => {
  return (
    <article className="bg-[url(/src/assets/Header.png)] bg-cover bg-no-repeat bg-center pt-44.25 pb-51.75">
      <Container>
        <div className="font-extrabold font-openSans text-[72px] text-kalo w-171.5">
          <h1>
            We Are Digital <span className="text-komla">Marketing</span> Agency
          </h1>
        </div>
        <div className="font-paprika text-[20px] text-gray w-142.75 leading-9 pt-5">
          <p>
            Use customer data to build great and solid product experiences that
            convert. Digital marketing’s development has changed the way brands
            and businesses use technology for marketing.{" "}
          </p>
        </div>
        <div className="pt-21">
            <Button className={"font-bold font-openSans text-[20px]"} btnText={"Get Free Quoto"}/>
        </div>
      </Container>
    </article>
  );
};
