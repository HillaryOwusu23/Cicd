'use server';

import { signIn, signOut } from '@/auth';
import { pusherServer } from '@/app/utils/pusher';
import { redirect } from 'next/navigation';

interface chatType {
  message: string;
  id: string;
}
export const sendMessage = async (info: chatType) => {
  try {
    pusherServer.trigger('chat-app', 'upcoming message', {
      message: info?.message,
      id: info?.id,
    });
  } catch (error: any) {
    throw new Error(error);
  }
};

export const googleSignIn = async () => {
  await signIn('google', { redirectTo: '/home' });
};
export const gitHubSignIn = async () => {
  await signIn('github', { redirectTo: '/home' });
};

export const googleSignOut = async () => {
  await signOut();
};

