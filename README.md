# Neptune Towing - Professional Towing Website

A modern, responsive React website for Neptune Towing, a 24/7 car recovery and roadside assistance service operating in Hampton Bays and The Hamptons area.

## 🌐 Live Website
**https://alizaidi5110.github.io/neptune-towing**

## Features

- **Modern Design**: Clean, professional design with emergency service urgency
- **Mobile-First Responsive**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: Framer Motion animations and transitions
- **24/7 Emergency Focus**: Prominent call-to-action buttons throughout
- **Service Areas**: Hampton Bays, Southampton, East Hampton, Montauk, Westhampton, Bridgehampton

## Tech Stack

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **React Hook Form** for contact form
- **GitHub Pages** for hosting

## Quick Deployment

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Key Components

1. **Hero Section**: Eye-catching landing with auto-rotating image carousel and emergency CTAs
2. **Image Carousel**: Fully responsive auto-rotating carousel with touch/swipe support
3. **Areas We Cover**: Grid of service locations with professional imagery
4. **Services**: 16 recovery services with detailed cards
5. **About Us**: Company information with professional hero-style image
6. **Videos**: Service demonstration section with image previews
7. **Contact**: Contact form with validation and emergency contact info

## Carousel Features

- **Auto-rotation**: 10-second intervals with smooth fade transitions
- **Touch/Swipe Support**: Mobile-friendly swipe gestures
- **Keyboard Navigation**: Arrow key support for accessibility
- **Pause on Hover**: Auto-pause when hovering (desktop)
- **Navigation Dots**: Clickable indicators at bottom
- **Arrow Controls**: Left/right navigation (hidden on mobile)
- **Lazy Loading**: Performance-optimized image loading
- **Accessibility**: Full ARIA support and screen reader compatibility

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Fixed navigation with call button
│   ├── Hero.tsx            # Hero section with image carousel
│   ├── ImageCarousel.tsx   # Auto-rotating image carousel component
│   ├── Areas.tsx           # Service coverage areas
│   ├── Services.tsx        # 16 recovery services
│   ├── ServiceCard.tsx     # Individual service card component
│   ├── LocationCard.tsx    # Location coverage card
│   ├── About.tsx           # About section with hero-style image
│   ├── Videos.tsx          # Video/media section with previews
│   ├── Contact.tsx         # Contact form and info
│   ├── Footer.tsx          # Footer with links and info
│   └── FloatingCallButton.tsx # Mobile floating call button
├── App.tsx                 # Main app component
└── index.css              # Tailwind CSS imports and custom styles
```

## Contact Information

- **Phone**: 631-856-4090 (24/7 Emergency)
- **Email**: angelberrocal671@yahoo.com
- **Address**: 16 Neptune Ave, Hampton Bays, NY 11946
- **Service Areas**: Hampton Bays, Southampton, East Hampton, Montauk, Westhampton, Bridgehampton

## Build for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

---

*Professional website for Neptune Towing - Serving The Hamptons with 24/7 emergency towing and roadside assistance.*