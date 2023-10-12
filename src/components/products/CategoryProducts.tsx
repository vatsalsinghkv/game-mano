'use client';

import useCategory from '@/lib/hooks/use-category';
import useFetch from '@/lib/hooks/use-fetch';
import request from '@/lib/request';
import { ProductType, ProductsResponse } from '@/lib/types/response';

import { Product, ProductsGrid } from '../shared';
import { Loader } from '../ui';

const CategoryProducts = () => {
  const { category } = useCategory();
  const { data, error, loading } = useFetch<ProductsResponse>(
    category === 'all' ? request.products() : request.categories(category),
  );

  const products: ProductType[] = data?.products ?? [];

  return (
    <div>
      {loading && (
        <div className='relative h-52'>
          <Loader />
        </div>
      )}
      {!loading && !error && data && (
        <ProductsGrid>
          {products.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </ProductsGrid>
      )}
    </div>
  );
};

export default CategoryProducts;
