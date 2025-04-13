import { loginSchema } from '@/lib/zod';
interface ILoginState {
  email: string | null;
  password: string | null;
  message: string;
  success: boolean;
}
export const loginAction = async (
  _prevState: ILoginState,
  formData: FormData
) => {
  const email = formData.get('email') as string | null;
  const password = formData.get('password') as string | null;

  const data = loginSchema.safeParse({ email, password });

  if (data.success) {
    return {
      email,
      password,
      message: 'Signed in successfully',
      success: true,
    };
  } else {
    return {
      email: data.error.issues[1]?.message || '',
      password: data.error.issues[0]?.message || '',
      message: 'Sign-in unsuccessful',
      success: false,
    };
  }
};
