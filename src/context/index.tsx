import React from "react";
import { UserProvider } from "./user";
import { PetProvider } from "./pet";

const AppProvider: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <UserProvider>
      <PetProvider>{children}</PetProvider>
    </UserProvider>
  );
};

export default AppProvider;

interface ChildrenProps {
  children: React.ReactNode;
}
