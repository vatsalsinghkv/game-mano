import { Products } from '@/components/home';
import { Hero } from '@/components/shared';
import { Button } from '@/components/ui';

export default function Home() {
  return (
    <>
      <Hero title='logo electronics' subtitle='The techies you love'>
        <Button variant='outline' as='link' href='/products'>
          View All Products
        </Button>
      </Hero>
      <Products />
    </>
  );
}
