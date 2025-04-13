import React from 'react';
import { Hero } from '../components/Hero';
import { Product } from '../components/Product';
import { productQuery } from '../utils';
import { sanityFetch } from '@/sanity/lib/live';
import { Navbar } from '../components/Navbar';

const HomePage = async (): Promise<React.ReactElement> => {
  const { data: products } = await sanityFetch({
    query: productQuery,
  });

  return (
    <>
      <Navbar />
      <Hero />
      <Product products={products} />
    </>
  );
};
export default HomePage;
