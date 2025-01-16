# Page Structure Analysis

## Main Page Components (Hierarchical Order)
1. AnimatedTitle
2. HeroSection
3. Features ("How It Works")
4. InstallationGuide
5. Footer

## Technical Features
- Uses 'use client' directive (Client-side Component)
- Implements scroll-based animations
  - Custom scroll percentage calculation
  - Quadratic ease-out animation
  - Performance optimized with requestAnimationFrame
  - Passive scroll listener for better performance

## Layout Structure
```
└── Main Content
    ├── Background Elements
    │   ├── background-wrapper
    │   └── background-overlay
    └── Content Wrapper
        └── Main Section
            ├── Title Section (150px top padding)
            ├── Hero Section
            ├── Features Section
            ├── Installation Guide
            └── Footer
```

## UI/UX Features
- Responsive container with padding (container mx-auto px-4)
- Centered content layout
- Full-width sections
- Custom scroll-based scaling effect
- Background layers for visual depth

## Performance Optimizations
- Throttled scroll handling
- RAF (RequestAnimationFrame) for smooth animations
- Passive scroll listener
- Cleanup on component unmount

## CSS Variables
- --scroll-scale: Dynamic variable for scroll-based animations

## Notes
- Modern React patterns (useEffect, functional components)
- Component-based architecture
- Tailwind CSS for styling
- Focus on performance and smooth animations
- Clear separation of concerns between components