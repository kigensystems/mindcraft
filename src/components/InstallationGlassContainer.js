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
      className={`${className} mb-64 pb-20`} // Increased bottom margin and padding even more
    >
      {children}
    </GlassContainer>
  );
}