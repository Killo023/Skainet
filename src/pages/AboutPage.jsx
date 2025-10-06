import React from 'react';
import About from '../sections/About';
import { FiAward, FiHeart, FiUsers, FiTrendingUp } from 'react-icons/fi';

const AboutPage = () => {
  const values = [
    {
      icon: FiAward,
      title: 'Excellence',
      description: 'We strive for perfection in every cleaning job, ensuring the highest standards.',
    },
    {
      icon: FiHeart,
      title: 'Care',
      description: 'We treat every space as if it were our own, with respect and attention to detail.',
    },
    {
      icon: FiUsers,
      title: 'Integrity',
      description: 'Honesty and transparency guide every interaction with our clients.',
    },
    {
      icon: FiTrendingUp,
      title: 'Growth',
      description: 'We continuously improve our methods and services to serve you better.',
    },
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white pt-40 pb-16 md:pt-48 md:pb-20 overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-neon-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-neon-green/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block bg-neon-cyan/10 text-neon-cyan px-4 py-2 rounded-full text-sm font-semibold mb-6">
            About Us
          </div>
          <h1 className="heading-xl text-gray-900 mb-6">
            Your Trusted Cleaning Partner in Gauteng
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Building lasting relationships through exceptional service and unwavering commitment to cleanliness.
          </p>
        </div>
      </section>

      <About />

      {/* Our Values */}
      <section className="section-container bg-white">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg text-gray-900 mb-6">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            These principles guide everything we do and shape the experience we deliver to every client.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-neon-cyan rounded-xl flex items-center justify-center mx-auto mb-4">
                <value.icon className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="section-container bg-secondary-grey">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-md text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Our cleaning professionals are the heart of Skainet. Each team member is carefully 
              selected, thoroughly trained, and committed to delivering exceptional results. They're 
              not just cleaners – they're trusted professionals who take pride in their work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-hover">
              <img 
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&h=600&fit=crop&q=80&auto=format"
                alt="Professional cleaning team"
                className="w-full h-full object-cover aspect-square"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/30 to-transparent"></div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-soft space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-neon-cyan rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Background Checked</h3>
                    <p className="text-gray-600 text-sm">Every team member undergoes comprehensive background verification</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-neon-green rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Fully Trained</h3>
                    <p className="text-gray-600 text-sm">Professional training in the latest cleaning techniques and safety protocols</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-neon-cyan rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Insured & Bonded</h3>
                    <p className="text-gray-600 text-sm">Full insurance coverage for your complete peace of mind</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;

