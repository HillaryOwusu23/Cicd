import ImageWrapper from '@/app/components/ImageWrapper';
import { productQuery } from '@/app/utils';
import { Product as ProductType } from '../../../../sanity.types';
import ChatComponent from '@/app/components/chat';
import { ToggleChart } from '@/app/components/ToggleChart';
import { sanityFetch } from '@/sanity/lib/live';

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { data: products } = await sanityFetch({
    query: productQuery,
  });

  const slug = (await params).slug;

  const productDetail = products.find(
    (item: ProductType) => item?.slug?.current === slug[0]
  );

  return (
    <div
      className="relative"
      style={{
        msOverflowStyle: 'none', // For Internet Explorer and Edge
        scrollbarWidth: 'none', // For Firefox
        overflow: 'hidden', // Hide unwanted scrollbars
      }}
    >
      <ImageWrapper productDetail={productDetail} />

      {/* Floating Chat and Toggle Chart */}
      <div className="absolute right-1 flex flex-col gap-4 items-end bottom-[9rem] z-20">
        <ChatComponent />
        <ToggleChart />
      </div>
    </div>
  );
};

export default Page;
