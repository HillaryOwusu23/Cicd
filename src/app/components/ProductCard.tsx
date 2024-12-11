import React from 'react';
import Image from 'next/image';
import { urlForImage } from '../utils';
import { Product as ProductType } from '../../../sanity.types';
import Link from 'next/link';

export const ProductCard = ({ products }: { products: ProductType[] }) => {
  return (
    <>
      {products?.map((item: ProductType) => {
        return (
          <Link
            key={item._id}
            href={`/home/${item?.slug?.current}`}
            className="lg:p-6 flex flex-col justify-between items-center w-full lg:h-[20rem]  rounded-sm bg-white shadow-md "
          >
            <div className="w-full items-center  flex justify-center h-[75%]     ">
              <Image
                src={urlForImage(item.images && item.images[0]).url()}
                alt="productImage"
                width={150}
                height={50}
                className="object-cover pb-3 object-center"
              />
            </div>
            <div className="w-full flex flex-col  items-center justify-center  h-[17%]">
              <h4 className="font-semibold text-black">{item.product}</h4>
              <p>${item.price}</p>
            </div>
          </Link>
        );
      })}
    </>
  );
};
