import { ProductType } from '@/lib/types/response';
import { cn } from '@/lib/utils';
import { ArrowRightCircle, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { StarRating } from '.';
import { Button } from '../ui';

interface Props extends ProductType {
  size?: 'sm' | 'lg';
}

const ProductCard = ({
  id,
  category,
  title,
  thumbnail,
  price,
  rating,
  size = 'lg',
}: Props) => {
  if (size === 'sm') {
    return (
      <div
        className={cn(
          'bg-dark-3 text-dark-base h-[380px]',
          'bg-gradient-secondary relative',
          'before:absolute before:inset-1 before:bg-bg-secondary shadow-lg',
        )}
      >
        <Link href={`/products/${id}`} className='absolute inset-0 z-50' />
        <div className='relative z-10 capitalize p-5'>
          <Image
            src={thumbnail}
            alt={title}
            className='z-10 aspect-square h-[200px] mx-auto w-full object-contain'
            height={100}
            width={100}
          />
          <div className='space-y-2 mt-3'>
            <h1 className='text-xl'>{title}</h1>
            <p>{category}</p>
            <p className='font-bold'>€{price}</p>
            <StarRating rate={rating} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='bg-bg-secondary shadow-2xl rounded-[36.423px] p-6 text-dark-base group flex flex-col'>
      <header className='flex mb-2 items-center justify-between'>
        <span className='text-gradient-secondary uppercase'>{category}</span>
        <Heart />
      </header>

      <main className='space-y-5 flex-grow overflow-hidden'>
        <div className='group-hover:scale-125 group-hover:translate-y-5 transition-all'>
          <Image
            src={thumbnail}
            alt={title}
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
        href={`/products/${id}`}
        variant='solid'
        fullWidth
      >
        view
      </Button>
    </div>
  );
};

export default ProductCard;
