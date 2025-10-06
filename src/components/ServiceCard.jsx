import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const ServiceCard = ({ icon: Icon, title, description, features, image }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden bg-gray-100">
        {image ? (
          <>
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-50">
            {Icon && (
              <Icon className="text-neon-cyan text-7xl opacity-20" />
            )}
          </div>
        )}
        
        {/* Icon Badge */}
        {Icon && (
          <div className="absolute top-4 left-4 w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-md">
            <Icon className="text-2xl text-neon-cyan" />
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-6 text-sm">
          {description}
        </p>

        {/* Features List */}
        {features && features.length > 0 && (
          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-neon-cyan text-lg mt-0.5 flex-shrink-0">✓</span>
                <span className="text-gray-700 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* CTA Link */}
        <Link
          to="/contact"
          className="inline-flex items-center space-x-2 text-neon-cyan font-semibold hover:text-neon-green transition-colors group"
        >
          <span>Get a Quote</span>
          <FiArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
