import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight, CircleCheck, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = () => {
  return (
    <Card className="p-5  w-full md:w-[40rem] lg:w-[65rem] sticky top-[40px] mx-auto  border-black bg-yellow-200 mb-8 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <Link href="#" className="uppercase font-semibold">
            Name
          </Link>
          <h1 className="my-3 font-bold text-4xl">A Platform </h1>
          <Separator className="bg-black/30" />
          <div>
            <ul className="flex flex-col gap-4 my-4 md:mt-5">
              <li className="flex gap-2 text-black/50 text-sm md:text-base">
                <span>
                  <CircleCheck />
                </span>
                <span>
                  Allows users to attempt quizzes with various categories and
                  difficulty levels.
                </span>
              </li>
              <li className="flex gap-2 text-black/50 text-sm md:text-base">
                <span>
                  <CircleCheck />
                </span>
                <span>
                  Allows users to attempt quizzes with various categories and
                  difficulty levels.
                </span>
              </li>
              <li className="flex gap-2 text-black/50 text-sm md:text-base">
                <span>
                  <CircleCheck />
                </span>
                <span>
                  Allows users to attempt quizzes with various categories and
                  difficulty levels.
                </span>
              </li>
            </ul>
          </div>
          <div className="flex gap-3 mt-8">
            <Button className="w-full py-6 rounded-xl">
              Visit live Site <ArrowUpRight />
            </Button>
            <Button className="w-full py-6 rounded-xl" variant="outline">
              <Github />
              Github Link
            </Button>
          </div>
        </div>
        <div>
          <Image
            src="/nexthire-landing-page-min.png"
            alt=""
            className=" lg:absolute lg:h-full lg:w-auto  lg:max-w-none rounded-xl"
            width={1920}
            height={864}
          />
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
