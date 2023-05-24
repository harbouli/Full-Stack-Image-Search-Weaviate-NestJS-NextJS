import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { SocialIcon } from 'react-social-icons';

import MainButton from '@/components/buttons/MainButton';

const MenuComponent = () => {
  const ulAnumation = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.5 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };
  const liAnimation = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  // Button

  const ButtonMotion = motion(MainButton);
  const buttonAnimation: Variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
    closed: {
      y: 90,
      opacity: 0,
      transition: {
        delay: 0.1,
        duration: 0.5,
      },
    },
  };

  // My Sociale Media

  const router = useRouter();
  const [socialMedia, setSocialMedia] = useState<string[]>();
  const [menuItems, setMenuItems] =
    useState<{ _key: number; title: string; path: string }[]>();

  return (
    <div className='fixed z-[2] flex h-screen w-screen flex-col items-center justify-center '>
      <motion.ul className=' text-center' variants={ulAnumation}>
        {menuItems?.map((item) => (
          <Link key={item._key} className='text-4xl' href={item.path}>
            <motion.li variants={liAnimation} className='my-4 text-white'>
              <motion.p
                whileHover={{ scale: 1.1, color: '#a3a3a3' }}
                whileTap={{ scale: 0.95 }}
                className=' underline-animation relative inline-block  font-medium tracking-wide '
              >
                {item?.title}
              </motion.p>
            </motion.li>
          </Link>
        ))}
      </motion.ul>

      {/* Let Talk */}
      <motion.div
        className='my-16 flex flex-col items-center justify-center'
        variants={buttonAnimation}
      ></motion.div>
      {/* Social Media  */}
      <motion.ul className=' flex' variants={ulAnumation}>
        {socialMedia?.map((s, i) => (
          <motion.li variants={liAnimation} key={i}>
            <SocialIcon
              url={s}
              bgColor='transparent'
              fgColor='#a3a3a3'
              className='hover:text-white'
            />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default MenuComponent;
