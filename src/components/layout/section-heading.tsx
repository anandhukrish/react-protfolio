import React from "react";

const SectionHeading = () => {
  return (
    <div className="relative border-l-2 p-16 border-l-black before:w-1 before:h-full before:left-0">
      <div className="absolute text-black/15 text-[100px] top-0">About Me</div>
      <h3 className="text-3xl font-medium">Some Word About me</h3>
      <h1 className="text-8xl font-extrabold mt-5">know me more</h1>
    </div>
  );
};

export default SectionHeading;
