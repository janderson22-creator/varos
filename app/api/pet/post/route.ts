import { PrismaClient } from "@prisma/client";

export async function POST(request: Request) {
  const prisma = new PrismaClient();
  const data = await request.json();
  const requiredFields = [
    "name",
    "slug",
    "imageUrl",
    "backgroundURL",
    "description",
    "gender",
    "species",
    "userId",
  ];

  for (const field of requiredFields) {
    if (!data[field]) {
      return new Response(`${field} is a required field.`, {
        status: 400,
      });
    }
  }

  const pet = await prisma.pet.create({
    data: {
      name: data.name,
      slug: data.slug,
      imageUrl: data.imageUrl,
      backgroundURL: data.backgroundURL,
      description: data.description,
      gender: data.gender,
      species: data.species,
      userId: data.userId,
    },
  });

  return new Response(JSON.stringify({ pet }), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
