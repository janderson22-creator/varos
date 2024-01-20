"use client";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { SubOptionsType } from "./simple-invest-season";

interface Props {
  option: {
    icon: any;
    name: string;
  }[];
  setOption: Dispatch<SetStateAction<SubOptionsType>>;
  optionSelected: SubOptionsType | undefined;
  click: (subOption: SubOptionsType) => void;
}

const OptionSelected: React.FC<Props> = ({
  option,
  setOption,
  optionSelected,
  click,
}) => {
  const { theme } = useTheme();
  return (
    <div
      className={cn(
        "mt-4 transform rounded-[32px] border p-[32px]",
        theme === "light" ? "bg-[#cfd4d758]" : "bg-[#131516]",
      )}
    >
      {option.map((option, key) => (
        <div
          onClick={() => click(option)}
          className={cn(
            "cursor-pointer my-2 flex w-fit items-center gap-2 md:gap-4 rounded-[32px] px-4 py-4",
            option.name === optionSelected?.name && "bg-[#22272980]",
          )}
          key={key}
        >
          <Image src={option.icon} alt={option.name} />
          <p className="text-sm font-medium">{option.name}</p>
        </div>
      ))}
    </div>
  );
};

export default OptionSelected;
