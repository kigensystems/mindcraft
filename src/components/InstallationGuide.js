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
      description: "Download Minecraft Java Edition v1.20.4 from the official website: ",
      link: {
        url: "https://www.minecraft.net/en-us/article/minecraft-java-edition-1-20-4",
        text: "Click here to download Minecraft v1.20.4"
      }
    },
    {
      number: 2,
      title: "Install Node.js",
      description: "Download and install Node.js from the official website: ",
      link: {
        url: "https://nodejs.org/en",
        text: "Click here to download Node.js"
      }
    },
    {
      number: 3,
      title: "Obtain your API Key",
      description: "The full list of supported models is available on our Github. We recommend ",
      link: {
        url: "https://openai.com/index/openai-api/",
        text: "OpenAI."
      }
    },
    {
      number: 4,
      title: "Download Mindcraft",
      description: "Visit our Github ",
      link: {
        url: "https://github.com/kolbytn/mindcraft",
        text: "here"
      },
      description2: ", clone or download the repository."
    },
    {
      number: 5,
      title: "Setup and Configuration",
      description: "5.1. Rename keys.example.json to keys.json and add your API key\n     (you can edit this file with any text editor or notepad)\n\n\n5.2. Open andy.json and set your desired model\n     For example, keys.json would be \"OPENAI_API_KEY\" and\n     andy.json would be \"gpt-4o-mini\"\n\n\n5.3. Open the \"mindcraft\" folder in the terminal\n     (right click > \"new terminal at folder\" or\n     use \"cd /path/to/your/folder\")\n     and run npm install\n\n\n5.4. Start a minecraft world and open it to LAN\n     on localhost port 55916\n\n\n5.5. Return to your terminal and type \"node main.js\"\n     from the installed directory"
    },
    {
      number: 6,
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
                    <p className="text-base text-white/80">
                      {step.description}
                      {step.link && (
                        <a
                          href={step.link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#88C057] hover:text-[#a3d578] underline transition-colors duration-200"
                        >
                          {step.link.text}
                        </a>
                      )}
                      {step.description2}
                    </p>
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
