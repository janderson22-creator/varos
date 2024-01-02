"use client";

import { Pet, User } from "@prisma/client";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useUser } from "../user";

export type ContextValue = {
  postPet: (petData: Pet) => Promise<void>;
  pets:
    | {
        id: string;
        name: string;
        slug: string;
        imageUrl: string;
        backgroundURL: string;
        description: string;
        userId: string;
      }[]
    | undefined;
  setCurrentPet: React.Dispatch<
    React.SetStateAction<
      | {
          id: string;
          name: string;
          slug: string;
          imageUrl: string;
          backgroundURL: string;
          description: string;
          gender: string;
          species: string;
          userId: string;
        }
      | undefined
    >
  >;
  currentPet:
    | {
        id: string;
        name: string;
        slug: string;
        imageUrl: string;
        backgroundURL: string;
        description: string;
        gender: string;
        species: string;
        userId: string;
      }
    | undefined;
  loadingPets: boolean;
};

export const PetContext = React.createContext<ContextValue | undefined>(
  undefined,
);

export const PetProvider: React.FC<ChildrenProps> = ({ children, ...rest }) => {
  const { user } = useUser();
  const [pets, setPets] = useState<Pet[]>();
  const [currentPet, setCurrentPet] = useState<Pet>();
  const [loadingPets, setLoadingPets] = useState<boolean>(false);

  const fetchPets = useCallback(async () => {
    setLoadingPets(true);
    try {
      const response = await axios.get(`/api/pet/get?userId=${user?.id}`);
      setPets(response.data.pets);
    } catch (error) {
      console.error("Error to get pets:", error);
    } finally {
      setLoadingPets(false);
    }
  }, [user?.id]);

  const postPet = useCallback(async (petData: Pet) => {
    try {
      const response = await axios.post(`/api/pet/post`, petData);

      console.log(response);
    } catch (error) {
      console.error("Erro ao criar pet:", error);
    }
  }, []);

  useEffect(() => {
    if (!user?.id) return;

    fetchPets();
  }, [fetchPets, user?.id]);

  const value = useMemo(
    () => ({ setCurrentPet, currentPet, pets, loadingPets, postPet }),
    [setCurrentPet, currentPet, pets, loadingPets, postPet],
  );

  return (
    <PetContext.Provider value={value} {...rest}>
      {children}
    </PetContext.Provider>
  );
};

export const usePet = (): ContextValue => {
  const context = useContext(PetContext);

  if (context === undefined) {
    throw new Error("usePet must be used within an CommerceProvider");
  }

  return context;
};

//
// Utils
//

interface ChildrenProps {
  children: React.ReactNode;
}
