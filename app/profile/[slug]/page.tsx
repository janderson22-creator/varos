"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePet } from "@/context/pet";
import { useUser } from "@/context/user";
import { cn } from "@/lib/utils";
import { Pencil, Settings, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const PetProfile = () => {
  const { currentPet, deletePet } = usePet();
  const { user } = useUser();
  const [showButtonsConfig, setShowButtonsConfig] = useState(false);

  return (
    <div>
      <div className="relative">
        {currentPet?.imageUrl && (
          <Image
            alt="background-pet"
            src={currentPet.backgroundURL}
            width={0}
            height={0}
            sizes="100vw"
            className="h-full max-h-[135px] w-full rounded-lg object-contain"
          />
        )}

        <Avatar className="absolute left-0 right-0 top-14 mx-auto h-[100px] w-[100px] border-[4px]">
          <AvatarFallback>{currentPet?.name.toUpperCase()}</AvatarFallback>

          {currentPet?.imageUrl && <AvatarImage src={currentPet?.imageUrl} />}
        </Avatar>
      </div>

      <div className="flex flex-col items-center justify-center pt-20">
        <p className="text-2xl font-medium tracking-wider">
          {currentPet?.name}
        </p>
        <p className="text-xs font-normal opacity-80">
          {currentPet?.description}
        </p>
      </div>

      <div className="mt-10 flex items-center gap-4 px-2.5 text-sm font-medium">
        <p className="w-fit border-b border-[#FBD157] pb-1.5">Meus Posts</p>

        <p className="w-fit cursor-not-allowed border-b pb-1.5 opacity-40">
          Likes
        </p>
        <p className="w-fit cursor-not-allowed border-b pb-1.5 opacity-40">
          Fotos
        </p>
      </div>

      <div className={cn("fixed bottom-10 right-8 flex flex-col items-center")}>
        <div
          className={cn(
            "mb-2 flex flex-col items-center gap-2",
            showButtonsConfig ? "appear" : "disabled",
          )}
        >
          <button className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full bg-[#FBD157] shadow-xl">
            <Pencil size={15} />
          </button>

          <Sheet>
            <SheetTrigger
              className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full bg-[#FBD157] shadow-xl"
              style={{ transitionDelay: "0.2s" }}
            >
              <Trash size={15} />
            </SheetTrigger>

            <SheetContent side="bottom">
              <SheetHeader>
                <SheetTitle className="mb-5">
                  Tem certeza que deseja excluir o perfil de {currentPet?.name}?
                </SheetTitle>

                <div className="flex items-center justify-between">
                  <SheetClose className="mr-2 w-full" asChild>
                    <Button>Cancelar</Button>
                  </SheetClose>

                  <Button onClick={() => deletePet()} className="ml-2 w-full">
                    <Link href={"/profile"}>Excluir</Link>
                  </Button>
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

        {currentPet?.userId === user?.id && (
          <button
            onClick={() => setShowButtonsConfig(!showButtonsConfig)}
            className="z-10 flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full bg-[#FBD157] shadow-lg"
          >
            <Settings />
          </button>
        )}
      </div>
    </div>
  );
};

export default PetProfile;
