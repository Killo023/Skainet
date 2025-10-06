import React, { useState } from 'react';
import { FiUser, FiMail, FiPhone, FiMessageSquare } from 'react-icons/fi';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-12 text-center">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl text-white">✓</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Thank You!</h3>
        <p className="text-gray-600 text-lg">
          We've received your message and will get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
          Full Name *
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <FiUser className="text-gray-400" />
          </div>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-blue focus:ring-4 focus:ring-primary-blue-100 transition-all outline-none"
            placeholder="John Doe"
          />
        </div>
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
          Email Address *
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <FiMail className="text-gray-400" />
          </div>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-blue focus:ring-4 focus:ring-primary-blue-100 transition-all outline-none"
            placeholder="john@example.com"
          />
        </div>
      </div>

      {/* Phone Field */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
          Phone Number *
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <FiPhone className="text-gray-400" />
          </div>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-blue focus:ring-4 focus:ring-primary-blue-100 transition-all outline-none"
            placeholder="+27 12 345 6789"
          />
        </div>
      </div>

      {/* Service Type Dropdown */}
      <div>
        <label htmlFor="serviceType" className="block text-sm font-semibold text-gray-700 mb-2">
          Service Type *
        </label>
        <select
          id="serviceType"
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-blue focus:ring-4 focus:ring-primary-blue-100 transition-all outline-none bg-white"
        >
          <option value="">Select a service...</option>
          <option value="residential">Residential Cleaning</option>
          <option value="commercial">Commercial Cleaning</option>
          <option value="deep">Deep Cleaning</option>
          <option value="move">Move In/Out Cleaning</option>
          <option value="other">Other / Custom Service</option>
        </select>
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
          Message
        </label>
        <div className="relative">
          <div className="absolute top-3 left-0 pl-4 pointer-events-none">
            <FiMessageSquare className="text-gray-400" />
          </div>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-blue focus:ring-4 focus:ring-primary-blue-100 transition-all outline-none resize-none"
            placeholder="Tell us more about your cleaning needs..."
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full btn-primary text-lg py-4"
      >
        Get Your Free Quote
      </button>

      <p className="text-sm text-gray-500 text-center">
        We'll respond within 24 hours. By submitting, you agree to our privacy policy.
      </p>
    </form>
  );
};

export default ContactForm;

