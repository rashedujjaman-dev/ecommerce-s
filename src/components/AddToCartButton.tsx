

// Add To Cart Button

import { useCart } from '@/contexts/CartContext';
import { Product } from '@/types/product';
import React, { useState } from 'react'
import { FiCheck, FiShoppingCart } from 'react-icons/fi';

interface AddToCartButtonProps {
  product: Product;
  selectedColor?: string;
  selectedSize?: string;
  quantity: number;
}

const AddToCartButton = ({ product, selectedColor, selectedSize,  quantity}: AddToCartButtonProps) => {
  const {addToCart} = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor, selectedSize);
    setIsAdded(true);
  }


  return (
    <button
    onClick={handleAddToCart}
    disabled={isAdded}
    className={` group relative w-full overflow-hidden px-8 py-2  rounded-lg bg-gray-800 text-base font-semibold text-white transition-all duration-200 cursor-pointer hover:bg-gray-950`}
    >
      <span className=' relative flex items-center justify-center gap-3 z-10'>
        {
          isAdded ? <> <FiCheck className='size-5'/> Added to Cart!</> :<> <FiShoppingCart className=' size-5'/> Add to Cart </>
        }

      </span>
    </button>
  )
}

export default AddToCartButton