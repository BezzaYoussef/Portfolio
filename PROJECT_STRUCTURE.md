# Project Structure

## Overview
A bilingual (EN/FR) 3D AI-themed portfolio built with Next.js, React Three Fiber, and TypeScript.

## Key Features
- ✅ 3D rotating AI core with neural network visualization
- ✅ Three orbiting rings (Skills, Projects, Experience)
- ✅ Night/Light theme toggle
- ✅ EN/FR language toggle
- ✅ Interactive 3D elements with hover/click effects
- ✅ Smooth camera animations
- ✅ Responsive design for mobile and desktop
- ✅ Glassmorphism UI panels
- ✅ Navigation menu for all sections

## File Structure

```
Portfolio_Youssef/
├── app/
│   ├── globals.css          # Global styles with theme backgrounds
│   ├── layout.tsx           # Root layout with providers
│   └── page.tsx             # Main page component
├── components/
│   ├── AICore.tsx           # 3D AI core with neural network
│   ├── CameraController.tsx # Smooth camera animations
│   ├── HeroOverlay.tsx      # Hero section with name/title
│   ├── Navigation.tsx       # Bottom navigation menu
│   ├── OrbitingElements.tsx # Three orbiting rings with cards
│   ├── Particles.tsx        # Floating particle system
│   ├── Scene.tsx            # Main 3D scene container
│   └── SectionPanel.tsx     # Modal panels for content
├── contexts/
│   ├── LanguageProvider.tsx # i18n context (EN/FR)
│   └── ThemeProvider.tsx    # Theme context (Night/Light)
├── lib/
│   └── translations.ts      # Translation content (ready for CV data)
└── Configuration files...

```

## How to Add Your Content

Edit `lib/translations.ts` to add your actual CV content:

1. **Experience**: Update `experience.items[]` with your work history
2. **Projects**: Update `projects.items[]` with your projects
3. **Skills**: Already structured, just verify the items
4. **Contact**: Update email, GitHub, location
5. **About**: Update the bio content

## Running the Project

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Customization

- **Colors**: Edit theme colors in `tailwind.config.js` and component files
- **3D Elements**: Adjust orbits, speeds, and positions in `OrbitingElements.tsx`
- **Neural Network**: Modify node count and connections in `AICore.tsx`
- **Animations**: Adjust speeds in `useFrame` hooks throughout components

