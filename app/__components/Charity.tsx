import React from "react";
import Container from "./re-usables/Container";
import CharityCard from "./re-usables/CharityCard";
import { charityData } from "@/public/data/data";
import { iCharity } from "@/public/interfaces";

const Charity = () => {
  return (
    <Container className="max-w-[85%] py-[80px] xl:py-0 grid xl:grid-cols-3 items-center min-h-[800px] gap-[70px]">
      {charityData.map((el: iCharity, i: number) => (
        <CharityCard {...el} key={i} />
      ))}
    </Container>
  );
};

export default Charity;
