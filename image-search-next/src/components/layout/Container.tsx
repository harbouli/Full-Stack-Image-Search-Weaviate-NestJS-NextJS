import React, { FC } from 'react';
type props = {
  children?: React.ReactNode;
};
const Container: FC<props> = ({ children }) => {
  return <div className='mx-auto w-10/12'>{children}</div>;
};

export default Container;
