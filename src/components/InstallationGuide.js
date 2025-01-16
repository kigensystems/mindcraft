'use client';
import GlassContainer from './GlassContainer';
import useInView from '@/hooks/useInView';

export default function InstallationGuide() {
  const [ref, isInView, scrollProgress] = useInView({
    rootMargin: '-5%',
    threshold: 0.1
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
      description: [
        "5.1. Rename keys.example.json to keys.json and add your API key (you can edit this file with any text editor)",
        "5.2. Open andy.json and set your desired model (keys.json: \"OPENAI_API_KEY\", andy.json: \"gpt-4o-mini\")",
        "5.3. Open the \"mindcraft\" folder in terminal (right click > \"new terminal at folder\" or use \"cd /path/to/your/folder\") and run npm install",
        "5.4. Start a minecraft world and open it to LAN on port 55916",
        "5.5. Return to your terminal and type \"node main.js\" from the installed directory"
      ].join("\n\n")
    },
    {
      number: 6,
      title: "Launch & Play",
      description: "Start Minecraft with the Forge profile and enjoy your enhanced AI experience"
    }
  ];

  return (
    <div id="installationguide" className="w-full bg-transparent py-20">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {steps.map((step, index) => {
                // Calculate progress for each step based on scroll position
                const stepProgress = Math.max(0, Math.min(scrollProgress * 3 - (index * 0.05), 1));
                
                return (
                  <div
                    key={step.number}
                    className={`relative pl-8 ${step.number === 5 ? 'space-y-4' : ''}`}
                    style={{
                      transform: `translateY(${isInView ? '0' : '40px'})`,
                      opacity: stepProgress,
                      transition: 'all 800ms cubic-bezier(0.4, 0, 0.2, 1)',
                      transitionDelay: `${index * 50}ms`
                    }}
                  >
                    <div>
                      <div className="flex gap-2 mb-2">
                        <div
                          className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 self-center"
                          style={{
                            transform: isInView ? 'scale(1)' : 'scale(0)',
                            transition: 'transform 600ms cubic-bezier(0.4, 0, 0.2, 1)',
                            transitionDelay: `${index * 50}ms`
                          }}
                        >
                          <span className="text-white/90">{step.number}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-white/90">{step.title}</h3>
                      </div>
                      {step.number === 5 ? (
                        step.description.split('\n\n').map((text, idx) => (
                          <div key={idx} className="flex items-start gap-2 mb-4 last:mb-0">
                            <div className="w-4 h-4 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 mt-1">
                              <span className="text-white/70 text-xs">{idx + 1}</span>
                            </div>
                            <p className="text-base text-white/80 flex-1">
                              {text.replace(/^\d+\.\d+\.\s+/, '')}
                            </p>
                          </div>
                        ))
                      ) : (
                        <p className="text-base text-white/80">
                          {step.description}
                          {step.link && (
                            <a
                              href={step.link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#528a67] hover:text-[#528a67]/80 underline transition-colors duration-200"
                            >
                              {step.link.text}
                            </a>
                          )}
                          {step.description2}
                        </p>
                      )}
                    </div>
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
