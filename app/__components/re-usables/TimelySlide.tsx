import { images } from "@/public/data/data";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);

const TimelySlide = () => {
  return (
    <div className="relative w-full overflow-hidden bg-[#ece7fe] flex items-center h-[180px] ">
      <Swiper
        spaceBetween={50}
        slidesPerView={5}
        loop={true}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        resizeObserver={true}
        observeParents
        observer={true}
        className="flex items-center justify-between overflow-hidden"
      >
        {images.map((el: string, i: number) => (
          <SwiperSlide key={i} className="w-full h-[65%]">
            <Image
              src={el}
              alt={`client-${i}`}
              width={100}
              height={100}
              className="w-full cursor-pointer h-[100px] object-contain"
              unoptimized
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TimelySlide;
