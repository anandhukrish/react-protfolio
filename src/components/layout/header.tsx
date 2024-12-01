"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const pathname = window.location.href;
  console.log(pathname);

  return (
    <nav className="flex container mx-auto items-center justify-center py-5">
      <ul className="flex p-0.5 gap-2 border border-black/45 rounded-full">
        <li className="px-4 py-1 rounded-full hover:bg-black/20">
          <Link href="/">Home</Link>
        </li>
        <li className="px-4 py-1 rounded-full hover:bg-black/20">
          <Link href="#About">About</Link>
        </li>
        <li className="px-4 py-1 rounded-full hover:bg-black/20">
          <Link href="#Project">Project</Link>
        </li>
        <li className="px-4 py-1 rounded-full hover:bg-black/20">
          <Link href="#Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
