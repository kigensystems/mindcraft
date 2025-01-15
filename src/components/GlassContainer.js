'use client';
import useInView from '@/hooks/useInView';

export default function GlassContainer({ 
  children, 
  className = "", 
  direction = "left",
  delay = 0 
}) {
  const [ref, isInView, scrollProgress] = useInView({
    rootMargin: '-50px'
  });

  const getTransform = () => {
    if (!isInView) return 'translateY(40px) scale(0.95)';
    
    const progress = Math.min(Math.max(scrollProgress, 0), 1);
    
    // Enhanced spring-like easing function with more "pop"
    const easeProgress = 1 - Math.pow(1 - progress, 4); // Quartic ease-out for sharper acceleration
    const springProgress = progress + (Math.sin(progress * Math.PI * 2) * 0.15); // Increased oscillation
    
    // More dynamic animation with enhanced spring effect
    return `
      translateY(${35 - (35 * springProgress)}px)
      scale(${0.95 + (0.05 * easeProgress)})
      perspective(1000px)
      rotateX(${2 - (2 * easeProgress)}deg)
    `;
  };

  return (
    <div
      ref={ref}
      className={`
        bg-gradient-to-b from-white/[0.04] to-white/[0.02]
        backdrop-blur-sm
        border border-white/10
        rounded-xl
        shadow-[0_8px_32px_-10px_rgba(0,0,0,0.2)]
        transition-all
        hover:bg-gradient-to-b hover:from-white/[0.07] hover:to-white/[0.03]
        hover:border-white/30
        hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.3)]
        hover:backdrop-blur-md
        hover:scale-[1.02]
        hover:border-opacity-100
        ${className}
      `}
      style={{
        transform: getTransform(),
        opacity: isInView ? Math.min(scrollProgress * 1.1, 1) : 0,
        transition: 'all 800ms cubic-bezier(0.34, 1.56, 0.64, 1)',
        transformOrigin: 'center bottom',
        willChange: 'transform, opacity, box-shadow, border-color',
        transitionDelay: `${delay}ms`,
        boxShadow: isInView
          ? `0 8px 32px -10px rgba(0,0,0,0.2),
             0 0 ${Math.min(scrollProgress * 15, 10)}px ${Math.min(scrollProgress * 3, 2)}px rgba(255,255,255,0.1)`
          : 'none'
      }}
    >
      {children}
    </div>
  );
}