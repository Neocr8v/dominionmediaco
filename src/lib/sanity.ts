import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-07-16', // use a UTC date in YYYY-MM-DD format
  useCdn: true, // `false` if you want to ensure fresh data
  token: process.env.SANITY_API_TOKEN, // or leave blank for public datasets
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
