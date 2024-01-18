"use client";
import React from "react";
import Aspas from "../../../public/svg/aspas.svg";
import { Carousel, CarouselContent, CarouselItem } from "./carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const Didactics = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  );

  return (
    <div>
      <div className="flex flex-col items-center">
        <h2 className="text-[30px] font-semibold">Didática de verdade</h2>
        <p className="text-xl font-semibold">Garantindo seu aprendizado</p>
      </div>

      <Carousel
        plugins={[plugin.current]}
        className="mt-[54px] w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="mx-4">
          {comments.map((comment, index) => (
            <CarouselItem
              className="flex h-[360px] max-h-[360px] min-h-[360px] flex-col items-left justify-center rounded-[24px] bg-[#131516] p-6 mr-2"
              key={index}
            >
              <Image src={Aspas} alt={""} />
              <p className="mt-4 text-left text-lg text-[#B0B7BE]">{comment}</p>
              <p className="text-lg font-medium mt-4">Assinante VAROS</p>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Didactics;

const comments = [
  "Conteúdos preparados para trazer mais segurança, independente do seu nível. Conteúdos preparados para trazer mais segurança, independente do seu nível.Conteúdos preparados para trazer mais segurança, independente do seu nível.",
  "Eu acompanho vários gestores de fundo e educadores financeiros. Tu de longe és um dos que mais contribui para minha construção de conhecimento. A forma que colocas coisas que outras pessoas fazem parecer complexas de uma forma super simples e ginal. Parabéns! E continue.",
  "Nunca vi algo tão completo que nem o de vocês. E olha que esses 11 anos que tô no MF já assinei muita casa de análise. Nada chega perto do trabalho seu e da sua equipe.",
];
