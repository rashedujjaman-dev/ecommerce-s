
// cart context

"use client";

import { CartItem } from "@/types/cart";
import { Product } from "@/types/product";
import { createContext, ReactNode, useContext, useState } from "react";

interface CartContextProps {
  items: CartItem[];
  addToCart: (
    product: Product,
    quantity: number,
    selectedColor?: string,
    selectedSize?: string,
  ) => void;

  removeFromCart: (
    product: Product,
    quantity: number,
    selectedColor?: string,
    selectedSize?: string,
  ) => void;

  updateQuantity: (
    product: Product,
    quantity: number,
    selectedColor?: string,
    selectedSize?: string,
  ) => void;

  clearCart: () => void;

  getTotalItems: () => number;

  getTotalPrice: () => number;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (
    product: Product,
    quantity: number,
    selectedColor?: string,
    selectedSize?: string,
  ) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedColor === selectedColor &&
          item.selectedSize === selectedSize,
      );
      if (existingItemIndex >= 0) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += quantity;
        return updatedItems;
      } else {
        return [
          ...prevItems,
          { product, quantity, selectedColor, selectedSize },
        ];
      }
    });
  };

  const removeFromCart = (
    product: Product,
    quantity: number,
    selectedColor?: string,
    selectedSize?: string,
  ) => {
    setItems((prevItems) =>
      prevItems.filter(
        (item) =>
          !(
            item.product.id === product.id &&
            item.selectedColor === selectedColor &&
            item.selectedSize === selectedSize
          ),
      ),
    );
  };
  
  const updateQuantity = (
  product: Product,
  quantity: number,
  selectedColor?: string,
  selectedSize?: string
) => {
  if (quantity <= 0) {
    removeFromCart(product, quantity, selectedColor, selectedSize); 
    return;
  }
  setItems((prevItems) =>
    prevItems.map((item) =>
      item.product.id === product.id &&
      item.selectedColor === selectedColor &&
      item.selectedSize === selectedSize
        ? { ...item, quantity }
        : item
    )
  );
};

  const clearCart = () => setItems([]);

  const getTotalItems = () => items.reduce((total, item) => total + item.quantity, 0);

  const getTotalPrice = () => items.reduce((total, item) => total + item.product.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalItems,
        getTotalPrice,}}>
      {children}
    </CartContext.Provider>
  )
};

export const useCart = () => {
  const context = useContext(CartContext);
  if(context === undefined) {
    throw new Error("useCart must be use within a CartProvider");
  }
  return context;
}
