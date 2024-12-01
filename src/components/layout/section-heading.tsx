import React from "react";

const SectionHeading = ({
  overlayText,
  heading,
  desc,
}: {
  overlayText: string;
  heading: string;
  desc: string;
}) => {
  return (
    <div className="relative mb-8 md:mb-0 border-l-2 p-10 xl:p-16 border-l-black before:w-1 before:h-full before:left-0">
      <div className="absolute text-black/15 text-[50px] md:text-[80px] xl:text-[100px] top-0">
        {overlayText}
      </div>
      <h3 className="text-xl md:text-2xl xl:text-3xl font-bold xl:font-medium">
        {heading}
      </h3>
      <h1 className=" text-4xl md:text-6xl xl:text-8xl font-extrabold mt-5">
        {desc}
      </h1>
    </div>
  );
};

export default SectionHeading;
