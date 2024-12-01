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
        <li>
          <Link
            className="px-4 py-1 inline-block rounded-full cursor-pointer hover:bg-black/20"
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="px-4 py-1 inline-block rounded-full cursor-pointer hover:bg-black/20"
            href="#About"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="px-4 py-1 inline-block rounded-full cursor-pointer hover:bg-black/20"
            href="#Project"
          >
            Project
          </Link>
        </li>
        <li>
          <Link
            className="px-4 py-1 inline-block rounded-full cursor-pointer hover:bg-black/20"
            href="#Contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
