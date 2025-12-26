import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Videos', href: '#videos' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const navbarHeight = 80; // Approximate navbar height
      const targetPosition = targetElement.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo - Clickable to go to landing page */}
          <div className="flex-shrink-0">
            <a 
              href="#hero" 
              className="block transition-colors duration-300 hover:opacity-80"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <h1 className="text-2xl font-bold text-trust-dark">
                Neptune <span className="text-emergency-red">Towing</span>
              </h1>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-700 hover:text-emergency-red px-3 py-2 text-sm font-medium transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Call Now Button */}
          <div className="hidden md:block">
            <a
              href="tel:631-856-4090"
              className="btn-primary flex items-center space-x-2 animate-pulse-slow"
            >
              <Phone className="w-4 h-4" />
              <span>CALL NOW: 631-856-4090</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <a
              href="tel:631-856-4090"
              className="btn-primary p-2"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-emergency-red"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  handleNavClick(e, link.href);
                  setIsOpen(false);
                }}
                className="text-gray-700 hover:text-emergency-red block px-3 py-2 text-base font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:631-856-4090"
              className="btn-primary w-full text-center mt-4 flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>CALL NOW: 631-856-4090</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;