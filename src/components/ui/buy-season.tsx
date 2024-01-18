"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "./button";
import ArrowRight from "../../../public/svg/arrow-right.svg";
import Brad from "../../../public/svg/bradvisors.svg";
import Ficon from "../../../public/svg/f.svg";
import Valor from "../../../public/svg/valor.svg";
import Tc from "../../../public/svg/tc.svg";
import Bm from "../../../public/svg/bm.svg";
import Neofeed from "../../../public/svg/neofeed.svg";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Carousel, CarouselContent, CarouselItem } from "./carousel";
import React from "react";

const BuyNow = () => {
  const { theme } = useTheme();
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );
  const images = [Brad, Ficon, Valor, Tc, Bm, Neofeed];

  return (
    <div className="mx-4">
      <h1 className="text-center text-[38px] font-bold">
        Investir de forma mais inteligente passa por aqui.
      </h1>
      <p className="mt-[24px] text-center text-lg font-semibold opacity-70">
        Fazemos de tudo para que você possa conquistar seus sonhos da melhor
        forma
      </p>

      <div className="mt-[32px] flex w-full justify-center">
        <Button
          className={cn(
            "gap-2",
            theme === "light"
              ? "text-[#00F700]"
              : "bg-[#19C81966] text-[#00F700]",
          )}
        >
          Comprar agora <Image src={ArrowRight} alt={"arrow-right"} />
        </Button>
      </div>

      <div className="mt-[72px] flex items-center justify-between rounded-[24px] border py-4 pl-[46px] pr-4">
        <p className="w-full text-xl font-normal opacity-60">Visto em</p>
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-xs"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem
                className="flex items-center justify-center"
                key={index}
              >
                <Image src={image} alt={"bradvisors"} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default BuyNow;
