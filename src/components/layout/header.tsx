import { AlignJustify, Mail } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <nav className="flex container mx-auto items-center justify-between py-5">
      <div>
        <span className="text-2xl font-bold ">Ananthu Krishnan</span>
      </div>
      <div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Mail />
            <a href="mailto:ananthukrish.k@gmail.con">
              ananthukrish.k@gmail.com
            </a>
          </div>
          <Button variant="outline" className="rounded-full p-4 size-15">
            <AlignJustify />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
