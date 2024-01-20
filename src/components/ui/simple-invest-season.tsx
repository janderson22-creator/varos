"use client";
import { useCallback, useMemo, useRef, useState } from "react";
import ArrowRight from "../svg/arrow-right";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import SelecaoIcon from "../../../public/svg/wallets/selecao.svg";
import FatorIcon from "../../../public/svg/wallets/fator.svg";
import DividendosIcon from "../../../public/svg/wallets/dividendos.svg";
import EssencialIcon from "../../../public/svg/wallets/essencial.svg";
import FllsIcon from "../../../public/svg/wallets/flls.svg";
import SmallIcon from "../../../public/svg/wallets/small-caps.svg";
import OptionSelected from "./option-selected";
import WalletSelect from "./wallet-selection";

const SimpleInvest = () => {
  const walletSelectRef = useRef<HTMLDivElement>(null);
  const [optionSelected, setOptionSelected] =
    useState<OptionsType>("Carteiras");
  const [subOptionSelected, setSubOptionSelected] = useState<SubOptionsType>(
    wallets[0] as SubOptionsType,
  );
  const shouldAppear = optionSelected ? "appear" : "disabled";
  const { theme } = useTheme();

  const openOption = useCallback(
    (option: string) => {
      setOptionSelected(option as OptionsType);
    },
    [],
  );

  const details = useMemo(() => {
    switch (optionSelected) {
      case "Carteiras":
        return wallets;
      case "Cursos":
        return courses;
      case "Consultoria":
        return consult;
      default:
        return [];
    }
  }, [optionSelected]);

  const handleSubOptionSelect = (subOption: SubOptionsType) => {
    setSubOptionSelected(subOption);

    if (walletSelectRef.current) {
      window.scrollTo({
        top: walletSelectRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mx-4">
      <div className="md:w-6/12">
        <h2 className="text-center text-[24px] font-semibold md:text-left">
          Simplifique seus investimentos e alcance seus objetivos
        </h2>
        <p className="mt-2 text-center text-sm font-semibold opacity-70 md:text-left">
          Conteúdos preparados para trazer mais segurança, independente do seu
          nível.
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:gap-7">
        <div className="md:w-5/12">
          {options.map((option, key) => (
            <div
              className="mb-4 first-of-type:mt-[48px] last-of-type:mb-0"
              key={key}
            >
              <div
                onClick={() => {
                  openOption(option);
                }}
                className={cn(
                  "flex items-center justify-center gap-2 rounded-[40px] border py-4 text-lg ",
                  option === optionSelected &&
                    theme === "light" &&
                    "bg-[#222729] font-bold text-white",
                  option === optionSelected &&
                    theme === "dark" &&
                    "bg-[#222729] font-bold",
                )}
              >
                {option}
                <div
                  className={cn(
                    "transition duration-200 ease-in-out",
                    option === optionSelected && "rotate-90",
                  )}
                >
                  <ArrowRight />
                </div>
              </div>

              <div className={`${shouldAppear}`}>
                {option === optionSelected && (
                  <OptionSelected
                    option={details}
                    optionSelected={subOptionSelected}
                    setOption={setSubOptionSelected}
                    click={handleSubOptionSelect}
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="nd:w-7/12 mt-10" ref={walletSelectRef}>
          <WalletSelect option={subOptionSelected} />
        </div>
      </div>
    </div>
  );
};

export default SimpleInvest;

// utils

type OptionsType = "Carteiras" | "Cursos" | "Consultoria";
export type SubOptionsType = { icon: any; name: string };
const options = ["Carteiras", "Cursos", "Consultoria"];
const wallets = [
  {
    icon: SelecaoIcon,
    name: "Carteira Seleção",
  },
  {
    icon: FatorIcon,
    name: "Carteira FATOR",
  },
  {
    icon: DividendosIcon,
    name: "Carteira Dividendos",
  },
  {
    icon: EssencialIcon,
    name: "Carteira Essencial",
  },
  {
    icon: FllsIcon,
    name: "Carteira Flls",
  },
  {
    icon: SmallIcon,
    name: "Carteira Small Caps",
  },
];

const courses = [
  {
    icon: SelecaoIcon,
    name: "Valuation 2.0",
  },
  {
    icon: FatorIcon,
    name: "Código.py",
  },
  {
    icon: DividendosIcon,
    name: "Dash.py",
  },
  {
    icon: EssencialIcon,
    name: "Carteira Essencial",
  },
  {
    icon: FllsIcon,
    name: "Curso Reels",
  },
  {
    icon: SmallIcon,
    name: "Enciclopédia de Fll",
  },
];

const consult = [
  {
    icon: SelecaoIcon,
    name: "Consultoria VAROS",
  },
];
