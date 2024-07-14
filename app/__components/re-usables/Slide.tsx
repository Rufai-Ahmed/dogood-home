import { iSlide } from "@/public/interfaces";
import React, { FC } from "react";
import { BiAnchor } from "react-icons/bi";
import { LuArrowUpRight } from "react-icons/lu";

const Slide: FC<iSlide> = ({ text }) => {
  return (
    <div className="w-full py-[20px] md:py-[10px] bg-[#ffe2da] text-[#ff9471] flex items-center overflow-hidden">
      <div className="flex animate-slide whitespace-nowrap gap-16">
        {[...Array(20)].map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-center text-[60px] md:text-[150px] lg:text-[180px] gap- uppercase whitespace-nowrap"
          >
            <p>{text ? text : "volunteer"}</p>
            <LuArrowUpRight fontWeight={900} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slide;
