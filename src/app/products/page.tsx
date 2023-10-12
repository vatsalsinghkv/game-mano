import { CategoryProducts, Header } from '@/components/products';
import { Hero } from '@/components/shared';

export default function ProductsPage() {
  return (
    <>
      <Hero title='products' />
      <section className='layout py-16 md:py-20 space-y-10'>
        <Header />
        <CategoryProducts />
      </section>
    </>
  );
}
