import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { navLinks } from "../lib/constants.js";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <section className="py-4 border border-b-2 border-gray-100">
      <div className="container items-center justify-between hidden md:flex">
        <div className="text-2xl font-bold text-gray-headline">BookEase</div>
        <div className="flex items-center gap-4">
          <ul className="flex items-center gap-4">
            {navLinks.map((link) => (
              <li className="" key={link.id}>
                <Link
                  href={link.href}
                  className="hover:text-green px-2 transition-all duration-300 text-[16px] leading-[24px]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Button className="bg-green rounded-none hover:bg-green-dark cursor-pointer text-[16px] leading-[24px]">
          Book Now
        </Button>
      </div>
      <div className="text-right px-4 md:hidden">
        <MobileNav />
      </div>
    </section>
  );
};

export default Navbar;
