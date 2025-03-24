"use client";

import React from 'react';

/**
 * Badge component for displaying status indicators or labels
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Badge content
 * @param {string} [props.variant="default"] - Badge style variant (default, outline, subtle, dot)
 * @param {string} [props.color="blue"] - Badge color (blue, green, red, yellow, purple, gray)
 * @param {string} [props.size="md"] - Badge size (sm, md, lg)
 * @param {string} [props.className] - Additional CSS classes
 * @param {Function} [props.onClick] - Optional click handler for interactive badges
 * @returns {React.ReactElement}
 */
const Badge = ({ 
  children, 
  variant = "default", 
  color = "blue", 
  size = "md", 
  className = '',
  onClick
}) => {
  // Base classes
  const baseClasses = "inline-flex items-center font-medium";
  
  // Size classes
  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs rounded",
    md: "px-2.5 py-0.5 text-sm rounded-md",
    lg: "px-3 py-1 text-base rounded-lg"
  };
  
  // Color classes - configured for each variant
  const colorMap = {
    default: {
      blue: "bg-blue-100 text-blue-800",
      green: "bg-green-100 text-green-800",
      red: "bg-red-100 text-red-800",
      yellow: "bg-yellow-100 text-yellow-800",
      purple: "bg-purple-100 text-purple-800",
      gray: "bg-gray-100 text-gray-800"
    },
    outline: {
      blue: "border border-blue-500 text-blue-700 bg-transparent",
      green: "border border-green-500 text-green-700 bg-transparent",
      red: "border border-red-500 text-red-700 bg-transparent",
      yellow: "border border-yellow-500 text-yellow-700 bg-transparent",
      purple: "border border-purple-500 text-purple-700 bg-transparent",
      gray: "border border-gray-500 text-gray-700 bg-transparent"
    },
    subtle: {
      blue: "bg-blue-50 text-blue-700",
      green: "bg-green-50 text-green-700",
      red: "bg-red-50 text-red-700",
      yellow: "bg-yellow-50 text-yellow-700",
      purple: "bg-purple-50 text-purple-700",
      gray: "bg-gray-50 text-gray-700"
    },
    dot: {
      blue: "bg-transparent text-gray-700",
      green: "bg-transparent text-gray-700",
      red: "bg-transparent text-gray-700",
      yellow: "bg-transparent text-gray-700",
      purple: "bg-transparent text-gray-700",
      gray: "bg-transparent text-gray-700"
    }
  };
  
  // Interactive classes
  const interactiveClasses = onClick 
    ? "cursor-pointer hover:shadow-sm transition-shadow" 
    : "";
  
  return (
    <span
      className={`${baseClasses} ${sizeClasses[size]} ${colorMap[variant][color]} ${interactiveClasses} ${className}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {variant === "dot" && (
        <span 
          className={`mr-1.5 w-2 h-2 rounded-full bg-${color}-500 inline-block`} 
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
};

export { Badge };