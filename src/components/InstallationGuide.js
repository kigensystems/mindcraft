'use client';
import GlassContainer from './GlassContainer';

export default function InstallationGuide() {
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
          className="max-w-4xl mx-auto p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white/90 opacity-0 animate-[fadeIn_1s_ease-out_0.6s_forwards]">
            Installation Guide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6 opacity-0 animate-[fadeIn_1s_ease-out_0.8s_forwards]">
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-white/90">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white/90">Download Minecraft</h3>
                <p className="text-base text-white/80">
                  Ensure you have Minecraft Java Edition installed and updated to the latest version
                </p>
              </div>
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-white/90">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white/90">Install Forge</h3>
                <p className="text-base text-white/80">
                  Download and install the Forge mod loader compatible with your Minecraft version
                </p>
              </div>
            </div>
            <div className="space-y-6 opacity-0 animate-[fadeIn_1s_ease-out_1s_forwards]">
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-white/90">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white/90">Install Mindcraft</h3>
                <p className="text-base text-white/80">
                  Download our mod and place it in your Minecraft mods folder
                </p>
              </div>
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-white/90">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white/90">Launch & Play</h3>
                <p className="text-base text-white/80">
                  Start Minecraft with the Forge profile and enjoy your enhanced AI experience
                </p>
              </div>
            </div>
          </div>
        </GlassContainer>
      </div>
    </div>
  );
}