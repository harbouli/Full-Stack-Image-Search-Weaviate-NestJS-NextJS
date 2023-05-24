import { useRouter } from 'next/router';
import React from 'react';

import clsxm from '@/lib/clsxm';

// type Props = {}

const GoBack = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      color='white'
      className={clsxm(
        'fixed bottom-3 right-3 z-10 h-20 w-20 rounded-full px-1 text-sm font-bold drop-shadow-xl md:h-32 md:w-32 md:text-2xl ',
        'inline   bg-white   font-bold text-dark drop-shadow-xl  transition-colors duration-500 hover:bg-slate-200 '
      )}
    >
      Go Back
    </button>
  );
};

export default GoBack;
