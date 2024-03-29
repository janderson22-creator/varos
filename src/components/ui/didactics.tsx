"use client";
import React from "react";
import Aspas from "../../../public/svg/aspas.svg";
import { Carousel, CarouselContent, CarouselItem } from "./carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Men from "./men";

const Didactics = () => {
  const { theme } = useTheme();
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  );

  return (
    <div>
      <div className="flex flex-col items-center md:w-6/12 md:items-start md:pl-4">
        <h2 className="text-center text-[24px] font-semibold md:text-left">
          Didática de verdade
        </h2>
        <p className="mt-2 text-center text-sm font-semibold opacity-70 md:text-left">
          Garantindo seu aprendizado
        </p>
      </div>

      <div className="w-full flex flex-col md:flex-row lg:items-center">
        <Carousel
          plugins={[plugin.current]}
          className="mt-[54px] w-full md:w-6/12"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="mx-4">
            {comments.map((comment, index) => (
              <CarouselItem
                className={cn(
                  "items-left mr-2 flex h-[360px] max-h-[360px] min-h-[360px] flex-col justify-center rounded-[24px] p-6",
                  theme === "light" ? "bg-[#cfd4d758]" : "bg-[#131516]",
                )}
                key={index}
              >
                <Image src={Aspas} alt={""} />
                <p className="mt-4 text-left text-lg text-[#B0B7BE]">
                  {comment}
                </p>
                <p className="mt-4 text-lg font-medium">Assinante VAROS</p>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-[24px] px-4 md:w-full">
          <Men />
        </div>
      </div>
    </div>
  );
};

export default Didactics;

const comments = [
  "Conteúdos preparados para trazer mais segurança, independente do seu nível. Conteúdos preparados para trazer mais segurança, independente do seu nível.Conteúdos preparados para trazer mais segurança, independente do seu nível.",
  "Eu acompanho vários gestores de fundo e educadores financeiros. Tu de longe és um dos que mais contribui para minha construção de conhecimento. A forma que colocas coisas que outras pessoas fazem parecer complexas de uma forma super simples e ginal. Parabéns! E continue.",
  "Nunca vi algo tão completo que nem o de vocês. E olha que esses 11 anos que tô no MF já assinei muita casa de análise. Nada chega perto do trabalho seu e da sua equipe.",
];
