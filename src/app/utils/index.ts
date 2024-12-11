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

export const initializeTransaction = async (dataBody: any) => {
  try {
    const response = await fetch('/api/initialize-paystack', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: dataBody.get('email'),
        amount: dataBody.get('amount'), // Amount in kobo
      }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log('Transaction initialized:', data);
      // Redirect user to the Paystack payment URL
      window.location.href = data.ata.authorization_url;
    } else {
      console.error('Error initializing transaction:', data);
    }
  } catch (error) {
    console.error('Unexpected error:', error);
  }
};
