import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselImage {
  src: string;
  alt: string;
  objectPosition?: string;
  mobileObjectPosition?: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  autoRotateInterval?: number;
  pauseOnHover?: boolean;
  showArrows?: boolean;
  showDots?: boolean;
  className?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  autoRotateInterval = 10000,
  pauseOnHover = true,
  showArrows = true,
  showDots = true,
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const inactivityTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-rotate functionality
  const startAutoRotate = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoRotateInterval);
  }, [autoRotateInterval, images.length]);

  const stopAutoRotate = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Resume auto-rotate after inactivity
  const resumeAfterInactivity = useCallback(() => {
    if (inactivityTimeoutRef.current) {
      clearTimeout(inactivityTimeoutRef.current);
    }
    inactivityTimeoutRef.current = setTimeout(() => {
      setIsPlaying(true);
    }, 5000);
  }, []);

  // Navigation functions
  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsPlaying(false);
    resumeAfterInactivity();
  }, [resumeAfterInactivity]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setIsPlaying(false);
    resumeAfterInactivity();
  }, [images.length, resumeAfterInactivity]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setIsPlaying(false);
    resumeAfterInactivity();
  }, [images.length, resumeAfterInactivity]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  // Keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goToPrevious();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      goToNext();
    }
  }, [goToPrevious, goToNext]);

  // Mouse handlers
  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPlaying(false);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsPlaying(true);
    }
  };

  // Effects
  useEffect(() => {
    if (isPlaying) {
      startAutoRotate();
    } else {
      stopAutoRotate();
    }

    return () => stopAutoRotate();
  }, [isPlaying, startAutoRotate, stopAutoRotate]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    return () => {
      if (inactivityTimeoutRef.current) {
        clearTimeout(inactivityTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div 
      className={`relative w-full h-screen overflow-hidden carousel-container ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-label="Image carousel"
    >
      {/* Images */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out carousel-slide ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              style={{ 
                objectPosition: image.objectPosition || 'center center',
                objectFit: 'cover'
              }}
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
        
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />
      </div>

      {/* Navigation Arrows - Hidden on mobile, visible on tablet+ */}
      {showArrows && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 group"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 group"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>
        </>
      )}

      {/* Navigation Dots */}
      {showDots && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${
                index === currentIndex
                  ? 'bg-white scale-110'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Screen reader only current slide indicator */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Slide {currentIndex + 1} of {images.length}
      </div>
    </div>
  );
};

export default ImageCarousel;