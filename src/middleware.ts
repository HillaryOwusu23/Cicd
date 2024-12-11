import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { decrypt } from './app/lib/session';

const protectedRoute = ['/dashboard', '/home'];
const publicRoutes = ['/login'];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isPrivate = protectedRoute.includes(path);
  const isPublic = publicRoutes.includes(path);
  const cookie = await cookies();
  const jwtToken = cookie.get('session')?.value;

  const session = await decrypt(jwtToken);

  if (isPrivate && !session?.userId) {
    return NextResponse.redirect(new URL('/login', req.nextUrl));
  }
  if (isPublic && session?.userId) {
    return NextResponse.redirect(new URL('/home', req.nextUrl));
  }

  return NextResponse.next();
}
