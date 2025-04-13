import { z } from 'zod';

export const loginSchema = z.object({
  password: z
    .string()
    .min(8, 'Please min should be 8 characters')
    .max(30, 'Please max should be 30 characters'),
  email: z.string().email('Please enter correct email'),
});

export const signUpSchema = z
  .object({
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    confirmPassword: z.string(),
    email: z.string().email('Please enter correct email'),
    username: z
      .string()
      .max(50, 'Please must be at most 50 characters')
      .trim()
      .min(3, 'Password must be at least 3 characters long'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });
