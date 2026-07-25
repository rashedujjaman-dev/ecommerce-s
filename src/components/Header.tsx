"use client"

import Link from "next/link";
import { ReactNode, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";

interface NavItem {
  label: string;
  href: string;
}

interface HeaderProps {
  brand?: ReactNode;
  brandHref?: string;
  navItems?: NavItem[];
  showCart?: boolean;
}

const Header = ({
  brand = " ecommerce-S",
  brandHref = "/",
  navItems = [
    {href: "/", label: "Home"},
    {href: "/about", label: "About"},
    {href: "/terms", label: "Terms"},
    {href: "/privacy", label: "Privacy"},
    {href: "/contact", label: "Contact"}
  ],
  showCart = true,

}: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen ] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const handleNavClick = () => setMobileMenuOpen(false);

  // TODO: cart count
  const cartCount = 3;


  return (
    <>
      <header className=" bg-white/80 w-full border-b border-gray-200 backdrop-blur-sm sticky top-0 z-50">
        <div className=" max-w-7xl mx-auto h-16 flex items-center justify-between px-10 sm:px-5 lg:px-16">
          <Link href={brandHref} className="text-xl font-bold text-gray-900"> {brand} </Link>

          {
            navItems.length > 0 && (
              <nav className=" hidden md:flex lg:flex gap-6">
                {
                  navItems.map((item) => (
                    <Link href={item.href} className=" text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 " key={item.href}> {item.label} </Link>
                  ))
                }
              </nav>
            )
          }

          <div>
            {
              showCart && (
                <button onClick={() => setCartOpen(true)} className=" relative p-2 text-gray-600 hover:text-gray-900 transition-colors">
                  <FiShoppingCart className=" w-6 h-6"/>
                  {
                    cartCount > 0 && (
                      <span className=" absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                        {cartCount}
                      </span>

                    )
                  }
                </button>
              )
            }
          </div>
        </div>
      </header>
    </>
  )
}

export default Header