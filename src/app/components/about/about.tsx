import SectionHeading from "@/components/layout/section-heading";
import React from "react";

const About = () => {
  return (
    <section className="pt-[80px] md:pt-[80px]" id="About">
      <SectionHeading
        overlayText="ABOUT ME"
        heading="Some Word About me"
        desc="know me more"
      />
      <div className="flex gap-5 items-center flex-col md:flex-row text-center md:text-left">
        <div className="basis-full md:basis-[70%] md:pr-8">
          <div>
            <h1 className=" text-xl lg:text-2xl font-bold mb-5">
              I'm Ananthu Krishnan, a Web Developer
            </h1>
            <p className=" text-lg lg:text-xl mb-5">
              I'm a developer with a passion for web development. I enjoy
              developing simple, clean and slick websites that provide real
              value to the end user.
            </p>
          </div>
          <div className="flex justify-between text-lg lg:text-xl">
            <div>
              <div>Email:</div>
              <a
                href="mailto:ananthukrish.k@gmail.com"
                className="text-sm md:text-base"
              >
                ananthukrish.k@gmail.con
              </a>
            </div>
            <div>
              <div>Date of Birth:</div>
              <div className="text-sm md:text-base">04 February, 1998</div>
            </div>
            <div>
              {/* <div className="font-bold">Emial:</div>
              <div>a@gmail.con</div> */}
            </div>
          </div>
        </div>
        <div className="mt-6 md:mb-0 flex items-center justify-center flex-col p-10 basis-full md:basis-[30%] relative border border-black  after:size-full after:rotate-[2.5deg] after:border after:border-black after:absolute after:top-0 after:bottom-0  after:z-[-1] after:duration-500 before:size-full before:rotate-[-2.5deg] before:border before:border-black before:absolute before:top-0 before:bottom-0 before:z-[-1] bg-yellow-400/90 hover:after:opacity-0 hover:after:rotate-0 hover:before:opacity-0 hover:before:rotate-0 before:duration-500">
          <div className="absolute top-0 left-0 size-full z-[0] bg-yellow-300/80 "></div>
          <div className="relative z-[1]">
            <div className=" text-[150px]  lg:text-[200px] leading-[100%] ">
              3
            </div>
            <p>Years of Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
