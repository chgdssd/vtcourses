"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="https://www.virajetech.com/assets/uploads/settings/setting_35.png"
                alt="VirajeTech"
                className="h-10 object-contain"
              />
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/#courses"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Explore Courses
            </Link>
            <Link
              href="/success-stories"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Success Stories
            </Link>
            <Link
              href="/contents"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Contents
            </Link>
            <Link
              href="/community"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Community
            </Link>
            <Link
              href="/payment"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Payment Info
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              About Us
            </Link>
          </div>

          {/* Login & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Login Button - Desktop */}
            <Link
              href="https://www.virajetech.com/auth/login"
              className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 shadow-sm"
            >
              Login
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/#courses"
                className="text-gray-700 hover:text-blue-600 font-medium px-2 py-1 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Explore Courses
              </Link>
              <Link
                href="/success-stories"
                className="text-gray-700 hover:text-blue-600 font-medium px-2 py-1 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Success Stories
              </Link>
              <Link
                href="/contents"
                className="text-gray-700 hover:text-blue-600 font-medium px-2 py-1 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contents
              </Link>
              <Link
                href="/community"
                className="text-gray-700 hover:text-blue-600 font-medium px-2 py-1 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Community
              </Link>
              <Link
                href="/payment"
                className="text-gray-700 hover:text-blue-600 font-medium px-2 py-1 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Payment Info
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 font-medium px-2 py-1 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <div className="pt-2 border-t border-gray-200">
                <Link
                  href="https://www.virajetech.com/auth/login"
                  className="block bg-blue-600 text-white px-4 py-2 rounded-lg font-medium text-center hover:bg-blue-700 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
