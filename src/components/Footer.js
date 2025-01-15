'use client';
import useInView from '@/hooks/useInView';

export default function Footer() {
  const [ref, isInView, scrollProgress] = useInView({
    threshold: 0.1
  });

  const getTransform = (index) => {
    if (!isInView) return 'translateY(50px)';
    
    const progress = Math.min(Math.max(scrollProgress - (index * 0.1), 0), 1);
    const easeProgress = progress * (2 - progress); // Quadratic ease-out
    
    return `translateY(${50 - (50 * easeProgress)}px)`;
  };

  const getOpacity = (index) => {
    if (!isInView) return 0;
    const progress = Math.min(Math.max(scrollProgress - (index * 0.1), 0), 1);
    return Math.min(progress * 1.5, 1);
  };

  return (
    <footer ref={ref} className="w-full bg-transparent py-12 mt-20">
      <div className="container mx-auto px-4">
        {/* Divider */}
        <div 
          style={{
            transform: `scaleX(${isInView ? Math.min(scrollProgress * 1.5, 1) : 0})`,
            opacity: isInView ? Math.min(scrollProgress * 2, 1) : 0,
            transition: 'opacity 300ms ease-out'
          }}
          className="w-full max-w-4xl mx-auto mb-12"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Navigation Links */}
          <div 
            style={{
              transform: getTransform(0),
              opacity: getOpacity(0),
              transition: 'opacity 300ms ease-out'
            }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white/90">Navigation</h3>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-white/90 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white/90 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white/90 transition-colors">Installation</a></li>
              <li><a href="#" className="hover:text-white/90 transition-colors">Documentation</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div 
            style={{
              transform: getTransform(1),
              opacity: getOpacity(1),
              transition: 'opacity 300ms ease-out'
            }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white/90">Connect</h3>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-white/90 transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-white/90 transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-white/90 transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-white/90 transition-colors">Reddit</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div 
            style={{
              transform: getTransform(2),
              opacity: getOpacity(2),
              transition: 'opacity 300ms ease-out'
            }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white/90">Contact</h3>
            <ul className="space-y-2 text-white/70">
              <li>support@mindcraft.ai</li>
              <li>Discord: Mindcraft#1234</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div 
          style={{
            transform: getTransform(3),
            opacity: getOpacity(3),
            transition: 'opacity 300ms ease-out'
          }}
          className="text-center mt-12 text-white/60 text-sm"
        >
          © 2025 Mindcraft. All rights reserved.
        </div>
      </div>
    </footer>
  );
}