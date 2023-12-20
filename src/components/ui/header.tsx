"use client";

import { HomeIcon, LogInIcon, MenuIcon, PawPrint, Search } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { ModeToggle } from "./toggle-dark-mode";
import { useTheme } from "next-themes";
import PetLogoLight from "../../../public/pets-logo-light.png";
import PetLogoDark from "../../../public/pets-logo-dark.png";
import Image from "next/image";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";

const Header = () => {
  const { theme } = useTheme();

  return (
    <Card className="flex justify-between rounded-[0px] px-7 py-4">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>

          <div className="mt-2 flex flex-col gap-2">
            <Button variant="outline" className="w-full justify-start gap-2">
              <LogInIcon size={16} />
              Fazer Login
            </Button>

            <Button variant="outline" className="w-full justify-start gap-2">
              <HomeIcon size={16} />
              Início
            </Button>

            <Button variant="outline" className="w-full justify-start gap-2">
              <PawPrint size={16} />
              Profile
            </Button>

            <Button variant="outline" className="w-full justify-start gap-2">
              <Search size={16} />
              Search
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      <Image
        src={theme === "light" ? PetLogoLight : PetLogoDark}
        alt={"logo"}
        width={50}
        height={0}
        className="max-h-[40px]"
      />

      <ModeToggle />
    </Card>
  );
};

export default Header;
