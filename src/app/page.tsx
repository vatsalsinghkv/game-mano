import { ProductSlider, Products } from '@/components/home';
import { Hero } from '@/components/shared';
import { Button } from '@/components/ui';
import { ArrowRightCircle } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Hero title='logo electronics' subtitle='The techies you love'>
        <Button
          variant='outline'
          as='link'
          href='/products'
          className='flex items-center gap-5'
        >
          View All Products
          <ArrowRightCircle size={32} />
        </Button>
      </Hero>
      <ProductSlider />
      <Products />
    </>
  );
}
