import React from "react";
import Container from "./re-usables/Container";
import VolunteerCard from "./VolunteerCard";
import { volunteerData } from "@/public/data/data";
import { iVolunteer } from "@/public/interfaces";

const Volunteers = () => {
  return (
    <div className="w-full flex justify-center bg-[#f6f6f6]">
      <Container
        id="volunteer"
        className="min-h-[750px] pb-[100px] md:px-20 py-24"
      >
        <h1 className="text-[60px] md:text-[80px] lg:text-[110px] text-[#9b8db7] uppercase">
          JOIN OUR CAUSE
        </h1>

        <div className="grid lg:grid-cols-3 gap-10">
          {volunteerData.map((el: iVolunteer, i: number) => (
            <VolunteerCard key={i} {...el} i={i} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Volunteers;
