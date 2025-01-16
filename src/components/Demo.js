'use client';
import GlassContainer from "./GlassContainer";
import useInView from "@/hooks/useInView";

export default function Demo() {
  const [ref, isInView, scrollProgress] = useInView({
    rootMargin: "-10%",
  });

  return (
    <section id="demo" className="py-20" ref={ref}>
      <div className="container mx-auto">
        <GlassContainer
          direction="up"
          delay={0}
          className="p-10 md:p-12"
        >
          <h2
            className="text-4xl md:text-5xl text-center mb-16 text-white/90 font-['MinecrafterRegular']"
            style={{
              opacity: isInView ? Math.min(scrollProgress * 2, 1) : 0,
              transform: `translateY(${isInView ? "0" : "20px"})`,
              transition: "all 600ms ease-out",
            }}
          >
            Watch MINDcraft in Action
          </h2>

          {/* Video Placeholder */}
          <div
            className="aspect-video w-full max-w-4xl mx-auto bg-white/5 rounded-lg overflow-hidden"
            style={{
              opacity: isInView ? Math.min(scrollProgress * 2, 1) : 0,
              transform: `translateY(${isInView ? "0" : "20px"})`,
              transition: "all 600ms ease-out",
              transitionDelay: "200ms",
            }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-white/50 text-lg">
                Demo video coming soon
              </div>
            </div>
          </div>
        </GlassContainer>
      </div>
    </section>
  );
}