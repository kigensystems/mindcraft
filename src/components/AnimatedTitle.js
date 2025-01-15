'use client';
import useInView from '@/hooks/useInView';

export default function AnimatedTitle() {
  const [ref, isInView] = useInView({
    threshold: 0.5
  });

  return (
    <div 
      ref={ref}
      className={`
        relative inline-block
        opacity-0 translate-y-10
        transition-all duration-1000 ease-out
        ${isInView ? 'opacity-100 translate-y-0' : ''}
      `}
    >
      <h1 className="minecraft-title text-7xl sm:text-8xl md:text-9xl tracking-wider">
        <span className="hero-shadow-deep">MINDCRAFT</span>
        <span className="hero-shadow">MINDCRAFT</span>
        <span className="hero-main">MINDCRAFT</span>
      </h1>
    </div>
  );
}