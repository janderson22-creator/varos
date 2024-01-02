"use client";
import { usePet } from "@/context/pet";
import Image from "next/image";

const PetProfile = () => {
  const { currentPet } = usePet();

  return (
    <div>
      <p>{currentPet?.name}</p>

      {currentPet?.imageUrl && (
        <Image
          src={currentPet?.imageUrl}
          alt={"pet-image"}
          width={100}
          height={100}
        />
      )}
      
    </div>
  );
};

export default PetProfile;
