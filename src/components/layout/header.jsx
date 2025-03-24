"use client";

import React, { useEffect, useState } from 'react';
import { ArrowRight, Calendar, ExternalLink } from 'lucide-react';

/**
 * Redesigned Header component with modern CSS and SVG patterns instead of images
 * 
 * @param {Object} props
 * @param {string} props.title - Main title text
 * @param {string} props.subtitle - Subtitle text
 * @param {string} props.description - Description text
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
  const [scrollPosition, setScrollPosition] = useState(0);
  const [animatedText, setAnimatedText] = useState('');
  const fullText = "打造專屬學習旅程";
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Text typing animation effect
  useEffect(() => {
    let currentIndex = 0;
    const typeText = () => {
      if (currentIndex <= fullText.length) {
        setAnimatedText(fullText.substring(0, currentIndex));
        currentIndex++;
        setTimeout(typeText, 150);
      }
    };
    
    typeText();
  }, []);
  
  const handleAction = (section) => {
    if (onButtonClick) {
      onButtonClick(section);
    }
  };
  
  return (
    <header className={`relative overflow-hidden py-16 md:py-24 ${className}`}>
      {/* SVG Pattern Background */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 0 H40 V40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
            <pattern id="dots-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" className="text-blue-900" />
          <rect width="100%" height="100%" fill="url(#dots-pattern)" className="text-purple-900" />
        </svg>
      </div>
      
      {/* Animated Shapes */}
      <div 
        className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 -z-10"
        style={{ 
          transform: `translate(${scrollPosition * 0.03}px, -${scrollPosition * 0.02}px) scale(${1 - scrollPosition * 0.0005})`,
          filter: `blur(${Math.min(scrollPosition * 0.05, 15)}px)`
        }}
      />
      <div 
        className="absolute bottom-20 left-[15%] w-48 h-48 rounded-full bg-gradient-to-tr from-purple-500/10 to-pink-500/10 -z-10"
        style={{ 
          transform: `translate(-${scrollPosition * 0.02}px, ${scrollPosition * 0.03}px) scale(${1 - scrollPosition * 0.0005})`,
          filter: `blur(${Math.min(scrollPosition * 0.03, 10)}px)`
        }}
      />
      
      {/* Modern gradient line decorations */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500"></div>
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-purple-500 to-pink-500"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            {/* Animated text badge */}
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-blue-100 text-blue-800 mb-8 overflow-hidden">
              <div className="flex space-x-2 animate-pulse">
                <span className="block w-2 h-2 rounded-full bg-blue-500"></span>
                <span className="block w-2 h-2 rounded-full bg-purple-500"></span>
                <span className="block w-2 h-2 rounded-full bg-pink-500"></span>
              </div>
              <span className="ml-2 font-medium">{animatedText || '\u00A0'}</span>
            </div>
            
            {/* Title with gradient text */}
            <div className="mb-6 text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                  {title}
                </span>
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                  {subtitle}
                </span>
              </h2>
            </div>
            
            {/* Description */}
            <p className="text-xl text-gray-700 max-w-2xl mb-12">
              {description}
            </p>
            
            {/* Animated decorative line */}
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8 relative">
              <div className="absolute inset-0 bg-white opacity-75 animate-pulse rounded-full"></div>
            </div>
            
            {/* Action buttons with hover effects */}
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                className="group relative overflow-hidden px-8 py-4 bg-blue-600 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
                onClick={() => handleAction('checker')}
              >
                <span className="relative z-10 flex items-center gap-2">
                  找適合我的資源 <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
              
              <button 
                className="group relative overflow-hidden px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                onClick={() => handleAction('timeline')}
              >
                <span className="relative z-10 flex items-center gap-2">
                  三年規劃建議 <Calendar size={18} />
                </span>
                <div className="absolute inset-0 bg-blue-50 -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </div>
            
            {/* Decorative dots */}
            <div className="flex justify-center space-x-2 mt-16">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <div className="w-2 h-2 rounded-full bg-purple-500"></div>
              <div className="w-2 h-2 rounded-full bg-pink-500"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;