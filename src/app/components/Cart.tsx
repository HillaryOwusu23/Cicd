'use client';
import { AiOutlineLeft } from 'react-icons/ai';
import React from 'react';
import { useRouter } from 'next/navigation';

import CartItemWrapper from './CartItemWrapper';
export const Cart = () => {
  const router = useRouter();

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg lg:w-5/12  max-w-md">
      <h2
        onClick={() => {
          router.back();
        }}
        className="text-md font-bold flex items-center  mb-4"
      >
        <AiOutlineLeft className="text-xs" /> <p className="ml-2">Your Cart</p>
      </h2>
      <div className="w-full">
        <CartItemWrapper />
      </div>
      <div className="pt-6 text-sm flex justify-between">
        <p>Subtotal</p>
        <p>$203</p>
      </div>
      <button className="px-4 py-2  border-2 border-black rounded w-full text-black hover:bg-neutral-100">
        Pay with stripe
      </button>
    </div>
  );
};
