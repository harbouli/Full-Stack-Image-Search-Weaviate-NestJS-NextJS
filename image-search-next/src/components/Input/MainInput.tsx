import clsx from 'clsx';
import { useField } from 'formik';
import React from 'react';

type Props = {
  name: string;
  label: string;
} & React.ComponentPropsWithRef<'input'>;

const MainInput = React.forwardRef<HTMLInputElement, Props>(
  ({ label, ...rest }, ref) => {
    const [field, meta] = useField(rest);
    return (
      <div className='flex flex-col gap-5'>
        <label className='font-bold text-gray-700'>{label}</label>
        <input
          {...field}
          {...rest}
          ref={ref}
          className={clsx(
            'm-[2px] bg-white px-4 py-6 outline-none drop-shadow-2xl  placeholder:font-bold focus:m-0  focus:box-border',

            meta.error && meta.touched
              ? 'border-2 border-red-600 placeholder:text-red-400 focus:border-2 focus:border-red-600'
              : 'placeholder:text-gray-400 focus:border-2 focus:border-blue-900'
          )}
        />
      </div>
    );
  }
);

export default MainInput;
