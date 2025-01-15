'use client';
import { useState, useEffect, useRef } from 'react';

export default function useInView(options = {}) {
  const [isInView, setIsInView] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
      if (entry.isIntersecting) {
        // Calculate how far into view the element is
        const progress = entry.intersectionRatio;
        // Apply spring-like easing
        const springProgress = 1 - Math.cos((progress * Math.PI) / 2);
        setScrollProgress(springProgress);
      }
    }, {
      // Create 50 thresholds for ultra-smooth progress
      threshold: Array.from({ length: 50 }, (_, i) => i / 49),
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