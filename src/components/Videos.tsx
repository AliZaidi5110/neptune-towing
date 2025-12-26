import React from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

const Videos: React.FC = () => {
  const videoPlaceholders = [
    {
      title: "Emergency Roadside Recovery",
      description: "Watch how we handle emergency breakdowns with speed and professionalism",
      image: "./assets/img-7.jpg"
    },
    {
      title: "Accident Recovery Service", 
      description: "See our careful approach to accident recovery and vehicle transportation",
      image: "./assets/img-8.jpg"
    },
    {
      title: "Customer Testimonials",
      description: "Hear from satisfied customers about their experience with our service",
      image: "./assets/img-5.jpg"
    }
  ];

  return (
    <section id="videos" className="py-20 bg-white">
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
            Watch How We <span className="text-emergency-red">Help You</span> on the Road
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See our professional recovery services in action and hear from customers 
            who've experienced our reliable assistance.
          </p>
        </motion.div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoPlaceholders.map((video, index) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-100 rounded-xl overflow-hidden shadow-lg card-hover group"
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video overflow-hidden bg-gray-100">
                <img 
                  src={video.image}
                  alt={video.title}
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Play className="w-12 h-12 text-emergency-red" />
                  </div>
                </div>
              </div>
              
              {/* Video Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-trust-dark mb-3 group-hover:text-emergency-red transition-colors duration-300">
                  {video.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {video.description}
                </p>
              </div>
            </motion.div>
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
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-trust-dark mb-4">
              Ready to Experience Our Service?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Don't just watch - get the professional recovery service you deserve
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:631-856-4090"
                className="btn-primary"
              >
                Call Now: 631-856-4090
              </a>
              <a
                href="#contact"
                className="btn-secondary"
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
                Book Online
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Videos;