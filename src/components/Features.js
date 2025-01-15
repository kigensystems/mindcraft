"use client";
import GlassContainer from "./GlassContainer";
import useInView from "@/hooks/useInView";

export default function Features() {
  const [ref, isInView, scrollProgress] = useInView({
    rootMargin: "-10%",
  });

  const features = [
    {
      title: "Intelligent Building & Construction",
      description: "Watch in real-time as your agent understands and executes complex building instructions, from simple structures to elaborate architectural designs",
      icon: "/building.png"
    },
    {
      title: "Natural Language Communication",
      description: "Interact naturally with AI agents that understand context, remember past interactions, and respond intelligently to your commands",
      icon: "/language.png"
    },
    {
      title: "Dynamic Learning",
      description: "Experience AI that learns from each interaction, adapting to your playstyle and becoming more effective over time",
      icon: "/learning.png"
    },
    {
      title: "Resource Management",
      description: "Let AI companions help with resource collection, crafting, and inventory management using advanced pathfinding and decision-making",
      icon: "/resource.png"
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2
          className="text-4xl md:text-5xl text-center mb-16 text-white/90"
          style={{
            opacity: isInView ? Math.min(scrollProgress * 2, 1) : 0,
            transform: `translateY(${isInView ? "0" : "20px"})`,
            transition: "all 600ms ease-out",
          }}
        >
          Core Capabilities
        </h2>
        <GlassContainer
          direction="up"
          delay={0}
          className="p-10 md:p-12 max-w-5xl mx-auto"
        >
          <div ref={ref} className="space-y-12">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <div 
                  className="flex items-center gap-6 mb-6"
                  style={{
                    opacity: isInView ? Math.min(scrollProgress * 2, 1) : 0,
                    transform: `translateY(${isInView ? "0" : "20px"})`,
                    transition: "all 600ms ease-out",
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <img 
                    src={feature.icon} 
                    alt="" 
                    className="w-12 h-12 md:w-16 md:h-16 object-contain"
                  />
                  <h3 className="text-2xl md:text-3xl text-white/90 flex-1">
                    {feature.title}
                  </h3>
                </div>
                <p
                  className="text-lg text-white/80 leading-relaxed pl-[72px] md:pl-[88px]"
                  style={{
                    opacity: isInView ? Math.min(scrollProgress * 2 - 0.2, 1) : 0,
                    transform: `translateY(${isInView ? "0" : "20px"})`,
                    transition: "all 600ms ease-out",
                    transitionDelay: `${index * 100 + 100}ms`,
                  }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </GlassContainer>
      </div>
    </section>
  );
}
