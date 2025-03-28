export type User = {
    id: string;
    email: string;
    password: string;
    role?: string; // Optional role
  };
  export const testUser:User[] = [
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
      role: 'user',
    },
  ];