import Image from "next/image";
import React, { useState } from "react";
import Card from "./re-usables/Card";
import { cardSlideData } from "@/public/data/data";
import { iCardSlide } from "@/public/interfaces";
import { Heebo } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import SwiperCore, { Swiper as SwiperInstance } from "swiper";
import Button from "./re-usables/Button";

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);

const heebo = Heebo({ subsets: ["latin"] });

const CardSlide = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: SwiperInstance) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className="w-full max-h-[1100px] min-h-[500px] grid grid-cols-2 grid-rows-2 xl:grid-rows-1">
      <div className="row-span-1 col-span-2 xl:col-span-1">
        <Image
          src={"/assets/apple-plant.jpg"}
          alt="planting of apple"
          width={100}
          height={100}
          unoptimized
          className="object-cover w-full min-h-[500px] object-top max-h-[100%]"
        />
      </div>
      <div className="row-span-1 col-span-2 xl:col-span-1">
        <Card
          color="#f6f6f6"
          component={<>{""}</>}
          headComponent={
            <div>
              <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                resizeObserver={true}
                observeParents
                observer={true}
                className="w-full"
                onSlideChange={handleSlideChange}
              >
                {cardSlideData.map((el: iCardSlide, i: number) => (
                  <SwiperSlide key={i} className="">
                    <h1 className="text-[40px] md:text-[60px] mb-5">
                      {el.text}
                    </h1>

                    <p
                      className={
                        "text-[12px] underline mb-2" + ` ${heebo.className}`
                      }
                    >
                      <small>{el.role}</small>
                    </p>
                    <p className={"text-[19px]" + ` ${heebo.className}`}>
                      <b>{el.name}</b>
                    </p>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="flex md:mt-4 gap-5">
                {cardSlideData.map((_: iCardSlide, j: number) => (
                  <Button
                    key={j}
                    width={activeIndex === j ? "100%" : "0%"}
                    onClick={() => setActiveIndex(j)}
                    y="0px"
                    lineColor="black"
                    className="px-0 text-blck py-0 bg-transparent"
                  >
                    0{j + 1}
                  </Button>
                ))}
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default CardSlide;
