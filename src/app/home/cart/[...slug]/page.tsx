import React from 'react';
import { Cart } from '@/app/components/Cart';
const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;

  return (
    <div className="flex h-screen justify-center items-center">
      {slug}
      <Cart />
    </div>
  );
};

export default Page;
