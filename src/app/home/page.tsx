import React from 'react';
import { Hero } from '../components/Hero';
import { Product } from '../components/Product';
import { productType } from '../utils';

const HomePage = async (): Promise<React.ReactElement> => {
  const products = await productType();

  return (
    <>
      <Hero />
      <Product products={products} />
    </>
  );
};
export default HomePage;
