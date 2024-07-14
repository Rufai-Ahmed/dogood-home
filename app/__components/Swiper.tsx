"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./re-usables/Container";
import { swiperData } from "@/public/data/data";
import Button from "./re-usables/Button";
import { iHero } from "@/public/interfaces";
import SwiperCard from "./re-usables/SwiperCard";

const Swiper = () => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev: number) => (prev + 1) % swiperData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container className="max-w-[100%] grid xl:h-[calc(100vh-200px)]  lg:h-screen px-0 grid-rows-2 xl:grid-rows-1 grid-cols-9">
      <div className="xl:col-span-5 col-span-9 relative overflow-hidden ">
        <AnimatePresence initial={false} custom={index}>
          {swiperData.map((el, i) =>
            index === i ? (
              <motion.div
                key={i}
                className="absolute w-full h-[100%] flex items-end justify-center xl:pb-[10%] p-[40px] gap-4 bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${el.img})` }}
                initial={{ x: "100%", opacity: 0, scale: 1.1 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{ duration: 1 }}
              >
                {swiperData.map((el: iHero, j: number) => (
                  <Button
                    key={j}
                    width={index === j ? "100%" : "0%"}
                    onClick={() => setIndex(j)}
                    y="0px"
                    lineColor="white"
                    className="px-0 text-white py-0 bg-transparent"
                  >
                    {j + 1}
                  </Button>
                ))}
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>
      <SwiperCard index={index} />
    </Container>
  );
};

export default Swiper;
