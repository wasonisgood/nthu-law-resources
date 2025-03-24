"use client";

import React from 'react';

/**
 * Card component with optional hover effects
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} [props.className] - Additional CSS classes
 * @param {boolean} [props.hover=false] - Enable hover effects
 * @param {boolean} [props.gradient=false] - Enable gradient background
 * @param {string} [props.gradientFrom="blue-500"] - Starting gradient color
 * @param {string} [props.gradientTo="purple-600"] - Ending gradient color
 * @param {Function} [props.onClick] - Optional click handler
 * @returns {React.ReactElement}
 */
const Card = ({ 
  children, 
  className = '',
  hover = false,
  gradient = false,
  gradientFrom = "blue-500",
  gradientTo = "purple-600",
  onClick
}) => {
  const baseClasses = "rounded-xl shadow-lg overflow-hidden";
  const hoverClasses = hover ? "transition-all duration-300 hover:shadow-xl hover:-translate-y-1" : "";
  const gradientClasses = gradient ? `bg-gradient-to-r from-${gradientFrom} to-${gradientTo} text-white` : "bg-white";
  
  return (
    <div 
      className={`${baseClasses} ${hoverClasses} ${gradientClasses} ${className}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
};

/**
 * Card.Header component for card headers
 */
Card.Header = ({ children, className = '' }) => {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
};

/**
 * Card.Title component for card titles
 */
Card.Title = ({ children, className = '' }) => {
  return (
    <h3 className={`text-xl font-bold mb-2 ${className}`}>
      {children}
    </h3>
  );
};

/**
 * Card.Description component for card descriptions
 */
Card.Description = ({ children, className = '' }) => {
  return (
    <p className={`opacity-90 ${className}`}>
      {children}
    </p>
  );
};

/**
 * Card.Content component for card content
 */
Card.Content = ({ children, className = '' }) => {
  return (
    <div className={`p-6 pt-0 ${className}`}>
      {children}
    </div>
  );
};

/**
 * Card.Footer component for card footers
 */
Card.Footer = ({ children, className = '' }) => {
  return (
    <div className={`p-6 border-t border-gray-100 ${className}`}>
      {children}
    </div>
  );
};

export { Card };