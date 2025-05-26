'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react'; // Add this import

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/destinations', label: 'Destinations' },
  { href: '/travel-tips', label: 'Travel Tips' },
  { href: '/blog', label: 'Blog' },
  { href: '/quiz', label: 'Quiz' },
  { href: '/booking', label: 'Book Now' },
  { href: '/contact', label: 'Contact' }
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-[#2B3F55] transition-all duration-300 ${
      isScrolled ? 'shadow-lg' : ''
    }`}>
      <div className="container mx-auto px-8">
        <div className="flex justify-between items-center h-24">
          <Link 
            href="/" 
            className="text-4xl font-bold text-white font-['Cinzel'] hover:text-[var(--rice-white)] transition-colors"
          >
            Explore Bhutan
          </Link>

          <div className="hidden md:flex space-x-12 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xl text-white hover:text-[var(--rice-white)] transition-colors font-['Playfair_Display'] py-3 ${
                  pathname === link.href ? 'border-b-2 border-white' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            {/* Sign Out Button (Desktop) */}
            <button
              onClick={() => signOut({ callbackUrl: '/' })}
              className="ml-6 px-5 py-2 bg-white text-[#2B3F55] rounded-lg font-semibold hover:bg-[var(--rice-white)] transition-colors"
            >
              Sign Out
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white hover:text-[var(--rice-white)] transition-colors p-3"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-[500px]' : 'max-h-0'
          }`}
        >
          <div className="py-8 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-6 py-4 text-xl text-white hover:text-[var(--rice-white)] transition-colors font-['Playfair_Display'] ${
                  pathname === link.href ? 'bg-white/10 rounded-lg' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {/* Sign Out Button (Mobile) */}
            <button
              onClick={() => {
                setIsMenuOpen(false);
                signOut({ callbackUrl: '/' });
              }}
              className="block w-full px-6 py-4 text-xl bg-white text-[#2B3F55] rounded-lg font-semibold hover:bg-[var(--rice-white)] transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}