import React from 'react';

import clsxm from '@/lib/clsxm';

type ButtonProps = {
  color: 'white' | 'blue';
} & React.ComponentPropsWithRef<'button'>;

const MainButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ color, children, className, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        {...rest}
        type='button'
        className={clsxm(
          className && className,
          ' px-10 font-bold  transition-colors duration-500',
          color === 'blue'
            ? 'bg-blue-800 text-white hover:bg-blue-700'
            : ' bg-white text-dark hover:bg-slate-200'
        )}
      >
        {children}
      </button>
    );
  }
);

export default MainButton;
