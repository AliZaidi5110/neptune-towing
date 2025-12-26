import React from 'react';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingCallButton: React.FC = () => {
  return (
    <motion.a
      href="tel:631-856-4090"
      className="fixed bottom-6 right-6 z-50 bg-emergency-red hover:bg-emergency-orange text-white p-4 rounded-full shadow-2xl md:hidden"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Phone className="w-6 h-6 animate-pulse" />
    </motion.a>
  );
};

export default FloatingCallButton;