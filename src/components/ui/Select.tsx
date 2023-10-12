'use client';

import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

import { Button } from '.';
import SelectItem from './SelectItem';

type Props = {
  options: string[];
  onChange: (value: string) => void;
  value: string;
};

const Select = ({ options, onChange, value }: Props) => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow((prev) => !prev);
  };

  const changeHandler = (e: React.FormEvent<HTMLDivElement>) => {
    const value = (e.target as HTMLInputElement).value;
    onChange(value);
    setShow(false);
  };

  return (
    <div className='relative'>
      {/* Trigger */}
      <Button variant='light' onClick={toggle}>
        <span className='flex items-center'>
          {value === 'all' ? 'all products' : value.replaceAll('-', ' ')}
          {show ? (
            <ChevronUp className='text-accent-primary' />
          ) : (
            <ChevronDown className='text-accent-primary' />
          )}
        </span>
      </Button>

      {/* Menu */}
      {show && (
        <div
          onChange={changeHandler}
          className='flex absolute top-[110%] bg-bg-secondary rounded-xl w-60 z-30 shadow-xl text-dark-base right-0 flex-col'
        >
          <SelectItem value='all' />
          {options.map((option) => (
            <SelectItem key={option} value={option} />
          ))}
        </div>
      )}
    </div>
  );
};
{
  /* <select value={value} className={cn('')} onChange={changeHandler}>
  <option value='all'>all products</option>
  {options.map((category) => (
    <option key={category.replaceAll(' ', '_')} value={category}>
      {category.replace('-', ' ')}
    </option>
  ))}
</select> */
}

export default Select;
