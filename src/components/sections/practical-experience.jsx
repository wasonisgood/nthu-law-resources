"use client";

import React from 'react';
import { Briefcase, Heart } from 'lucide-react';
import ResourceCard from '@/components/cards/resource-card';
import useParallax from '@/hooks/use-parallax';

/**
 * PracticalExperience section component
 * 
 * @param {Object} props
 * @param {string} [props.title="👥 二、實務經驗與社會參與機會"] - Section title
 * @param {Array} [props.resources] - Array of resource objects to display
 * @param {Function} [props.onCardClick] - Optional callback when a card is clicked
 * @param {string} [props.className] - Additional CSS classes
 * @returns {React.ReactElement}
 */
const PracticalExperience = ({ 
  title = "👥 二、實務經驗與社會參與機會",
  resources,
  onCardClick,
  className = ''
}) => {
  const scrollY = useParallax();
  
  // Default resources if none provided
  const defaultResources = [
    {
      icon: <Briefcase size={24} className="text-white" />,
      title: "⚖️ 理律法律事務所實習",
      amount: "每月實習補助：8,000 元",
      eligibility: "每學期錄取3人。想了解實務律師日常、未來走事務所路線的你必看！",
      color: "bg-gradient-to-br from-blue-600 to-indigo-700",
      delay: 100
    },
    {
      icon: <Briefcase size={24} className="text-white" />,
      title: "🌐 國際產學總中心實習",
      amount: "每月補助：8,000 元",
      eligibility: "實習時間：每週 8 小時，共 12 個月。想了解政策與科技業界合作的行政流程、想強化履歷的你！",
      color: "bg-gradient-to-br from-indigo-600 to-purple-700",
      delay: 200
    },
    {
      icon: <Heart size={24} className="text-white" />,
      title: "❤️ 公益行動補助計畫",
      amount: "依計畫內容核定",
      eligibility: "可申請NGO／NPO公益實習、創新公益競賽、公益訴訟協力計畫等。對社會議題有熱情、有想法的你！",
      color: "bg-gradient-to-br from-red-500 to-pink-700",
      delay: 300
    }
  ];
  
  const resourcesData = resources || defaultResources;
  
  const handleCardClick = (resource) => {
    if (onCardClick) {
      onCardClick(resource);
    }
  };
  
  return (
    <section className={`py-12 ${className}`} id="practice">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

export default PracticalExperience;