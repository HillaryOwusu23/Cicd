'use client';
import React from 'react';
import { CartContext } from '../utils/CartContext';
import { useContext } from 'react';
export const ToggleChart = () => {
  const { setChat } = useContext(CartContext);

  return (
    <div
      className="w-16 h-16 fixed bottom-[0.4rem] right-[0.4rem] text-white flex cursor-pointer justify-center items-center bg-slate-600 rounded-full"
      onClick={() => setChat((prev) => !prev)}
    >
      chat
    </div>
  );
};
