"use client";
import GlassContainer from "./GlassContainer";
import useInView from "@/hooks/useInView";

export default function Features() {
  const [ref, isInView, scrollProgress] = useInView({
    rootMargin: "-10%",
  });

  const features = [
    {
      title: "Intelligent Building And Construction",
      description: "Watch in real-time as your agent understands and executes complex building instructions, from simple structures to elaborate architectural designs",
      icon: "/building.png"
    },
    {
      title: "Natural Language Communication",
      description: "Interact naturally with your agent, which understands context, remembers past interactions, and respond intelligently to your commands",
      icon: "/language.png"
    },
    {
      title: "Dynamic Learning",
      description: "your agent will learn from each interaction, adapting to your playstyle and becoming more effective over time",
      icon: "/learning.png"
    },
    {
      title: "Resource Management",
      description: "Let your agent help with resource collection, crafting, and inventory management using advanced pathfinding and decision-making",
      icon: "/resource.png"
    },
  ];

  return (
    <section id="features" className="py-2 -mt-4" ref={ref}>
      <div className="container mx-auto px-3 md:px-4">
        <GlassContainer
          direction="up"
          delay={0}
          className="!p-4 md:!p-6 !scale-90"
          disableHover={true}
        >
          <h2
            className="text-2xl md:text-3xl 2xl:text-4xl text-center mb-6 text-white/90 font-['MinecrafterRegular']"
            style={{
              opacity: isInView ? Math.min(scrollProgress * 2, 1) : 0,
              transform: `translateY(${isInView ? "0" : "20px"})`,
              transition: "all 600ms ease-out",
            }}
          >
            Core Capabilities
          </h2>
          <div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/[0.02] rounded-lg p-4 md:p-6 2xl:p-8 min-h-[300px] md:min-h-[350px] hover:translate-y-[-4px] hover:bg-white/[0.08] hover:border-white/40 transition-all duration-300 flex flex-col items-center justify-center text-center border border-white/[0.05] hover:shadow-[0_1rem_3rem_-0.5rem_rgba(255,255,255,0.1)] hover:scale-[1.02]"
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
                    className="w-16 h-16 md:w-20 md:h-20 2xl:w-24 2xl:h-24 object-contain mb-6 transition-transform duration-300 group-hover:scale-110"
                  />
                  <h3 className="text-base md:text-lg 2xl:text-xl text-white/90 font-['MinecrafterRegular'] mb-3 leading-relaxed transition-colors duration-300 group-hover:text-white">
                    {feature.title}
                  </h3>
                  <p
                    className="text-base md:text-lg 2xl:text-xl text-white/80 leading-relaxed max-w-lg transition-colors duration-300 group-hover:text-white/90"
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
