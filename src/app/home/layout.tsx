import React from 'react';
import { Navbar } from '../components/Navbar';
export default function HomeLayout({
  auth,
  children,
}: {
  auth: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      {auth}
      {children}
    </div>
  );
}
