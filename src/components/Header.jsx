import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white shadow-lg py-4 border-b border-gray-200'
          : 'bg-white/95 backdrop-blur-md py-6'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <Link
            to="/"
            className="flex items-center space-x-3 group transition-transform duration-300 hover:scale-105"
          >
            <img
              src="/Media/Logo.jpg"
              alt="Skainet Cleaning Services"
              className="h-24 w-auto object-contain bg-white"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-semibold transition-colors duration-300 ${
                  isActivePath(link.path)
                    ? 'text-neon-cyan'
                    : 'text-gray-700 hover:text-neon-cyan'
                }`}
              >
                {link.name}
                {isActivePath(link.path) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-neon-cyan rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <a
              href="tel:+27659982278"
              className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-neon-cyan transition-colors font-semibold"
            >
              <FiPhone className="text-lg" />
              <span>065 998 2278</span>
            </a>
            
            <Link
              to="/contact"
              className="hidden md:inline-block btn-primary"
            >
              Get a Quote
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-800 hover:text-neon-cyan transition-all focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <FiX className="text-2xl" />
              ) : (
                <FiMenu className="text-2xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 mt-6' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col space-y-2 py-4 border-t border-gray-200">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  isActivePath(link.path)
                    ? 'bg-neon-cyan/10 text-neon-cyan'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-neon-cyan'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <a
              href="tel:+27659982278"
              className="flex items-center space-x-2 px-4 py-2 text-gray-700 font-semibold"
            >
              <FiPhone className="text-lg" />
              <span>065 998 2278</span>
            </a>
            
            <Link
              to="/contact"
              className="btn-primary text-center mx-4 mt-2"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

