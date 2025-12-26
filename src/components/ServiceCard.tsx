import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg p-6 card-hover group"
    >
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Icon */}
        <div className="bg-gradient-to-br from-emergency-red to-emergency-orange p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-white" />
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-semibold text-trust-dark group-hover:text-emergency-red transition-colors duration-300">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
        
        {/* Book Now Button */}
        <button className="w-full bg-trust-blue hover:bg-emergency-red text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform group-hover:scale-105">
          Book Now
        </button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;