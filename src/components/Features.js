"use client";
import GlassContainer from "./GlassContainer";
import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function Features() {
  const titleRef = useScrollAnimation({
    animation: 'fade-up',
    duration: 0.8,
    start: 'top 75%'
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
    <section id="features" className="py-2 -mt-4">
      <div className="container mx-auto px-3 md:px-4">
        <GlassContainer
          direction="up"
          delay={0}
          className="!p-4 md:!p-6 !scale-90"
          disableHover={true}
        >
          <h2
            ref={titleRef}
            className="text-2xl md:text-3xl 2xl:text-4xl text-center mb-6 mt-4 text-white/90 font-['MinecrafterRegular']"
          >
            Core Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {features.map((feature, index) => {
              const cardRef = useScrollAnimation({
                animation: 'fade-up',
                duration: 0.8,
                delay: index * 0.2,
                start: 'top 80%'
              });

              return (
                <div
                  key={index}
                  ref={cardRef}
                  className="group bg-white/[0.02] rounded-lg p-4 md:p-6 2xl:p-8 min-h-[350px] md:min-h-[400px] hover:translate-y-[-4px] hover:bg-white/[0.08] hover:border-white/40 transition-all duration-300 flex flex-col items-center justify-center text-center border border-white/[0.05] hover:shadow-[0_1rem_3rem_-0.5rem_rgba(255,255,255,0.1)] hover:scale-[1.02]"
                >
                  <div className="flex flex-col items-center">
                    <img
                      src={feature.icon}
                      alt=""
                      className="w-[5.5rem] h-[5.5rem] md:w-[6.5rem] md:h-[6.5rem] 2xl:w-28 2xl:h-28 object-contain mb-6 transition-transform duration-300 group-hover:scale-110"
                    />
                    <h3 className="text-[1.2rem] md:text-[1.3rem] 2xl:text-[1.4rem] text-white/90 font-['MinecrafterRegular'] mb-3 leading-relaxed transition-colors duration-300 group-hover:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-base md:text-lg 2xl:text-xl text-white/80 leading-relaxed max-w-lg transition-colors duration-300 group-hover:text-white/90">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </GlassContainer>
      </div>
    </section>
  );
}
