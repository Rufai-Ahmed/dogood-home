import { ButtonHTMLAttributes, HTMLAttributes } from "react";

export interface iContainer
  extends PropsWithChildren,
    HTMLAttributes<HTMLElement> {
  className?: string;
}

export interface iButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  lineColor?: string;
  width?: string;
  y?: string;
}

export interface iHero {
  h1?: string;
  sm?: string;
  img?: string;
}

export interface iGrid {
  p?: string;
  b?: string;
  img?: string;
}

export interface iVolunteer {
  name?: string;
  otherTxt?: string;
  up?: string;
  imgTxt?: string;
  img?: string;
  i?: number;
}

export interface iMobile {
  siderState?: boolean;
  handleMouseEnter?: (i: number) => void;
  handleMouseLeave?: () => void;
  hoverIndex?: number;
}

export interface iSider {
  toggle?: () => void;
  siderState?: boolean | null;
  setSiderState?: Dispatch<SetStateAction<boolean>>;
}

export interface iSlide {
  text?: string;
}
export interface iCharity {
  raise?: string;
  goal?: string;
  name?: string;
  img?: string;
}

export interface iCardSlide {
  text?: string;
  role?: string;
  name?: string;
}
