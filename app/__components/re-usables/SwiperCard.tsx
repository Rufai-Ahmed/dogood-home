import { swiperData } from "@/public/data/data";
import { Heebo } from "next/font/google";
import React, { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";

const heebo = Heebo({ subsets: ["latin"] });

const SwiperCard: FC<{ index?: number }> = ({ index }) => {
  const [counts, setCounts] = useState({ count1: 0, count2: 0 });

  useEffect(() => {
    const animateCount = (
      startCount: number,
      endCount: number,
      duration: number,
      setCount: (value: number) => void
    ) => {
      const increment = endCount / (duration * 60);

      let currentCount = startCount;

      const updateCount = () => {
        if (currentCount < endCount) {
          currentCount += increment;
          setCount(Math.ceil(currentCount));
          requestAnimationFrame(updateCount);
        } else {
          setCount(endCount);
        }
      };

      updateCount();
    };

    animateCount(50, 149, 2, (value) =>
      setCounts((prev) => ({ ...prev, count1: value }))
    );
    animateCount(160, 400, 2, (value) =>
      setCounts((prev) => ({ ...prev, count2: value }))
    );
  }, [index]);

  return (
    <div className="bg-[#f6f6f6] h-[100%] xl:h-full w-full xl:col-span-4 col-span-9 p-8 md:p-16 flex flex-col justify-between">
      <motion.h1
        className="text-[60px] leading-[1] uppercase"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {swiperData[index!]?.h1}
      </motion.h1>

      <div className="flex flex-col space-y-3">
        <motion.p
          className={`text-[19px] ${heebo.className}`}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
          dolores repellendus odit
        </motion.p>

        <div className="flex items-center w-full justify-between gap-6">
          <motion.div
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-[50px]">{counts.count1}</h1>
            <p className={`capitalize ${heebo.className}`}>
              Volunteers joined the cause
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-[50px]">{counts.count2}</h1>
            <p className={`capitalize ${heebo.className}`}>
              Volunteers joined the cause
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SwiperCard;
