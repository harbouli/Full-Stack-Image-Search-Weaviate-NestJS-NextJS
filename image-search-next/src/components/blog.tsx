/* eslint-disable @next/next/no-img-element */
import { formatRelative } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { urlFor } from '@/lib/sanity.server';

type Props = {
  title: string;
  postedAt: string;
  image: any;
  slug: {
    current: string;
    _type: string;
  };
};

const BlogComponent = ({ title, postedAt, image, slug }: Props) => {
  const truncate = (str: string, max = 8) => {
    const array = str.trim().split(' ');
    const ellipsis = array.length > max ? '...' : '';

    return array.slice(0, max).join(' ') + ellipsis;
  };
  return (
    <div className=' w-full md:w-2/5 '>
      <Link href={`blog/${slug.current}`} className='flex flex-col gap-7'>
        <div className='h-[1px] w-full bg-slate-500'></div>
        <h1 className='h-36 text-4xl font-normal leading-relaxed tracking-normal text-dark '>
          {truncate(title, 10)}
        </h1>
        <div className='flex w-full justify-end'>
          <p className='mt-5 capitalize  text-gray-500'>
            {formatRelative(new Date(postedAt), new Date())}
          </p>
        </div>
        <Image
          alt={title}
          src={urlFor(image).width(800).height(500).url()}
          width={800}
          height={500}
        />
      </Link>
    </div>
  );
};

export default BlogComponent;
