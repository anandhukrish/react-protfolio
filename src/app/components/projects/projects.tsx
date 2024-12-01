import SectionHeading from "@/components/layout/section-heading";
import React from "react";
import ProjectCard from "./porject-card";
import Marquee from "@/components/ui/marquee";
import { skills } from "@/lib/constants";
import { Card, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const Projects = () => {
  return (
    <section id="Projects" className="pt-[120px]">
      <SectionHeading />
      <div className="pt-20">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      <div className="grid md:grid-cols-5 lg:grid-cols-3 gap-5 mx-auto">
        <Card className=" bg-transparent border-black mt-10 p-5 col-span-1 md:col-span-2 lg:col-span-1 relative h-[320px] overflow-hidden">
          <CardTitle className="text-2xl md:text-4xl mb-3">My Reads</CardTitle>
          <p className="mb-3 text-sm lg:text-base max-w-xs">
            Explore the books shaping my prespectives
          </p>
          <Image
            src="/book-cover.webp"
            alt=""
            className="!w-40 object-contain mx-auto "
            height={40}
            width={40}
          />
        </Card>
        <Card className=" bg-transparent  border-black mt-10 p-5 col-span-1 md:col-span-3 lg:col-span-2">
          <CardTitle className="text-2xl md:text-4xl mb-3">
            My Toolbox
          </CardTitle>
          <p className="mb-3 text-sm lg:text-base max-w-xs ">
            Explore the technologies and tools I used to craft exceptional
            digital experiences
          </p>

          <Marquee pauseOnHover className="[--duration:40s] ">
            {skills.map((skill, i) => (
              <div
                className="flex items-center gap-3 border-2 border-black/30 px-3 py-2 rounded-md"
                key={`${skill}-${i}`}
              >
                <Image
                  src={skill.img ? skill.img : ""}
                  alt=""
                  className="size-10 object-contain"
                  width={40}
                  height={40}
                />
                <span className="font-medium text-xl">{skill.title} </span>
              </div>
            ))}
          </Marquee>
          <Marquee pauseOnHover reverse className="[--duration:40s] mt-3">
            {skills.map((skill, i) => (
              <div
                className="flex items-center gap-3 border-2 border-black/30 px-3 py-2 rounded-md"
                key={i}
              >
                <Image
                  src={skill.img ? skill.img : ""}
                  alt=""
                  className="size-10 object-contain"
                  width={40}
                  height={40}
                />
                <span className="font-medium text-xl">{skill.title} </span>
              </div>
            ))}
          </Marquee>
        </Card>
      </div>
    </section>
  );
};

export default Projects;
