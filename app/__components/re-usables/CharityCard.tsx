import Image from "next/image";
import React, { FC } from "react";
import Button from "./Button";
import { Heebo } from "next/font/google";
import { iCharity } from "@/public/interfaces";
const heebo = Heebo({ subsets: ["latin"] });

const CharityCard: FC<iCharity> = ({ goal, img, name, raise }) => {
  return (
    <div className="w-full min-h-[500px]">
      <div className="h-[60%] w-full overflow-hidden cursor-pointer relative group ">
        <Image
          src={img!}
          alt="Burnt Hand"
          width={100}
          unoptimized
          height={100}
          className="object-cover group-hover:scale-105 duration-300 w-full h-full"
        />

        <div className="absolute top-0 left-8 text-[20px] p-[1px] m-0 px-1 text-[#9c8db7] bg-[#ece7fe] uppercase">
          health
        </div>

        <Button
          y="20px"
          width="100px"
          lineColor="#fe9279"
          className="w-full absolute duration-300 py-6 text-[#fe9279] -bottom-24 bg-[#ffe2da] group-hover:bottom-0 flex items-center justify-center"
        >
          donate now
        </Button>
      </div>

      <div className="py-[20px] h-[40%]">
        <p className={`${heebo.className} text-[19px] font-semibold`}>{name}</p>
        <p className={`${heebo.className} text-[16px]`}>
          Nec te ubique sapientem mel Lorem Ipsum. Proin de qual suis
          erestopius. liquee nean sollicituin lorem quis bibendum auct ornisi.
        </p>
        <h1 className="text-[60px] text-[#9c8db7]">100%</h1>
        <div className="space-y-2">
          <div className="w-full h-[2px] bg-[#9c8db7]" />
          <div
            className={`flex justify-between items-center mt-5 ${heebo.className}  text-[#9c8db7]`}
          >
            <p>Raised: {raise}</p>
            <p>Goal: {goal}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharityCard;
