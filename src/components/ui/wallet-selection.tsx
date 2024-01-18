"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useTheme } from "next-themes";
import SelecaoIcon from "../../../public/svg/wallets/selecao.svg";
import WalletSelectImg from "../../../public/wallet-select.png";

const WalletSelect = () => {
  const { theme } = useTheme();

  return (
    <div
      className={cn(
        "mt-4 transform rounded-[32px] border px-4 py-6",
        theme === "light" ? "bg-[#cfd4d758]" : "bg-[#131516]",
      )}
    >
      <div className="flex items-center gap-4">
        <Image src={SelecaoIcon} alt="wallet select" />
        <p className="text-sm font-medium">Carteira Seleção</p>
      </div>

      <h2 className="mt-[24px] text-xl font-medium opacity-90">
        A combinação perfeita pra você aproveitar a virada da Bolsa
      </h2>
      <p className="font-normal opacity-80 mt-4">
        Juntamos o que há de melhor nas Carteiras VAROS: uma estratégia completa
        para você ter resultados exponenciais.
      </p>

      <Image src={WalletSelectImg} alt="wallet select" className="mt-[25px]" />
    </div>
  );
};

export default WalletSelect;
