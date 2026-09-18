import React from 'react';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact Us | E-commerce Fav',
  description: 'Get in touch with E-commerce Fav support team for orders, questions, and inquiries.',
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Have questions about our products, orders, or anything else? We&apos;d love to hear from you.
          </p>
        </div>

        {/* Client Form Component */}
        <ContactForm />
      </div>
    </div>
  );
}