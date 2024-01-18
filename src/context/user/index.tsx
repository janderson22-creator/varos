"use client";

import axios from "axios";
import React, { useCallback, useContext, useMemo } from "react";

export type ContextValue = {
  postUser: (data: FormData) => Promise<void>;
};

export const UserContext = React.createContext<ContextValue | undefined>(
  undefined,
);

export const UserProvider: React.FC<ChildrenProps> = ({
  children,
  ...rest
}) => {
  const postUser = useCallback(async (data: FormData) => {
    try {
      const response = await axios.post("/api/user", data);
      console.log(response.data);
    } catch (error) {
      console.error("Error posting user:", error);
    }
  }, []);

  const value = useMemo(() => ({ postUser }), [postUser]);

  return (
    <UserContext.Provider value={value} {...rest}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): ContextValue => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUser must be used within an CommerceProvider");
  }

  return context;
};

//
// Utils
//

interface ChildrenProps {
  children: React.ReactNode;
}

interface FormData {
  name: string;
  email: string;
  cellphone: string;
}
