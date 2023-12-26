import { PrismaClient } from "@prisma/client";

export async function GET(request: Request) {
  const prisma = new PrismaClient();
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");

  if (!email) {
    return new Response("Email are required fields.", {
      status: 400,
    });
  }

  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  return Response.json(user);
}
