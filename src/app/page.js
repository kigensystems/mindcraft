import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col">
      {/* Title Section */}
      <div className="w-full pt-[150px] pb-[100px]">
        <div className="container mx-auto px-4 text-center">
          <div className="relative inline-block">
            <h1 className="minecraft-title text-7xl sm:text-8xl md:text-9xl tracking-wider">
              <span className="hero-shadow-deep">MINDCRAFT</span>
              <span className="hero-shadow">MINDCRAFT</span>
              <span className="hero-main">MINDCRAFT</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Hero Section with Glass Containers */}
      <div className="w-full">
        <HeroSection />
      </div>

      {/* How It Works Section */}
      <div className="w-full">
        <HowItWorks />
      </div>
    </main>
  );
}
