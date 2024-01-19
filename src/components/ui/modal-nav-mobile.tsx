"use client";
import { SheetContent, SheetHeader } from "./sheet";
import LoginIcon from "../../../public/svg/login-icon.svg";
import Logo from "../svg/logo";
import { Button } from "./button";
import Image from "next/image";
import { useCallback, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const NavBar = () => {
  const [optionSelected, setOptionSelected] = useState<TypeOptions>();

  const openOption = useCallback(
    (option: string) => {
      if (option === optionSelected) {
        setOptionSelected(undefined);
      } else {
        setOptionSelected(option as TypeOptions);
      }
    },
    [optionSelected],
  );

  return (
    <SheetContent className="px-0" side="right">
      <SheetHeader className="px-4">
        <Logo width={"70"} />
      </SheetHeader>
      <div className="mt-5 w-full border" />

      <div className="mt-[48px] px-4">
        <Button
          variant={"outline"}
          className="w-full gap-3 rounded-sm border border-[#FAFAFA] bg-transparent text-lg font-medium"
        >
          <Image src={LoginIcon} alt={""} width={20} />
          ENTRAR
        </Button>

        <button className="mt-4 w-full rounded-sm border-[1px] border-white bg-[#19C819] px-4 py-2.5 text-lg font-medium text-black">
          ASSINAR AGORA
        </button>

        <div className="mt-10 flex w-full flex-col">
          {options.map((option, key) => (
            <div
              className={cn(
                "rounded-[8px] px-4",
                optionSelected === "Produtos" &&
                  option === "Produtos" &&
                  "border-[#B0B7BE] bg-[#222729]",
              )}
              key={key}
            >
              <div
                onClick={() => openOption(option)}
                className={cn(
                  "w-full border-b border-[#222729] py-6 font-bold opacity-90",
                )}
              >
                {option}
              </div>

              <div
                className={cn(
                  optionSelected === "Produtos" && option === "Produtos"
                    ? "appear"
                    : "disabled",
                )}
              >
                {optionSelected === "Produtos" &&
                  option === "Produtos" &&
                  products.map((product, index) => (
                    <Link
                      href={product.title}
                      className="mb-6 flex"
                      key={index}
                    >
                      <div>
                        <p className="font-semibold text-[#FFF]">
                          {product.title}
                        </p>
                        <p className="mt-2 text-xs font-normal opacity-80">
                          {product.subtitle}
                        </p>
                      </div>

                      <ArrowRight width={70} />
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SheetContent>
  );
};

export default NavBar;

const options = ["Produtos", "Blog", "Quem somos", "Conteúdos"];
type TypeOptions = "Produtos" | "Blog" | "Quem somos" | "Conteúdos";
const products = [
  {
    title: "Carteiras",
    subtitle:
      "Aprenda a encontrar as melhores ações, invista seu dinheiro de maneira inteligente e construa um futuro financeiro sólido.",
  },
  {
    title: "Cursos",
    subtitle:
      "Aprenda a encontrar as melhores ações, invista seu dinheiro de maneira inteligente e construa um futuro financeiro sólido.",
  },
  {
    title: "Consultoria",
    subtitle:
      "Aprenda a encontrar as melhores ações, invista seu dinheiro de maneira inteligente e construa um futuro financeiro sólido.",
  },
];
