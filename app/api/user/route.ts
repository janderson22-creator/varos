// pages/api/user/route.ts

import type { NextApiRequest, NextApiResponse } from 'next';

interface FormData {
  name: string;
  email: string;
  cellphone: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const formData: FormData = req.body;

      const apiResponse = await fakeApiPost(formData);

      res.status(200).json(apiResponse);
    } catch (error) {
      console.error('Error handling POST request:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

async function fakeApiPost(formData: FormData) {
  console.log('Posting to imaginary API:', formData);
  return { message: 'Post successful!' };
}
