import Local from "next/font/local";
import React, { FC } from "react";
const pacifico = Local({ src: "../../../public/fonts/Pacifico-Regular.ttf" });

interface iAnimate {
  text?: string;
}

const AnimatedText: FC<iAnimate> = ({ text }) => {
  return (
    <div
      className={`relative text-white inline-block overflow-hidden ${pacifico.className}`}
    >
      {text?.split("").map((char: string, index: number) => (
        <span
          key={index}
          className="text-[28px] capitalize transform-gpu animate-textIn"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;
