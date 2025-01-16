'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useScrollAnimation(options = {}) {
  const {
    animation = 'fade-up', // fade-up, fade-down, fade-left, fade-right, scale
    duration = 1,
    delay = 0,
    ease = 'power2.out',
    start = 'top 80%',
    markers = false,
  } = options;

  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Initial state based on animation type
    let initialProps = {};
    let animateProps = {};

    switch (animation) {
      case 'fade-up':
        initialProps = { opacity: 0, y: 50 };
        animateProps = { opacity: 1, y: 0 };
        break;
      case 'fade-down':
        initialProps = { opacity: 0, y: -50 };
        animateProps = { opacity: 1, y: 0 };
        break;
      case 'fade-left':
        initialProps = { opacity: 0, x: -50 };
        animateProps = { opacity: 1, x: 0 };
        break;
      case 'fade-right':
        initialProps = { opacity: 0, x: 50 };
        animateProps = { opacity: 1, x: 0 };
        break;
      case 'scale':
        initialProps = { opacity: 0, scale: 0.8 };
        animateProps = { opacity: 1, scale: 1 };
        break;
      default:
        initialProps = { opacity: 0 };
        animateProps = { opacity: 1 };
    }

    // Set initial state
    gsap.set(element, initialProps);

    // Create animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: start,
        markers: markers,
      },
    });

    tl.to(element, {
      ...animateProps,
      duration: duration,
      delay: delay,
      ease: ease,
    });

    // Cleanup
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [animation, duration, delay, ease, start, markers]);

  return elementRef;
}