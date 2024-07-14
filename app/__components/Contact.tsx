"use client";
import React from "react";
import Container from "./re-usables/Container";
import { Heebo } from "next/font/google";
import Button from "./re-usables/Button";
const heebo = Heebo({ subsets: ["latin"] });

const Contact = () => {
  return (
    <div className="w-full flex justify-center min-h-[750px]">
      <Container id="contact" className=" py-[60px] lg:p-[100px]">
        <h1 className="text-[50px] md:text-[80px] lg:text-[110px] text-[#9b8db7] leading-[1.2] w-full uppercase">
          our contact info
        </h1>
        <div className="flex mt-10 flex-wrap md:flex-nowrap items-start w-full gap-16">
          <div className="space-y-10 w-full md:w-1/2">
            <p className={`${heebo.className} text-[16px]`}>
              Euismod praesent deterruisset et nec, ut nam nullam feu giat
              blandit. Pro voluptatum cotidieque te. Ut dicant per tinax
              patrioque duo quo. Laudem ad regione id ius quo.
            </p>
            <div className=" md:flex-nowrap justify-between">
              <div className={`${heebo.className} flex justify-between`}>
                <div className="space-y-3">
                  <p className="text-[18px] font-semibold">Vienna</p>

                  <ul className="text-[14px] space-y-2">
                    {[
                      "+0012 34 567 89",
                      "dogood@example.com",
                      "23 Fridderich Moulin Rode, Vienna AU",
                    ].map((el: string, i: number) => (
                      <li key={i}>{el}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={`${heebo.className} flex justify-between`}>
                <div className="space-y-3">
                  <p className="text-[18px] font-semibold">London</p>

                  <ul className="text-[14px] space-y-2">
                    {[
                      "+0012 34 567 89",
                      "dogood@example.com",
                      "23 Fridderich Moulin Rode, Vienna AU",
                    ].map((el: string, i: number) => (
                      <li key={i}>{el}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 space-y-4 flex flex-col items-start mt-6 h-full justify-between">
            <div className={`w-full relative`}>
              <input
                type="text"
                name="name"
                className={`w-full ${heebo.className}  outline-none bg-transparent border-none h-full pl-3`}
                placeholder="Name"
              />
              <div className="w-full bg-black h-[1px] mt-2" />
            </div>
            <div className={`w-full relative`}>
              <input
                type="email"
                name="name"
                className={`w-full ${heebo.className}  outline-none bg-transparent border-none h-full pl-3`}
                placeholder="E-mail"
              />
              <div className="w-full bg-black h-[1px] mt-2" />
            </div>
            <div className={`w-full relative`}>
              <textarea
                name="name"
                className={`w-full ${heebo.className} h-[120px]  outline-none bg-transparent border-none  pl-3`}
                placeholder="Message"
              />
              <div className="w-full bg-black h-[1px] mt-2" />
            </div>

            <Button
              width="100%"
              lineColor="black"
              className="bg-transparent px-0 text-black"
            >
              submit
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
