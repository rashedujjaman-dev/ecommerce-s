import { Product } from "@/types/product";
import React, { useState } from "react";

interface ProductOptionsProps {
  product: Product;
  onSelectionChange?: (selections: {
    color?: string;
    size?: string;
    quantity?: number;
  }) => void;
}

const ProductOptions = ({
  product,
  onSelectionChange,
}: ProductOptionsProps) => {
  const [selectedColor, setSelectedColor] = React.useState<string | null>(
    product.colors?.[0] || null,
  );
  const [selectedSize, setSelectedSize] = React.useState<string | null>(
    product.sizes?.[0] || null,
  );
  const [quantity, setQuantity] = React.useState<number>(1);

  const maxQuantity = product.stock ?? 99;

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    notifyChange(color, selectedSize, quantity);
  }

  const handleSizeChange = (size: string) => {
    setSelectedSize(size)
    notifyChange(selectedColor, size, quantity)
  }

  const handleQuantityChange = (qty: number) => {
    const clampedQuantity = Math.max(1, Math.min(maxQuantity, qty));
    setQuantity(qty)
    notifyChange(selectedColor, selectedSize, clampedQuantity)
  }




  const notifyChange = (
    color: string | null,
    size: string | null,
    qty: number,
  ) => {
    if (onSelectionChange) {
      onSelectionChange({
        color: color || undefined,
        size: size || undefined,
        quantity: qty,
      });
    }
  };

  return <div>ProductOptions</div>;
};

export default ProductOptions;
