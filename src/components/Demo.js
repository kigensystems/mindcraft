'use client';
import GlassContainer from "./GlassContainer";
import useInView from "@/hooks/useInView";
import { useRef, useState, useCallback } from "react";

export default function Demo() {
  const [ref, isInView, scrollProgress] = useInView({
    rootMargin: "-10%",
  });
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = useCallback(async () => {
    if (!videoRef.current) return;
    
    try {
      if (isPlaying) {
        await videoRef.current.pause();
      } else {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          await playPromise;
        }
      }
      setIsPlaying(!isPlaying);
    } catch (error) {
      console.error('Error toggling play state:', error);
      setIsPlaying(videoRef.current.paused);
    }
  }, [isPlaying]);

  const handleTimeUpdate = useCallback(() => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      setDuration(videoRef.current.duration);
    }
  }, []);

  const handleSeek = useCallback((e) => {
    if (!videoRef.current) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    videoRef.current.currentTime = percentage * videoRef.current.duration;
  }, []);

  const handleVideoEnd = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const formatTime = useCallback((time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }, []);

  return (
    <section id="demo" className="w-full py-2 -mt-4" ref={ref}>
      <div className="container mx-auto px-3 md:px-4">
        <GlassContainer
          direction="up"
          delay={0}
          className="max-w-4xl mx-auto !p-6 md:!p-8 !scale-90"
        >
          <h2
            className="text-2xl md:text-3xl 2xl:text-4xl text-center my-8 mx-auto text-white/90 font-['MinecrafterRegular'] tracking-wide leading-relaxed"
            style={{
              opacity: isInView ? Math.min(scrollProgress * 2, 1) : 0,
              transform: `translateY(${isInView ? "0" : "20px"})`,
              transition: "all 600ms ease-out",
            }}
          >
            Watch DEEPSTEVE in Action
          </h2>

          <div
            className="w-full rounded-lg overflow-hidden relative group"
            style={{
              maxWidth: "100%",
              opacity: isInView ? Math.min(scrollProgress * 2, 1) : 0,
              transform: `translateY(${isInView ? "0" : "20px"})`,
              transition: "all 600ms ease-out",
              transitionDelay: "200ms",
              backdropFilter: "blur(4px)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              position: "relative",
              zIndex: 1
            }}
          >
            <div className="relative w-full h-full">
              <div className="relative w-full h-full">
                <video
                  ref={videoRef}
                  className="w-full h-full object-contain"
                  onTimeUpdate={handleTimeUpdate}
                  onEnded={handleVideoEnd}
                  onClick={togglePlay}
                  playsInline
                  preload="metadata"
                >
                  <source src="/demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Play Button Overlay */}
                {!isPlaying && (
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer group/play z-50"
                    onClick={togglePlay}
                    style={{ pointerEvents: 'auto' }}
                  >
                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transform group-hover/play:scale-110 transition-all duration-300">
                      <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-white border-b-[15px] border-b-transparent ml-2"></div>
                    </div>
                    <span className="absolute mt-24 text-white/90 font-['MinecrafterRegular'] text-sm">Click to Play</span>
                  </div>
                )}
              </div>
            </div>

            {/* Custom Controls */}
            <div 
              className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-2 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Play/Pause Button */}
              <div className="flex items-center gap-4">
                <button
                  onClick={togglePlay}
                  className="text-white/90 hover:text-white hover:scale-110 transition-all px-2 font-['MinecrafterRegular']"
                >
                  {isPlaying ? '❚❚' : '▶'}
                </button>

                {/* Time Display */}
                <div className="text-white/90 font-['MinecrafterRegular'] text-sm">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </div>

                {/* Progress Bar */}
                <div
                  className="flex-1 h-2 bg-white/20 cursor-pointer rounded relative mx-4"
                  onClick={handleSeek}
                >
                  <div
                    className="absolute top-0 left-0 h-full bg-[#528a67] rounded"
                    style={{
                      width: `${(currentTime / duration) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </GlassContainer>
      </div>
    </section>
  );
}
