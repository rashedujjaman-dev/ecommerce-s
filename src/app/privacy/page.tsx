
import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | E-commerce Fav',
  description: 'Learn how E-commerce Fav collects, uses, and protects your personal and payment information.',
};

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="border-b border-gray-200 pb-8 mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Privacy Policy
          </h1>
        </div>

        {/* Content Body */}
        <div className="space-y-10 text-gray-600 leading-relaxed text-base">
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">1. Information We Collect</h2>
            <p>
              When you visit <strong className="text-gray-900">E-commerce Fav</strong>, browse our products (such as apparel, caps, and accessories), or place an order, we may collect personal information including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Contact details (name, email address, phone number).</li>
              <li>Shipping and billing addresses.</li>
              <li>Order details (items purchased, color, size, and quantities).</li>
              <li>Payment details (processed securely via Stripe; we do not store full card details on our servers).</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">2. How We Use Your Information</h2>
            <p>
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Processing, fulfilling, and updating you on your Stripe-powered orders.</li>
              <li>Communicating customer support inquiries and feedback.</li>
              <li>Improving our store layout, product curation, and overall user experience.</li>
              <li>Preventing fraudulent transactions and ensuring website security.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">3. Data Sharing and Third Parties</h2>
            <p>
              We do not sell, trade, or rent your personal identification information to third parties. We share data only with essential trusted service providers such as Stripe (for payment processing) and logistics/shipping partners to deliver your purchased products.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. All online card transactions use encrypted Stripe checkout sessions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">5. Your Rights</h2>
            <p>
              You have the right to request access to the personal data we hold about you, request corrections, or ask for deletion of your customer record by contacting our support team.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">6. Contact Us</h2>
            <p>
              If you have any questions or concerns regarding this Privacy Policy, please visit our{' '}
              <Link href="/contact" className="text-orange-700 hover:underline font-medium">
                Contact Page
              </Link>{' '}
              or reach us via email at <strong className="text-gray-900">privacy@ecommercefav.com</strong>.
            </p>
          </section>
        </div>

        {/* Footer Navigation Back */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex justify-between items-center">
          <Link
            href="/terms"
            className="text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← View Terms & Conditions
          </Link>
          <Link
            href="/"
            className="text-sm font-semibold text-gray-900 hover:text-orange-700 transition-colors"
          >
            Back to Store →
          </Link>
        </div>
      </div>
    </div>
  );
}