'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scroll to sections
  const handleSectionClick = (e, sectionId) => {
    e.preventDefault();
    if (isNavigating) return;

    setIsNavigating(true);
    
    // If we're already on the home page, just scroll
    if (pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsNavigating(false);
      }
    } else {
      // Otherwise, navigate to the section route
      router.push(`/${sectionId}`);
    }

    // Reset navigation state after a delay
    setTimeout(() => setIsNavigating(false), 1000);
  };

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
              ['Installation', 'installation', (e) => handleSectionClick(e, 'installationguide')],
              ['Features', 'features', (e) => handleSectionClick(e, 'features')],
              ['Support us', 'https://pump.fun/board'],
              ['GitHub', 'https://github.com/kolbytn/mindcraft'],
            ].map(([name, url, handler]) => (
              <Link
                key={name}
                href={url}
                className="nav-link text-base"
                onClick={handler}
                target={url.startsWith('http') ? '_blank' : undefined}
                rel={url.startsWith('http') ? 'noopener noreferrer' : undefined}
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