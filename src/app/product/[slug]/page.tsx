import { getProductBySlug } from "@/data/products";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

interface productDetailPageProps {
  params: Promise<{ slug: string }>;
}

const productDetailPage = async ({ params }: productDetailPageProps) => {
  const { slug } = await params;

  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      {/* breadcrumb navigation */}
      <div className=" bg-gray-50 border-b border-gray-200">
        <div className=" max-w-7xl mx-auto  py-4 px-5 md:px-16 lg:px-20">
          <nav className=" flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className=" hover:text-gray-900 transition-colors">
              Home
            </Link>

            <svg
              className=" w-4 h-4
             text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <Link
              href={`/?category=${product.category}`}
              className=" hover:text-gray-900 transition-colors"
            >
              {product.category}
            </Link>
            <svg
              className=" w-4 h-4
             text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <Link
              href={`/product/${product.slug}`}
              className=" hover:text-gray-900 transition-colors"
            >
              {product.name}
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default productDetailPage;
