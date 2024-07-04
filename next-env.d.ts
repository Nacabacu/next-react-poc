/// <reference types="next" />
/// <reference types="next/image-types/global" />

import { BusinessData } from '@/types/business';

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.
declare global {
  interface Window {
    __INITIAL_DATA__: {
      business: BusinessData;
    };
  }
}