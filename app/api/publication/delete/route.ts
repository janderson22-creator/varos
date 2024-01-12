import { PrismaClient } from "@prisma/client";

export async function DELETE(request: Request) {
  const prisma = new PrismaClient();
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("postId");

  if (!id) {
    return new Response("postId are required fields.", {
      status: 400,
    });
  }

  const post = await prisma.post.delete({
    where: {
      id: id,
    },
  });

  return Response.json({ post });
}
