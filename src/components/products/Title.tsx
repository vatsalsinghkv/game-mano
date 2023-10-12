'use client';

import useCategory from '@/lib/hooks/use-category';
import { ChevronsRight } from 'lucide-react';

const Title = () => {
  const { category } = useCategory();
  return (
    <h2 className='heading-secondary flex items-center gap-2'>
      <ChevronsRight size={28} /> {category}
    </h2>
  );
};

export default Title;
