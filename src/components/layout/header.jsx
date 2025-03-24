"use client";

import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

/**
 * Header component with hero section and CTA buttons
 * 
 * @param {Object} props
 * @param {string} props.title - Main title text
 * @param {string} props.subtitle - Subtitle or description text
 * @param {Array} props.actions - Array of action buttons with label, icon, and onClick properties
 * @param {Function} props.onButtonClick - Callback when a button is clicked
 * @param {string} [props.className] - Additional CSS classes
 * @returns {React.ReactElement}
 */
const Header = ({ 
  title = "清大科法所", 
  subtitle = "學生資源總覽", 
  description = "獎學金 × 實習 × 助學 × 補助：打造你的專屬學習旅程",
  onButtonClick,
  className = ''
}) => {
  const primaryAction = {
    label: '找適合我的資源',
    icon: <ArrowRight size={18} />,
    section: 'checker'
  };

  const secondaryAction = {
    label: '三年規劃建議',
    icon: <Calendar size={18} />,
    section: 'timeline'
  };

  const handleAction = (section) => {
    if (onButtonClick) {
      onButtonClick(section);
    }
  };
  
  return (
    <header className={`relative ${className}`}>
      {/* Background skew effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 transform skew-y-3 origin-top-left -z-10" 
        style={{ top: '-2rem', height: 'calc(100% + 4rem)' }} 
      />
      
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="flex flex-col items-start">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
          >
            {title}
            <span className="block">{subtitle}</span>
          </h1>
          
          <p className="text-xl text-white text-opacity-90 max-w-2xl mb-8">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button 
              className="flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-colors"
              onClick={() => handleAction(primaryAction.section)}
            >
              {primaryAction.label} {primaryAction.icon}
            </button>
            
            <button 
              className="flex items-center gap-2 px-6 py-3 bg-blue-500 bg-opacity-20 text-white rounded-full font-medium hover:bg-opacity-30 transition-colors"
              onClick={() => handleAction(secondaryAction.section)}
            >
              {secondaryAction.label} {secondaryAction.icon}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;