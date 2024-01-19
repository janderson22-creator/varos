"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useTheme } from "next-themes";
import SelecaoIcon from "../../../public/svg/wallets/selecao.svg";
import WalletSelectImg from "../../../public/wallet-select.png";
import { SubOptionsType } from "./simple-invest-season";

interface Props {
  option: SubOptionsType | undefined;
}

const WalletSelect: React.FC<Props> = ({ option }) => {
  const { theme } = useTheme();

  return (
    <div
      className={cn(
        "mt-4 transform rounded-[32px] border px-4 py-6",
        theme === "light" ? "bg-[#cfd4d758]" : "bg-[#131516]",
      )}
    >
      <div className="flex items-center gap-4">
        <Image src={option?.icon} alt="wallet select" />
        <p className="text-sm font-medium">{option?.name}</p>
      </div>

      <h2 className="mt-[24px] text-xl font-medium opacity-90">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h2>
      <p className="mt-4 font-normal opacity-80">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
        officia magni nisi ut vero, dolorem mollitia iure nostrum explicabo
        accusamus voluptate, modi repellendus harum necessitatibus beatae
        doloribus quis impedit veniam?
      </p>

      <Image src={WalletSelectImg} alt="wallet select" className="mt-[25px]" />
    </div>
  );
};

export default WalletSelect;
