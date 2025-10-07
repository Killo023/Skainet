import React from 'react';
import { FiCheck } from 'react-icons/fi';

const About = () => {
  return (
    <section className="relative section-container bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Image 2 */}
      <div className="absolute inset-0 z-0 opacity-[15%]">
        <img 
          src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=1920&h=1200&fit=crop&q=80&auto=format"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Image */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-hover">
            <img 
              src="https://images.unsplash.com/photo-1581578949510-fa7315c4c350?w=800&h=600&fit=crop&q=80&auto=format"
              alt="Professional cleaning team at work"
              className="aspect-[4/3] w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 to-transparent"></div>
          </div>

          {/* Decorative Element */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-neon-cyan/10 rounded-2xl -z-10"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-neon-green/10 rounded-2xl -z-10"></div>
        </div>

        {/* Right Column - Content */}
        <div className="space-y-6">
          <div className="inline-block bg-neon-cyan/10 text-neon-cyan px-4 py-2 rounded-full text-sm font-semibold">
            About Skainet
          </div>
          
          <h2 className="heading-lg text-gray-900">
            Professional Cleaning Service in Gauteng
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Skainet Cleaning Services is dedicated to providing exceptional 
            residential and commercial cleaning throughout Gauteng. Our mission is simple: 
            deliver outstanding cleaning results while providing excellent customer service.
          </p>

          <p className="text-gray-600 leading-relaxed">
            We're building our reputation on reliability, professionalism, and attention to detail. 
            Every member of our team is carefully selected, thoroughly trained, and dedicated to 
            maintaining the highest standards of cleanliness.
          </p>

          {/* Key Points */}
          <div className="space-y-4 pt-4">
            {[
              'Professional trained cleaning staff',
              'Serving residential and commercial clients',
              'Eco-friendly and family-safe cleaning products',
              'Flexible scheduling to meet your needs',
              '100% satisfaction guarantee',
            ].map((point, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-neon-cyan rounded-full flex items-center justify-center mt-0.5">
                  <FiCheck className="text-white text-sm" />
                </div>
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>

          <div className="pt-6">
            <a href="/contact" className="btn-primary">
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default About;

