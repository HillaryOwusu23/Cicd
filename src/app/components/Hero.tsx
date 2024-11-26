import React from 'react';
import Image from 'next/image';

export const Hero = () => {
  return (
    <div className="spacing w-full flex justify-center items-center lg:h-[32.5rem] md:h-[15.5rem] h-[11rem] ">
      <div className="relative">
        <Image src={'/Air_Pods.png'} alt="banner" width={1400} height={100} />
      </div>
      <div className="absolute lg:top-[22rem] md:top-[12rem] top-[10rem]">
        <Image src={'/Pods.png'} alt="banner" width={700} height={100} />
      </div>
    </div>
  );
};
