

"use client"


import { categories } from '@/data/products';
import { Product } from '@/types/product';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import ProductCart from './ProductCart';

interface ProductGridProps {
  products: Product[];
  initialCategory?: string;
}


const ProductGrid = ({products, initialCategory = 'all'}: ProductGridProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();


  const [selectedCetegory, setSelectedCetegory] = useState(searchParams.get('category') || initialCategory);


  useEffect(() => {
    const category = searchParams.get("category") || "all";
    setSelectedCetegory(category);
  }, [searchParams]);


  const handleCategoryChange = (categorySlug: string) => {
    setSelectedCetegory(categorySlug);
    const params = new URLSearchParams(searchParams.toString());
    if(categorySlug === 'all') {
      params.delete('category');
    } else {
      params.set('category', categorySlug);
    }
    router.push(`/?${params.toString()}`, {scroll: false})
  }


  const filteredProducts = selectedCetegory === 'all' ? products: products.filter(product => product.category === selectedCetegory);

  return (
    <div>
      <div className=' mb-8 flex flex-wrap gap-4 border-b border-gray-200 pb-2'>
        {
          categories.map((category) => (
            <button key={category.slug} onClick={() => handleCategoryChange(category.slug)} className={` font-medium transition-colors cursor-pointer ${ selectedCetegory === category.slug ? 'text-indigo-600' : ''}`} >   
              {category.name}
              </button>
          ))
        }
      </div>

      <div className=' grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6'>
        {
          filteredProducts.map((product) => (
            <ProductCart key={product.id} product={product}/>
          ))
        }
      </div>
      {
        filteredProducts.length === 0 && (
          <div className='text-gray-500'> No products found in this category</div>
        )
      }
    </div>
  )
}

export default ProductGrid