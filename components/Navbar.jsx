import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { navLinks } from "../lib/constants.js";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <section className="py-4 border border-b-2 border-gray-100">
      <div className="container items-center justify-between  md:flex">
        <Link
          href="/"
          className="text-2xl font-bold items-center justify-center text-gray-headline"
        >
          BookEase
        </Link>
        <div className="items-center gap-4 hidden md:flex">
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
        <Link href="/book-now">
          <Button className="bg-green rounded-none hidden md:block hover:bg-green-dark cursor-pointer text-[16px] leading-[24px]">
            Book Now
          </Button>
        </Link>
      </div>
      <div className="text-right px-4 md:hidden flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold items-center justify-center text-gray-headline"
        >
          BookEase
        </Link>
        <div>
          <MobileNav />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
