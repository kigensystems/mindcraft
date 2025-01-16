"use client";
import GlassContainer from "./GlassContainer";
import useInView from "@/hooks/useInView";

export default function HeroSection() {
  const [ref, isInView, scrollProgress] = useInView({
    rootMargin: "-10%",
  });

  return (
    <div className="w-full bg-transparent pt-32">
      <div className="container mx-auto px-4">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Container */}
          <GlassContainer
            direction="left"
            delay={0}
            className="min-h-[500px] flex items-center justify-center p-12"
          >
            <div
              className={`w-full h-full ${isInView ? "steve-3d-wrapper" : ""}`}
              style={{
                opacity: isInView ? Math.min(scrollProgress * 1.5, 1) : 0,
                transform: `translateX(${isInView ? "0" : "-20%"})`,
                transition: "all 800ms ease-out",
                transitionDelay: "300ms",
              }}
            >
              <img
                src="/steveai.svg"
                alt="Steve with AI visualization"
                className={`w-full h-full object-contain ${
                  isInView ? "steve-3d" : ""
                }`}
              />
            </div>
          </GlassContainer>

          {/* Text Container */}
          <GlassContainer
            direction="right"
            delay={0}
            className="flex flex-col justify-center min-h-[500px] p-12 text-center"
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-8 text-white/90 mx-auto max-w-2xl"
              style={{
                transform: `translateX(${isInView ? "0" : "20%"})`,
                opacity: isInView ? Math.min(scrollProgress * 2, 1) : 0,
                transition: "all 600ms ease-out",
              }}
            >
              Build, Create, Explore Together
            </h2>
            <div className="space-y-8">
              <p
                className="text-base md:text-lg text-white/80 leading-relaxed mx-auto max-w-2xl"
                style={{
                  transform: `translateX(${isInView ? "0" : "20%"})`,
                  opacity: isInView ? Math.min((scrollProgress - 0.1) * 2, 1) : 0,
                  transition: "all 600ms ease-out",
                  transitionDelay: "100ms",
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
                }}
              >
                Mindcraft introduces a new era of gameplay where advanced AI
                agents become real teammates in your Minecraft world.
              </p>
              <p
                className="text-base md:text-lg text-white/80 leading-relaxed mx-auto max-w-2xl"
                style={{
                  transform: `translateX(${isInView ? "0" : "20%"})`,
                  opacity: isInView ? Math.min((scrollProgress - 0.1) * 2, 1) : 0,
                  transition: "all 600ms ease-out",
                  transitionDelay: "200ms",
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
                }}
              >
                These highly intelligent agents comprehend the 3D space around
                them, learn from every interaction, and collaborate with you.
              </p>
              <p
                className="text-base md:text-lg text-white/80 leading-relaxed mx-auto max-w-2xl"
                style={{
                  transform: `translateX(${isInView ? "0" : "20%"})`,
                  opacity: isInView ? Math.min((scrollProgress - 0.1) * 2, 1) : 0,
                  transition: "all 600ms ease-out",
                  transitionDelay: "300ms",
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
                }}
              >
                Whether you're constructing complex structures, exploring vast
                territories, or simply looking for a smarter way to play, these
                agents adapt to your style and enhance your Minecraft experience
                in ways previously unimaginable.
              </p>
            </div>
          </GlassContainer>
        </div>
      </div>
    </div>
  );
}
