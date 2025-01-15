'use client';
import GlassContainer from './GlassContainer';
import useInView from '@/hooks/useInView';

export default function InstallationGuide() {
  const [ref, isInView, scrollProgress] = useInView({
    rootMargin: '-20%'
  });

  const steps = [
    {
      number: 1,
      title: "Download Minecraft",
      description: "Ensure you have Minecraft Java Edition installed and updated to the latest version"
    },
    {
      number: 2,
      title: "Install Forge",
      description: "Download and install the Forge mod loader compatible with your Minecraft version"
    },
    {
      number: 3,
      title: "Install Mindcraft",
      description: "Download our mod and place it in your Minecraft mods folder"
    },
    {
      number: 4,
      title: "Launch & Play",
      description: "Start Minecraft with the Forge profile and enjoy your enhanced AI experience"
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
        
        <div ref={ref}>
          <GlassContainer 
            direction="up" 
            delay={0}
            className="max-w-4xl mx-auto p-12"
          >
            <h2 
              className="text-3xl md:text-4xl font-bold mb-8 text-center text-white/90"
              style={{
                transform: `translateY(${isInView ? '0' : '20%'})`,
                opacity: isInView ? Math.min(scrollProgress * 2, 1) : 0,
                transition: 'all 600ms ease-out'
              }}
            >
              Installation Guide
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {steps.map((step, index) => {
                // Calculate progress for each step based on scroll position
                const stepProgress = Math.max(0, (scrollProgress * 4) - (index * 0.6));
                
                return (
                  <div 
                    key={step.number}
                    className="relative pl-8"
                    style={{
                      transform: `translateY(${isInView ? '0' : '30%'})`,
                      opacity: isInView ? Math.min(stepProgress, 1) : 0,
                      transition: 'all 600ms ease-out',
                      transitionDelay: `${index * 100}ms`
                    }}
                  >
                    <div 
                      className="absolute left-0 top-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center"
                      style={{
                        transform: isInView ? 'scale(1)' : 'scale(0)',
                        transition: 'transform 400ms ease-out',
                        transitionDelay: `${(index * 100) + 200}ms`
                      }}
                    >
                      <span className="text-white/90">{step.number}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white/90">{step.title}</h3>
                    <p className="text-base text-white/80">{step.description}</p>
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