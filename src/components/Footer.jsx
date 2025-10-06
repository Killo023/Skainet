import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src="/Media/Logo.jpg"
                alt="Skainet Cleaning Services"
                className="h-14 w-auto object-contain bg-white p-2 rounded-lg"
              />
            </div>
            <p className="text-sm leading-relaxed">
              Professional residential and commercial cleaning services throughout Gauteng, South Africa.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neon-cyan transition-colors"
                aria-label="Facebook"
              >
                <FiFacebook className="text-xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neon-cyan transition-colors"
                aria-label="Instagram"
              >
                <FiInstagram className="text-xl" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neon-cyan transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-neon-cyan transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-neon-cyan transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-neon-cyan transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-neon-cyan transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="hover:text-neon-cyan transition-colors cursor-pointer">
                Residential Cleaning
              </li>
              <li className="hover:text-neon-cyan transition-colors cursor-pointer">
                Commercial Cleaning
              </li>
              <li className="hover:text-neon-cyan transition-colors cursor-pointer">
                Deep Cleaning
              </li>
              <li className="hover:text-neon-cyan transition-colors cursor-pointer">
                Move In/Out Cleaning
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FiMapPin className="text-neon-cyan mt-1 flex-shrink-0" />
                <span className="text-sm">Gauteng, South Africa</span>
              </li>
              <li className="flex items-start space-x-3">
                <FiPhone className="text-neon-cyan mt-1 flex-shrink-0" />
                <a href="tel:+27659982278" className="text-sm hover:text-neon-cyan transition-colors">
                  +27 65 998 2278
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <FiMail className="text-neon-cyan mt-1 flex-shrink-0" />
                <a href="mailto:info@skainet.co.za" className="text-sm hover:text-neon-cyan transition-colors">
                  info@skainet.co.za
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} <span className="text-white font-semibold">Skainet</span> Cleaning Services. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <button className="hover:text-neon-cyan transition-colors">
                Privacy Policy
              </button>
              <button className="hover:text-neon-cyan transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

