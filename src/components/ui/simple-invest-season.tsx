"use client";
import { useCallback, useMemo, useState } from "react";
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

const SimpleInvest = () => {
  const [optionSelected, setOptionSelected] = useState<OptionsType>();
  const [subOptionSelected, setSubOptionSelected] = useState("");
  const shouldAppear = optionSelected ? "appear" : "disabled";
  const { theme } = useTheme();

  const openOption = useCallback(
    (option: string) => {
      if (option === optionSelected) {
        return setOptionSelected(undefined);
      }

      setOptionSelected(option as OptionsType);
    },
    [optionSelected],
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

  return (
    <div className="mx-4">
      <h2 className="text-center text-[24px] font-semibold">
        Simplifique seus investimentos e alcance seus objetivos
      </h2>
      <p className="mt-2 text-center text-sm font-semibold opacity-70">
        Conteúdos preparados para trazer mais segurança, independente do seu
        nível.
      </p>

      <div>
        {options.map((option, key) => (
          <div
            className="mb-4 first-of-type:mt-[48px] last-of-type:mb-0"
            key={key}
          >
            <div
              onClick={() => {
                openOption(option);
                setSubOptionSelected("");
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
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleInvest;

// utils

type OptionsType = "Carteiras" | "Cursos" | "Consultoria";
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
