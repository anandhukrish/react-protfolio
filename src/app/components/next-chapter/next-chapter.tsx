import { CornerRightDown } from "lucide-react";
import Link from "next/link";
import React from "react";

const NextChapter = ({ to }: { to: string }) => {
  return (
    <Link
      className="flex items-center justify-center md:justify-start gap-4 pt-[80px] md:pt-14"
      href={`#${to}`}
    >
      <span className="text-gray-500">01/10</span>
      <span className="text-xl">Next Chapter</span>
      <CornerRightDown className="size-5 mt-5 animate-bounce" />
    </Link>
  );
};

export default NextChapter;
