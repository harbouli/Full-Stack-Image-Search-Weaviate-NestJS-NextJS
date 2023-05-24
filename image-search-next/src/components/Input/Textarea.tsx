import clsx from 'clsx';
import { useField } from 'formik';
import React from 'react';

type Props = {
  label: string;
  name: string;
} & React.ComponentPropsWithRef<'textarea'>;

const Textarea = React.forwardRef<HTMLTextAreaElement, Props>(
  ({ label, ...rest }, ref) => {
    const [field, meta] = useField(rest);

    return (
      <div className='flex flex-col gap-5'>
        <label className='font-bold text-gray-700' htmlFor='description'>
          {label}
        </label>
        <textarea
          {...field}
          {...rest}
          ref={ref}
          className={clsx(
            ' m-[2px] border-none bg-white  px-4 py-6 -tracking-tight drop-shadow-2xl placeholder:text-gray-400 focus:m-0  focus:outline-2 ',
            meta.error && meta.touched
              ? 'focus:outline-red-600'
              : 'focus:outline-blue-700'
          )}
          cols={30}
          rows={10}
        ></textarea>
      </div>
    );
  }
);

export default Textarea;
