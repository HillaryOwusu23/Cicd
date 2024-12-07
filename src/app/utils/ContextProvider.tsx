'use client';

import React, { useEffect, useState } from 'react';
import { CartContext } from './CartContext';
import { Items } from './CartContext';
const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [numberOfItems, setNumberOfItems] = useState<Items[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const newTotal = numberOfItems.reduce(
      (sum, item) => sum + (item.quantity || 0) * (item.price || 0),
      0
    );
    setTotalPrice(newTotal);
  }, [numberOfItems]);

  const handlePriceReduction = (id: string): void => {
    const item = numberOfItems.find((item) => item._id === id);
    if (item) {
      const reductionAmount = item.price || 0;
      setTotalPrice((prev) => Math.max(prev - reductionAmount, 0));
    }
  };
  const handlePriceIncrease = (id: string): void => {
    const item = numberOfItems.find((item) => item._id === id);
    if (item) {
      const reductionAmount = item.price || 0;
      setTotalPrice((prev) => Math.max(prev + reductionAmount, 0));
    }
  };

  const handleRemoveItem = (id: string) => {
    const filteredData = numberOfItems.filter((item) => item._id !== id);
    setNumberOfItems(filteredData);
  };

  return (
    <CartContext.Provider
      value={{
        setNumberOfItems,
        numberOfItems,
        handleRemoveItem,
        handlePriceReduction,
        handlePriceIncrease,
        totalPrice,
        setTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
