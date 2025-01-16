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
    <section id="features" className="py-20" ref={ref}>
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
            Core Capabilities
          </h2>
          <div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/[0.02] rounded-lg p-8 md:p-10 hover:translate-y-[-4px] transition-transform duration-300 flex flex-col items-center text-center border border-white/[0.05]"
              >
                <div 
                  className="flex flex-col items-center"
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
                    className="w-24 h-24 md:w-32 md:h-32 object-contain mb-8"
                  />
                  <h3 className="text-xl md:text-2xl text-white/90 font-['MinecrafterRegular'] mb-4 leading-relaxed">
                    {feature.title}
                  </h3>
                  <p
                    className="text-base md:text-lg text-white/80 leading-relaxed max-w-lg"
                    style={{
                      opacity: isInView ? Math.min(scrollProgress * 2 - 0.2, 1) : 0,
                      transform: `translateY(${isInView ? "0" : "20px"})`,
                      transition: "all 600ms ease-out",
                      transitionDelay: `${index * 100 + 100}ms`,
                      textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </GlassContainer>
      </div>
    </section>
  );
}
