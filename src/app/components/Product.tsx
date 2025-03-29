'use client';
import React from 'react';
import { ProductCard } from './ProductCard';

import { Product as ProductType } from '../../../sanity.types';
export const Product = ({
  products,
}: {
  products: ProductType[];
}): React.ReactElement => {
  return (
    <div className="w-full py-8 bg-[#DCDCDC]">
      <div className="w-full lg:h-[4rem] h-[4rem] flex-col flex justify-center  spacing">
        <p className="font-bold  text-[20px]"> Best Selling Products</p>
        <p className=" text-[13px]">Up to 50% percent off</p>
      </div>
      <div className="spacing w-full lg:h-[80%]   items-center grid lg:grid-cols-4  gap-4 ">
        <ProductCard products={products} />
      </div>
    </div>
  );
};
