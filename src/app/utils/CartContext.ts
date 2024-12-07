'use client';
import { createContext } from 'react';
import { Product } from '../../../sanity.types';
export interface Items extends Product {
  quantity: number;
}
export const CartContext = createContext<{
  numberOfItems: Items[];

  setNumberOfItems: React.Dispatch<React.SetStateAction<Items[]>>;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
  handleRemoveItem: (id: string) => void;
  totalPrice: number;
  handlePriceReduction: (id: string) => void;
  handlePriceIncrease: (id: string) => void;
}>({
  numberOfItems: [],
  setNumberOfItems: () => {},
  handleRemoveItem: () => {},
  totalPrice: 0,
  handlePriceReduction: () => {},
  handlePriceIncrease: () => {},
  setTotalPrice: () => {},
});
