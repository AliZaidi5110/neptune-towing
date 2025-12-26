import React from 'react';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

interface LocationCardProps {
  location: string;
  index: number;
}

const LocationCard: React.FC<LocationCardProps> = ({ location, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg p-6 card-hover group text-center"
    >
      <div className="flex flex-col items-center space-y-4">
        <div className="bg-gradient-to-br from-trust-blue to-safety-green p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
          <MapPin className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-trust-dark group-hover:text-emergency-red transition-colors duration-300">
          {location}
        </h3>
        <p className="text-gray-600 text-sm">
          Full coverage area with rapid response times
        </p>
      </div>
    </motion.div>
  );
};

export default LocationCard;