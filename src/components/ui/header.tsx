"use client";

import { MenuIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { ModeToggle } from "./toggle-dark-mode";
import { useTheme } from "next-themes";
import PetLogoLight from "../../../public/pets-logo-light.png";
import PetLogoDark from "../../../public/pets-logo-dark.png";
import Image from "next/image";

const Header = () => {
  const { theme } = useTheme();

  return (
    <Card className="flex justify-between rounded-[0px] px-7 py-4">
      <Button onClick={() => console.log(theme)} size="icon" variant="outline">
        <MenuIcon />
      </Button>

      <Image src={theme === "light" ? PetLogoLight : PetLogoDark} alt={"logo"} width={50} className="max-h-[40px]" />

      <ModeToggle />
    </Card>
  );
};

export default Header;
