'use client';
import React from 'react';
import { useSession } from 'next-auth/react';

const Page = () => {
  const session = useSession();
  console.log(session);

  return <div className='pt-52'>
    jkjkjkjkjkjk 
  </div>;
};

export default Page;
