// components/Navbar.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-amber-950 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-3xl font-bold text-amber-300">
              Portfolio
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-amber-400 hover:text-amber-300">
              Beranda
            </Link>
            <Link href="/about" className="text-amber-400 hover:text-amber-300">
              Tentang
            </Link>
            <Link href="/projects" className="text-amber-400 hover:text-amber-300">
              Proyek
            </Link>
            <Link href="/contact" className="px-4 py-4 text-amber-400 rounded hover:text-amber-300 transition">
              Kontak
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              type="button" 
              className="text-gray-600 hover:text-blue-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2">
          <div className="container mx-auto px-4 space-y-1">
            <Link href="/" 
              className="block py-2 px-3 rounded text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}>
              Beranda
            </Link>
            <Link href="/about" 
              className="block py-2 px-3 rounded text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}>
              Tentang
            </Link>
            <Link href="/projects" 
              className="block py-2 px-3 rounded text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}>
              Proyek
            </Link>
            <Link href="/contact" 
              className="block py-2 px-3 rounded text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}>
              Kontak
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}