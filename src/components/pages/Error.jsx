import React from "react";
import { Container } from "../common/Container";
import { Image } from "../common/Image";
import errorPic from "/src/assets/AA-4.png";

export const Error = () => {
  return (
    <article>
      <Container>
        <div className="py-30">
          <Image className={"m-auto"} imgSrc={errorPic} />
          <h1 className="m-auto text-center text-red-800 font-bold text-[50px] pt-5">
            Tumi Fail...<span class="text-2xl">😂</span>{" "}
            <span class="text-2xl">😆</span> <span class="text-2xl">🤣</span>
          </h1>
        </div>
      </Container>
    </article>
  );
};
