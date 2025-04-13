import { signUpSchema } from '@/lib/zod';

export const signUpAction = async (prevState, formData: FormData) => {
  const username = formData.get('username');
  const password = formData.get('password');
  const email = formData.get('email');
  const confirmPassword = formData.get('confirmPassword');

  const validation = signUpSchema.safeParse({
    username,
    password,
    email,
    confirmPassword,
  });
  if (validation.success === true) {
    return {
      success: 'Signed Up was successful',
      username,
      password,
      email,
    };
  } else {
    const findError = (name: string) => {
      return validation.error.issues.find((item) => item.path[0] === name)
        ?.message;
    };

    return {
      username: findError('username'),
      password: findError('password'),
      email: findError('email'),
      confirmPassword: findError('confirmPassword'),
      success: false,
    };
  }

  return prevState;
};
