'use client';
import { AiOutlineLeft } from 'react-icons/ai';
import React, { useContext } from 'react';
import CartItemWrapper from './CartItemWrapper';
import { CartContext } from '../utils/CartContext';
import { Items } from '../utils/CartContext';
export const Cart = () => {
  const { numberOfItems, totalPrice, setModal } = useContext(CartContext);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg lg:w-5/12  max-w-md">
      <h2
        onClick={() => {
          setModal(false);
        }}
        className="text-md font-bold flex items-center  mb-4"
      >
        <AiOutlineLeft className="text-xs cursor-pointer " />{' '}
        <p className="ml-2">Your Cart</p>
      </h2>
      <div className="w-full ">
        {numberOfItems?.map((item: Items) => {
          return (
            <div className="w-full my-5" key={item._id}>
              <CartItemWrapper props={item} />
            </div>
          );
        })}
      </div>
      <div className="pt-6 text-sm flex justify-between">
        <p>Subtotal</p>
        <p>${totalPrice}</p>
      </div>
      <button className="px-4 py-2  border-2 border-black rounded w-full text-black hover:bg-neutral-100">
        Pay with stripe
      </button>
    </div>
  );
};
