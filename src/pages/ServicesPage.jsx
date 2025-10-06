import React from 'react';
import Services from '../sections/Services';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white pt-40 pb-16 md:pt-48 md:pb-20 overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-neon-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-neon-green/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block bg-neon-cyan/10 text-neon-cyan px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Our Services
          </div>
          <h1 className="heading-xl text-gray-900 mb-6">
            Professional Cleaning Services
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            From regular maintenance to specialized deep cleaning, we offer comprehensive 
            solutions for homes and businesses across Gauteng.
          </p>
        </div>
      </section>

      <Services />

      {/* Cleaning Gallery Section */}
      <section className="section-container bg-white">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-lg text-gray-900 mb-6">
            Our Work in Action
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            See the quality and attention to detail we bring to every cleaning job.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Gallery Image 1 */}
          <div className="relative rounded-xl overflow-hidden shadow-lg group">
            <img 
              src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&h=400&fit=crop&q=80&auto=format"
              alt="Kitchen cleaning service"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <p className="font-semibold">Kitchen Cleaning</p>
              <p className="text-sm">Deep clean & sanitize</p>
            </div>
          </div>

          {/* Gallery Image 2 */}
          <div className="relative rounded-xl overflow-hidden shadow-lg group">
            <img 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&h=400&fit=crop&q=80&auto=format"
              alt="Bathroom cleaning service"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <p className="font-semibold">Bathroom Sanitization</p>
              <p className="text-sm">Spotless results</p>
            </div>
          </div>

          {/* Gallery Image 3 */}
          <div className="relative rounded-xl overflow-hidden shadow-lg group">
            <img 
              src="https://images.unsplash.com/photo-1564540583246-934409427776?w=500&h=400&fit=crop&q=80&auto=format"
              alt="Floor cleaning service"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <p className="font-semibold">Floor Care</p>
              <p className="text-sm">All surface types</p>
            </div>
          </div>

          {/* Gallery Image 4 */}
          <div className="relative rounded-xl overflow-hidden shadow-lg group">
            <img 
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&h=400&fit=crop&q=80&auto=format"
              alt="Window cleaning service"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <p className="font-semibold">Window Cleaning</p>
              <p className="text-sm">Crystal clear shine</p>
            </div>
          </div>

          {/* Gallery Image 5 */}
          <div className="relative rounded-xl overflow-hidden shadow-lg group">
            <img 
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop&q=80&auto=format"
              alt="Carpet cleaning service"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <p className="font-semibold">Carpet Cleaning</p>
              <p className="text-sm">Deep extraction</p>
            </div>
          </div>

          {/* Gallery Image 6 */}
          <div className="relative rounded-xl overflow-hidden shadow-lg group">
            <img 
              src="https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?w=500&h=400&fit=crop&q=80&auto=format"
              alt="Professional cleaning team"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <p className="font-semibold">Professional Team</p>
              <p className="text-sm">Trained & certified</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Service Info */}
      <section className="section-container bg-secondary-grey">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-md text-gray-900 mb-6">
            Custom Cleaning Solutions
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Every space is unique, and so are its cleaning needs. We work with you to create 
            a customized cleaning plan that fits your schedule, budget, and specific requirements.
          </p>
          <Link to="/contact" className="btn-primary">
            Discuss Your Needs
          </Link>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;

