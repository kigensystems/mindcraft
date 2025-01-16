'use client';
import useInView from '@/hooks/useInView';

export default function GlassContainer({
  children,
  className = "",
  direction = "left",
  delay = 0,
  disableHover = false
}) {
  const [ref, isInView, scrollProgress] = useInView({
    rootMargin: '0px'
  });

  const getTransform = () => {
    if (!isInView) return 'translateY(10%) scale(0.98)';
    
    const progress = Math.min(Math.max(scrollProgress, 0), 1);
    
    // More dramatic spring effect
    const easeProgress = 1 - Math.pow(1 - progress, 4); // Sharper ease-out
    const springAmount = Math.min(0.2 + (progress * 0.15), 0.35); // Increased spring
    const springProgress = progress + (Math.sin(progress * Math.PI * 3) * springAmount); // More oscillations
    
    // Enhanced overshoot for more noticeable effect
    const overshoot = Math.sin(progress * Math.PI * 2) * 0.05;
    const scale = 0.9 + (0.1 * easeProgress) + (overshoot * (1 - progress));
    
    // Subtle transforms
    const translateY = 10 - (10 * springProgress); // Reduced travel distance
    
    return `
      translateY(${translateY}%)
      scale(${scale})
    `;
  };

  return (
    <div
      ref={ref}
      className={`
      bg-gradient-to-b from-white/[0.04] to-white/[0.02]
      backdrop-blur-sm
      border-2 border-white/15
      rounded-xl
      shadow-[0_0.5rem_2rem_-0.625rem_rgba(0,0,0,0.2)]
      transition-all
      transform scale-[0.4] md:scale-[0.45] lg:scale-[0.5] xl:scale-[0.55] 2xl:scale-[0.6]
        ${!disableHover ? `
          hover:bg-gradient-to-b hover:from-white/[0.07] hover:to-white/[0.03]
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
        transform: getTransform(),
        opacity: isInView ? Math.min(scrollProgress * 1.2 + (Math.sin(scrollProgress * Math.PI) * 0.1), 1) : 0,
        transition: 'all 600ms cubic-bezier(0.34, 1.56, 0.64, 1)',
        transformOrigin: 'center bottom',
        willChange: 'transform, opacity, box-shadow, border-color, filter',
        transitionDelay: `${delay}ms`,
        filter: `brightness(${100 + (scrollProgress * 15)}%)`,
        boxShadow: isInView
          ? `0 ${0.5 + scrollProgress}rem ${2 + scrollProgress}rem -0.625rem rgba(0,0,0,0.2),
             0 0 ${Math.min(scrollProgress * 2, 1)}rem ${Math.min(scrollProgress * 0.5, 0.25)}rem rgba(255,255,255,0.15),
             inset 0 0 ${0.0625 + (scrollProgress * 0.125)}rem ${0.0625 + (scrollProgress * 0.125)}rem rgba(255,255,255,0.15)`
          : 'none',
        borderImage: isInView
          ? 'linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(255,255,255,0.1)) 1'
          : 'none'
      }}
    >
      {children}
    </div>
  );
}
