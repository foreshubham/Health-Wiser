import React from "react";
import Button from "@/components/ui/Button";
import Hero_Image from "@/components/ui/Hero_Image";
import Service from "@/components/ui/Service";
import AimVisionMission from "./ui/AIM";

export default function Hero() {
  return (
    <section className="py-40 lg:py-58 flex items-center justify-center flex-col">
      <div className="relative max-w-7xl flex justify-center flex-col items-center">
        {/* Background Images Start */}

        <img
          className="-z-1 absolute w-1/9 lg:w-1/12 -top-10 right-10 lg:-top-15 rotate-20 opacity-70"
          src="./bar code.png"
          alt=""
        />
        <img
          className="-z-1 absolute w-1/9 lg:w-1/12 -top-5 left-5 lg:top-15 lg:left-0 rotate-20 opacity-70"
          src="./sthethoscope.png"
          alt=""
        />
        <img
          className="-z-1 absolute w-1/9 lg:w-1/12 top-30 lg:top-55 right-70 -rotate-20 opacity-70"
          src="./food.png"
          alt=""
        />
        <img
          className="-z-1 absolute w-1/9 lg:w-1/12 -top-15 left-35 lg:-top-30 lg:left-90 -rotate-10 opacity-70"
          src="./scanner.png"
          alt=""
        />

        {/* Background Images End */}

        <p className="border border-green-400 px-5 rounded-2xl text-green-600 italic">
          Smart Spoon
        </p>
        <h1 className="lg:text-5xl lg:w-2/3 text-center w-full font-semibold text-3xl px-4 md:w-2/3">
          Your reliable & trusted place to know what{" "}
          <i className="text-blue-500">you're</i> eating in real.
          <img
            className="absolute w-1/2 top-21 right-10 lg:w-1/4 lg:top-25 lg:right-100 md:w-3/12 md:top-19 md:right-80  -z-1 "
            src="./wave.webp"
            alt=""
          />
        </h1>

        <p className="py-8 w-full text-[13px] px-5 text-center text-black/60 lg:text-[1rem] lg:w-1/2 md:w-2/3 md:text-[15px]">
          Introducing Smart Spoon, your personal guide to making informed and
          healthier food choices of any food product to instantly access
          detailed information about its ingredients and nutritional content.
        </p>
        <Button />
      </div>

      <div className="py-26">
        <Hero_Image />
      </div>
      <div>
        <Service />
      </div>

      <div className="-my-62">
        <AimVisionMission />
      </div>
    </section>
  );
}
