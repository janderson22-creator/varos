"use client";
import Link from "next/link";
import Logo from "../svg/logo";
import CartIcon from "../../../public/svg/cart.svg";
import LoginIcon from "../../../public/svg/login-icon.svg";
import { Button } from "./button";
import Image from "next/image";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const HeaderWeb = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="hidden items-center px-4 py-5 lg:flex">
      <Link href="/">
        <Logo />
      </Link>

      <div className="ml-[72px]">
        {links.map((link, key) => (
          <Link
            className="ml-[80px] text-sm font-semibold first-of-type:ml-0 hover:underline"
            href={link.toLowerCase()}
            key={key}
          >
            {link}
          </Link>
        ))}
      </div>

      <div className="ml-auto flex gap-2">
        <Button
          variant={"outline"}
          className="w-full gap-3 rounded-sm border border-none bg-transparent px-6 text-lg font-medium"
        >
          <Image src={CartIcon} alt={""} width={20} />
          Assinar Agora
        </Button>
        <Button
          variant={"outline"}
          className="w-full gap-3 rounded-sm border border-none bg-transparent px-6 text-lg font-medium"
        >
          <Image src={LoginIcon} alt={""} width={20} />
          Entrar
        </Button>

        <Button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="border-none hover:bg-transparent"
          variant="outline"
          size="icon"
        >
          {theme === "light" ? (
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          ) : (
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          )}
        </Button>
      </div>
    </div>
  );
};

export default HeaderWeb;

const links = ["Produtos", "Blog", "Conteúdos", "Quem Somos"];
