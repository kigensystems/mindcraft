'use client';
import GlassContainer from './GlassContainer';

export default function HowItWorks() {
  return (
    <div className="w-full bg-transparent py-20">
      <div className="container mx-auto px-4">
        {/* Divider */}
        <div className="w-full max-w-4xl mx-auto mb-20 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
        
        <GlassContainer
          direction="up"
          delay={300}
          className="max-w-4xl mx-auto p-12 aspect-[2/1] flex flex-col justify-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white/90 opacity-0 animate-[fadeIn_1s_ease-out_0.6s_forwards]">
            How It Works
          </h2>
          <div className="grid grid-cols-3 gap-8 text-white/80">
            <div className="text-center opacity-0 animate-[fadeIn_1s_ease-out_0.8s_forwards]">
              <h3 className="text-xl font-semibold mb-3">Intelligent AI Integration</h3>
              <p className="text-base leading-relaxed">
                Advanced AI seamlessly integrates with your Minecraft world, providing smart
                assistance and dynamic interactions.
              </p>
            </div>
            <div className="text-center opacity-0 animate-[fadeIn_1s_ease-out_1s_forwards]">
              <h3 className="text-xl font-semibold mb-3">Natural Communication</h3>
              <p className="text-base leading-relaxed">
                Chat naturally with AI agents that understand context and remember past
                interactions.
              </p>
            </div>
            <div className="text-center opacity-0 animate-[fadeIn_1s_ease-out_1.2s_forwards]">
              <h3 className="text-xl font-semibold mb-3">Adaptive Learning</h3>
              <p className="text-base leading-relaxed">
                AI agents learn from interactions to create a personalized Minecraft
                experience.
              </p>
            </div>
          </div>
        </GlassContainer>
      </div>
    </div>
  );
}