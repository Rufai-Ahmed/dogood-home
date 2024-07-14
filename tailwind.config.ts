import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero1: "url('/assets/hero-1.jpg')",
        hero2: "url('/assets/hero-2.jpg')",
        hero3: "url('/assets/hero-3.jpg')",
        vid: "url('/assets/vidkid.jpg')",
      },

      keyframes: {
        textIn: {
          "0%": { transform: "translateY(-100%) rotate(35deg)", opacity: "0" },
          "100%": { transform: "translateY(0) rotate(0)", opacity: "1" },
        },
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
    animation: {
      slide: "slide 60s linear infinite",
      textIn: "textIn 1s ease-in-out",
    },
  },
  plugins: [],
};
export default config;
