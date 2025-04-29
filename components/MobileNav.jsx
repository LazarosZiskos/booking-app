import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { navLinks } from "@/lib/constants";
import Link from "next/link";

const MobileNav = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Menu size={30} />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader className="mt-[100px] text-center items-center ">
            <SheetClose asChild>
              <Link href="/" className="text-2xl font-bold text-gray-headline">
                BookEase
              </Link>
            </SheetClose>
            <div className="mt-[40px]">
              <ul className="flex flex-col items center gap-4">
                {navLinks.map((link) => (
                  <li className="" key={link.id}>
                    <SheetClose asChild>
                      <Link
                        href={link.href}
                        className="hover:text-green transition-all duration-300 text-[16px] leading-[24px]"
                      >
                        {link.name}
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
