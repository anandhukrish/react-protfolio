import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <Card className="bg-transparent px-5  py-8 mt-16 border-black flex items-center justify-between">
      <div>
        <h1 className="text-xl md:text-3xl font-extrabold">
          {`Let's create something amazing togethre!`}
        </h1>
        <p>
          {`Ready to bring your next project to life? Let's connect and discuss how
        can I help you achive your goals`}
        </p>
      </div>
      <Button className="py-6 flex gap-2 rounded-xl" asChild>
        <a href="mailto:ananthukrish.k@gmail.con">
          Contact Me <ArrowUpRight />
        </a>
      </Button>
    </Card>
  );
};

export default Contact;
