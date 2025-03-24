"use client";

import React from 'react';
import useParallax from '@/hooks/use-parallax';

/**
 * AnimatedBackground component creates a decorative background with parallax effects
 * @param {Object} props
 * @param {string} [props.theme="default"] - Theme for the background (default, law, etc.)
 * @param {boolean} [props.reduced=false] - Reduces animation intensity for accessibility
 * @returns {React.ReactElement}
 */
const AnimatedBackground = ({ theme = "default", reduced = false }) => {
  const scrollY = useParallax(reduced ? 0.5 : 1);
  
  // Multiplier to control animation intensity
  const intensity = reduced ? 0.5 : 1;
  
  // Different themes can have different shapes and colors
  const renderThemeElements = () => {
    switch (theme) {
      case "law":
        return (
          <>
            <div className="absolute top-1/3 right-1/4 opacity-5 transition-transform duration-1000"
                style={{ transform: `rotate(${scrollY * 0.05 * intensity}deg)` }}>
              <svg width="200" height="200" viewBox="0 0 100 100">
                <path d="M50 10 L90 90 L10 90 Z" fill="currentColor" className="text-purple-900" />
              </svg>
            </div>
            <div className="absolute bottom-1/4 left-1/3 opacity-5 transition-transform duration-1000"
                style={{ transform: `scale(${1 + scrollY * 0.0005 * intensity}) rotate(${scrollY * -0.03 * intensity}deg)` }}>
              <svg width="150" height="150" viewBox="0 0 100 100">
                <rect x="20" y="20" width="60" height="60" rx="5" fill="currentColor" className="text-blue-900" />
              </svg>
            </div>
          </>
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div 
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-100 opacity-30"
        style={{ transform: `translate(${scrollY * 0.1 * intensity}px, ${scrollY * 0.05 * intensity}px)` }}
      />
      <div 
        className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-purple-100 opacity-20"
        style={{ transform: `translate(${scrollY * -0.1 * intensity}px, ${scrollY * 0.15 * intensity}px)` }}
      />
      <div 
        className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full bg-green-100 opacity-25"
        style={{ transform: `translate(${scrollY * 0.05 * intensity}px, ${scrollY * -0.1 * intensity}px)` }}
      />
      
      {renderThemeElements()}
    </div>
  );
};

export default AnimatedBackground;