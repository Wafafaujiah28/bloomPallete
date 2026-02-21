'use client'; // Ini menandakan teknik CSR
import { useState } from 'react';

export default function Navbar() {
  const [cartCount, setCartCount] = useState(0); // State Management sederhana

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 p-4 shadow-sm border-b border-pink-200">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <span className="text-2xl font-serif font-bold text-pink-deep">🌸 Bloom</span>
        <div className="flex gap-6 items-center">
          <a href="/" className="hover:text-pink-deep transition">Katalog</a>
          <div className="bg-yellow-soft px-4 py-2 rounded-full flex items-center gap-2 border border-yellow-gold">
            <span>🛒</span>
            <span className="font-bold text-yellow-gold">{cartCount}</span>
          </div>
        </div>
      </div>
    </nav>
  );
}