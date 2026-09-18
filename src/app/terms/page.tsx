
import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Terms & Conditions | E-commerce Fav',
  description: 'Read the terms and conditions for using E-commerce Fav and purchasing our products.',
};

export default function TermsPage() {
  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="border-b border-gray-200 pb-8 mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Terms & Conditions
          </h1>
        </div>

        {/* Content Body */}
        <div className="space-y-10 text-gray-600 leading-relaxed text-base">
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">1. Acceptance of Terms</h2>
            <p>
              Welcome to <strong className="text-gray-900">E-commerce Fav</strong>. By accessing or using our website, purchasing products (such as apparel, accessories, and daily essentials), or interacting with our services, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our store.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">2. Products and Pricing</h2>
            <p>
              All prices displayed on E-commerce Fav are quoted in <strong className="text-gray-900">USD ($)</strong> unless stated otherwise. We reserve the right to modify product prices, descriptions, or availability at any time without prior notice. While we strive for accuracy, display colors and image representations may slightly vary based on your screen settings.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">3. Orders, Payments & Checkout</h2>
            <p>
              Payments are securely processed via Stripe. By submitting an order, you represent that you are authorized to use the designated payment method. We reserve the right to refuse or cancel any order due to suspected fraud, pricing errors, or stock limitations.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">4. Shipping and Delivery</h2>
            <p>
              Standard shipping terms apply as outlined during checkout. Free shipping promotions, if active, will be reflected in your payment summary. Delivery times are estimated and may vary depending on destination carrier performance and regional customs clearance (where applicable).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">5. Limitation of Liability</h2>
            <p>
              E-commerce Fav shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our products or website services beyond the total value of the specific order placed.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">6. Contact Information</h2>
            <p>
              If you have any questions regarding these Terms & Conditions, please reach out to our support team via our{' '}
              <Link href="/contact" className="text-orange-700 hover:underline font-medium">
                Contact Page
              </Link>{' '}
              or email us directly at <strong className="text-gray-900">support@ecommercefav.com</strong>.
            </p>
          </section>
        </div>

        {/* Footer Navigation Back */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex justify-between items-center">
          <Link
            href="/"
            className="text-sm font-semibold text-gray-900 hover:text-orange-700 transition-colors"
          >
            ← Back to Store
          </Link>
          <Link
            href="/privacy"
            className="text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors"
          >
            View Privacy Policy →
          </Link>
        </div>
      </div>
    </div>
  );
}