import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About Us | E-commerce Fav',
  description: 'Learn more about E-commerce Fav, our mission, quality products, and customer commitment.',
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-16 sm:py-24 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            About <span className="text-orange-700">E-commerce Fav</span>
          </h1>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-gray-600">
            Bringing you high-quality everyday essentials, trendy apparel, and unique accessories designed to elevate your lifestyle.
          </p>
        </div>
      </section>

      {/* Our Story / Mission Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Crafted for Quality, Inspired by You
              </h2>
              <p className="mt-4 text-base text-gray-600 leading-relaxed">
                Founded with a simple vision, **E-commerce Fav** started as a curated collection of favorite everyday items—from comfortable T-shirts like our Acme Circles T-Shirt to reliable gear and accessories. 
              </p>
              <p className="mt-4 text-base text-gray-600 leading-relaxed">
                We believe shopping online should be seamless, reliable, and inspiring. Every product in our catalog is handpicked or designed to meet strict standards of durability, comfort, and aesthetic appeal.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <Link
                  href="/"
                  className="rounded-lg bg-orange-700 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 transition-colors"
                >
                  Explore Collection
                </Link>
                <Link
                  href="/contact"
                  className="text-sm font-semibold leading-6 text-gray-900 hover:text-orange-700 transition-colors"
                >
                  Contact Us <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-lg bg-gray-100 shadow-sm relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80"
                  alt="Apparel Quality"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-lg bg-gray-100 shadow-sm relative h-64 mt-8">
                <Image
                  src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80"
                  alt="Accessories"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-16 sm:py-20 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Why Choose Us</h2>
            <p className="mt-4 text-gray-600">The core values that drive our store and community every single day.</p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Premium Quality</h3>
              <p className="mt-2 text-sm text-gray-600">
                From soft cotton hoodies to durable daily items, we never compromise on material quality.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Customer First</h3>
              <p className="mt-2 text-sm text-gray-600">
                Easy browsing, transparent pricing in USD, and dedicated support for every order.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Curated Vibe</h3>
              <p className="mt-2 text-sm text-gray-600">
                A clean, minimalist shopping experience tailored for modern tastes and preferences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}