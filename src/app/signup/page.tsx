import { urlForImage, loginQuery } from '../utils';
import Image from 'next/image';
import { sanityFetch } from '@/sanity/lib/live';
import { SignUpForm } from '@/components/sign-up-form';

export default async function LoginPage(): Promise<React.ReactElement> {
  let data = [];
  try {
    const { data: hey } = await sanityFetch({
      query: loginQuery,
    });

    data = hey;
  } catch (error) {
    console.error(error);
  }

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignUpForm />
          </div>
        </div>
      </div>
      <div className="relative inset hidden bg-muted lg:block">
        <Image
          src={urlForImage(
            data?.[0]?.signupImage && data?.[0].signupImage
          ).url()}
          alt="productImage"
          fill
          className="object-cover pb-3 object-center"
        />
      </div>
    </div>
  );
}
