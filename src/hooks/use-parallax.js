"use client";

import { useState, useEffect } from 'react';

/**
 * Custom hook that tracks window scroll position for parallax effects
 * @param {number} sensitivity - Multiplier to control the parallax effect strength (default: 1)
 * @returns {number} Current scroll position
 */
const useParallax = (sensitivity = 1) => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY * sensitivity);
    };
    
    // Add event listener with passive option for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial call to set initial position
    handleScroll();
    
    // Cleanup event listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sensitivity]);
  
  return scrollY;
};

export default useParallax;