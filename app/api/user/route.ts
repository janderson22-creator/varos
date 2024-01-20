export async function POST(request: Request) {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', {
      status: 405,
    });
  }

  const data = await request.json();
  const requiredFields = [
    "name",
    "email",
    "cellphone",
  ];

  for (const field of requiredFields) {
    if (!data[field]) {
      return new Response(`${field} is a required field.`, {
        status: 400,
      });
    }
  }

  // Simulando a criação do recurso (pet)
  const pet = {
    name: data.name,
    email: data.email,
    cellphone: data.cellphone,
  };

  return new Response(JSON.stringify({ pet }), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
