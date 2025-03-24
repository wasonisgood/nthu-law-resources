"use client";

import React, { useState } from 'react';

/**
 * ResourceCard component displays information about a resource with hover effects
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.icon - Icon component to display
 * @param {string} props.title - Title of the resource
 * @param {string} props.amount - Amount or value of the resource
 * @param {string} props.eligibility - Eligibility criteria for the resource
 * @param {string} props.color - CSS class for the card's gradient background
 * @param {number} [props.delay=0] - Animation delay in milliseconds
 * @param {string} [props.className=''] - Additional CSS classes
 * @param {Function} [props.onClick] - Optional click handler
 * @returns {React.ReactElement}
 */
const ResourceCard = ({ 
  icon, 
  title, 
  amount, 
  eligibility, 
  color, 
  delay = 0,
  className = '',
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`relative overflow-hidden rounded-xl shadow-lg p-6 transition-all duration-300 ${color} h-full ${className}`}
      style={{ 
        transform: isHovered ? 'translateY(-12px) scale(1.03)' : 'translateY(0) scale(1)', 
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        animationDelay: `${delay}ms`,
        boxShadow: isHovered ? '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : ''
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-white bg-opacity-20">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-white text-opacity-90 mb-4">{amount}</p>
          <div className="bg-white bg-opacity-10 p-3 rounded-lg">
            <p className="text-white text-sm">{eligibility}</p>
          </div>
        </div>
      </div>
      <div 
        className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full bg-white bg-opacity-10 transition-transform duration-300"
        style={{ transform: isHovered ? 'scale(1.5)' : 'scale(1)' }}
      />
    </div>
  );
};

export default ResourceCard;