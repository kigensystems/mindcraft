"use client";
import GlassContainer from "./GlassContainer";
import useInView from "@/hooks/useInView";

export default function HeroSection() {
  const [ref, isInView, scrollProgress] = useInView({
    rootMargin: "-10%",
  });

  return (
    <div className="w-full bg-transparent -mt-20">
      <div className="container mx-auto px-4">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Text Container */}
          <GlassContainer
            direction="left"
            delay={0}
            className="flex flex-col justify-center min-h-[500px] p-12"
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-8 text-white/90"
              style={{
                transform: `translateX(${isInView ? "0" : "-20%"})`,
                opacity: isInView ? Math.min(scrollProgress * 2, 1) : 0,
                transition: "all 600ms ease-out",
              }}
            >
              Where Minecraft Meets Intelligence
            </h2>
            <p
              className="text-lg md:text-xl text-white/80 mb-14 leading-[1.8] font-semibold tracking-wide"
              style={{
                transform: `translateX(${isInView ? "0" : "-15%"})`,
                opacity: isInView ? Math.min((scrollProgress - 0.1) * 2, 1) : 0,
                transition: "all 600ms ease-out",
                transitionDelay: "100ms",
              }}
            >
              Mindcraft introduces a new era of gameplay where advanced AI
              agents become real teammates in your Minecraft world.
              <br /><br />
              These highly intelligent agents comprehend the 3D space around them, learn from every
              interaction, and collaborate with you.
              <br /><br />
              Whether you're constructing complex structures, exploring vast
              territories, or simply looking for a smarter way to play, these
              agents adapt to your style and enhance your Minecraft experience
              in ways previously unimaginable.
            </p>
            <div className="space-y-8 text-white/70 text-lg">
           
             
           
            </div>
          </GlassContainer>

          {/* Image Container */}
          <GlassContainer
            direction="right"
            delay={0}
            className="min-h-[500px] flex items-center justify-center p-12"
          >
            <img
              src="/steveai.svg"
              alt="Steve with AI visualization"
              className="w-full h-full object-contain"
              style={{
                transform: `translateX(${isInView ? "0" : "20%"})`,
                opacity: isInView ? Math.min(scrollProgress * 1.5, 1) : 0,
                transition: "all 800ms ease-out",
                transitionDelay: "300ms",
              }}
            />
          </GlassContainer>
        </div>
      </div>
    </div>
  );
}
