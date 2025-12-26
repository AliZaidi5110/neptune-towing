import React from 'react';
import { Shield, Clock, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Emergency response team ready around the clock, every day of the year"
    },
    {
      icon: Shield,
      title: "Fully Licensed & Insured",
      description: "Comprehensive coverage and proper licensing for your complete protection"
    },
    {
      icon: Users,
      title: "Expert Recovery Team",
      description: "Certified professionals with extensive training in safe vehicle recovery"
    },
    {
      icon: Award,
      title: "Decade of Excellence",
      description: "Over 10 years of trusted service with thousands of satisfied customers"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-trust-dark mb-6">
              About <span className="text-emergency-red">Neptune Towing</span>
            </h2>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                <strong>Neptune Towing</strong> stands as The Hamptons' premier vehicle recovery and roadside assistance provider, 
                delivering exceptional service with over a decade of proven expertise. We've built our reputation on reliability, 
                professionalism, and unwavering commitment to customer satisfaction across Long Island's East End.
              </p>
              
              <p>
                When automotive emergencies strike, every minute counts. Our strategically positioned fleet and highly trained 
                technicians ensure rapid response times, typically arriving within 15-30 minutes of your call. Whether you're 
                stranded on Montauk Highway or need assistance in downtown Southampton, we're equipped to handle any situation 
                with precision and care.
              </p>
              
              <p>
                From minor roadside repairs and battery jump-starts to complex accident recovery and long-distance towing, 
                our comprehensive services cover every aspect of vehicle assistance. We treat each customer's vehicle as if 
                it were our own, employing state-of-the-art equipment and industry-best practices to ensure safe, damage-free 
                transportation every time.
              </p>
              
              <p>
                <em>Your peace of mind is our priority.</em> That's why we maintain full licensing, comprehensive insurance coverage, 
                and 24/7 availability – because emergencies don't wait for business hours. Trust Neptune Towing to get you back 
                on the road safely and efficiently.
              </p>
            </div>

            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <a
                href="#contact"
                className="btn-primary inline-flex items-center space-x-2"
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
                <span>Get Emergency Assistance</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Image & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* High-Conversion Hero Banner */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="./assets/img-6.jpg"
                alt="Modern flatbed tow truck carrying a car - Neptune Towing professional service"
                className="w-full h-80 md:h-96 lg:h-[28rem] object-cover object-center"
                loading="lazy"
              />
              
              {/* Professional Text Overlay - Bottom with Dark Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-10">
                  <div className="max-w-4xl mx-auto text-center text-white text-overlay-professional">
                    {/* Main Headline */}
                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-shadow-strong">
                      24/7 EMERGENCY
                      <span className="block text-yellow-300">TOWING SERVICE</span>
                    </h3>
                    
                    {/* Subheadline */}
                    <div className="text-lg md:text-xl lg:text-2xl font-medium leading-relaxed mb-8 text-shadow-strong opacity-95">
                      <p className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4">
                        <span className="flex items-center">
                          <svg className="w-5 h-5 mr-2 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          Serving Your Area
                        </span>
                        <span className="hidden md:inline text-yellow-300">•</span>
                        <span className="flex items-center">
                          <svg className="w-5 h-5 mr-2 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          </svg>
                          Fast Arrival
                        </span>
                        <span className="hidden md:inline text-yellow-300">•</span>
                        <span className="flex items-center">
                          <svg className="w-5 h-5 mr-2 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Trusted Professionals
                        </span>
                      </p>
                    </div>
                    
                    {/* CTA Button */}
                    <div className="flex justify-center">
                      <a
                        href="tel:631-856-4090"
                        className="inline-flex items-center bg-emergency-red hover:bg-emergency-orange text-white font-bold py-5 px-10 rounded-xl text-xl lg:text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
                      >
                        <svg className="w-6 h-6 lg:w-7 lg:h-7 mr-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        GET HELP NOW
                      </a>
                    </div>
                    
                    {/* Trust Indicators */}
                    <div className="mt-6 pt-6 border-t border-white/20">
                      <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8 text-sm lg:text-base font-semibold opacity-90">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-2 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Licensed & Insured
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-2 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                          </svg>
                          Emergency Response
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-2 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                          </svg>
                          Customer Satisfaction
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg text-center card-hover"
                >
                  <div className="bg-gradient-to-br from-trust-blue to-safety-green p-3 rounded-full w-fit mx-auto mb-4">
                    <highlight.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-trust-dark mb-2">{highlight.title}</h4>
                  <p className="text-sm text-gray-600">{highlight.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;