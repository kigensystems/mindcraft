'use client';
import { useState, useEffect, useRef } from 'react';

export default function useInView(options = {}) {
  const [isInView, setIsInView] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let lastScrollTime = Date.now();
    let lastScrollProgress = 0;

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
      if (entry.isIntersecting) {
        const currentTime = Date.now();
        const timeDelta = currentTime - lastScrollTime;
        const progress = entry.intersectionRatio;
        
        // Calculate scroll velocity with higher sensitivity
        const progressDelta = Math.abs(progress - lastScrollProgress);
        const velocity = progressDelta / Math.max(timeDelta, 8); // 120fps = ~8ms for smoother updates
        
        // Enhanced velocity impact
        const velocityFactor = Math.min(velocity * 1000, 1.5); // Increased velocity effect
        
        // Multi-stage spring effect
        const baseProgress = progress;
        const springEffect = Math.sin(progress * Math.PI * 2) * 0.15;
        const velocitySpring = Math.sin(progress * Math.PI) * velocityFactor * 0.2;
        
        // Combine effects for more dramatic response
        const dynamicProgress = baseProgress + springEffect + velocitySpring;
        
        setScrollProgress(Math.max(0, Math.min(dynamicProgress, 1)));
        
        lastScrollTime = currentTime;
        lastScrollProgress = progress;
      }
    }, {
      // Create 100 thresholds for more granular progress
      threshold: Array.from({ length: 100 }, (_, i) => i / 99),
      rootMargin: options.rootMargin || '0px'
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options.rootMargin]);

  return [ref, isInView, scrollProgress];
}