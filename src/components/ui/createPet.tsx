import React, { useCallback, useState } from "react";
import { PlusCircle } from "lucide-react";
import { Button } from "./button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";
import { Input } from "./input";
import { Label } from "./label";
import { useUser } from "@/context/user";
import axios from "axios";
import { usePet } from "@/context/pet";
import { Pet } from "@prisma/client";

const CreatePet: React.FC = () => {
  const { user } = useUser();
  const { postPet } = usePet();
  const [petData, setPetData] = useState({
    name: "",
    slug: "",
    imageUrl: "",
    backgroundURL: "",
    description: "",
    gender: "",
    species: "",
    userId: user?.id,
  });

  const onChange = (fieldName: string, value: string) => {
    setPetData((prevPetData) => ({
      ...prevPetData,
      [fieldName]: value,
      slug: fieldName === "name" ? value.replace(/\s+/g, "") : prevPetData.slug,
    }));
  };

  const isFormValid = useCallback(() => {
    return (
      petData.name &&
      petData.imageUrl &&
      petData.backgroundURL &&
      petData.description &&
      petData.gender &&
      petData.species
    );
  }, [
    petData.backgroundURL,
    petData.description,
    petData.gender,
    petData.imageUrl,
    petData.name,
    petData.species,
  ]);

  const handleSubmit = useCallback(() => {
    if (isFormValid()) {
      console.log("Dados do formulário:", petData);
      postPet(petData as Pet);
      
    } else {
      alert("Preencha todos os campos antes de criar o pet.");
    }
  }, [isFormValid, petData, postPet]);

  return (
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

      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Adicionar pet</SheetTitle>
          <SheetDescription>
            Adicione um novo pet à sua lista de pets.
          </SheetDescription>
        </SheetHeader>

        <div className="grid w-full gap-4 py-4">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="profile">Foto do perfil</Label>
            <Input
              id="profile"
              type="file"
              value={petData.imageUrl}
              onChange={(e) => onChange("imageUrl", e.target.value)}
            />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="background">Foto de capa</Label>
            <Input
              id="background"
              type="file"
              value={petData.backgroundURL}
              onChange={(e) => onChange("backgroundURL", e.target.value)}
            />
          </div>

          <div className="flex items-center gap-4">
            <Label htmlFor="name" className="min-w-[80px]">
              Nome
            </Label>
            <Input
              id="name"
              value={petData.name}
              onChange={(e) => onChange("name", e.target.value)}
            />
          </div>

          <div className="flex items-center gap-4">
            <Label htmlFor="description" className="min-w-[80px]">
              Descrição
            </Label>
            <Input
              id="description"
              value={petData.description}
              onChange={(e) => onChange("description", e.target.value)}
            />
          </div>

          <div className="flex items-center gap-4">
            <Label htmlFor="gender" className="min-w-[80px]">
              Gênero
            </Label>
            <Input
              id="gender"
              value={petData.gender}
              onChange={(e) => onChange("gender", e.target.value)}
            />
          </div>

          <div className="flex items-center gap-4">
            <Label htmlFor="species" className="min-w-[80px]">
              Espécie
            </Label>
            <Input
              id="species"
              value={petData.species}
              onChange={(e) => onChange("species", e.target.value)}
            />
          </div>
        </div>

        <SheetFooter>
          <Button type="submit" onClick={handleSubmit}>
            Criar pet
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default CreatePet;
