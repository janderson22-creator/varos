import { PrismaClient } from "@prisma/client";

export async function GET(request: Request) {
  const prisma = new PrismaClient();
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("userId");

  if (!id) {
    return new Response("userId are required fields.", {
      status: 400,
    });
  }

  const pets = await prisma.pet.findMany({
    where: {
      userId: id,
    },
  });

  return Response.json({ pets });
}
