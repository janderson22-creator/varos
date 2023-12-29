"use client";
import Spinner from "@/components/svg/spinner";
import { Button } from "@/components/ui/button";
import ChoosePet from "@/components/ui/choosePet";
import CreatePet from "@/components/ui/createPet";
import { usePet } from "@/context/pet";
import { PlusCircle } from "lucide-react";

const Profile = () => {
  const { loadingPets, pets } = usePet();

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
        <div className="flex h-full items-center justify-center">

          <div className="flex">
            {pets.map((pet, key) => (
              <ChoosePet key={key} pet={pet} />
            ))}

            <Button className="ml-2 rounded-full" size="icon">
              <PlusCircle />
            </Button>
          </div>

        </div>
      ) : (
        <div className="flex h-full flex-col items-center justify-center border">
          <p className="mb-2 text-lg font-medium">Adicionar Pet?</p>
          <CreatePet />
        </div>
      )}
    </div>
  );
};

export default Profile;
