import PusherServer from 'pusher';
import Pusher from 'pusher-js';

export const pusherServer = new PusherServer({
  appId: process.env.NEXT_PUBLIC_APP_ID!,
  key: process.env.NEXT_PUBLIC_KEY!,
  secret: process.env.SECRET!,
  cluster: process.env.NEXT_PUBLIC_CLUSTER!,
});

export const pusherClient = new Pusher(process.env.NEXT_PUBLIC_KEY!, {
  cluster: process.env.NEXT_PUBLIC_CLUSTER!,
});
