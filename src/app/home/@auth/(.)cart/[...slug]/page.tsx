import React from 'react';
import { Cart } from '@/app/components/Cart';
import Modal from '@/app/components/Modal';
const Page = () => {
  return (
    <>
      <Modal>
        <Cart />
      </Modal>
    </>
  );
};
export default Page;
