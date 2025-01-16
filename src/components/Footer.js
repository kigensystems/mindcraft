'use client';
import useInView from '@/hooks/useInView';
import Image from 'next/image';

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
    <footer ref={ref} className="w-full nav-blur fixed bottom-0 left-0 z-10">
      <div className="h-28">
        <div className="container mx-auto px-4 h-full">
          <div className="max-w-4xl mx-auto h-full flex items-center justify-between">
            {/* Left: Title and Authors */}
            <div
              style={{
                transform: getTransform(0),
                opacity: getOpacity(0),
                transition: 'all 300ms ease-out'
              }}
              className="text-left"
            >
              <h2 className="text-lg font-['MinecrafterRegular'] text-white/90">
                MINDcraft
              </h2>
              <p className="text-white/70 text-xs">
                Created by{' '}
                <span className="text-white/90">Kolby Nottingham</span>
                {' '}and{' '}
                <span className="text-white/90">Max Robinson</span>
              </p>
            </div>

            {/* Center: X Social */}
            <div
              style={{
                transform: getTransform(1),
                opacity: getOpacity(1),
                transition: 'all 300ms ease-out'
              }}
              className="flex items-center"
            >
              <a
                href="https://x.com/mindcraftllm"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 text-white/70 hover:text-[#528a67] transition-colors duration-200"
              >
                <Image
                  src="/xsocial.svg"
                  alt="X (Twitter)"
                  width={20}
                  height={20}
                  className="opacity-70 group-hover:opacity-100 transition-opacity"
                />
                <span className="text-sm">@mindcraftllm</span>
              </a>
            </div>

            {/* Right: Copyright */}
            <div
              style={{
                transform: getTransform(2),
                opacity: getOpacity(2),
                transition: 'all 300ms ease-out'
              }}
              className="text-right text-white/60 text-xs"
            >
              <p>© 2023-2025 Mindcraft</p>
              <p>All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}