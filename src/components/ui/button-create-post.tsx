"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { useUser } from "@/context/user";
import { PlusCircle } from "lucide-react";
import { usePet } from "@/context/pet";
import { useCallback } from "react";
import { Pet } from "@prisma/client";
import ChoosePet from "./choosePet";

const ButtonCreatePost = () => {
  const { user } = useUser();
  const { pets, setCurrentPetPost } = usePet();

  const selectedPet = useCallback(
    (pet: Pet) => {
      setCurrentPetPost(pet);
    },
    [setCurrentPetPost],
  );

  return (
    <Sheet>
      <SheetTrigger className="flex w-full items-center justify-center gap-2 p-4">
        <Avatar>
          <AvatarFallback>{user?.name?.toUpperCase()}</AvatarFallback>

          {user?.image && <AvatarImage src={user?.image} />}
        </Avatar>

        <div className="w-full rounded-3xl bg-[#cccccc45] px-2 py-3">
          <p className="text-xs font-medium">
            Publique uma atualização de status
          </p>
        </div>

        <PlusCircle size={37} />
      </SheetTrigger>

      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle className="opacity-90 font-medium text-base">Escolha qual pet fará a publicação</SheetTitle>
        </SheetHeader>

        <div className="mt-10">
          {pets?.map((pet, key) => (
            <ChoosePet key={key} pet={pet} setPet={selectedPet} post={true} />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ButtonCreatePost;
