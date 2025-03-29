'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <div className="spacing w-full flex justify-center items-center lg:h-[40.5rem] md:h-[32.5rem]   h-[20rem] ">
      <motion.div
        initial={{ x: -1200 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="relative "
      >
        <Image src={'/Air_Pods.png'} alt="banner" width={1400} height={100} />
      </motion.div>
      <motion.div
        initial={{ y: -700 }}
        animate={{ y: -110 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute lg:top-[27.5rem] md:top-[23rem] sm:top-[10rem] top-[16.5rem]"
      >
        <Image
          src={'/Pods.png'}
          alt="banner"
          priority
          width={700}
          height={100}
        />
      </motion.div>
    </div>
  );
};
