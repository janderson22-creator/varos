"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { useUser } from "@/context/user";
import { PlusCircle } from "lucide-react";
import { usePet } from "@/context/pet";
import { useCallback, useEffect, useState } from "react";
import { Pet, Post } from "@prisma/client";
import ChoosePet from "./choosePet";
import { UsePost } from "@/context/publication";
import { useToast } from "./use-toast";
import { ToastAction } from "@radix-ui/react-toast";

const ButtonCreatePost = () => {
  const { toast } = useToast();
  const { user } = useUser();
  const { postPublication } = UsePost();
  const { pets, setCurrentPetPost, currentPetPost } = usePet();
  const [petData, setPetData] = useState({
    text: "",
    namePet: "",
    slug: "",
    petId: "",
    imageUrl: "",
  });

  const selectedPet = useCallback(
    (pet: Pet) => {
      setCurrentPetPost(pet);
    },
    [setCurrentPetPost],
  );

  useEffect(() => {
    setPetData((prevState) => ({
      ...prevState,
      namePet: currentPetPost?.name || "",
      imageUrl: currentPetPost?.imageUrl || "",
      slug: currentPetPost?.slug || "",
      petId: currentPetPost?.id || "",
    }));
  }, [
    currentPetPost?.id,
    currentPetPost?.imageUrl,
    currentPetPost?.name,
    currentPetPost?.slug,
  ]);

  const publishPublication = useCallback(() => {
    if (!petData.text.length) {
      toast({
        variant: "destructive",
        title: "Ops! Confira o post e tente novamente.",
      });
    } else {
      postPublication(petData as Post);
    }
  }, [petData, postPublication, toast]);

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

      <SheetContent className="rounded-b-2xl" side="top">
        <SheetHeader>
          <SheetTitle className="text-base font-medium opacity-90">
            Escolha qual pet fará a publicação
          </SheetTitle>
        </SheetHeader>

        <Sheet>
          <div className="mt-10">
            {pets?.map((pet, key) => (
              <ChoosePet key={key} pet={pet} setPet={selectedPet} post={true} />
            ))}
          </div>

          <SheetContent className="rounded-b-2xl" side="bottom">
            <SheetHeader>
              <SheetTitle className="text-left text-base font-medium opacity-80">
                Criar publicação
              </SheetTitle>
            </SheetHeader>

            <div className="mt-6 flex flex-col items-center gap-2">
              <Avatar className="h-[55px] w-[55px]">
                <AvatarFallback>
                  {currentPetPost?.name.toUpperCase()}
                </AvatarFallback>

                {currentPetPost?.imageUrl && (
                  <AvatarImage src={currentPetPost?.imageUrl} />
                )}
              </Avatar>

              <div className="flex flex-col items-center">
                <p className="font-medium opacity-90">{currentPetPost?.name}</p>
                <p className="text-sm font-medium opacity-50">
                  {currentPetPost?.species}
                </p>
              </div>

              <div className="mt-6 w-full px-2">
                <label
                  htmlFor="post"
                  className="block text-sm font-medium text-gray-600"
                >
                  Faça seu post:
                </label>
                <textarea
                  value={petData.text}
                  onChange={(e) =>
                    setPetData((prevState) => ({
                      ...prevState,
                      text: e.target.value,
                    }))
                  }
                  id="post"
                  name="post"
                  rows={4}
                  maxLength={200}
                  className="mt-2 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
                ></textarea>

                <p className="mt-2 text-sm text-gray-500">
                  {petData.text.length}/200
                </p>
                <SheetClose asChild>
                  <button
                    onClick={() => publishPublication()}
                    className="focus:shadow-outline-blue mt-4 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none active:bg-blue-800"
                  >
                    Publicar
                  </button>
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </SheetContent>
    </Sheet>
  );
};

export default ButtonCreatePost;
