"use client";

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
  };

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
    notifyChange(selectedColor, size, quantity);
  };

  const handleQuantityChange = (qty: number) => {
    const clampedQuantity = Math.max(1, Math.min(maxQuantity, qty));
    setQuantity(qty);
    notifyChange(selectedColor, selectedSize, clampedQuantity);
  };

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

  return (
    <div className=" space-y-8 border-t border-gray-200 pt-8">
      {/* Color Options */}
      {product.colors && product.colors.length > 0 && (
        <div>
          <div className=" flex items-center justify-start mb-4">
            <label className=" block text-base font-semibold text-gray-900 mr-2">
              Color
            </label>
            {selectedColor && (
              <span className=" text-sm font-semibold text-gray-600">
                ({selectedColor})
              </span>
            )}
          </div>
          <div className=" flex flex-wrap gap-3">
            {product.colors.map((color) => {
              const isSelected = selectedColor === color;
              const colorValue = getColorValue(color);
              return (
                <button
                  key={color}
                  onClick={() => handleColorChange(color)}
                  className={`group relative flex items-center justify-center w-10 h-10 rounded-full border-2 cursor-pointer ${isSelected ? "border-gray-900" : " border-gray-300"} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500`}
                  style={
                    colorValue ? { backgroundColor: colorValue } : undefined
                  }
                >
                  {!colorValue && (
                    <span
                      className={`text-xs font-semibold ${isSelected ? "text-gray-900" : "text-gray-700"} `}
                    >
                      {color.charAt(0).toUpperCase()}
                    </span>
                  )}
                  {isSelected && (
                    <span className=" absolute inset-0 flex items-center justify-center">
                      <svg
                        className={`w-5 h-5 drop-shadow-md ${
                          ["#ffffff", "#f5f5dc", "#fbbf24", "#d2b48c"].includes(
                            (colorValue || "").toLowerCase(),
                          )
                            ? "text-gray-900"
                            : "text-white"
                        }`}
                        fill="none"
                        stroke=" currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* size selection */}
      {product.sizes && product.sizes.length > 0 && (
        <div>
          <div className=" flex items-center justify-start mb-4">
            <label className=" block text-base font-semibold text-gray-900 mr-2">
              Size
            </label>
            {selectedSize && (
              <span className=" text-sm font-semibold text-gray-600">
                ({selectedSize})
              </span>
            )}
          </div>
          <div className=" flex flex-wrap gap-3">
            {product.sizes.map((size) => {
              const isSelected = selectedSize === size;
              return (
                <button
                  key={size}
                  onClick={() => handleSizeChange(size)}
                  className={`text-xs group relative flex items-center justify-center w-15 h-10 rounded-3xl  border-2 text-gray-700 cursor-pointer ${isSelected ? "border-gray-900 bg-gray-800 text-white" : " border-gray-300"} focus:outline-none`}
                >
                  {size}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* quantity selection */}
      <div>
        <div>
          <div className=" flex items-center justify-start mb-4">
            <label className=" block text-base font-semibold text-gray-900 mr-2">
              Quantity
            </label>
            {quantity && (
              <span className=" text-sm font-semibold text-gray-600">
                ({quantity})
              </span>
            )}
            {product.stock && (
              <span className=" text-sm font-medium text-gray-600 ml-4">
                {" "}
                *{product.stock} in Stock
              </span>
            )}
          </div>
          <div className=" flex items-center  gap-4">
            <button
              onClick={() => handleQuantityChange(quantity - 1)}
              disabled={quantity <= 1}
              className={`text-xs group relative flex items-center justify-center w-15 h-10 rounded-2xl  border-2 text-gray-700 cursor-pointer  focus:outline-none`}
            >
              -
            </button>
            <input type="number" 
            min={1}
            max={maxQuantity}
            value={quantity}
            onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
            className=" w-16 h-10 border-2 border-gray-300 rounded-2xl focus:outline-none focus:ring from-gray-500 focus:border-gray-500 text-center items-center cursor-pointer "
            />

            <button
              onClick={() => handleQuantityChange(quantity + 1)}
              disabled={quantity >= maxQuantity}
              className={`text-xs group relative flex items-center justify-center w-15 h-10 rounded-2xl  border-2 text-gray-700 cursor-pointer  focus:outline-none`}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOptions;

// Helper function to get color values for common color names
function getColorValue(colorName: string): string | null {
  const colorMap: Record<string, string> = {
    black: "#000000",
    gray: "#6B7280",
    navy: "#1E3A8A",
    red: "#EF4444",
    blue: "#3B82F6",
    green: "#10B981",
    yellow: "#FBBF24",
    orange: "#F97316",
    purple: "#A855F7",
    pink: "#EC4899",
    white: "#FFFFFF",
    grey: "#6B7280",
    brown: "#92400E",
    beige: "#F5F5DC",
    tan: "#D2B48C",
  };

  const normalized = colorName.toLowerCase().trim();
  return colorMap[normalized] || null;
}
