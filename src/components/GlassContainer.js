'use client';
import { useEffect, useRef } from 'react';

export default function GlassContainer({ 
  children, 
  className = "", 
  direction = "left",
  delay = 0 
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.style.opacity = '0';
      container.style.transform = `translateX(${direction === 'left' ? '-50px' : '50px'})`;
      
      setTimeout(() => {
        container.style.opacity = '1';
        container.style.transform = 'translateX(0)';
      }, delay);
    }
  }, [direction, delay]);

  return (
    <div
      ref={containerRef}
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
        ${className}
      `}
    >
      {children}
    </div>
  );
}