'use client';

import useFetch from '@/lib/hooks/use-fetch';
import request from '@/lib/request';
import { ProductType, ProductsResponse } from '@/lib/types/response';

import ProductCard from '../shared/ProductCard';
import { Slider } from '../ui';

const ProductSlider = () => {
  const { data } = useFetch<ProductsResponse>(request.products());

  const products: ProductType[] = data?.products.slice(0, 5) ?? [];

  return (
    <div className='layout -mt-20 mb-20 relative z-20'>
      <Slider className='ml-auto max-w-4xl' infinite>
        {products.map((product) => (
          <div key={product.id} className='mx-5'>
            <ProductCard size='sm' {...product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
