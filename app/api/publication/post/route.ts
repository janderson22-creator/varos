import { PrismaClient } from "@prisma/client";

export async function POST(request: Request) {
  const prisma = new PrismaClient();
  const data = await request.json();

  const requiredFields = ["text", "namePet", "slug", "imageUrl", "petId"];

  for (const field of requiredFields) {
    if (!data[field]) {
      return new Response(`${field} is a required field.`, {
        status: 400,
      });
    }
  }

  const publication = await prisma.post.create({
    data: {
      text: data.text,
      namePet: data.namePet,
      imageUrl: data.imageUrl,
      slug: data.slug,
      likes: data.likes,
      petId: data.petId,
    },
  });

  return new Response(JSON.stringify({ publication }), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
