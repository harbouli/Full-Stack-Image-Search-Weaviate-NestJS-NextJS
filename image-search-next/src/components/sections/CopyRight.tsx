import React from 'react';
import { SocialIcon } from 'react-social-icons';

import Container from '@/components/layout/Container';

const socialMedia = [
  'https://twitter.com/sharbouli',
  'https://www.facebook.com/simohamed1999',
  'https://www.instagram.com/mohamed.harbouli/',
  'https://www.linkedin.com/in/mohamed-harbouli/',
  'https://www.github.com/harbouli',
];
const CopyRight = () => {
  const year = new Date().getFullYear();
  return (
    <Container>
      <div className='flex flex-col items-center justify-center'>
        <p className=' py-2 text-center font-medium text-dark'>
          © {year} Made in 🇲🇦. By Mohamed Harbouli. All Rights Reserved.
        </p>
        <div className='flex'>
          {socialMedia.map((s, i) => (
            <div key={i}>
              <SocialIcon
                url={s}
                bgColor='transparent'
                fgColor='#a3a3a3'
                className='hover:text-white '
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default CopyRight;
