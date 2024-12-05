import React from 'react';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import Image from 'next/image';
const CartItemWrapper = () => {
  return (
    <div className="w-full grid grid-cols-2   ">
      <div className="h-full flex justify-center items-center w-full px-3 ">
        <Image src={'/App.png'} alt="cart Image" width={100} height={50} />
      </div>
      <div className="h-full w-full flex py-3 flex-col justify-between text-sm px-3">
        <p>Go Pro Hero 11 250</p>
        <div className="flex justify-between items-center">
          <div className="border  flex border-black px-2 py-1">
            <button>-</button>
            <p className="px-4">1</p>
            <button>-</button>
          </div>
          <IoMdCloseCircleOutline className="text-xs text-red-400" />
        </div>
      </div>
    </div>
  );
};

export default CartItemWrapper;
