'use client';
import useInView from '@/hooks/useInView';

export default function AnimatedTitle() {
  const [ref, isInView, scrollProgress] = useInView({
    threshold: 0.1
  });

  const getTransform = () => {
    if (!isInView) return 'translateY(-50px) scale(0.8) rotateX(20deg)';
    
    const progress = Math.min(Math.max(scrollProgress, 0), 1);
    const easeProgress = progress * (2 - progress); // Quadratic ease-out
    
    const translateY = -50 + (50 * easeProgress);
    const scale = 0.8 + (0.2 * easeProgress);
    const rotateX = 20 - (20 * easeProgress);
    
    return `translateY(${translateY}px) scale(${scale}) rotateX(${rotateX}deg)`;
  };

  return (
    <div
      ref={ref}
      className="relative inline-block perspective-1000"
      style={{
        transform: getTransform(),
        opacity: isInView ? Math.min(scrollProgress * 1.5, 1) : 0,
        transition: 'opacity 300ms ease-out',
        transformStyle: 'preserve-3d',
        transformOrigin: 'center bottom'
      }}
    >
      <h1 className="minecraft-title text-7xl sm:text-8xl md:text-9xl tracking-wider">
        <span className="hero-shadow-deep">MINDCRAFT</span>
        <span className="hero-shadow">MINDCRAFT</span>
        <span className="hero-main">MINDCRAFT</span>
      </h1>
    </div>
  );
}