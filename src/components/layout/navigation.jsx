"use client";

import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * Navigation component for the application
 * 
 * @param {Object} props
 * @param {string} props.activeSection - Currently active section ID
 * @param {Function} props.onNavClick - Callback when a navigation item is clicked
 * @param {Array} props.items - Array of navigation items with id, label, and icon properties
 * @param {string} [props.className] - Additional CSS classes
 * @returns {React.ReactElement}
 */
const Navigation = ({ 
  activeSection, 
  onNavClick, 
  items,
  className = ''
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Add sticky behavior based on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleItemClick = (itemId) => {
    onNavClick(itemId);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`bg-white shadow-md z-30 transition-all duration-300 ${isSticky ? 'sticky top-0' : ''} ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="font-bold text-blue-600">NTHU LAW</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 overflow-x-auto hide-scrollbar">
            {items.map((item) => (
              <button
                key={item.id}
                className={`flex items-center gap-1 px-3 py-2 text-sm whitespace-nowrap rounded-md transition-colors ${
                  activeSection === item.id 
                    ? 'bg-blue-100 text-blue-700 font-medium' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => handleItemClick(item.id)}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="p-2 rounded-md text-gray-500 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <ChevronDown 
                size={20} 
                className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`} 
              />
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden py-3 bg-white border-t border-gray-100">
            <div className="flex flex-col space-y-1">
              {items.map((item) => (
                <button
                  key={item.id}
                  className={`flex items-center gap-2 px-4 py-2 text-sm ${
                    activeSection === item.id 
                      ? 'bg-blue-50 text-blue-700 font-medium' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                  onClick={() => handleItemClick(item.id)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;