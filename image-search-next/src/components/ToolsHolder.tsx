import { motion, Variants } from 'framer-motion';
import React from 'react';
import { IconType } from 'react-icons';

type Props = {
  Icon: IconType;
  skills?: string[];
  titel?: string;
};
const ulAnumation = {
  start: {
    transition: { staggerChildren: 0.07, delayChildren: 3 },
  },
  ending: {
    transition: { staggerChildren: 0.05, staggerDirection: 1 },
  },
};
const liAnimation: Variants = {
  ending: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  start: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const animation: Variants = {
  initial: {
    opacity: 0,
    y: -50,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};
const ToolsHolder = ({ Icon, skills, titel }: Props) => {
  return (
    <motion.div
      initial={['initial', 'start']}
      whileInView={['onscreen', 'ending']}
      viewport={{ once: true, amount: 0.6 }}
      className='my-0 flex h-screen flex-col items-center gap-12 sm:h-auto lg:flex-row lg:gap-16 '
    >
      <motion.div variants={animation} className=''>
        <Icon size={120} color='#0f0928' />
      </motion.div>
      <motion.div className='flex flex-col items-center  gap-16 lg:items-start'>
        <motion.h1 variants={animation} className='text-5xl'>
          {titel}
        </motion.h1>
        <motion.ul
          variants={ulAnumation}
          className='flex  flex-wrap gap-4 text-white  md:text-dark'
        >
          {skills?.map((skill, i) => (
            <motion.li
              variants={liAnimation}
              key={i}
              className=' bg-dark px-6 py-4 tracking-widest md:bg-white md:drop-shadow-xl'
            >
              {skill}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

export default ToolsHolder;
