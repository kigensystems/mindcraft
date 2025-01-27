'use client';
import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import Features from '@/components/Features';
import Demo from '@/components/Demo';
import Footer from '@/components/Footer';
import AnimatedTitle from '@/components/AnimatedTitle';

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const scrollPercentage = Math.min(Math.max(currentScroll / maxScroll, 0), 1);
      
      // Apply smooth easing
      const eased = scrollPercentage * (2 - scrollPercentage); // Quadratic ease-out
      
      document.documentElement.style.setProperty('--scroll-scale', eased.toString());
    };

    // Initial call
    handleScroll();
    
    // Add throttled event listener
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener, { passive: true });
    return () => window.removeEventListener('scroll', scrollListener);
  }, []);

  return (
    <>
      <div className="background-wrapper" />
      <div className="background-overlay" />
      <div id="content-wrapper">
        <main className="w-full flex flex-col min-h-screen">
          {/* Content wrapper with padding for footer */}
          <div className="flex-grow pb-0"> {/* Added significant bottom padding */}
            {/* Title Section */}
            <div className="w-full pt-[100px]">
              <div className="container mx-auto px-4 text-center">
                <AnimatedTitle />
              </div>
            </div>

            {/* Hero Section with Glass Containers */}
            <div className="w-full mb-16">
              <HeroSection />
            </div>

            {/* How It Works Section */}
            <div className="w-full mb-24">
              <Features />
            </div>

            {/* Demo Section */}
            <div className="w-full mb-24">
              <Demo />
            </div>

          </div>
          {/* Footer */}
          <Footer />
        </main>
      </div>
    </>
  );
}
