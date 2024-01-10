"use client";
import { Post as PostType } from "@prisma/client";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import DropdownPost from "./dropdown-post";

interface Props {
  post: PostType;
}

const Post: React.FC<Props> = ({ post }) => {
  return (
    <div className="px-3 py-4">
      <div className="flex gap-3">
        <Avatar>
          <AvatarFallback>{post.namePet.toUpperCase()}</AvatarFallback>
          {post.imageUrl && <AvatarImage src={post.imageUrl} />}
        </Avatar>

        <div className="flex flex-col">
          <p className="text-base font-medium">{post.namePet}</p>
          <p className="text-xs opacity-60">@{post.slug}</p>
        </div>

        <DropdownPost />
      </div>

      <div className="mt-3">
        <p className="text-sm">{post.text}</p>
      </div>
    </div>
  );
};

export default Post;
