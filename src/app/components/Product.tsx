import React from 'react';
import { ProductCard } from './ProductCard';

export const Product = (): React.ReactElement => {
  return (
    <div className="w-full lg:h-[30rem] bg-[#DCDCDC]">
      <div className="w-full lg:h-[20%] h-[6rem] flex-col flex justify-center  spacing">
        <p className="font-bold  text-[20px]"> Best Selling Products</p>
        <p className=" text-[13px]">Up to 50% percent off</p>
      </div>
      <div className="spacing w-full lg:h-[80%]   items-center grid lg:grid-cols-4  gap-4 ">
        <ProductCard />
      </div>
    </div>
  );
};
