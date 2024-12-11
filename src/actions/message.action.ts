'use server';

import { pusherServer } from '@/app/utils/pusher';

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
