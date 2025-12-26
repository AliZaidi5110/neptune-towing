import React from 'react';
import { 
  Truck, 
  Phone, 
  Zap, 
  Fuel, 
  Settings, 
  RotateCcw, 
  Bike, 
  Package, 
  Star, 
  Trash2, 
  Home, 
  Navigation, 
  Shield, 
  Clock, 
  Car 
} from 'lucide-react';
import ServiceCard from './ServiceCard';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const services = [
    {
      icon: Truck,
      title: "Breakdown & Recovery",
      description: "Fast and reliable vehicle breakdown recovery service available 24/7 across all our coverage areas."
    },
    {
      icon: Phone,
      title: "Emergency Roadside Assistance",
      description: "Immediate roadside help when you need it most. Our team responds quickly to get you back on the road."
    },
    {
      icon: Car,
      title: "Vehicle Breakdown Recovery",
      description: "Professional vehicle recovery services for all types of breakdowns and mechanical failures."
    },
    {
      icon: Shield,
      title: "Accident Recovery",
      description: "Safe and secure accident recovery service with careful handling of damaged vehicles."
    },
    {
      icon: Navigation,
      title: "Motorway Recovery",
      description: "Specialized motorway recovery service ensuring your safety on high-speed roads."
    },
    {
      icon: Home,
      title: "Home Start Service",
      description: "Can't start your car at home? We'll come to you and get your vehicle running."
    },
    {
      icon: Zap,
      title: "Jump Start/Flat Battery",
      description: "Quick battery jump start service to get you moving when your battery lets you down."
    },
    {
      icon: Fuel,
      title: "Fuel Drain",
      description: "Wrong fuel? Don't panic. We'll safely drain and refuel your vehicle."
    },
    {
      icon: Settings,
      title: "Wheel Change/Puncture",
      description: "Professional tire change service for punctures and wheel-related issues."
    },
    {
      icon: RotateCcw,
      title: "Vehicle Winching & Off-Road",
      description: "Specialized winching service for vehicles stuck in difficult terrain or situations."
    },
    {
      icon: Package,
      title: "Vehicle Transport (Local & Long-Distance)",
      description: "Safe vehicle transportation services for both local and long-distance requirements."
    },
    {
      icon: Bike,
      title: "Motorcycle Recovery",
      description: "Specialized motorcycle recovery service with proper equipment and expertise."
    },
    {
      icon: Truck,
      title: "Light Commercial Vehicle Recovery",
      description: "Recovery services for vans, light trucks, and commercial vehicles up to 3.5 tonnes."
    },
    {
      icon: Star,
      title: "Classic & Prestige Car Transport",
      description: "Premium transport service for classic, luxury, and high-value vehicles with extra care."
    },
    {
      icon: Trash2,
      title: "Scrap Car Removal",
      description: "Environmentally responsible scrap car collection and disposal service."
    },
    {
      icon: Clock,
      title: "24/7 Emergency Response",
      description: "Round-the-clock emergency response team ready to assist you any time, day or night."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
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
            Our <span className="text-emergency-red">Recovery Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional vehicle recovery and roadside assistance services across Milton Keynes and surrounding areas. 
            We're here when you need us most.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-emergency-red to-emergency-orange rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Need Immediate Assistance?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Don't wait - our emergency response team is standing by 24/7
            </p>
            <a
              href="tel:631-856-4090"
              className="inline-flex items-center bg-white text-emergency-red font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 space-x-3"
            >
              <Phone className="w-6 h-6" />
              <span>CALL NOW: 631-856-4090</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;