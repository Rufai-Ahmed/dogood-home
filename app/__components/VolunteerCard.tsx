import React, { FC } from "react";
import { Heebo } from "next/font/google";
import Image from "next/image";
import { iVolunteer } from "@/public/interfaces";
import { RiDoubleQuotesR } from "react-icons/ri";
import { BsLink } from "react-icons/bs";

const heebo = Heebo({ subsets: ["latin"] });

const VolunteerCard: FC<iVolunteer> = ({ img, name, imgTxt, otherTxt, i }) => {
  const isReversed = i === 1;

  return (
    <div
      className={`w-full min-h-[1000px] grid grid-rows-10 group ${heebo.className} gap-10 bg-[#f6f6f6]`}
    >
      <div
        className={`w-full bg-white row-span-3 space-y-5 relative p-12 ${
          isReversed ? "order-2 bg-[#ffd8cd] text-[#f1977e]" : "order-1"
        }`}
      >
        <div className="space-y-3">
          <p>
            <small>
              April 14, 2024 / <span className="underline">Environment</span>
            </small>
          </p>
          <p className="text-[16px]">
            <b>{otherTxt}</b>
          </p>
        </div>

        <p className="text-[12px]">
          <small>-Margaret Johans</small>
        </p>

        {!isReversed ? (
          <RiDoubleQuotesR size={24} className="absolute bottom-3 right-3" />
        ) : (
          <BsLink size={22} className="rotate-45 absolute bottom-4 right-4 " />
        )}
      </div>

      <div className={`row-span-7 ${isReversed ? "order-1" : "order-2"}`}>
        <div className="w-full h-[65%] overflow-hidden">
          <Image
            src={`/assets${img}`}
            alt={name!}
            width={100}
            unoptimized
            height={100}
            className="w-full group-hover:scale-110 duration-300 h-full object-center object-cover"
          />
        </div>

        <div className="w-full bg-white h-[35%] p-10  flex flex-col justify-center ">
          <p>
            <small>
              April 14, 2024 / <span className="underline">Environment</span>
            </small>
          </p>

          <p className="text-[20px]">
            <b>{imgTxt}</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VolunteerCard;
