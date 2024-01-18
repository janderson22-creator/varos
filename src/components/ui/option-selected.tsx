"use client";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface Props {
  option: {
    icon: any;
    name: string;
  }[];
  setOption: Dispatch<SetStateAction<string>>;
  optionSelected: string;
}

const OptionSelected: React.FC<Props> = ({
  option,
  setOption,
  optionSelected,
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
          onClick={() => setOption(option.name)}
          className={cn(
            "w-fit px-4 my-2 py-4 flex items-center gap-2 rounded-[32px]",
            option.name === optionSelected && "bg-[#22272980]",
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
