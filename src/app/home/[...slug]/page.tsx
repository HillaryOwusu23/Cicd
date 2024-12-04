// Ensure this component is client-side
import ImageWrapper from '@/app/components/ImageWrapper';
import { productType } from '@/app/utils';
import { Product as ProductType } from '../../../../sanity.types';

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const products = await productType();
  const slug = (await params).slug;

  const productDetail = products.find(
    (item: ProductType) => item?.slug?.current === slug[0]
  );

  return <ImageWrapper productDetail={productDetail} />;
};

export default Page;
