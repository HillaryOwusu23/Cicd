import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import ContextProvider from './utils/ContextProvider';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';
import { Navbar } from './components/Navbar';
const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
  session,
}: Readonly<{
  children: React.ReactNode;
  session?: Session | null;
}>) {
  return (
    <html lang="en">
      <SessionProvider session={session}>
        <ContextProvider>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <Navbar />
            {children}
          </body>
        </ContextProvider>
      </SessionProvider>
    </html>
  );
}
