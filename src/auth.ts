import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import GitHub from 'next-auth/providers/github';
import Credentials from 'next-auth/providers/credentials';
import { ZodError } from 'zod';
import { signInSchema } from './app/utils/lib/zod';
import { testUser, User } from './app/utils/lib/users';
import { Awaitable } from "next-auth";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      profile(profile) {
        return { role: profile.role ?? 'user', ...profile };
      },
    }),
    GitHub,
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: { label: 'Email Address', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },

      authorize: async (
        credentials: Partial<Record<'email' | 'password', unknown>>
        , request: Request ): Awaitable<User | null> => {
        try {
          let user = null;

          const { email } = await signInSchema.parseAsync(credentials);

          // logic to verify if the user exists
          user = testUser.find((person) => person.email === email);

          if (!user) {
            throw new Error('Invalid credentials');
          }
          // return JSON object with the user data

          return user;
        } catch (error) {
          if (error instanceof ZodError) {
            throw new Error('Invalid input format.');
          }
          throw error;
        }
      },
    }),
  ],

  // callbacks: {
  //   jwt({ token, user }) {
  //     if (user) {
  //       // User is available during sign-in
  //       token.id = user.id;
  //       token.role = user.role;
  //     }

  //     return token;
  //   },
  //   session({ session, token }) {
  //     if (session.user) {
  //       session.user.id = token.id as string;
  //       session.user.role = token.role as string;
  //     }

  //     return session;
  //   },
  //   authorized: async ({ request: { nextUrl }, auth }) => {
  //     console.log(auth);
      
  //     const role = auth?.user.role || 'user';
  //     const { pathname } = nextUrl;
  //     if (pathname.startsWith('/dashboard') && role !== 'admin') {
  //       return Response.redirect(new URL('/home', nextUrl));
  //     }
  //     // Logged in users are authenticated, otherwise redirect to login page

  //     return !!auth;
  //   },
  // },

  pages: {
    signIn: '/login',
  },
});
