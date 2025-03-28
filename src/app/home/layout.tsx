'use client';
import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../utils/CartContext';
import Modal from '../components/Modal';
import { Cart } from '../components/Cart';

export default function HomeLayout({
  children,
}: {
  auth: React.ReactNode;
  children: React.ReactNode;
}) {
  const { modal } = useContext(CartContext);

  return (
    <div>
      {modal && (
        <Modal>
          <Cart />
        </Modal>
      )}
      {children}
    </div>
  );
}
