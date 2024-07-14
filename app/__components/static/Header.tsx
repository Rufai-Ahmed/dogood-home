"use client";
import React, { useEffect, useState } from "react";
import LittleHeader from "./LittleHeader";
import Image from "next/image";
import { navData } from "@/public/data/data";
import Container from "../re-usables/Container";
import { BiSearch } from "react-icons/bi";
import Button from "../re-usables/Button";
import DesktopSider from "./DesktopSider";
import MobileDropDown from "./MobileDropDown";

const Header = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [headerState, setHeaderState] = useState<boolean>(false);
  const [siderState, setSiderState] = useState<boolean | null>(false);

  const toggle = () => {
    setSiderState((prev: boolean | null) => (prev === false ? true : false));
  };

  const onScroll = () => {
    window.scrollY > 100 ? setSiderState(false) : setSiderState(false);
    setHeaderState(window.scrollY > 700);
  };

  const handleMouseEnter = (index: number) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`w-full z-[99999]  top-0 duration-300 ${
        headerState
          ? "fixed bg-white text-black shadow-md"
          : "text-white absolute"
      }`}
      onScroll={onScroll}
    >
      {!headerState && <LittleHeader />}
      <Container className={`w-full ${siderState ? "pt-[80px] md:pt-0" : ""}`}>
        <main
          className={` flex md:justify-between duration-500 ${
            siderState
              ? "h-[70vh] md:h-[80px] pt-[30px] fixed md:static top-0 w-full bg-white md:bg-transparent z-[9999] left-0 items-start md:items-center flex-col md:flex-row md:pt-0 px-[20px] md:px-0"
              : "h-[80px] relative items-center justify-between"
          } `}
        >
          <Image
            src={headerState ? "/assets/logo.png" : "/assets/logo-white.png"}
            alt="logo"
            width={100}
            height={100}
            className="hidden object-contain md:block w-[100px]"
          />
          <Image
            src={
              headerState || siderState
                ? "/assets/smallLogo.png"
                : "/assets/white.png"
            }
            alt="logo"
            width={100}
            height={100}
            className="w-[30px] h-[30px] object-contain md:hidden"
          />

          <div className="lg:flex hidden items-center gap-10">
            {navData.map((el: string, i: number) => (
              <nav
                onClick={() => handleNavClick(el)}
                className={`text-[15px]  uppercase relative cursor-pointer`}
                key={i}
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={handleMouseLeave}
              >
                {el}
                <div
                  className={`duration-300 h-[3px] bg-white ${
                    hoverIndex === i || el === "home" ? "w-full" : "w-0"
                  }`}
                />
              </nav>
            ))}
          </div>

          <div className="flex items-center  gap-5">
            <BiSearch size={20} className="hidden lg:block" />
            <Button
              className={` text-[15px] px-0 py-0 bg-transparent hidden lg:block ${
                headerState ? "text-black" : "text-white"
              }`}
              lineColor={headerState ? "black" : "white"}
              width="100%"
              y="0px"
            >
              donate now
            </Button>
            <div
              className={`grid grid-cols-3 grid-rows-3 group items-center gap-1 cursor-pointer duration-300 ${
                siderState ? "absolute md:static top-[33px] right-[23px]" : ""
              }`}
              onClick={toggle}
            >
              {Array(9)
                .fill(null)
                .map((el: null, i: number) => (
                  <div
                    key={i}
                    className={`z-[9999999999] md:z-10 w-[3px] h-[3px] rounded-full duration-300  ${
                      i! >= 3 && i! <= 5 ? "" : "group-hover:bg-opacity-0"
                    } ${headerState || siderState ? "bg-black" : "bg-white"}`}
                  />
                ))}
            </div>
          </div>

          <MobileDropDown
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            hoverIndex={hoverIndex!}
            siderState={siderState!}
          />
        </main>
      </Container>

      <DesktopSider
        toggle={toggle}
        siderState={siderState}
        setSiderState={setSiderState}
      />
    </header>
  );
};

export default Header;
