import React from 'react';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import Image from 'next/image';
import { urlForImage } from '../utils';
import { CartContext } from '../utils/CartContext';
import { useContext } from 'react';
import { useState } from 'react';
const CartItemWrapper = ({ props }: any) => {
  const [quantity, setQuantity] = useState(props.quantity);
  const { handleRemoveItem, handlePriceReduction, handlePriceIncrease } =
    useContext(CartContext);

  return (
    <div key={props?._id} className="w-full grid grid-cols-2   ">
      <div className="h-full flex justify-center items-center w-full px-3 ">
        <Image
          src={urlForImage(props.images[0]).url()}
          alt="cart Image"
          width={100}
          height={50}
        />
      </div>
      <div className="h-full w-full flex py-3 flex-col justify-between text-sm px-3">
        <p>{props.product}</p>
        <p>${props.price}</p>
        <div className="flex justify-between items-center">
          <div className="border  flex border-black px-2 py-1">
            <button
              disabled={quantity === 1}
              onClick={() => {
                setQuantity((prev: number) => prev - 1);
                handlePriceReduction(props?._id);
              }}
            >
              -
            </button>
            <p className="px-4">{quantity}</p>
            <button
              onClick={() => {
                handlePriceIncrease(props?._id);
                setQuantity((prev: number) => prev + 1);
              }}
            >
              +
            </button>
          </div>
          <IoMdCloseCircleOutline
            onClick={() => handleRemoveItem(props?._id)}
            className="text-xs text-red-400"
          />
        </div>
      </div>
    </div>
  );
};

export default CartItemWrapper;
