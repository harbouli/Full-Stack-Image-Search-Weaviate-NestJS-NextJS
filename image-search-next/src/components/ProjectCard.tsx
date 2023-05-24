import clsx from 'clsx';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export type ProjectCardsProps = {
  title?: string;
  image: string | any;
  description?: string;
  slug?: string;
  blurDataURL: string;
};

const CardMotion = {
  rest: {
    opacity: 1,
  },
  hover: {},
};
const TitleMotion: Variants = {
  rest: {
    opacity: 0,
    translateY: 40,
  },
  hover: {
    opacity: 1,
    translateY: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const bgColor = {
  rest: {
    opacity: 0,
  },
  hover: {
    opacity: 0.7,
  },
};
const descriptionMotion: Variants = {
  rest: {
    opacity: 0,
    translateY: 40,
    transition: {
      duration: 0.2,
    },
  },
  hover: {
    opacity: 1,
    translateY: 0,
    transition: {
      delay: 0.2,
    },
  },
};

const ProjectCard = ({
  title,
  image,
  description,
  slug,
  blurDataURL,
}: ProjectCardsProps) => {
  return (
    <Link href={`/projects/${slug}`}>
      <motion.div
        initial='rest'
        whileHover='hover'
        animate='rest'
        variants={CardMotion}
        className='relative flex h-full w-full gap-6 transition-all duration-700  hover:scale-105'
      >
        <motion.div
          variants={bgColor}
          className={clsx('absolute h-full w-full bg-black ')}
        ></motion.div>
        <div className={clsx('absolute  h-full w-full ')}>
          <div className='z-10 flex  h-full flex-1 flex-col justify-end py-10 px-11'>
            <motion.h1 variants={TitleMotion} className='my-5  text-white'>
              {title}
            </motion.h1>
            <motion.p variants={descriptionMotion} className='my-5 text-white '>
              {description}
            </motion.p>
          </div>
        </div>

        <Image
          blurDataURL={blurDataURL}
          placeholder='blur'
          width={600}
          quality={100}
          height={600}
          src={image}
          alt='lo'
          className='h-full w-full  object-cover'
        />
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
