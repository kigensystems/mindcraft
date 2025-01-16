'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedTitle() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const title = titleRef.current;
    if (!container || !title) return;

    // Initial state
    gsap.set(container, {
      rotateX: 15,
      scale: 0.8,
      y: -30,
      opacity: 0
    });

    // Create animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top 75%',
        end: 'top 25%',
        scrub: 1,
      }
    });

    // Animate container
    tl.to(container, {
      rotateX: 0,
      scale: 1,
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: 'power2.out'
    });

    // Add floating animation
    gsap.to(container, {
      y: '-=20',
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const titleStyle = {
    fontFamily: "'MinecrafterRegular', Arial, sans-serif",
    letterSpacing: '0.05em'
  };

  return (
    <div className="text-center pt-12 md:pt-16 lg:pt-20">
      <div
        ref={containerRef}
        className="relative inline-block perspective-1000"
        style={{
          transformStyle: 'preserve-3d',
          transformOrigin: 'center bottom'
        }}
      >
        <h1 
          ref={titleRef}
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
        className="text-lg md:text-xl lg:text-2xl text-white/90 font-['MinecrafterRegular'] tracking-[0.2em] uppercase absolute left-1/2 -translate-x-1/2 top-[75%]"
        style={{
          textShadow: '2px 2px 0px rgba(0, 0, 0, 0.2)',
          width: '100%'
        }}
      >
        Where Minecraft Meets Intelligence
      </h2>
    </div>
  );
}
