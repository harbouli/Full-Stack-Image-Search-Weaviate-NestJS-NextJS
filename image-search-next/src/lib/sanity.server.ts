import createImageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const urlFor = (source: SanityImageSource) =>
  createImageUrlBuilder({
    projectId: 'pnfdzjxa',
    dataset: 'production',
  }).image(source);
