import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import Link from 'next/link';
export const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center shadow-lg h-[5rem] spacing  py-2">
      <Link
        href="/"
        className="h-full flex font-urbanist text-2xl items-center text-neutral-900 font-bold"
      >
        Shop
      </Link>
      <button className=" relative  text-[1.5rem]">
        <FiShoppingBag />
        <span className="absolute font-urbanist  flex justify-center items-center px-[6px] py-[1px] bottom-[9px] left-3 text-yellow-50 text-[11px] jus rounded-full bg-red-600">
          3
        </span>
      </button>
    </div>
  );
};
