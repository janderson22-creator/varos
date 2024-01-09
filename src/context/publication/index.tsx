"use client";

import { Post } from "@prisma/client";
import axios from "axios";
import React, { useCallback, useContext, useMemo, useState } from "react";

export type ContextValue = {
    postPublication: (data: Post) => Promise<void>
};

export const PostContext = React.createContext<ContextValue | undefined>(
  undefined,
);

export const PostProvider: React.FC<ChildrenProps> = ({
  children,
  ...rest
}) => {
  const [loading, setLoading] = useState(false);

  const postPublication = useCallback(async (data: Post) => {
    try {
      const response = await axios.post(`/api/publication/post`, data);

      console.log(response);
    } catch (error) {
      console.error("Error to get post:", error);
    }
  }, []);

  const value = useMemo(() => ({ postPublication }), [postPublication]);

  return (
    <PostContext.Provider value={value} {...rest}>
      {children}
    </PostContext.Provider>
  );
};

export const UsePost = (): ContextValue => {
  const context = useContext(PostContext);

  if (context === undefined) {
    throw new Error("usePost must be used");
  }

  return context;
};

//
// Utils
//

interface ChildrenProps {
  children: React.ReactNode;
}
