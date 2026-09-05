"use client"

import React, { useState } from 'react'
import ProductImage from './ProductImage';
interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}


const ProductImageGallery = ({images, productName}: ProductImageGalleryProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const displayImage = images.length > 0 ? images : [];
  const selectedImage = displayImage[selectedImageIndex] || "";
  if(displayImage.length === 0) {
    return null;
  }

  const handleThumbnailClick = (index: number) => {
    setSelectedImageIndex(index);
  }

  return (
    <div className=' space-y-6'>
      {/* main Image */}
      <div className=' aspect-square w-full overflow-hidden rounded-xl bg-gray-100 shadow-sm border border-gray-200'>
        <div className=' w-full h-full animate-fade-in'>
          <ProductImage 
          src={selectedImage}
          alt={`${productName} Image ${selectedImageIndex + 1}`}
          width={800}
          height={800}
          className='h-full w-full object-cover object-center transition-opacity duration-300'

          />
        </div>
      </div>
    </div>
  )
}

export default ProductImageGallery