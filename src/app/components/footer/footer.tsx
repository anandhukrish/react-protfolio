import { Separator } from "@/components/ui/separator";
import { ArrowUpRight } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="pt-[100px]">
      <Separator className="bg-black/30 mb-3" />
      <div className="flex items-center justify-between">
        <p>
          &copy; All rights reserved Ananthu Krishnan {new Date().getFullYear()}
        </p>
        <ul className="flex md:gap-4 gap-6">
          <li className="flex items-center  font-bold hover:underline">
            <a href="">Linkedn</a>
            <span>
              <ArrowUpRight />
            </span>
          </li>
          <li className="flex items-center  font-bold hover:underline">
            <a href="">Github</a>
            <span>
              <ArrowUpRight />
            </span>
          </li>
          <li className="flex items-center  font-bold hover:underline">
            <a href="">Twitter</a>
            <span>
              <ArrowUpRight />
            </span>
          </li>
          <li className="flex items-center  font-bold hover:underline">
            <a href="">Instagram</a>
            <span>
              <ArrowUpRight />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
