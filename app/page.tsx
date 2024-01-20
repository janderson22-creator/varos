"use client";
import BuyNow from "@/components/ui/buy-season";
import Didactics from "@/components/ui/didactics";
import Footer from "@/components/ui/footer";
import Form from "@/components/ui/form";
import SimpleInvest from "@/components/ui/simple-invest-season";
import Cards from "../public/cards-Hero.png";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="mt-[72px] px-4 md:flex">
        <BuyNow />

        <div className="hidden md:block">
          <Image src={Cards} alt={"Cards-Hero"} width={550} />
        </div>
      </div>

      <div className="mt-[164px]">
        <SimpleInvest />
      </div>

      <div className="mt-[122px]">
        <Didactics />
      </div>

      <div className="mt-[128px] px-4">
        <Form />
      </div>

      <div className="mt-[184px] px-4 pb-[48px]">
        <Footer />
      </div>
    </div>
  );
}
