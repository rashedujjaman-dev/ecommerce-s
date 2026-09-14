import { useCart } from "@/contexts/CartContext";
import Link from "next/link";
import React from "react";
import { FiMinus, FiPlus, FiTrash2, FiX } from "react-icons/fi";
import ProductImage from "./ProductImage";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar = ({ isOpen, onClose }: CartSidebarProps) => {
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } =
    useCart();
  const total = getTotalPrice();

  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className=" fixed inset-0 bg-black/50 z-40 transition-opacity"
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={` fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className=" flex flex-col h-full">
          <div className=" flex items-center justify-between p-5 border-b bg-gray-200 cursor-pointer">
            <h2 className=" text-xl font-bold text-gray-900">Shopping Cart</h2>
            <button
              className=" p-2 hover:bg-gray-100 rounded-full transition-colors "
              onClick={onClose}
            >
              <FiX className=" w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Cart items */}
          <div className=" flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <p className=" text-gray-600">Your cart is empty</p>
            ) : (
              <div className=" space-y-4">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className=" flex gap-4 pb-4 border-b border-gray-200 last:border-0"
                  >
                    <Link
                      href={`/product/${item.product.slug}`}
                      className=" shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-gray-100"
                    >
                      <ProductImage
                        src={item.product.image}
                        alt={item.product.name}
                        width={80}
                        height={80}
                        className=" h-full w-full object-cover"
                        fallbackText={item.product.name}
                      />
                    </Link>

                    <div className=" flex-1 min-w-0">
                      <Link
                        href={`/product/${item.product.slug}`}
                        onClick={onClose}
                        className=" block"
                      >
                        <h3 className=" text-sm font-semibold text-gray-900 truncate">
                          {item.product.name}
                        </h3>
                      </Link>

                      {(item.selectedColor || item.selectedSize) && (
                        <div className=" mt-1 text-xs text-gray-600">
                          {item.selectedColor && item.selectedColor && (
                            <span>Color: {item.selectedColor}</span>
                          )}

                          {item.selectedColor && item.selectedSize && (
                            <span className=" mx-2">|</span>
                          )}

                          {item.selectedSize && item.selectedSize && (
                            <span>Size: {item.selectedSize}</span>
                          )}
                        </div>
                      )}

                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button
                            disabled={item.quantity <= 1}
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.quantity - 1,
                                item.selectedColor,
                                item.selectedSize,
                              )
                            }
                            className="p-1 hover:bg-gray-100 rounded transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <FiMinus className="w-4 h-4 text-gray-600 cursor-pointer" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium text-gray-900">
                            {item.quantity}
                          </span>
                          <button
                            disabled={
                              item.quantity >= (item.product.stock ?? Infinity)
                            }
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.quantity + 1,
                                item.selectedColor,
                                item.selectedSize,
                              )
                            }
                            className="p-1 hover:bg-gray-100 rounded transition-colors"
                            aria-label="Increase quantity"
                          >
                            <FiPlus className="w-4 h-4 text-gray-600 cursor-pointer"/>
                          </button>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-semibold text-gray-900">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </span>
                          <button
                            onClick={() => {
                              removeFromCart(
                                item.product.id,
                                item.selectedColor || undefined,
                                item.selectedSize || undefined,
                              );
                            }}
                            className="p-1 hover:bg-red-50 rounded transition-colors"
                            aria-label="Remove item"
                          >
                            <FiTrash2 className="w-4 h-4 text-red-600 cursor-pointer" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Cart Footer */}
          {
            items.length > 0 && (
              <div className=" border-t border-gray-200 p-6 space-y-4">
                <div className=" flex items-center justify-between text-gray-900 text-lg font-bold">
                  <span>Total: </span>
                  <span>$ {total.toFixed(2)}</span>
                </div>

                <div className=" space-y-3">
                  <Link href="/checkout"
                  className=" block w-full text-center bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 cursor-pointer transition-colors py-3 px-6"
                  >
                    Proceed to Checkout
                  </Link>

                  <button
                  onClick={clearCart}
                  className="block w-full text-center border text-black rounded-lg font-semibold hover:bg-red-500 hover:text-white cursor-pointer transition-colors py-3 px-6"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            )
          }
          
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
