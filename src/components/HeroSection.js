"use client";
import GlassContainer from "./GlassContainer";
import useInView from "@/hooks/useInView";

export default function HeroSection() {
  const [ref, isInView, scrollProgress] = useInView({
    rootMargin: "-10%",
  });

  const features = [
    {
      text: "Intelligent building assistance and automation",
      delay: 0,
    },
    {
      text: "Natural language communication with AI agents",
      delay: 0.2,
    },
    {
      text: "Dynamic world interaction and adaptation",
      delay: 0.4,
    },
  ];

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
              className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed"
              style={{
                transform: `translateX(${isInView ? "0" : "-15%"})`,
                opacity: isInView ? Math.min((scrollProgress - 0.1) * 2, 1) : 0,
                transition: "all 600ms ease-out",
                transitionDelay: "100ms",
              }}
            >
              Mindcraft introduces a new era of gameplay where advanced AI
              agents become real teammates in your Minecraft world. 
              These highly intelligent agents comprehend the 3D space around them, learn from every
              interaction, and collaborate with you. Whether
              you're constructing complex structures, exploring vast
              territories, or simply looking for a smarter way to play, these
              agents adapt to your style and enhance your Minecraft experience
              in ways previously unimaginable.
            </p>
            <div className="space-y-6 text-white/70 text-lg">
              {features.map((feature, index) => {
                const featureProgress = Math.max(
                  0,
                  scrollProgress * 3 - index * 0.4
                );

                return (
                  <div
                    key={index}
                    className="flex items-start space-x-4"
                    style={{
                      transform: `translateX(${isInView ? "0" : "-10%"})`,
                      opacity: isInView ? Math.min(featureProgress, 1) : 0,
                      transition: "all 600ms ease-out",
                      transitionDelay: `${200 + index * 100}ms`,
                    }}
                  >
                    <span
                      className="text-white/90 text-2xl"
                      style={{
                        transform: isInView ? "scale(1)" : "scale(0)",
                        transition: "transform 400ms ease-out",
                        transitionDelay: `${300 + index * 100}ms`,
                      }}
                    >
                      •
                    </span>
                    <p>{feature.text}</p>
                  </div>
                );
              })}
            </div>
          </GlassContainer>

          {/* Image Container */}
          <GlassContainer
            direction="right"
            delay={0}
            className="min-h-[500px] flex items-center justify-center p-12"
          >
            <div
              className="text-white/50 text-xl"
              style={{
                transform: `translateX(${isInView ? "0" : "20%"})`,
                opacity: isInView ? Math.min(scrollProgress * 1.5, 1) : 0,
                transition: "all 800ms ease-out",
                transitionDelay: "300ms",
              }}
            >
              Image Coming Soon
            </div>
          </GlassContainer>
        </div>
      </div>
    </div>
  );
}
