"use client";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { navLinks } from "../lib/constants.js";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setisOpen] = useState("");

  //   const handleClick = () => {
  //     setisOpen(!isOpen);
  //   };

  return (
    <nav className="py-2 border border-b-1 border-gray-200 flex items-center justify-between container">
      <div className="text-2xl font-bold">BookEase</div>
      <div className="container items-center justify-between hidden md:flex">
        <div className="flex items-center gap-4">
          <ul className="flex items-center gap-4">
            {navLinks.map((link) => (
              <li
                className="px-2 hover:text-blue-500 transition-all duration-300 text-[16px] leading-[24px]"
                key={link.id}
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
          <Button className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-[16px] leading-[24px]">
            Book Now
          </Button>
        </div>
      </div>
      <Menu className="md:hidden" onClick={() => setisOpen(!isOpen)} />
      {isOpen && (
        <div className="">
          <ul className="flex flex-col items-center gap-4">
            {navLinks.map((link) => (
              <li
                className="px-2 hover:text-blue-500 transition-all duration-300 text-[16px] leading-[24px]"
                key={link.id}
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
