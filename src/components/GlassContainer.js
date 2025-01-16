'use client';
import useScrollAnimation from '@/hooks/useScrollAnimation';

export default function GlassContainer({
  children,
  className = "",
  direction = "left",
  delay = 0,
  disableHover = false
}) {
  const containerRef = useScrollAnimation({
    animation: direction === 'up' ? 'fade-up' : direction === 'right' ? 'fade-right' : 'fade-left',
    duration: 1,
    delay: delay * 0.001, // Convert ms to seconds for GSAP
    ease: 'power2.out',
    start: 'top 80%'
  });

  return (
    <div
      ref={containerRef}
      className={`
        bg-gradient-to-b from-white/[0.08] to-white/[0.04]
        backdrop-blur-sm
        border-2 border-white/15
        rounded-xl
        shadow-[0_0.5rem_2rem_-0.625rem_rgba(0,0,0,0.2)]
        transition-all
        transform scale-[0.4] md:scale-[0.45] lg:scale-[0.5] xl:scale-[0.55] 2xl:scale-[0.6]
        ${!disableHover ? `
          hover:bg-gradient-to-b hover:from-white/[0.14] hover:to-white/[0.06]
          hover:border-white/40
          hover:shadow-[0_1.25rem_2.5rem_-0.75rem_rgba(0,0,0,0.3)]
          hover:backdrop-blur-md
          hover:scale-[1.02]
          hover:border-opacity-100
        ` : ''}
        ring-1 ring-white/5
        ring-offset-0
        ${className}
      `}
      style={{
        willChange: 'transform, opacity, box-shadow, border-color, filter',
        transformOrigin: 'center bottom'
      }}
    >
      {children}
    </div>
  );
}
