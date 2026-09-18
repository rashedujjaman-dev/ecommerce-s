
import React from 'react';
import Link from 'next/link';
import { FiFacebook, FiInstagram, FiTwitter, FiGithub, FiX } from 'react-icons/fi';
import { FaX } from 'react-icons/fa6';
import { SiX } from 'react-icons/si';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-gray-600">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="inline-block">
              {" "}
            <span className=" text-gray-900 ">
             <span className="bg-amber-700 mr-0.8  text-xl rounded-bl-xl rounded-tr-xl p-0.5 text-white px-2">E</span>-commerce Fav
            </span>{" "}
          </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              Curated everyday essentials, apparel, and lifestyle accessories designed for modern comfort.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 transition-colors"
                aria-label="Facebook"
              >
                <FiFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 transition-colors"
                aria-label="Instagram"
              >
                <FiInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 transition-colors"
                aria-label="Twitter"
              >
                <SiX className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-gray-900 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-900 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-900 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal / Policy */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/terms" className="hover:text-gray-900 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-gray-900 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter / Support */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Support
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Need help with an order? Reach our support team anytime.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-gray-900 px-4 py-2.5 text-xs font-semibold text-white hover:bg-gray-800 transition-colors"
            >
              Get Support
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {currentYear} E-commerce Fav. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/terms" className="hover:text-gray-900 transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-gray-900 transition-colors">
              Privacy
            </Link>
            <Link href="/contact" className="hover:text-gray-900 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}