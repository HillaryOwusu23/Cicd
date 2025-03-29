'use client';

import React, { useContext } from 'react';
import { initializeTransaction } from '../utils';

import Image from 'next/image';
import { urlForImage } from '../utils';
import { CartContext } from '../utils/CartContext';

const CheckoutComponent = () => {
  const { numberOfItems, totalPrice } = useContext(CartContext);
  const data = numberOfItems.map((item) => {
    return (
      <div className="w-full h-[60%] py-4 flex justify-center" key={item._id}>
        <Image
          src={urlForImage(item?.images && item?.images[0]).url()}
          alt="cart Image"
          width={100}
          height={50}
        />
      </div>
    );
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2">
        {/* Product Details Section */}
        <div className="p-6 border-r border-gray-200">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Your List Of Items
          </h2>
          <div className="text-gray-600">
            {' '}
            <p>${totalPrice}</p>
          </div>
          <div
            className="mt-6 h-[18rem] overflow-y-scroll"
            style={{
              msOverflowStyle: 'none', // For Internet Explorer and Edge
              scrollbarWidth: 'none', // For Firefox
            }}
          >
            {data}
          </div>
        </div>

        {/* Payment Form Section */}
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Pay with Paystack
          </h2>
          <form action={initializeTransaction}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="customer@email.com"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="card-info"
                className="block text-sm font-medium text-gray-600"
              >
                Amount
              </label>
              <div className="grid grid-cols-12 gap-2 mt-1">
                <input
                  name="amount"
                  type="text"
                  defaultValue={totalPrice}
                  className="col-span-12 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="5000"
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="cardholder-name"
                className="block text-sm font-medium text-gray-600"
              >
                Cardholder name
              </label>
              <input
                type="text"
                id="cardholder-name"
                className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Full name on card"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-600"
              >
                Country or region
              </label>
              <select
                id="country"
                className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="Ghana">Ghana</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                {/* Add more countries as needed */}
              </select>
            </div>

            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="save-info"
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label htmlFor="save-info" className="ml-2 text-sm text-gray-600">
                Securely save my information for 1-click checkout
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Pay
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutComponent;
