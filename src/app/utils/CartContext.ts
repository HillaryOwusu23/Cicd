'use client';
import { createContext } from 'react';
import { Product } from '../../../sanity.types';
export interface Items extends Product {
  quantity: number;
}
export const CartContext = createContext<{
  numberOfItems: Items[];
  modal: boolean;
  chat: boolean;
  setNumberOfItems: React.Dispatch<React.SetStateAction<Items[]>>;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setChat: React.Dispatch<React.SetStateAction<boolean>>;
  handleRemoveItem: (id: string) => void;
  totalPrice: number;
  handlePriceReduction: (id: string) => void;
  handlePriceIncrease: (id: string) => void;
}>({
  numberOfItems: [],
  setNumberOfItems: () => {},
  handleRemoveItem: () => {},
  setModal: () => {},
  setChat: () => {},
  totalPrice: 0,
  modal: false,
  chat: false,
  handlePriceReduction: () => {},
  handlePriceIncrease: () => {},
  setTotalPrice: () => {},
});
