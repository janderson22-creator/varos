"use client"
import BuyNow from "@/components/ui/buy-season";
import Didactics from "@/components/ui/didactics";
import SimpleInvest from "@/components/ui/simple-invest-season";
import WalletSelect from "@/components/ui/wallet-selection";

export default function Home() {
  return (
    <div>
      <div className="mt-[72px]">
        <BuyNow />
      </div>

      <div className="mt-[164px]">
        <SimpleInvest />
      </div>

      <div className="mt-10 px-4">
        <WalletSelect />
      </div>

      <div className="mt-[122px]">
        <Didactics />
      </div>
    </div>
  );
}
