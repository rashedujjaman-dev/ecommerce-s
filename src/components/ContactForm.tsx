'use client';

import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      {/* Contact Info */}
      <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 space-y-8 h-fit">
        <h3 className="text-xl font-semibold text-gray-900">Contact Information</h3>
        <p className="text-sm text-gray-600">
          Fill out the form or reach out to us directly through the details below.
        </p>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-gray-900 text-white rounded-lg">
              <FiMail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase">Email Us</p>
              <p className="text-sm font-medium text-gray-900 mt-1">support@ecommercefav.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-gray-900 text-white rounded-lg">
              <FiPhone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase">Call Us</p>
              <p className="text-sm font-medium text-gray-900 mt-1">+1 (555) 000-1234</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-gray-900 text-white rounded-lg">
              <FiMapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase">Office</p>
              <p className="text-sm font-medium text-gray-900 mt-1">123 Commerce St, Suite 100, NY, BD</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
        {submitted ? (
          <div className="text-center py-12 space-y-4">
            <FiCheckCircle className="w-16 h-16 text-green-500 mx-auto" />
            <h3 className="text-2xl font-bold text-gray-900">Message Sent!</h3>
            <p className="text-gray-600">
              Thank you for reaching out. Our support team will get back to you shortly.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 rounded-lg bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition-colors"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                  placeholder="Write your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                  placeholder="emailname@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                placeholder="Order inquiry..."
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                placeholder="Write your message here..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-gray-900 px-6 py-4 text-base font-semibold text-white hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
            >
              {loading ? (
                'Sending...'
              ) : (
                <>
                  <FiSend className="w-4 h-4" /> Send Message
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}