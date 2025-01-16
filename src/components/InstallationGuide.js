'use client';
import InstallationGlassContainer from './InstallationGlassContainer';
import useScrollAnimation from '@/hooks/useScrollAnimation';

export default function InstallationGuide() {
  const titleRef = useScrollAnimation({
    animation: 'fade-up',
    duration: 0.8,
    start: 'top 75%'
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
    <section id="installationguide" className="pt-2 -mt-4 installation-guide">
      <div className="container mx-auto px-3 md:px-4">
        <InstallationGlassContainer
          direction="up"
          delay={0}
          className="max-w-4xl mx-auto p-6 md:p-8"
        >
          <h2
            ref={titleRef}
            className="text-2xl md:text-3xl lg:text-4xl text-center mb-10 text-white/90 font-['MinecrafterRegular']"
          >
            Installation Guide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {steps.map((step, index) => {
              const stepRef = useScrollAnimation({
                animation: 'fade-up',
                duration: 0.8,
                delay: index * 0.15,
                start: 'top 80%'
              });

              return (
                <div
                  key={step.number}
                  ref={stepRef}
                  className={`relative pl-8 ${step.number === 5 ? 'space-y-4' : ''}`}
                >
                  <div>
                    <div className="flex gap-2 mb-2">
                      <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 self-center text-sm">
                        <span className="text-white/90">{step.number}</span>
                      </div>
                      <h3 className="text-[1.25rem] font-semibold text-white/90">{step.title}</h3>
                    </div>
                    {step.number === 5 ? (
                      step.description.split('\n\n').map((text, idx) => (
                        <div key={idx} className="flex items-start gap-2 mb-4 last:mb-0">
                          <div className="w-3.5 h-3.5 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-white/70 text-xs">{idx + 1}</span>
                          </div>
                          <p className="text-[1.1rem] text-white/80 flex-1">
                            {text.replace(/^\d+\.\d+\.\s+/, '')}
                          </p>
                        </div>
                      ))
                    ) : (
                      <p className="text-[1.1rem] text-white/80">
                        {step.description}
                        {step.link && (
                          <a
                            href={step.link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#6ee7b7] hover:text-[#6ee7b7] underline transition-all duration-200 installation-link"
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
        </InstallationGlassContainer>
      </div>
    </section>
  );
}
