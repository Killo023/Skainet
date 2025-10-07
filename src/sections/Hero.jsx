import React from 'react';
import { Link } from 'react-router-dom';
import { FiCheck, FiPlay, FiZap } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="relative bg-white pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
      {/* Background Image 3 - Subtle */}
      <div className="absolute inset-0 z-0 opacity-[8%]">
        <img 
          src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1920&h=1200&fit=crop&q=80&auto=format"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-neon-cyan/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-neon-green/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-neon-cyan/10 px-4 py-2 rounded-full text-neon-cyan text-sm font-semibold">
              <FiZap className="text-lg" />
              <span>Professional Cleaning Service</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
              Professional Cleaning Services in{' '}
              <span className="text-neon-cyan">Gauteng</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
              Experience exceptional residential and commercial cleaning with our vetted professionals and flexible scheduling.
            </p>

            {/* Key Benefits */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-neon-cyan rounded-lg flex items-center justify-center shadow-md">
                  <FiCheck className="text-white text-2xl" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">100% Verified</p>
                  <p className="text-sm text-gray-600">Background Checked</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-neon-green rounded-lg flex items-center justify-center shadow-md">
                  <FiZap className="text-white text-2xl" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Same-Day Service</p>
                  <p className="text-sm text-gray-600">When Available</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/contact" className="btn-primary text-center">
                Get Free Quote
              </Link>
              
              <button className="btn-secondary flex items-center justify-center space-x-2">
                <FiPlay className="text-lg" />
                <span>See How We Work</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">✓</span>
                <span className="font-semibold text-gray-900">Vetted Staff</span>
              </div>
              <div className="h-6 w-px bg-gray-300"></div>
              <div>
                <span className="font-semibold text-gray-900">Eco-Friendly</span> Products
              </div>
              <div className="h-6 w-px bg-gray-300"></div>
              <div>
                <span className="font-semibold text-gray-900">Same-Day</span> Available
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=1000&fit=crop&q=80&auto=format"
                  alt="Professional cleaning team"
                  className="aspect-[4/5] w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-20">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-neon-cyan rounded-lg flex items-center justify-center">
                    <span className="text-white text-2xl">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Eco-Friendly</p>
                    <p className="text-sm text-gray-600">Safe Products</p>
                  </div>
                </div>
              </div>

              {/* Stats Card */}
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-xl z-20">
                <div className="text-center">
                  <p className="text-4xl font-bold text-neon-cyan">24/7</p>
                  <p className="text-sm text-gray-600 font-semibold">Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
