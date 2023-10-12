'use client';

import useCategory from '@/lib/hooks/use-category';

import { Select } from '../ui';

type Props = {
  categories: string[];
};

const Filter = ({ categories }: Props) => {
  const { category, setCategory } = useCategory();
  return (
    <Select options={categories} value={category} onChange={setCategory} />
  );
};

export default Filter;
