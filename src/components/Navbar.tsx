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
      <div className="max-w-7xl mx-auto navbar-container px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center min-h-[60px] navbar-mobile-fix">
          {/* Logo - Clickable to go to landing page */}
          <div className="flex-shrink-0 flex-1 min-w-0 logo">
            <a 
              href="#hero" 
              className="block transition-colors duration-300 hover:opacity-80"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-trust-dark truncate">
                Neptune <span className="text-emergency-red">Towing</span>
              </h1>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-700 hover:text-emergency-red px-3 py-2 text-sm font-medium transition-colors duration-300 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Call Now Button */}
          <div className="hidden md:block flex-shrink-0">
            <a
              href="tel:631-856-4090"
              className="btn-primary flex items-center space-x-2 animate-pulse-slow whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              <span>CALL NOW: 631-856-4090</span>
            </a>
          </div>

          {/* Mobile menu section */}
          <div className="md:hidden flex items-center space-x-1 flex-shrink-0 mobile-buttons">
            {/* Mobile Call Button */}
            <a
              href="tel:631-856-4090"
              className="bg-emergency-red hover:bg-emergency-orange text-white p-2.5 rounded-lg transition-colors duration-300 flex-shrink-0"
              aria-label="Call now"
            >
              <Phone className="w-4 h-4" />
            </a>
            
            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-emergency-red p-2.5 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-emergency-red flex-shrink-0"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-2 pb-3 space-y-1 bg-white shadow-lg border-t border-gray-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  handleNavClick(e, link.href);
                  setIsOpen(false);
                }}
                className="text-gray-700 hover:text-emergency-red hover:bg-gray-50 block px-3 py-3 text-base font-medium rounded-lg transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            
            {/* Mobile Full Call Button */}
            <div className="pt-4 border-t border-gray-200">
              <a
                href="tel:631-856-4090"
                className="btn-primary w-full text-center flex items-center justify-center space-x-2 py-3"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="w-5 h-5" />
                <span>CALL NOW: 631-856-4090</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;