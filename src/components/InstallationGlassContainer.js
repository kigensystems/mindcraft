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
      className={`${className} mb-32 pb-12`} // Reduced bottom margin and padding to match new scale
    >
      {children}
    </GlassContainer>
  );
}
