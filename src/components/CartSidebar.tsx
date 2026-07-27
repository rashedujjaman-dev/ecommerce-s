import React from 'react'

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}


const CartSidebar = ({ isOpen, onClose }: CartSidebarProps) => {
  return (
    <div>CartSidebar</div>
  )
}

export default CartSidebar