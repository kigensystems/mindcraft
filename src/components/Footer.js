'use client';
import useInView from '@/hooks/useInView';

export default function Footer() {
  const [ref, isInView] = useInView({
    threshold: 0.2
  });
  return (
    <footer
      ref={ref}
      className={`
        w-full bg-transparent py-12 mt-20
        opacity-0 translate-y-10
        transition-all duration-1000 ease-out
        ${isInView ? 'opacity-100 translate-y-0' : ''}
      `}
    >
      <div className="container mx-auto px-4">
        {/* Divider */}
        <div className="w-full max-w-4xl mx-auto mb-12 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Navigation Links */}
          <div className="opacity-0 animate-[fadeIn_1s_ease-out_0.4s_forwards]">
            <h3 className="text-lg font-semibold mb-4 text-white/90">Navigation</h3>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-white/90 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white/90 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white/90 transition-colors">Installation</a></li>
              <li><a href="#" className="hover:text-white/90 transition-colors">Documentation</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="opacity-0 animate-[fadeIn_1s_ease-out_0.6s_forwards]">
            <h3 className="text-lg font-semibold mb-4 text-white/90">Connect</h3>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-white/90 transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-white/90 transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-white/90 transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-white/90 transition-colors">Reddit</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="opacity-0 animate-[fadeIn_1s_ease-out_0.8s_forwards]">
            <h3 className="text-lg font-semibold mb-4 text-white/90">Contact</h3>
            <ul className="space-y-2 text-white/70">
              <li>support@mindcraft.ai</li>
              <li>Discord: Mindcraft#1234</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-12 text-white/60 text-sm opacity-0 animate-[fadeIn_1s_ease-out_1s_forwards]">
          © 2025 Mindcraft. All rights reserved.
        </div>
      </div>
    </footer>
  );
}