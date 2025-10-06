import React from 'react';
import { FiShield, FiUsers, FiAward, FiHeart, FiClock, FiDollarSign } from 'react-icons/fi';

const WhyUs = () => {
  const features = [
    {
      icon: FiShield,
      title: 'Fully Vetted & Insured',
      description: 'All our staff undergo comprehensive background checks and are fully insured for your peace of mind.',
    },
    {
      icon: FiUsers,
      title: 'Local Gauteng Experts',
      description: 'We understand the unique needs of Gauteng residents and businesses, providing personalized service.',
    },
    {
      icon: FiAward,
      title: 'Quality Guaranteed',
      description: "Not satisfied? We'll come back and re-clean at no extra cost. Your satisfaction is our priority.",
    },
    {
      icon: FiHeart,
      title: 'Eco-Friendly Products',
      description: 'We use environmentally safe, non-toxic cleaning products that are safe for children and pets.',
    },
    {
      icon: FiClock,
      title: 'Flexible Scheduling',
      description: 'Book same-day, next-day, or schedule recurring services at times that work for you.',
    },
    {
      icon: FiDollarSign,
      title: 'Transparent Pricing',
      description: 'No hidden fees. Get an accurate quote upfront and enjoy competitive rates without surprises.',
    },
  ];

  return (
    <section className="relative section-container bg-secondary-grey overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=1920&h=1200&fit=crop&q=80&auto=format"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-block bg-neon-cyan/10 text-neon-cyan px-4 py-2 rounded-full text-sm font-semibold mb-6">
          Why Choose Us
        </div>
        <h2 className="heading-lg text-gray-900 mb-6">
          The Skainet Difference
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          We're not just another cleaning service. We're your trusted partner in maintaining 
          a clean, healthy, and welcoming environment.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 group"
          >
            {/* Icon */}
            <div className="w-14 h-14 bg-primary-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-blue group-hover:scale-110 transition-all duration-300">
              <feature.icon className="text-2xl text-primary-blue group-hover:text-white transition-colors" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Service Features Section with Image */}
      <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-8">
          <div className="text-center bg-white p-6 rounded-xl shadow-soft">
            <div className="text-4xl md:text-5xl font-bold text-neon-cyan mb-2">100%</div>
            <p className="text-gray-600 font-medium">Vetted Staff</p>
          </div>
          <div className="text-center bg-white p-6 rounded-xl shadow-soft">
            <div className="text-4xl md:text-5xl font-bold text-neon-cyan mb-2">24/7</div>
            <p className="text-gray-600 font-medium">Support</p>
          </div>
          <div className="text-center bg-white p-6 rounded-xl shadow-soft">
            <div className="text-4xl md:text-5xl font-bold text-neon-cyan mb-2">Same</div>
            <p className="text-gray-600 font-medium">Day Service</p>
          </div>
          <div className="text-center bg-white p-6 rounded-xl shadow-soft">
            <div className="text-4xl md:text-5xl font-bold text-neon-cyan mb-2">Free</div>
            <p className="text-gray-600 font-medium">Quotes</p>
          </div>
        </div>
        
        {/* Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-hover hidden lg:block">
          <img 
            src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=700&h=500&fit=crop&q=80&auto=format"
            alt="Professional cleaning team working"
            className="w-full h-full object-cover aspect-[7/5]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 to-transparent"></div>
          
          {/* Overlay Badge */}
          <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg">
            <div className="flex items-center space-x-3">
              <div className="text-3xl">✓</div>
              <div>
                <p className="text-2xl font-bold text-neon-cyan">Quality</p>
                <p className="text-sm text-gray-600">Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default WhyUs;

