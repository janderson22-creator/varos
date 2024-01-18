import React from "react";
import { UserProvider } from "./user";

const AppProvider: React.FC<ChildrenProps> = ({ children }) => {
  return <UserProvider>{children}</UserProvider>;
};

export default AppProvider;

interface ChildrenProps {
  children: React.ReactNode;
}
