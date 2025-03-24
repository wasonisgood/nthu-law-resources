"use client";

import React from 'react';
import { BookOpen, Briefcase, School, Award } from 'lucide-react';
import ResourceCard from '@/components/cards/resource-card';
import useParallax from '@/hooks/use-parallax';

/**
 * AcademicRewards section component
 * 
 * @param {Object} props
 * @param {string} [props.title="🎖️ 一、表現優異？別錯過這些學術獎勵！"] - Section title
 * @param {Array} [props.resources] - Array of resource objects to display
 * @param {Function} [props.onCardClick] - Optional callback when a card is clicked
 * @param {string} [props.className] - Additional CSS classes
 * @returns {React.ReactElement}
 */
const AcademicRewards = ({ 
  title = "🎖️ 一、表現優異？別錯過這些學術獎勵！",
  resources,
  onCardClick,
  className = ''
}) => {
  const scrollY = useParallax();
  
  // Default resources if none provided
  const defaultResources = [
    {
      icon: <BookOpen size={24} className="text-white" />,
      title: "📘 書卷獎",
      amount: "每人金額：5,000 元／學期",
      eligibility: "當學期「碩一甲」、「碩二甲」成績排名第一的學生。不需申請，所方自動依成績排名選出。",
      color: "bg-gradient-to-br from-blue-500 to-blue-700",
      delay: 100
    },
    {
      icon: <Briefcase size={24} className="text-white" />,
      title: "🏛 模擬法庭辯論賽獎助金",
      amount: "每人金額：5,000 元",
      eligibility: "有實際「報名參加」國內或國際模擬法庭比賽的成員。建議先參加系上舉辦的「徵選」！",
      color: "bg-gradient-to-br from-purple-500 to-purple-700",
      delay: 200
    },
    {
      icon: <School size={24} className="text-white" />,
      title: "📊 教學獎助金（課程助教）",
      amount: "金額：2,000 元 ~ 8,000 元/月",
      eligibility: "擔任課程助教的同學。想學習如何設計教學與評量，希望每月有穩定生活費補助的同學適合申請。",
      color: "bg-gradient-to-br from-indigo-500 to-indigo-700",
      delay: 300
    },
    {
      icon: <Award size={24} className="text-white" />,
      title: "📝 學生論文發表獎勵",
      amount: "金額：2,000 元 ~ 10,000 元/篇",
      eligibility: "不同發表形式有不同補助。若你打算投稿期刊、參加研討會，若你畢業論文已發展為正式文章，這筆資源請務必利用！",
      color: "bg-gradient-to-br from-green-500 to-green-700",
      delay: 400
    },
    {
      icon: <Award size={24} className="text-white" />,
      title: "🏆 傑出博碩士論文獎",
      amount: "每篇頒發：10,000 元＋獎狀或獎座",
      eligibility: "每年選出 3 篇優秀論文。若你對畢業論文投入大量心血，值得推薦參賽！",
      color: "bg-gradient-to-br from-yellow-500 to-yellow-700",
      delay: 500
    }
  ];
  
  const resourcesData = resources || defaultResources;
  
  const handleCardClick = (resource) => {
    if (onCardClick) {
      onCardClick(resource);
    }
  };
  
  return (
    <section className={`py-12 bg-gray-50 ${className}`} id="academic">
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

export default AcademicRewards;