import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'f6km7cno',
  dataset: 'production', // or your dataset name
  apiVersion: '2024-07-16', // use a UTC date in YYYY-MM-DD format
  useCdn: true, // `false` if you want to ensure fresh data
  // token: 'YOUR_READ_ONLY_API_TOKEN', // uncomment and add your token if you have one
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
