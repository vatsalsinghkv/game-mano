import { ProductType } from '@/lib/types/response';
import { Heart } from 'lucide-react';
import Image from 'next/image';

import { Button } from '../ui';

interface Props extends ProductType {}

const Product = ({ id, category, title, images }: Props) => {
  return (
    <div className='bg-bg-secondary shadow-2xl rounded-[36.423px] p-6 text-dark-base group flex flex-col'>
      <header className='flex mb-2 items-center justify-between'>
        <span className='text-gradient-secondary uppercase'>{category}</span>
        <Heart />
      </header>

      <main className='space-y-5 flex-grow overflow-hidden'>
        <div className='group-hover:scale-125 group-hover:translate-y-5 transition-all'>
          <Image
            src={images[0]}
            alt='title'
            className='aspect-square h-full w-11/12 mx-auto max-w-md object-contain'
            height={90}
            width={300}
          />
        </div>
        <h3 className='text-2xl capitalize group-hover:invisible group-hover:opacity-0 transition-all'>
          {title}
        </h3>
      </main>

      <Button
        as='link'
        className='text-dark-base mt-5'
        href={`/product/${id}`}
        variant='solid'
        fullWidth
      >
        view
      </Button>
    </div>
  );
};

export default Product;
