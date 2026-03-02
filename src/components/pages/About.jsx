import React from "react";
import { Container } from "../common/Container";

export const About = () => {
  return (
    <article>
      <Container>
        <div className="py-10">
          <h1 className="font-extrabold font-openSans text-[72px] text-kalo text-center m-auto">
            Istiak Ahmed <span className="text-komla">Shuvo</span>
          </h1>
          <h2 className="text-kalo font-paprika text-[40px] font-bold pt-5 text-center m-auto">
            Student Of <span className="text-red-600">Creative IT</span>
          </h2>
          <h3 className="font-bold pt-5 text-center m-auto font-nunito text-[50px]">Junior <span className="text-komla">Web</span>-Developer..!</h3>
        </div>
      </Container>
    </article>
  );
};
