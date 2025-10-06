import React from 'react';
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import WhyUs from '../sections/WhyUs';
import About from '../sections/About';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <About />
      
      {/* Final CTA Section */}
      <section className="relative section-container bg-gray-900 text-white overflow-hidden">
        {/* Background Image with Strong Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581578731556-c656e8f6cbc4?w=1920&h=800&fit=crop&q=80&auto=format"
            alt="Professional team"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gray-900/95"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h2 className="heading-lg mb-6 text-white">
            Ready to Experience Professional Cleaning?
          </h2>
          <p className="text-xl leading-relaxed mb-10 text-gray-100">
            Start your journey to a spotless space. We're a new company dedicated to 
            delivering exceptional cleaning services. Get your free, no-obligation quote today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-neon-cyan text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neon-cyan/90 transition-all duration-300 hover:shadow-xl inline-flex items-center justify-center space-x-2 group"
            >
              <span>Get Your Free Quote</span>
              <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
            
            <a 
              href="tel:+27659982278"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 inline-flex items-center justify-center space-x-2"
            >
              <span>Call: 065 998 2278</span>
            </a>
          </div>

          <p className="text-gray-300 mt-8">
            ✓ Professional Service | ✓ Same-day availability | ✓ Free Quotes
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;

