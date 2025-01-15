'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-[100] transition-all duration-300 ${
        isScrolled ? 'nav-blur' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-28">
          {/* Navigation Links */}
          <div className="hidden md:flex items-center justify-center space-x-16">
            {[
              ['Agents', '/agents'],
              ['Documentation', '/docs'],
              ['Community', '/community'],
              ['GitHub', 'https://github.com/yourusername/mindcraft'],
            ].map(([name, url]) => (
              <Link
                key={name}
                href={url}
                className="nav-link text-base"
              >
                {name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button - positioned absolutely on the right */}
          <div className="md:hidden absolute right-4">
            <button className="nav-link p-2">
              <span className="sr-only">Open menu</span>
              <div className="w-6 h-0.5 bg-white mb-1.5" />
              <div className="w-6 h-0.5 bg-white mb-1.5" />
              <div className="w-6 h-0.5 bg-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="container mx-auto px-4">
          <div className="h-[1px] bg-white/20" />
        </div>
      </div>
    </nav>
  );
}