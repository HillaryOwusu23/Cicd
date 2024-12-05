'use client';

import React from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/50">
          {children}
        </div>,
        document.body
      )}
    </>
  );
};

export default Modal;
