"use client";

import { HomeIcon, LogInIcon, MenuIcon, PawPrint, Search } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { ModeToggle } from "./toggle-dark-mode";
import { useTheme } from "next-themes";
import PetLogoLight from "../../../public/pets-logo-light.png";
import PetLogoDark from "../../../public/pets-logo-dark.png";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import { signIn } from "next-auth/react";
import Image from "next/image";

const Header = () => {
  const { theme } = useTheme();
  const logoPet = !theme || theme === 'light' ? PetLogoLight : PetLogoDark

  const loginClick = async () => {
    await signIn();
  };

  return (
    <Card className="flex justify-between rounded-[0px] px-7 py-4">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            onClick={() => console.log(theme)}
            size="icon"
            variant="outline"
          >
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>

          <div className="mt-2 flex flex-col gap-2">
            <Button
              onClick={loginClick}
              variant="outline"
              className="w-full justify-start gap-2"
            >
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

      <div>
        <Image src={logoPet} alt={"pets-logo"} width={50} />
      </div>

      <ModeToggle />
    </Card>
  );
};

export default Header;
