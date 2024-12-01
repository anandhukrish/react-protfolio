import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <section id="Contact">
      <Card className="bg-transparent px-5  py-8  mt-8 md:mt-12 border-black flex items-center justify-between flex-col md:flex-row text-center md:text-start gap-8 md:gap-5">
        <div>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold mb-3">
            {`Let's create something amazing togethre!`}
          </h1>
          <p className=" text-sm md:text-base">
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
    </section>
  );
};

export default Contact;
