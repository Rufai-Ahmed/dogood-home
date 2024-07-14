import { iCardSlide, iCharity, iGrid, iHero, iVolunteer } from "../interfaces";
import food from "@/public/assets/food.jpg";
import hero1 from "@/public/assets/hero1.jpg";
import hero2 from "@/public/assets/hero-2.jpg";
import children from "@/public/assets/children.jpg";
import hero3 from "@/public/assets/hero-3.jpg";
import clean from "@/public/assets/clean.jpg";
import small from "@/public/assets/white.png";

export const heroData: iHero[] = [
  {
    h1: "Join our cause",
    img: hero1.src,
    sm: small.src,
  },
  {
    h1: "a better future for all",
    img: hero2.src,
  },
  {
    h1: "change the world with us",
    img: hero3.src,
  },
];

export const swiperData: iHero[] = [
  {
    h1: "for a cleaner world",
    img: clean.src,
    sm: small.src,
  },
  {
    h1: "help children in need",
    img: children.src,
  },
  {
    h1: "help stop world hunger",
    img: food.src,
  },
];

export const gridData: iGrid[] = [
  {
    b: "Do the best you can in helping elephants",
    img: "elephant.jpg",
  },
  {
    b: "Here are 10 health benefits of apples",
    img: "apple.jpg",
  },
  {
    b: "Support our local community projects",
    img: "orange-doc.jpg",
  },
  {
    b: "Sport can give new life to children",
    img: "smily-kids.jpg",
  },
  {
    b: "It’s all big when you’re changing the world",
    img: "plastic.jpg",
  },
  {
    b: "All that you can get can help others",
    img: "pumpkid.jpg",
  },
  {
    b: "If you don’t help feed them, who will?",
    img: "cardkid.jpg",
  },
  {
    b: "Do your best to help those who need help",
    img: "mamakid.jpg",
  },
  {
    b: "Donate to an animal treatment program",
    img: "veterinary.jpg",
  },
];

export const volunteerData: iVolunteer[] = [
  {
    name: "Mary fox",
    img: "/horse.jpg",
    otherTxt: "Quo mundi saperet an ea sea velit discere vivendu",
    imgTxt:
      "All animals matter to us. Protect our furry friends. This is their planet too.",
  },
  {
    name: "kevin wels",
    img: "/clothes.jpg",
    imgTxt:
      "Even the smallest of donations can help change a life. A litle means a lot.",
    otherTxt:
      "In ius omnis elitr omnes, duo amet decore facilisi ei at eius quas has.",
  },
  {
    name: "cindy morgan",
    img: "/jump.jpg",
    imgTxt:
      "Today is the day to reach out and lend a helping hand. Children need us!",
    otherTxt: "Ut tempor probo commune eum, te eum inani tractatos",
  },
];

export const navData: string[] = [
  "home",
  "donation",
  "blogs",
  "newsletter",
  "subscribe",
  "volunteer",
  "contact",
];

export const charityData: iCharity[] = [
  {
    goal: "60,955$",
    name: "Dog Rescue",
    raise: "144,955$",
    img: "/assets/dogman.jpg",
  },
  {
    goal: "80,000$",
    name: "Children's Charity",
    raise: "96,830$",
    img: "/assets/blackg.jpg",
  },
  {
    goal: "70,000$",
    name: "Living With Vitiligo",
    raise: "20,200$",
    img: "/assets/burnt.jpg",
  },
];

export const images: Array<string> = [
  "/assets/c.png",
  "/assets/c1.png",
  "/assets/c2.png",
  "/assets/c3.png",
  "/assets/c4.png",
  "/assets/c.png",
  "/assets/c1.png",
  "/assets/c2.png",
  "/assets/c3.png",
  "/assets/c4.png",
];

export const cardSlideData: iCardSlide[] = [
  {
    name: "Simone Cooper",
    role: "Volunteer",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
  },
  {
    name: "Kevin Wels",
    role: "Teacher",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
  },
  {
    name: "Mary Fox",
    role: "Manager",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
  },
];
