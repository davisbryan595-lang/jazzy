'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '@/lib/cart-context';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items } = useCart();
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Catalog', href: '/shop' },
    { label: 'Contact', href: '/#contact' },
    { label: 'About', href: '/#about' },
  ];

  return (
    <header className="sticky top-0 bg-background border-b border-border z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ls2NdI4MmQIIFzBjEUPmmtjlLlDaFR.png"
            alt="Jazzyyj's Cajun Logo"
            className="w-16 h-16 object-contain"
          />
          <div className="hidden sm:block">
            <h1 className="font-serif text-2xl font-bold text-foreground">Jazzyyj's Cajun</h1>
            <p className="text-xs text-primary font-semibold">SEAFOOD SEASONING</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground font-medium hover:text-primary transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <Link href="/cart" className="relative p-2 hover:bg-muted rounded-lg transition group">
            <ShoppingCart className="w-6 h-6 text-foreground group-hover:text-primary transition" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <nav className="flex flex-col p-4 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-foreground hover:bg-muted rounded transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
