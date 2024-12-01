"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { IconCloudGlobe } from "./icon-globe";

const HeroSection = () => {
  return (
    <section>
      <div className="flex text-center md:text-left flex-col gap-2 md:flex-row items-center justify-between">
        <div className="flex flex-col ">
          <h1 className="text-xl lg:text-2xl xl:text-4xl font-bold capitalize">
            Iam a,
          </h1>
          <h2 className="font-extrabold text-4xl md:text-5xl lg:text-6xl xl:text-8xl my-4">
            Developer
          </h2>
          <p className="text-xl md:text-2xl my-2 md:my-4">Description</p>
          <div className="inline-flex gap-5 mt-5">
            <Button className="rounded-full text-sm sm:text-base md:text-lg font-semibold py-4 sm:py-6 px-5 sm:px-7 lg:px-10 ">
              Download Resume
            </Button>
            <Button
              variant="outline"
              className=" rounded-full text-sm sm:text-base md:text-lg font-semibold py-4 sm:py-6 px-5 sm:px-7 lg:px-10 bg-transparent border-black hover:bg-black hover:text-white"
            >
              Contact Me
            </Button>
          </div>
        </div>
        <div className=" size-[350px] md:size-[400px] lg:size-[425px] xl:size-[500px] ">
          <IconCloudGlobe />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
