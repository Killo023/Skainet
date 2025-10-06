import React from 'react';
import ContactForm from '../forms/ContactForm';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: FiMapPin,
      title: 'Location',
      info: 'Gauteng, South Africa',
      subInfo: 'Serving all areas',
    },
    {
      icon: FiPhone,
      title: 'Phone',
      info: '+27 65 998 2278',
      subInfo: 'Call us anytime',
      link: 'tel:+27659982278',
    },
    {
      icon: FiMail,
      title: 'Email',
      info: 'info@skainet.co.za',
      subInfo: '24-hour response',
      link: 'mailto:info@skainet.co.za',
    },
    {
      icon: FiClock,
      title: 'Hours',
      info: 'Mon - Sat: 7AM - 7PM',
      subInfo: 'Sun: 8AM - 5PM',
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
            Get In Touch
          </div>
          <h1 className="heading-xl text-gray-900 mb-6">
            Request Your Free Quote
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ready to experience exceptional cleaning? Fill out the form below and we'll get 
            back to you within 24 hours with a customized quote.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-container bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h2 className="heading-sm text-gray-900 mb-6">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-6">
                Have questions? We're here to help. Reach out through any of these channels.
              </p>
            </div>

            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="bg-secondary-grey p-6 rounded-xl hover:shadow-soft transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center">
                    <item.icon className="text-white text-xl" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-sm text-gray-500 font-medium mb-1">
                      {item.title}
                    </p>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="font-semibold text-gray-900 hover:text-primary-blue transition-colors"
                      >
                        {item.info}
                      </a>
                    ) : (
                      <p className="font-semibold text-gray-900">{item.info}</p>
                    )}
                    <p className="text-sm text-gray-600 mt-1">{item.subInfo}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Quick Benefits */}
            <div className="bg-primary-blue-50 p-6 rounded-xl border-2 border-primary-blue-100">
              <h3 className="font-semibold text-gray-900 mb-3">
                Why Book With Us?
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center space-x-2">
                  <span className="text-primary-blue">✓</span>
                  <span>Free, no-obligation quotes</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary-blue">✓</span>
                  <span>Same-day service available</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary-blue">✓</span>
                  <span>100% satisfaction guarantee</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary-blue">✓</span>
                  <span>Vetted & insured professionals</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-secondary-grey p-8 md:p-10 rounded-2xl shadow-soft">
              <h2 className="heading-sm text-gray-900 mb-2">
                Get Your Free Quote
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Cleaning Results Gallery */}
      <section className="section-container bg-white">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-lg text-gray-900 mb-6">
            See Our Results
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Quality cleaning you can see and feel. Here's what we deliver.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Result Image 1 */}
          <div className="relative rounded-xl overflow-hidden shadow-lg group">
            <img 
              src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=700&h=500&fit=crop&q=80&auto=format"
              alt="Spotless clean living room"
              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-bold mb-1">Spotless Living Spaces</h3>
              <p className="text-sm">Every corner perfectly cleaned</p>
            </div>
          </div>

          {/* Result Image 2 */}
          <div className="relative rounded-xl overflow-hidden shadow-lg group">
            <img 
              src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=700&h=500&fit=crop&q=80&auto=format"
              alt="Clean modern kitchen"
              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-bold mb-1">Sparkling Kitchens</h3>
              <p className="text-sm">Sanitized and spotless</p>
            </div>
          </div>

          {/* Result Image 3 */}
          <div className="relative rounded-xl overflow-hidden shadow-lg group">
            <img 
              src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=700&h=500&fit=crop&q=80&auto=format"
              alt="Pristine bathroom"
              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-bold mb-1">Pristine Bathrooms</h3>
              <p className="text-sm">Deep cleaned and sanitized</p>
            </div>
          </div>

          {/* Result Image 4 */}
          <div className="relative rounded-xl overflow-hidden shadow-lg group">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&h=500&fit=crop&q=80&auto=format"
              alt="Clean organized bedroom"
              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-bold mb-1">Fresh Bedrooms</h3>
              <p className="text-sm">Dust-free and organized</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map or Additional CTA */}
      <section className="section-container bg-secondary-grey">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-primary-blue-100 to-primary-blue-50 p-12 rounded-2xl">
            <div className="text-6xl mb-6">📍</div>
            <h3 className="heading-md text-gray-900 mb-4">
              Serving All of Gauteng
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              We provide professional cleaning services throughout Gauteng, including 
              Johannesburg, Pretoria, Centurion, Sandton, and surrounding areas.
            </p>
            <a href="tel:+27659982278" className="btn-primary">
              Call Now: 065 998 2278
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;

