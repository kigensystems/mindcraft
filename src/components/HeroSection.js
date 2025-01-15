'use client';
import GlassContainer from './GlassContainer';

export default function HeroSection() {
  return (
    <div className="w-full bg-transparent -mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Text Container */}
          <GlassContainer direction="left" delay={500} className="flex flex-col justify-center min-h-[500px] p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white/90">
              Revolutionizing Minecraft with AI
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
              Experience the next generation of Minecraft gameplay with our advanced AI agents. 
              Build, explore, and interact with intelligent NPCs that adapt and learn from their environment.
            </p>
            <div className="space-y-6 text-white/70 text-lg">
              <div className="flex items-start space-x-4">
                <span className="text-white/90 text-2xl">•</span>
                <p>Intelligent building assistance and automation</p>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-white/90 text-2xl">•</span>
                <p>Natural language communication with AI agents</p>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-white/90 text-2xl">•</span>
                <p>Dynamic world interaction and adaptation</p>
              </div>
            </div>
          </GlassContainer>

          {/* Image Container */}
          <GlassContainer direction="right" delay={700} className="min-h-[500px] flex items-center justify-center p-12">
            <div className="text-white/50 text-xl">
              Image Coming Soon
            </div>
          </GlassContainer>
        </div>
      </div>
    </div>
  );
}