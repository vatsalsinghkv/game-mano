type Props = {
  value: string;
};

const SelectItem = ({ value }: Props) => {
  return (
    <span className='p-5 py-1.5 hover:text-accent-primary cursor-pointer first:pt-3 last:pb-4 capitalize'>
      <input
        type='radio'
        className='hidden'
        name='category'
        id={value}
        value={value}
      />
      <label htmlFor={value} className='block h-full w-full cursor-pointer'>
        {value === 'all' ? 'all products' : value.replaceAll('-', ' ')}
      </label>
    </span>
  );
};

export default SelectItem;
