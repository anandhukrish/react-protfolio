import { Separator } from "@/components/ui/separator";
import { ArrowUpRight } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="pt-[40px]">
      <Separator className="bg-black/30 mb-4" />
      <div className="flex items-center justify-between flex-col md:flex-row">
        <p className="text-sm md:text-base">
          &copy; All rights reserved Ananthu Krishnan {new Date().getFullYear()}
        </p>
        <ul className="flex gap-2 md:gap-6 mt-3 md:mt-0">
          <li className="flex items-center text-sm md:text-base font-bold hover:underline">
            <a href="">Linkedn</a>
            <span>
              <ArrowUpRight className="size-4 md:size-5" />
            </span>
          </li>
          <li className="flex items-center text-sm md:text-base font-bold hover:underline">
            <a href="">Github</a>
            <span>
              <ArrowUpRight className="size-4 md:size-5" />
            </span>
          </li>
          <li className="flex items-center text-sm md:text-base font-bold hover:underline">
            <a href="">Twitter</a>
            <span>
              <ArrowUpRight className="size-4 md:size-5" />
            </span>
          </li>
          <li className="flex items-center text-sm md:text-base font-bold hover:underline">
            <a href="">Instagram</a>
            <span>
              <ArrowUpRight className="size-4 md:size-5" />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
