import React from 'react';
import { Phone, MapPin, Facebook, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Videos', href: '#videos' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const services = [
    'Breakdown Recovery',
    'Emergency Assistance',
    'Accident Recovery',
    'Motorway Recovery',
    'Jump Start Service',
    'Fuel Drain',
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const navbarHeight = 80;
      const targetPosition = targetElement.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-trust-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Neptune <span className="text-emergency-red">Towing</span>
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Professional vehicle recovery and roadside assistance services 
                across The Hamptons and Long Island's East End. Available 24/7 for 
                all your emergency needs.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <button
                className="bg-gray-700 hover:bg-emergency-red p-3 rounded-full transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-gray-300 hover:text-emergency-red transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="tel:631-856-4090"
                  className="text-emergency-red hover:text-emergency-orange font-semibold transition-colors duration-300"
                >
                  Call Now
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emergency-red mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    16 Neptune Ave<br />
                    Hampton Bays, NY 11946<br />
                    United States
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emergency-red flex-shrink-0" />
                <a
                  href="tel:631-856-4090"
                  className="text-gray-300 hover:text-emergency-red transition-colors duration-300"
                >
                  631-856-4090
                </a>
              </div>
              
              <div className="bg-emergency-red/20 border border-emergency-red/30 rounded-lg p-4 mt-6">
                <p className="text-emergency-red font-semibold text-center">
                  🚨 24/7 Emergency Services
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Neptune Towing. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-emergency-red hover:bg-emergency-orange p-3 rounded-full transition-all duration-300 transform hover:scale-110 group"
          >
            <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;