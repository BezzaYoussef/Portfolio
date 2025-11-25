# Youssef Bezza - 3D AI Portfolio

A bilingual (EN/FR) 3D developer portfolio with an AI theme, built with Next.js, React Three Fiber, and TypeScript.

## Features

- 🌓 Night/Light theme toggle
- 🌍 EN/FR language toggle
- 🎨 3D rotating AI core with neural network visualization
- 🪐 Orbiting elements (Skills, Projects, Experience)
- 🎬 Smooth camera animations
- 📱 Responsive design
- 📧 Contact form with email functionality

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Contact Form Setup

The contact form uses EmailJS to send emails. To enable email functionality:

1. **Create a `.env.local` file** in the root directory
2. **Add your EmailJS credentials**:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```
3. **Get your credentials** from [EmailJS](https://www.emailjs.com) (free account available)
4. See `EMAILJS_SETUP.md` for detailed setup instructions

**Note:** If EmailJS is not configured, the form will fall back to opening your default email client.

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Three.js / React Three Fiber
- Tailwind CSS
- Framer Motion
- EmailJS (for contact form)

