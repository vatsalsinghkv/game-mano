import { Hero, StarRating } from '@/components/shared';
import request from '@/lib/request';
import axios from '@/lib/services/axios';
import { ProductType } from '@/lib/types/response';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default async function Pricing({ params }: { params: { id: string } }) {
  const res = await axios(request.products(params.id));
  const product: ProductType = res.data;

  if (!product) {
    return <h1>not found</h1>;
  }

  const { title, thumbnail, price, discountPercentage, description, rating } =
    product;

  return (
    <section className='pb-32'>
      <Hero title='products details' className='bg-[url("/product-bg.jpeg")]' />
      <main className='py-20 layout md:py-24 space-y-20'>
        <h1 className='heading-secondary text-center'>{title}</h1>

        {/* Card Summary */}
        <figure
          className={cn(
            'max-w-5xl mx-auto rounded-[30px] p-6 md:p-10',
            'bg-bg-secondary border-2 border-accent-secondary text-dark-base',
            'grid grid-cols-1 md:grid-cols-2 gap-10',
          )}
        >
          <div
            className={cn(
              'max-w-sm mx-auto w-full p-1',
              'bg-gradient-secondary relative',
              'before:absolute before:inset-1 before:bg-bg-secondary shadow-lg',
            )}
          >
            <Image
              src={thumbnail}
              alt='title'
              className='aspect-square h-full w-full object-contain relative z-10'
              height={200}
              width={200}
            />
          </div>

          <figcaption className='space-y-6 md:space-y-8'>
            <div className='space-y-3'>
              <h2 className='text-2xl md:text-3xl'>{title}</h2>
              <StarRating rate={rating} />
            </div>
            <p className='text-justify tracking-widest md:tracking-[2.572px]'>
              {description}
            </p>
            <div className='space-y-3 text-lg md:text-2xl'>
              <p>Price: Rs {price}</p>
              <p>Discount: {discountPercentage}%</p>
            </div>
          </figcaption>
        </figure>
      </main>
    </section>
  );
}
