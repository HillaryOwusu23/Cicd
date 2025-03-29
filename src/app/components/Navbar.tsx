'use client';
import React, { useContext } from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import Link from 'next/link';
import { CartContext } from '../utils/CartContext';
import { googleSignOut } from '@/actions/message.action';

export const Navbar = () => {
  const { numberOfItems, setModal } = useContext(CartContext);

  return (
    <div className="w-full bg-[#ededed] flex fixed z-20 justify-between items-center shadow-lg h-[5rem] spacing  py-2">
      <div className="w-[80%] flex h-full">
        <Link
          href="/home"
          className="h-full w-[20%] flex font-urbanist text-2xl items-center text-neutral-900 font-bold"
        >
          Shop
        </Link>
        <Link
          href="/dashboard"
          className="h-full p-3 flex font-urbanist  items-center text-neutral-900 font-semibold"
        >
          Dashboard
        </Link>
      </div>
      <div className="w-[10%] flex items-center justify-between h-full">
        <button
          onClick={() => {
            setModal(true);
          }}
          className="relative  text-[1.5rem]"
        >
          <FiShoppingBag />
          <span className="absolute font-urbanist  flex justify-center items-center px-[6px] py-[1px] bottom-[9px] left-3 text-yellow-50 text-[11px] jus rounded-full bg-red-600">
            {numberOfItems.length}
          </span>
        </button>

        <button
          onClick={() => {
            googleSignOut();
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};
