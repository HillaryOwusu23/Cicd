import ImageWrapper from '@/app/components/ImageWrapper';
import { productType } from '@/app/utils';
import { Product as ProductType } from '../../../../sanity.types';
import ChatComponent from '@/app/components/chat';
import { ToggleChart } from '@/app/components/ToggleChart';
import { decrypt } from '@/app/lib/session';
import { cookies } from 'next/headers';

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const products = await productType();
  const slug = (await params).slug;
  const cookie = await cookies();
  const jwtToken = cookie.get('session')?.value;

  const session = await decrypt(jwtToken);

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
        <ChatComponent id={session?.userId as string} />
        <ToggleChart />
      </div>
    </div>
  );
};

export default Page;
