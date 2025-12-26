import React from 'react';
import LocationCard from './LocationCard';
import { motion } from 'framer-motion';

const Areas: React.FC = () => {
  const locations = [
    'Hampton Bays',
    'Southampton',
    'East Hampton',
    'Montauk',
    'Westhampton',
    'Bridgehampton'
  ];

  return (
    <section id="areas" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-trust-dark mb-6">
            Areas We <span className="text-emergency-red">Cover</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fast, reliable recovery services across Long Island's East End. 
            Wherever you are in The Hamptons, we'll be there quickly.
          </p>
        </motion.div>

        {/* Professional Service Image with Better Layout */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="relative h-80 lg:h-96">
                <img 
                  src="/assets/img-9.png" 
                  alt="Professional towing service covering The Hamptons area"
                  className="w-full h-full object-contain bg-gray-100"
                  loading="lazy"
                />
              </div>
              
              {/* Content Side */}
              <div className="p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-trust-blue to-trust-dark text-white">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Comprehensive Coverage
                </h3>
                <h4 className="text-xl lg:text-2xl font-semibold mb-6 text-yellow-300">
                  Across The Hamptons
                </h4>
                <p className="text-lg opacity-90 leading-relaxed mb-6">
                  Our professional team provides reliable 24/7 towing and recovery services throughout Long Island's East End. 
                  We're strategically positioned to reach you quickly, no matter where you are.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 rounded-full p-3">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-semibold">Fast Response Times</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {locations.map((location, index) => (
            <LocationCard
              key={location}
              location={location}
              index={index}
            />
          ))}
        </div>

        {/* Coverage Info */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-emergency-red to-emergency-orange rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Not Sure If We Cover Your Area?
            </h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Give us a call - we often provide services beyond our main coverage areas and can arrange assistance for you.
            </p>
            <a
              href="tel:631-856-4090"
              className="inline-flex items-center bg-white text-emergency-red font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Check Coverage: 631-856-4090
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Areas;