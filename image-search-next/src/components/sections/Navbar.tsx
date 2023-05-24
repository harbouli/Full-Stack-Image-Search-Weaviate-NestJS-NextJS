import clsx from 'clsx';
import { motion, useCycle, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef } from 'react';

import { useDimensions } from '@/hooks/useDimensions';

import Container from '@/components/layout/Container';
import Layout from '@/components/layout/Layout';
import MenuComponent from '@/components/Menu';

import Logo from '@/constant/Logo-M.png';
import LogoBorders from '@/constant/M-Border.png';

type Props = {
  contactButton?: 'enabled' | 'disabled';
};
const sidebar: Variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 90% 55px)`,
    transition: {
      type: 'spring',
      stiffness: 30,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(0px at 90% 60px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const Navbar = ({ contactButton }: Props) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const router = useRouter();

  useEffect(() => {
    if (isOpen) document.body.classList.add('stop-scrolling');
    else document.body.classList.remove('stop-scrolling');
  }, [isOpen]);

  return (
    <Layout>
      <Container>
        <nav className='flex justify-between py-8'>
          {/* Logo */}
          <Link href='/'>
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='flex items-center gap-5'
            >
              <Image src={Logo} alt='M Logo ' width={50} height={50} />
              <h3 className='font-normal'>Search Image AI</h3>
            </motion.div>
          </Link>
          {/* Contact And Menu */}
          <div className='flex items-center  gap-5'>
            {/* Humberger Menu */}
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              onClick={() => {
                toggleOpen();
              }}
              className=' z-10 flex h-14 w-14 cursor-pointer flex-col items-center justify-center bg-white drop-shadow-xl  transition-colors duration-500 hover:bg-blue-50'
            >
              <div className='space-y-2'>
                <span
                  className={clsx(
                    'block  h-1 bg-blue-800 transition-all duration-700',
                    isOpen
                      ? 'w-7 translate-x-[2px] translate-y-[6px] rotate-45'
                      : 'w-7'
                  )}
                ></span>
                <span
                  className={clsx(
                    'block  h-1 bg-blue-800  duration-700',
                    isOpen
                      ? 'w-7 translate-x-[2px] -translate-y-[6px] -rotate-45'
                      : 'w-5'
                  )}
                ></span>
              </div>
            </motion.div>
          </div>
        </nav>
      </Container>
      <motion.nav
        className={clsx(
          'absolute top-0 right-0 bottom-0 z-[1] w-full ',
          !isOpen && 'pointer-events-none'
        )}
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={height}
        ref={containerRef}
      >
        <motion.div
          className='fixed top-0 right-0 bottom-0 h-full  w-full bg-dark'
          variants={sidebar}
        />

        <motion.div
          variants={{ open: { opacity: 1 }, closed: { opacity: 0 } }}
          className='fixed top-10 right-10  w-[400px] sm:h-1/2  sm:w-1/2'
        >
          <Image
            src={LogoBorders}
            alt='My Logo'
            height='1200'
            width='1200'
            className='z-10'
          />
        </motion.div>
        <MenuComponent />
      </motion.nav>
    </Layout>
  );
};

export default Navbar;
