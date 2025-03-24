"use client";

import React from 'react';

/**
 * TimelineCard component for displaying timeline items
 * 
 * @param {Object} props
 * @param {string} props.semester - The semester (e.g., "碩一上")
 * @param {string} props.keywords - Keywords describing the semester
 * @param {Array} props.resources - Array of resources available in this period
 * @param {string} props.notes - Additional notes
 * @param {boolean} props.isActive - Whether this card is currently active/focused
 * @param {number} props.index - Index in the timeline (used for alternating layout)
 * @param {Function} props.onMouseEnter - Handler for mouse enter events
 * @param {string} [props.className] - Additional CSS classes
 * @returns {React.ReactElement}
 */
const TimelineCard = ({ 
  semester, 
  keywords, 
  resources, 
  notes, 
  isActive, 
  index, 
  onMouseEnter,
  className = ''
}) => {
  return (
    <div 
      className={`relative ${index % 2 === 0 ? 'lg:pr-1/2' : 'lg:pl-1/2 lg:ml-auto'} transition-all duration-500 ${className}`}
      style={{ 
        opacity: isActive ? 1 : 0.7,
        transform: isActive ? 'scale(1.02)' : 'scale(1)'
      }}
      onMouseEnter={onMouseEnter}
      onFocus={onMouseEnter}
    >
      <div className="hidden lg:block absolute left-1/2 top-6 w-4 h-4 rounded-full bg-white border-4 border-blue-600 -translate-x-1/2 z-10" />
      
      <div className={`bg-white rounded-xl shadow-lg p-6 ${index % 2 === 0 ? 'lg:mr-10' : 'lg:ml-10'}`}>
        <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium mb-4">
          {semester}
        </div>
        
        <h3 className="text-lg font-bold text-gray-800 mb-1">{keywords}</h3>
        
        <ul className="space-y-2 my-4">
          {resources.map((resource, i) => (
            <li key={i} className="flex items-start gap-2">
              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
              <span className="text-gray-700">{resource}</span>
            </li>
          ))}
        </ul>
        
        <div className="mt-4 p-3 bg-blue-50 rounded-lg text-sm text-blue-800">
          <p>{notes}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;