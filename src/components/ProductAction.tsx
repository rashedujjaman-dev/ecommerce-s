
// product action 


"use client"


import { Product } from '@/types/product'
import React, { useState } from 'react'
import ProductOptions from './ProductOptions';
import AddToCartButton from './AddToCartButton';

interface ProductActionProps{
  product: Product;
}

const ProductAction = ({product}: ProductActionProps) => {
  const [selectedColor, setSelectedColor] =useState<string | undefined>(product.colors?.[0]);

   const [selectedSize, setSelectedSize] =useState<string | undefined>(product.sizes?.[0]);

   const [quantity, setQuantity] = useState<number>(1);

   const handleSelectionChange = (selections:   {
      color?: string;
      size?: string;
      quantity?: number;
   }) => {
      if( selections.color !== undefined) {
        setSelectedColor(selections.color);
      } if( selections.size !== undefined) {
        setSelectedSize(selections.size);
      } if( selections.quantity !== undefined) {
        setQuantity(selections.quantity);
      }
   }
  return (
    <>
      {/* product options */}
      <div className=' mb-8'>
        <ProductOptions product={product}
        onSelectionChange={handleSelectionChange}
        />
      </div>

      {/* add to cart section */}
      <div className=' space-y-4 mb-8'>
        <AddToCartButton 
        product={product}
        selectedColor={selectedColor}
        selectedSize={selectedSize}
        quantity={quantity}
      />
      </div>
      
    </>
  )
}

export default ProductAction