import Image from 'next/image';
import React, { useState } from 'react'

interface ProductImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  fallbackText?: string;
}

const ProductImage = ({src, alt, width, height, className, fallbackText}: ProductImageProps) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {

    if(!hasError) {
      setImgSrc(`https://vai.placehold.com/${width}x${height}?text=${encodeURIComponent(fallbackText || alt)}`);
    }

  }

  return (
    
    <Image      
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={handleError}
    />
  )
}

export default ProductImage