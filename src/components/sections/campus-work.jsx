"use client";

import React from 'react';
import { School } from 'lucide-react';
import ResourceCard from '@/components/cards/resource-card';
import useParallax from '@/hooks/use-parallax';

/**
 * CampusWork section component for displaying on-campus jobs
 * 
 * @param {Object} props
 * @param {string} [props.title="💼 三、校內工讀 × 活動助理"] - Section title
 * @param {Array} [props.resources] - Array of resource objects to display
 * @param {Function} [props.onCardClick] - Optional callback when a card is clicked
 * @param {string} [props.className] - Additional CSS classes
 * @returns {React.ReactElement}
 */
const CampusWork = ({ 
  title = "💼 三、校內工讀 × 活動助理",
  resources,
  onCardClick,
  className = ''
}) => {
  const scrollY = useParallax();
  
  // Default resources if none provided
  const defaultResources = [
    {
      icon: <School size={24} className="text-white" />,
      title: "🏢 科法所辦公室工讀生",
      amount: "薪資：依學校公告時薪標準",
      eligibility: "時間：輪班制，依學期公告名額。想在課餘時間穩定工讀、又不想離開校園跑外送！",
      color: "bg-gradient-to-br from-green-500 to-teal-700",
      delay: 100
    },
    {
      icon: <School size={24} className="text-white" />,
      title: "🎬 活動專案助理",
      amount: "薪資：月薪或時薪，視專案公告",
      eligibility: "內容包含：協助迎新、送舊、招生說明會、甄試入學等活動。擅長活動規劃、喜歡團隊合作與參與！",
      color: "bg-gradient-to-br from-teal-500 to-blue-700",
      delay: 200
    }
  ];
  
  const resourcesData = resources || defaultResources;
  
  const handleCardClick = (resource) => {
    if (onCardClick) {
      onCardClick(resource);
    }
  };
  
  return (
    <section className={`py-12 bg-gray-50 ${className}`} id="work">
      <div className="container mx-auto px-4">
        <div 
          className="relative mb-12"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        >
          <h2 className="text-3xl font-bold text-center">
            <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              {title}
            </span>
          </h2>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {resourcesData.map((resource, index) => (
            <ResourceCard 
              key={index}
              icon={resource.icon}
              title={resource.title}
              amount={resource.amount}
              eligibility={resource.eligibility}
              color={resource.color}
              delay={resource.delay}
              onClick={() => handleCardClick(resource)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusWork;