"use client";

import { MenuIcon } from "lucide-react";
import { Button } from "./button";
import { ModeToggle } from "./toggle-dark-mode";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import Link from "next/link";
import Logo from "../svg/logo";

const Header = () => {
  return (
    <div className="flex items-center justify-between rounded-[0px] px-7 py-4">
      <ModeToggle />

      <Link href="/">
        <Logo />
      </Link>

      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side="right">
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>

          <div>teste</div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Header;
