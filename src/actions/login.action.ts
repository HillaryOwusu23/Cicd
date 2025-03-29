'use server';
import { signInSchema } from '@/app/utils/lib/zod';
import { signIn } from '@/auth';

export const loginHandler = async (prevState: any, formData: FormData) => {
  const { data, success, error } = signInSchema.safeParse(
    Object.fromEntries(formData)
  );

  if (!success) {
    return {
      error: error.flatten().fieldErrors,
    };
  }

  const res = await signIn('credentials', {
    redirect: false,
    callbackUrl: '/home',
    email: data.email,
    password: data.password,
  });

  if (!res || !res.ok) {
    console.log('Sign-in failed:', res);
  }
};
