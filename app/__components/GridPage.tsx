import Image from "next/image";
import React from "react";
import Card from "./re-usables/Card";
import { Heebo } from "next/font/google";
import Button from "./re-usables/Button";
const heebo = Heebo({ subsets: ["latin"] });

const GridPage = () => {
  return (
    <div className="w-full grid grid-cols-2 xl:grid-cols-3 xl:grid-rows-2 min-h-[1000px]">
      <div className="w-full  col-span-2 md:col-span-1 ">
        <Image
          src={"/assets/logo-pink.jpg"}
          width={100}
          height={100}
          alt="pink logo"
          unoptimized
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full  col-span-2 md:col-span-1 ">
        <Image
          src={"/assets/bfam.jpg"}
          width={100}
          height={100}
          alt="pink logo"
          unoptimized
          className="w-full h-full object-cover col-span-2 md:col-span-1"
        />
      </div>

      <div className="col-span-2 lg:col-span-1">
        <Card />
      </div>

      <div className="w-full  col-span-2 md:col-span-1 ">
        <Image
          src={"/assets/eyes.jpg"}
          width={100}
          height={100}
          alt="pink logo"
          unoptimized
          className="w-full h-full object-cover col-span-2 md:col-span-1"
        />
      </div>

      <div className=" col-span-2 md:col-span-1 ">
        <Card
          color="#f6f6f6"
          component={
            <div className="space-y-3">
              <p className={`${heebo.className} text-[19px]`}>
                Tellus, luctus nec ullamcorper matis pul vinar dapibus pros elit
                ipsum sit.
              </p>
              <Button
                y="2px"
                width="100%"
                className="text-black bg-transparent px-0 py-0"
                lineColor="black"
              >
                donate now
              </Button>
            </div>
          }
        />
      </div>

      <div className="w-full col-span-2 md:col-span-2 lg:col-span-1">
        <Image
          src={"/assets/apple-1.jpg"}
          width={100}
          height={100}
          alt="pink logo"
          unoptimized
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default GridPage;
