import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import { cache } from 'react';
import imageUrlBuilder from '@sanity/image-url';
import { sanityClient } from '../../../sanityClient';

export const productType = cache(async () => {
  const data = await client.fetch(groq`*[_type=='product']`);

  return data;
});

const builder = imageUrlBuilder(sanityClient);

export function urlForImage(source: any) {
  return builder.image(source);
}
