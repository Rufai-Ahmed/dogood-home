import { Heebo } from "next/font/google";
import React, { FC, useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { RiDoubleQuotesR } from "react-icons/ri";

const heebo = Heebo({ subsets: ["latin"] });

const Card: FC<{
  index?: number;
  component?: JSX.Element;
  headComponent?: JSX.Element | JSX.Element[];
  color?: string;
  text?: string;
}> = ({ index, color, component, headComponent, text }) => {
  const [counts, setCounts] = useState({ count1: 0, count2: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

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

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        animateCount(10, 64, 2, (value) =>
          setCounts((prev) => ({ ...prev, count1: value }))
        );
        animateCount(20, 72, 2, (value) =>
          setCounts((prev) => ({ ...prev, count2: value }))
        );
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);

  return (
    <div
      ref={cardRef}
      style={{ backgroundColor: color ? color : "white" }}
      className="h-full w-full p-8 md:p-16 flex flex-col justify-between"
    >
      {headComponent ? (
        headComponent
      ) : (
        <motion.h1
          className="text-[60px] leading-[1] uppercase"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <RiDoubleQuotesR size={30} />
          {text ? text : "you can save lives!"}
        </motion.h1>
      )}
      {component ? (
        component
      ) : (
        <div className="space-y-4">
          <div className={heebo.className}>
            <div className="flex font-bold text-[20px] justify-between w-full">
              <p>Housing</p>
              <p>
                <b>{counts.count1}%</b>
              </p>
            </div>
            <div className="w-full relative h-[4px] bg-gray-400">
              <div
                style={{ width: `${counts.count1}%` }}
                className="duration-300 absolute h-[4px] bg-black"
              />
            </div>
          </div>
          <div className={heebo.className}>
            <div className="flex font-bold justify-between text-[20px] w-full">
              <p>Fundraising</p>
              <p>
                <b>{counts.count2}%</b>
              </p>
            </div>
            <div className="w-full relative h-[4px] bg-gray-400">
              <div
                style={{ width: `${counts.count2}%` }}
                className="duration-300 absolute h-[4px] bg-black"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
