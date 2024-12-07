'use client';

import React, { useState } from 'react';
import { Product } from '../../../sanity.types';
import Image from 'next/image';
import { urlForImage } from '../utils';
import { useContext } from 'react';
import { CartContext } from '../utils/CartContext';

const ImageWrapper = ({ productDetail }: { productDetail: Product }) => {
  const { setNumberOfItems, numberOfItems } = useContext(CartContext);
  const [Items, setItems] = useState<number>(1);
  const [mainImage, setMainImage] = useState<string>(
    urlForImage(productDetail?.images && productDetail?.images[0])?.url()
  );

  const updateImageUrl = (url: any) => {
    setMainImage(urlForImage(url).url()); // Update the main image URL
  };
  const findDuplicate = (array: any, id: string) => {
    return array.some((item: any) => item._id === id);
  };

  return (
    <>
      <div className="w-full h-screen border pt-20 flex justify-center items-center">
        <div className="lg:w-[60%] w-full lg:h-[70%] lg:border-black lg:border-2 h-[80%] grid grid-cols-2">
          {/* Left Section: Main Image and Thumbnails */}
          <div className="lg:col-span-1 border-r border-zinc-500 p-4 col-span-2">
            {/* Main Image */}
            <div className="w-full flex justify-center items-center h-[70%]">
              <Image
                src={mainImage} // Use the mainImage state here
                alt="productImage"
                width={150}
                height={50}
                className="object-cover pb-3 object-center"
              />
            </div>

            {/* Thumbnails */}
            <div className="w-full flex items-center h-[30%]">
              {productDetail.images?.map((item) => (
                <div
                  className="px-1 cursor-pointer"
                  onClick={() => updateImageUrl(item)} // Update the main image on click
                  key={item._key}
                >
                  <Image
                    src={urlForImage(item).url()}
                    alt="productThumbnail"
                    width={50}
                    height={50}
                    className="object-cover pb-3 object-center"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Section: Product Details */}
          <div className="lg:col-span-1 p-4 col-span-2">
            <div className="w-full p-2 flex flex-col justify-around h-[50%]">
              <div>
                <p className="font-bold">{productDetail?.product}</p>
                <p className="text-gray-600 text-sm font-semibold">
                  {productDetail?.price}$
                </p>
              </div>
              <p>{productDetail?.description}</p>
            </div>
            <div className="w-full flex flex-col justify-around lg:p-2 px-2 h-[50%]">
              <div className="w-[50%] flex font-semibold justify-between border-2 lg:p-3 p-2 border-black border-spacing-3">
                <button
                  onClick={() => {
                    setItems((prevCount) => prevCount + 1);
                  }}
                >
                  +
                </button>
                <p>{Items}</p>
                <button
                  disabled={Items === 1}
                  onClick={() => setItems((prevCount) => prevCount - 1)}
                >
                  -
                </button>
              </div>
              <button
                onClick={() => {
                  const check = findDuplicate(numberOfItems, productDetail._id);

                  if (!check) {
                    setNumberOfItems((prev) => [
                      ...prev,
                      { ...productDetail, quantity: Items },
                    ]);
                  }
                }}
                className="w-[50%] border-2 font-semibold lg:p-3 p-2 border-black"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageWrapper;
