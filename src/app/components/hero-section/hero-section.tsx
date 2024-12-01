"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { IconCloudGlobe } from "./icon-globe";

const HeroSection = () => {
  return (
    <section>
      <div className="flex items-center justify-between">
        <div className="flex flex-col ">
          <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold capitalize">
            Iam a,
          </h1>
          <h2 className="font-extrabold text-2xl sm:text-6xl lg:text-8xl my-4">
            Developer
          </h2>
          <p className="text-xl sm:text-2xl my-5">Description</p>
          <div className="inline-flex gap-5">
            <Button className="rounded-full text-lg font-semibold py-6 px-10 ">
              Download Resume
            </Button>
            <Button
              variant="outline"
              className=" rounded-full text-lg font-semibold py-6 px-10 bg-transparent border-black hover:bg-black hover:text-white"
            >
              Contact Me
            </Button>
          </div>
        </div>
        <div className=" md:size-[400px] lg:size-[500px] ">
          <IconCloudGlobe />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
