# Styling System Documentation

## Typography System
### Fonts
1. Primary Fonts:
   - MinecrafterRegular (Custom Minecraft font)
   - MinecrafterAlt (Alternative Minecraft font)
   - Poppins (Google Font: 300, 400, 500, 600 weights)

### Font Usage
- Headings (h1-h6): MinecrafterRegular
- Navigation: MinecrafterAlt
- Body Text: Poppins (300 weight)
- Strong/Bold: Poppins (500 weight)

## Color System
### Base Colors (Minecraft Theme)
```css
--minecraft-stone: #7A7A7A
--minecraft-shadow: #404040
--minecraft-deepslate: #2F3640
--text-primary: #FFFFFF
--text-secondary: #E0E0E0
--background-primary: rgba(0, 0, 0, 0.55)
--background-secondary: rgba(47, 54, 64, 0.45)
--accent-green: #88C057
```

## Special Effects
### Glass Effect
- Subtle transparency (3% white)
- 8px blur effect
- White border (10% opacity)
- Hover state:
  - Increased transparency (6%)
  - Enhanced border opacity (20%)
  - Slight upward movement (-2px)

### 3D Title Effects
- Preserve-3D transforms
- Multiple layers for depth
- Floating animation
- Custom text shadows for pixelated look
- Hover effects with enhanced glow

### Navigation
- Blur effect background
- Gradient background
- Animated underline effect
- Green accent on hover
- Custom letter spacing

## Animations
1. Float Animation
   - Subtle Y-axis movement
   - X-rotation for 3D effect
   - 6-second duration

2. Fade In
   - Opacity transition
   - Upward movement
   - Smooth easing

3. Steve 3D Effect
   - Perspective transforms
   - Hover state enhancement
   - Drop shadow effects

## Responsive Design
### Container System
- Base: 100% width
- Max-width: 1280px
- Padding:
  - Default: 1rem
  - SM (640px+): 2rem
  - LG (1024px+): 4rem

## Background System
1. Main Background
   - Fixed positioning
   - Slight overflow (-5vh, -5vw)
   - Scale effect on scroll
   - 90% opacity

2. Overlay
   - Fixed gradient
   - Uses background variables
   - Z-index management

## Performance Optimizations
- will-change properties for animations
- transform-style: preserve-3d
- Passive scroll listeners
- Smooth scroll behavior
- Backdrop-filter optimizations

## CSS Architecture
- Tailwind integration
- Custom utility classes
- Component-specific styles
- Responsive breakpoints
- Animation keyframes
- Global reset styles

## Notes
- Heavy emphasis on 3D effects and depth
- Minecraft-inspired visual elements
- Performance-focused animations
- Consistent spacing system
- Mobile-first approach
- Accessible color contrast