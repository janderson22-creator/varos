import { PrismaClient } from "@prisma/client";

export async function DELETE(request: Request) {
  const prisma = new PrismaClient();
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("petId");

  if (!id) {
    return new Response("petId are required fields.", {
      status: 400,
    });
  }

  const deleteUser = await prisma.pet.delete({
    where: {
      id: id,
    },
  })

  return Response.json( deleteUser );
}
