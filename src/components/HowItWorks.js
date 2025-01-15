'use client';
import GlassContainer from './GlassContainer';
import useInView from '@/hooks/useInView';

export default function HowItWorks() {
  const [ref, isInView, scrollProgress] = useInView({
    rootMargin: '-20%'
  });

  const features = [
    {
      title: "Intelligent AI Integration",
      description: "Advanced AI seamlessly integrates with your Minecraft world, providing smart assistance and dynamic interactions."
    },
    {
      title: "Natural Communication",
      description: "Chat naturally with AI agents that understand context and remember past interactions."
    },
    {
      title: "Adaptive Learning",
      description: "AI agents learn from interactions to create a personalized Minecraft experience."
    }
  ];

  return (
    <div className="w-full bg-transparent py-20">
      <div className="container mx-auto px-4">
        {/* Divider */}
        <div className="w-full max-w-4xl mx-auto mb-20">
          <div 
            className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
            style={{
              transform: `scaleX(${isInView ? Math.min(scrollProgress * 1.5, 1) : 0})`,
              opacity: isInView ? Math.min(scrollProgress * 2, 1) : 0,
              transition: 'transform 600ms ease-out, opacity 600ms ease-out',
              transformOrigin: 'center'
            }}
          />
        </div>
        
        <div ref={ref} className="max-w-4xl mx-auto">
          <GlassContainer 
            direction="up"
            delay={0}
            className="p-12 aspect-[2/1] flex flex-col justify-center"
          >
            <h2 
              className="text-3xl md:text-4xl font-bold mb-8 text-center text-white/90"
              style={{
                transform: `translateY(${isInView ? '0' : '20%'})`,
                opacity: isInView ? Math.min(scrollProgress * 2, 1) : 0,
                transition: 'all 600ms ease-out'
              }}
            >
              How It Works
            </h2>
            <div className="grid grid-cols-3 gap-8 text-white/80">
              {features.map((feature, index) => {
                // Calculate progress for each feature based on scroll position
                // Each feature starts appearing at different scroll positions
                const featureProgress = Math.max(0, (scrollProgress * 3) - (index * 0.8));
                
                return (
                  <div 
                    key={feature.title}
                    className="text-center"
                    style={{
                      transform: `translateY(${isInView ? '0' : '30%'})`,
                      opacity: isInView ? Math.min(featureProgress, 1) : 0,
                      transition: 'all 600ms ease-out',
                      transitionDelay: `${index * 100}ms`
                    }}
                  >
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-base leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </GlassContainer>
        </div>
      </div>
    </div>
  );
}