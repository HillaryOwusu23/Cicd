'use server';
import { createSession, deleteSession } from '@/app/lib/session';
import { redirect } from 'next/navigation';
import { z } from 'zod';
const testUser = [
  {
    id: '1',
    email: 'hillary@gmail.com',
    password: '123456789',
    role: 'admin',
  },
  {
    id: '2',
    email: 'hillary1@gmail.com',
    password: '1234567890',
  },
];
const userSchema = z.object({
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' })
    .trim(),
  email: z.string().email({ message: 'Invalid email address' }),
});

export const loginHandler = async (prevState: any, formData: FormData) => {
  const result = userSchema.safeParse(Object.fromEntries(formData));
  if (!result.success) {
    return {
      error: result.error.flatten().fieldErrors,
    };
  }

  const { email, password } = result.data;
  const user = testUser.find((person) => person.email === email);

  if (email !== user?.email && password !== user?.password) {
    return {
      error: {
        email: ['Kindly check your email and password'],
      },
    };
  }
  await createSession(user?.id);

  redirect('/home');
};

export const logOutHandler = async () => {
  deleteSession();
  redirect('/login');
};
