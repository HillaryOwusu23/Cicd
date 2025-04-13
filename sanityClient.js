import { createClient } from 'next-sanity';

const config = {
  projectId: '0fa9n2bd', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset name (e.g., 'production')
  useCdn: true, // Use the CDN for fast, cacheable requests
  apiVersion: '2024-11-24',
  stega: {
    studioUrl: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL,
  }, // Use the latest version or specify your API version
};

export const sanityClient = createClient(config);
