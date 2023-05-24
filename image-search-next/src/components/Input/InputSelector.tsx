import clsx from 'clsx';
import { useField } from 'formik';
import React from 'react';

type Props = {
  options: { value: string; option: string }[];
  name: string;
} & React.ComponentPropsWithRef<'select'>;

const InputSelector = React.forwardRef<HTMLSelectElement, Props>(
  ({ options, name, ...rest }, ref) => {
    const [field, meta] = useField(name);

    return (
      <div className='flex w-full flex-col gap-5'>
        <p className='font-bold text-gray-700'>Type:</p>
        <select
          name={field.name}
          {...rest}
          ref={ref}
          className={clsx(
            'border-none bg-white px-4 py-6  text-gray-400 drop-shadow-2xl focus:box-border ',
            meta.error || meta.touched ? 'text-red-400' : 'text-blue-800'
          )}
          onChange={field.onChange}
        >
          {options.map((op, i) => (
            <option className='px-4 py-6' key={i} value={op.value}>
              {op.option}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

export default InputSelector;
