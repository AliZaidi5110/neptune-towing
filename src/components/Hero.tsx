import React, { useState, useEffect } from 'react';
import { Phone, Calendar, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import ImageCarousel from './ImageCarousel';

const Hero: React.FC = () => {
  const [currentTagline, setCurrentTagline] = useState(0);
  
  const taglines = [
    "Fast. Safe. Reliable.",
    "Breakdown? Call us now!",
    "Recovery you can trust.",
    "24/7 Emergency Service"
  ];

  const carouselImages = [
    {
      src: './assets/img-1.jpg',
      alt: 'Professional tow truck providing roadside assistance',
      objectPosition: 'center center'
    },
    {
      src: './assets/img-2.jpg',
      alt: 'Emergency vehicle recovery service in action',
      objectPosition: 'center center'
    },
    {
      src: './assets/img-3.jpg',
      alt: 'Towing service helping stranded motorist',
      objectPosition: 'center center'
    },
    {
      src: './assets/img-4.jpg',
      alt: '24/7 breakdown recovery service',
      objectPosition: 'center center'
    },
    {
      src: './assets/img-5.jpg',
      alt: 'Professional towing team and equipment',
      objectPosition: 'center 20%'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [taglines.length]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 w-full h-full">
        <ImageCarousel 
          images={carouselImages}
          autoRotateInterval={10000}
          pauseOnHover={true}
          showArrows={true}
          showDots={true}
          className="w-full h-full"
        />
      </div>

      {/* Additional dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Headline */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Stuck? We'll{' '}
            <span className="text-yellow-300 animate-pulse">Pull You Out.</span>
          </motion.h1>

          {/* Rotating Taglines */}
          <motion.div 
            className="h-16 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.p
              key={currentTagline}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-3xl font-semibold text-white/95 drop-shadow-md"
            >
              {taglines[currentTagline]}
            </motion.p>
          </motion.div>

          {/* Service Areas */}
          <motion.p 
            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Serving Hampton Bays, Southampton, East Hampton, Montauk & The Hamptons
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="tel:631-856-4090"
              className="bg-white text-emergency-red font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-3 animate-pulse-slow"
            >
              <Phone className="w-6 h-6" />
              <span>CALL NOW</span>
            </a>
            <a
              href="#contact"
              className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-white hover:text-emergency-red transition-all duration-300 transform hover:scale-105 flex items-center space-x-3"
              onClick={(e) => {
                e.preventDefault();
                const contactElement = document.getElementById('contact');
                if (contactElement) {
                  const navbarHeight = 80;
                  const targetPosition = contactElement.offsetTop - navbarHeight;
                  window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              <Calendar className="w-6 h-6" />
              <span>BOOK NOW</span>
            </a>
          </motion.div>

          {/* 24/7 Badge */}
          <motion.div 
            className="inline-flex items-center bg-safety-green text-white px-6 py-3 rounded-full font-semibold text-lg animate-float shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            🚨 24/7 Emergency Service Available
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <a 
            href="#services" 
            className="text-white/70 hover:text-white transition-colors"
            onClick={(e) => {
              e.preventDefault();
              const servicesElement = document.getElementById('services');
              if (servicesElement) {
                const navbarHeight = 80;
                const targetPosition = servicesElement.offsetTop - navbarHeight;
                window.scrollTo({
                  top: targetPosition,
                  behavior: 'smooth'
                });
              }
            }}
          >
            <ArrowDown className="w-8 h-8 animate-bounce drop-shadow-md" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;