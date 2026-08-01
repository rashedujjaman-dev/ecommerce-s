import { Product } from "@/types/product";
import Link from "next/link";
import React from "react";
import ProductImage from "./ProductImage";

interface ProductCartProps {
  product: Product;
}

const ProductCart = ({ product }: ProductCartProps) => {
  return (
    <Link href={`/product/${product.slug}`} className=" group">
      <div className=" aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
        <ProductImage 
         src={product.image}
         alt={product.name}
         width={400}
         height={400}
         className= " h-full w-full object-cover object-center transition-transform group-hover:saturate-105"
         fallbackText={product.name}
        />
      </div>

      <div className="mt-4">
          <h3 className=" text-sm font-medium text-gray-900">{product.name}</h3>
          <p className="text-sm font-semibold text-gray-800">
            ${product.price.toFixed(2)} {product.currency}
          </p>
        </div>
    </Link>
  );
};

export default ProductCart;
