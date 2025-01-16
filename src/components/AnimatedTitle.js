'use client';
import useInView from '@/hooks/useInView';

export default function AnimatedTitle() {
  const [ref, isInView, scrollProgress] = useInView({
    threshold: 0.1
  });

  const getTransform = () => {
    if (!isInView) return 'translateY(-30px) scale(0.8) rotateX(15deg)';
    
    const progress = Math.min(Math.max(scrollProgress, 0), 1);
    const easeProgress = progress * (2 - progress); // Quadratic ease-out
    
    const translateY = -30 + (30 * easeProgress);
    const scale = 0.8 + (0.2 * easeProgress);
    const rotateX = 20 - (20 * easeProgress);
    
    return `translateY(${translateY}px) scale(${scale}) rotateX(${rotateX}deg)`;
  };

  const titleStyle = {
    fontFamily: "'MinecrafterRegular', Arial, sans-serif",
    letterSpacing: '0.05em'
  };

  return (
    <div className="text-center">
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
        <h1 
          className="minecraft-title text-6xl sm:text-7xl md:text-8xl tracking-wider"
          style={titleStyle}
        >
          <span 
            className="hero-shadow-deep absolute left-1/2 top-1/2 w-full h-full flex items-center justify-center transform-style-3d"
            style={titleStyle}
          >
            MINDCRAFT
          </span>
          <span 
            className="hero-shadow absolute left-1/2 top-1/2 w-full h-full flex items-center justify-center transform-style-3d"
            style={titleStyle}
          >
            MINDCRAFT
          </span>
          <span 
            className="hero-main absolute left-1/2 top-1/2 w-full h-full flex items-center justify-center transform-style-3d"
            style={titleStyle}
          >
            MINDCRAFT
          </span>
        </h1>
      </div>
      <h2 
        className="text-lg md:text-xl lg:text-2xl text-white/90 font-['MinecrafterRegular'] tracking-[0.2em] uppercase relative -mt-8"
        style={{
          opacity: isInView ? Math.min(scrollProgress * 2, 1) : 0,
          transition: "all 600ms ease-out",
          transitionDelay: "200ms",
          textShadow: '2px 2px 0px rgba(0, 0, 0, 0.2)',
        }}
      >
        Where Minecraft Meets Intelligence
      </h2>
    </div>
  );
}
