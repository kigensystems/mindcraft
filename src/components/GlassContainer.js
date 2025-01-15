'use client';
import useInView from '@/hooks/useInView';

export default function GlassContainer({
  children,
  className = "",
  direction = "left",
  delay = 0
}) {
  const [ref, isInView] = useInView({
    threshold: 0.2,
    rootMargin: '-50px'
  });

  const getInitialTransform = () => {
    switch (direction) {
      case 'left':
        return 'translateX(-50px)';
      case 'right':
        return 'translateX(50px)';
      case 'up':
        return 'translateY(30px)';
      default:
        return 'translateY(30px)';
    }
  };

  return (
    <div
      ref={ref}
      className={`
        bg-white/[0.03] backdrop-blur-sm
        border border-white/10
        rounded-xl
        shadow-lg shadow-black/5
        transition-all duration-1000 ease-out
        hover:bg-white/[0.06]
        hover:border-white/20
        hover:shadow-xl
        hover:shadow-black/10
        hover:scale-[1.02]
        opacity-0
        ${isInView ? 'opacity-100 translate-x-0 translate-y-0' : `${getInitialTransform()}`}
        ${className}
      `}
      style={{
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
}