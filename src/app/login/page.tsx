import React from 'react';
import { LoginPage } from '../components/Login';
import Image from 'next/image';
const Page = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/robot.jpg" // Replace with the path to your image
          alt="Futuristic Robot"
          layout="fill"
          objectFit="cover"
          className=""
        />
      </div>
      <LoginPage />;
    </div>
  );
};

export default Page;
