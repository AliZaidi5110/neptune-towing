import React from 'react';
import { useForm } from 'react-hook-form';
import { Phone, MapPin, MessageCircle, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    // Here you would typically send the data to your backend
    alert('Thank you for your message! We\'ll get back to you soon.');
    reset();
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Emergency Hotline",
      info: "631-856-4090",
      description: "24/7 Emergency Service"
    },
    {
      icon: MapPin,
      title: "Our Location",
      info: "16 Neptune Ave",
      description: "Hampton Bays, NY 11946"
    },
    {
      icon: MessageCircle,
      title: "Email",
      info: "angelberrocal671@yahoo.com",
      description: "Quick messaging service"
    },
    {
      icon: Clock,
      title: "Service Hours",
      info: "24/7 Available",
      description: "Always ready to help"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
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
            Get In <span className="text-emergency-red">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Need immediate assistance or want to book our services? 
            Contact us now - we're here to help 24/7.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-trust-dark mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emergency-red focus:border-transparent transition-all duration-300"
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emergency-red focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register('phone', { required: 'Phone number is required' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emergency-red focus:border-transparent transition-all duration-300"
                  placeholder="+44 7XXX XXXXXX"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register('message', { required: 'Message is required' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emergency-red focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your situation or service requirements..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Emergency Call Card */}
            <div className="bg-gradient-to-r from-emergency-red to-emergency-orange rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Emergency? Call Now!</h3>
              <p className="text-lg mb-6 opacity-90">
                Don't wait - our emergency response team is standing by
              </p>
              <a
                href="tel:631-856-4090"
                className="inline-flex items-center bg-white text-emergency-red font-bold py-4 px-6 rounded-lg text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 space-x-3"
              >
                <Phone className="w-6 h-6" />
                <span>631-856-4090</span>
              </a>
            </div>

            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg text-center"
                >
                  <div className="bg-gradient-to-br from-trust-blue to-safety-green p-3 rounded-full w-fit mx-auto mb-4">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-trust-dark mb-2">{info.title}</h4>
                  <p className="text-emergency-red font-medium mb-1">{info.info}</p>
                  <p className="text-sm text-gray-600">{info.description}</p>
                </motion.div>
              ))}
            </div>

            {/* 24/7 Service Badge */}
            <div className="bg-safety-green rounded-2xl p-6 text-white text-center">
              <h4 className="text-xl font-bold mb-2">🚨 24/7 Emergency Service</h4>
              <p className="opacity-90">
                Available every day of the year, including holidays and weekends
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;