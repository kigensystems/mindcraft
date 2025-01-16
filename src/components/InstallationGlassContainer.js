'use client';
import GlassContainer from './GlassContainer';

export default function InstallationGlassContainer({ 
  children, 
  className = "", 
  direction = "left",
  delay = 0 
}) {
  return (
    <GlassContainer
      direction={direction}
      delay={delay}
      className={`${className} mb-32 pb-12 !scale-100 md:!scale-100 lg:!scale-100 xl:!scale-100 2xl:!scale-100`}
    >
      {children}
    </GlassContainer>
  );
}
