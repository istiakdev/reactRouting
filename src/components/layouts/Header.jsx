import React from "react";
import { Container } from "../common/Container";
import { Flex } from "../common/Flex";
import { Button } from "../common/Button";
import { Link, Links } from "react-router-dom";
import { Image } from "../common/Image";
import logo from "/src/assets/Logo.png"

export const Header = () => {
  return (
    <>
      <nav className="sticky left-0 top-0 w-full z-9999 bg-white/30 backdrop-blur-3xl shadow-lg">
        <Container>
          <Flex className={"justify-between"}>
            <div className="py-5">
              <Link to={"/"}><Image imgSrc={logo}/></Link>
            </div>
            <div className="">
              <ul className="flex gap-5">
                <li className="font-openSans font-semibold -[18px] text-kalo hover:text-komla hover:scale-110 duration-500">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="font-openSans font-semibold -[18px] text-kalo hover:text-komla hover:scale-110 duration-500">
                 <Link to={"about"}>About</Link>
                </li>
                <li className="font-openSans font-semibold -[18px] text-kalo hover:text-komla hover:scale-110 duration-500">
                  <Link to={"service"}>Service</Link>
                </li>
                <li className="font-openSans font-semibold -[18px] text-kalo hover:text-komla hover:scale-110 duration-500">
                  <Link to={"portfolio"}>Portfolio</Link>
                </li>
                <li className="font-openSans font-semibold -[18px] text-kalo hover:text-komla hover:scale-110 duration-500">
                  <Link to={"price"}>Price</Link>
                </li>
                <li className="font-openSans font-semibold -[18px] text-kalo hover:text-komla hover:scale-110 duration-500">
                 <Link to={"blog"}>Blog</Link>
                </li>
              </ul>
            </div>
            <div className="font-openSans font-semibold -[18px]">
              <Button btnText={"Contact Us "} />
            </div>
          </Flex>
        </Container>
      </nav>
    </>
  );
};
