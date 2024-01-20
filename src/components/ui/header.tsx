"use client";

import { MenuIcon } from "lucide-react";
import { Button } from "./button";
import { ModeToggle } from "./toggle-dark-mode";
import { Sheet, SheetTrigger } from "./sheet";
import Link from "next/link";
import Logo from "../svg/logo";
import NavBar from "./modal-nav-mobile";

const Header = () => {
  return (
    <div className="flex items-center justify-between rounded-[0px] px-7 py-4 lg:hidden">
      <ModeToggle />

      <Link href="/">
        <Logo />
      </Link>

      <Sheet>
        <SheetTrigger asChild>
          <Button className="border-none" size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <NavBar />
      </Sheet>
    </div>
  );
};

export default Header;
