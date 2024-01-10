"use client";

import { Post } from "@prisma/client";
import axios from "axios";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type ContextValue = {
  postPublication: (data: Post) => Promise<void>;
  fetchPublications: () => Promise<void>;
  posts:
    | {
        id: string;
        text: string;
        namePet: string;
        imageUrl: string;
        slug: string;
        likes: number;
        createdAt: Date;
        petId: string;
      }[]
    | undefined;
};

export const PostContext = React.createContext<ContextValue | undefined>(
  undefined,
);

export const PostProvider: React.FC<ChildrenProps> = ({
  children,
  ...rest
}) => {
  const [posts, setPosts] = useState<Post[]>();
  const [loading, setLoading] = useState(false);

  const postPublication = useCallback(async (data: Post) => {
    try {
      const response = await axios.post(`/api/publication/post`, data);

      console.log(response);
      setPosts((prevPosts) => [
        ...(prevPosts || []),
        response.data.publication,
      ]);
    } catch (error) {
      console.error("Error to get post:", error);
    }
  }, []);

  const fetchPublications = useCallback(async () => {
    try {
      const response = await axios.get(`/api/publication/get`);
      const data = response.data.posts;

      setPosts(data);
    } catch (error) {
      console.error("Error to get post:", error);
    }
  }, []);

  useEffect(() => {
    fetchPublications();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = useMemo(
    () => ({ postPublication, fetchPublications, posts }),
    [postPublication, fetchPublications, posts],
  );

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
