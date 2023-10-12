'use client';

import useFetch from '@/lib/hooks/use-fetch';
import request from '@/lib/request';
import { ProductType, ProductsResponse } from '@/lib/types/response';

import { ProductsGrid } from '../shared';
import ProductCard from '../shared/ProductCard';
import { Loader } from '../ui';

const Products = () => {
  const { data, error, loading } = useFetch<ProductsResponse>(
    request.products(),
  );

  const products: ProductType[] = data?.products ?? [];

  return (
    <section className='py-20 md:py-24'>
      <div className='layout'>
        <h2 className='heading-primary mb-16 md:mb-20 lg:mb-24'>products</h2>

        {loading && (
          <div className='relative h-52'>
            <Loader />
          </div>
        )}

        {!loading && !error && data && (
          <ProductsGrid>
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </ProductsGrid>
        )}
      </div>
    </section>
  );
};

export default Products;
