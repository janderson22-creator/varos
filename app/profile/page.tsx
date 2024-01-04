"use client";
import Spinner from "@/components/svg/spinner";
import { Button } from "@/components/ui/button";
import ChoosePet from "@/components/ui/choosePet";
import CreatePet from "@/components/ui/createPet";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { usePet } from "@/context/pet";
import { Pet } from "@prisma/client";
import { PlusCircle } from "lucide-react";
import { useCallback } from "react";

const Profile = () => {
  const { loadingPets, pets, setCurrentPet } = usePet();

  const selectedPet = useCallback(
    (pet: Pet) => {
      setCurrentPet(pet);
    },
    [setCurrentPet],
  );

  return (
    <div className="h-[calc(100%-85px)]">
      {loadingPets ? (
        <div
          className="m-auto flex h-full items-center justify-center"
          role="status"
        >
          <Spinner />
        </div>
      ) : pets?.length ? (
        <div className="mt-[60%] flex h-full flex-col items-center gap-2">
          <p className="font-semibold">Selecione seu pet</p>

          <div className="flex flex-col items-start justify-start w-full px-10">
            {pets.map((pet, key) => (
              <ChoosePet key={key} pet={pet} setPet={selectedPet} />
            ))}

            <Sheet>
              <SheetTrigger className="mt-10 mx-auto" asChild>
                <Button className="rounded-full" size="icon">
                  <PlusCircle />
                </Button>
              </SheetTrigger>

              <CreatePet />
            </Sheet>
          </div>
        </div>
      ) : (
        <div className="flex h-full flex-col items-center justify-center border">
          <p className="mb-2 text-lg font-medium">Adicionar Pet?</p>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                className="flex h-fit w-fit flex-col p-2"
                size="icon"
                variant="outline"
              >
                <PlusCircle />
              </Button>
            </SheetTrigger>
            <CreatePet />
          </Sheet>
        </div>
      )}
    </div>
  );
};

export default Profile;
