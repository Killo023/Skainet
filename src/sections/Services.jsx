import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { MdHome, MdBusiness, MdAutoAwesome, MdMoving } from 'react-icons/md';

const Services = () => {
  const services = [
    {
      icon: MdHome,
      title: 'Residential Cleaning',
      description: 'Keep your home sparkling clean with our comprehensive residential cleaning services. From regular maintenance to special occasions.',
      image: 'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=600&h=400&fit=crop&q=80&auto=format',
      features: [
        'Weekly, bi-weekly, or monthly cleaning',
        'Kitchen and bathroom deep cleaning',
        'Dusting, vacuuming, and mopping',
        'Laundry and ironing services',
      ],
    },
    {
      icon: MdBusiness,
      title: 'Commercial Cleaning',
      description: 'Professional cleaning solutions for offices, retail spaces, and commercial properties. Maintain a pristine workspace that impresses.',
      image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&h=400&fit=crop&q=80&auto=format',
      features: [
        'Office and workspace cleaning',
        'After-hours service available',
        'Restroom sanitization',
        'Floor care and maintenance',
      ],
    },
    {
      icon: MdAutoAwesome,
      title: 'Deep Cleaning',
      description: 'Intensive cleaning service that reaches every corner. Perfect for seasonal cleaning, post-renovation, or special preparations.',
      image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=600&h=400&fit=crop&q=80&auto=format',
      features: [
        'Detailed cleaning of all surfaces',
        'Inside appliances and cabinets',
        'Window and blind cleaning',
        'Carpet and upholstery cleaning',
      ],
    },
    {
      icon: MdMoving,
      title: 'Move In/Out Cleaning',
      description: 'Specialized cleaning for property transitions. Ensure your old or new space is immaculate for a fresh start.',
      image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&h=400&fit=crop&q=80&auto=format',
      features: [
        'Complete property cleaning',
        'Paint-ready wall cleaning',
        'Garage and outdoor spaces',
        'Landlord inspection ready',
      ],
    },
  ];

  return (
    <section className="relative section-container bg-white overflow-hidden">
      {/* Background Image 1 */}
      <div className="absolute inset-0 z-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&h=1200&fit=crop&q=80&auto=format"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-block bg-neon-cyan/10 text-neon-cyan px-4 py-2 rounded-full text-sm font-semibold mb-6">
          Our Services
        </div>
        <h2 className="heading-lg text-gray-900 mb-6">
          Comprehensive Cleaning Solutions for Every Need
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Whether it's your home, office, or a special cleaning project, we have the expertise 
          and dedication to deliver exceptional results every time.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            features={service.features}
            image={service.image}
          />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center">
        <p className="text-gray-600 mb-6">
          Can't find what you're looking for? We offer customized cleaning solutions.
        </p>
        <a
          href="/contact"
          className="inline-block btn-primary"
        >
          Request Custom Quote
        </a>
      </div>
      </div>
    </section>
  );
};

export default Services;

