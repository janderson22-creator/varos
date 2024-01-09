import React from "react";
import { UserProvider } from "./user";
import { PetProvider } from "./pet";
import { PostProvider } from "./publication";

const AppProvider: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <UserProvider>
      <PetProvider>
        <PostProvider>{children}</PostProvider>
      </PetProvider>
    </UserProvider>
  );
};

export default AppProvider;

interface ChildrenProps {
  children: React.ReactNode;
}
