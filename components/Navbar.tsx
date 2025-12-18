"use client";

import Link from 'next/link';
import { Menu, X, Phone, Mail, Instagram } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="font-serif text-2xl font-bold text-gray-900 tracking-wider">
                FACUNDO <span className="text-orange-600">BUILDERS</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors">
              Services
            </Link>
            <Link href="/gallery" className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors">
              Gallery
            </Link>
            <Link href="/locations" className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors">
              Locations
            </Link>
            <Link href="/contact" className="bg-gray-900 text-white px-5 py-2.5 rounded-sm hover:bg-orange-600 transition-colors text-sm font-medium">
              Contact Us
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50">
              About
            </Link>
            <Link href="/services" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50">
              Services
            </Link>
            <Link href="/gallery" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50">
              Gallery
            </Link>
            <Link href="/locations" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50">
              Locations
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-base font-medium text-orange-600 font-bold">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}


