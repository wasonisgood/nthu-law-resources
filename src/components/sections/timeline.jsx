"use client";

import React, { useState } from 'react';

/**
 * Timeline component for displaying sequential information
 * 
 * @param {Object} props
 * @param {Array} props.timelineData - Array of timeline items with semester, keywords, resources, and notes properties
 * @param {string} [props.className] - Additional CSS classes
 * @returns {React.ReactElement}
 */
const Timeline = ({ 
  timelineData = [],
  className = '' 
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Default timeline data if none provided
  const defaultTimelineData = [
    {
      semester: '碩一上',
      keywords: '適應、探索、鋪路',
      resources: ['書卷獎（拚成績）', '參加模擬法庭校內選拔', '工讀（辦公室 or 活動助理）'],
      notes: '開始觀察學長姊如何申請論文補助與助教制度'
    },
    {
      semester: '碩一下',
      keywords: '嘗試、累積、建立特色',
      resources: ['模擬法庭獎助金（若入選隊員）', '爭取教學助教機會', '實習申請（理律／產學中心）', '嘗試參加學術研討會投稿'],
      notes: '開始撰寫期中報告、報名研討會或公法中心演講'
    },
    {
      semester: '碩二上',
      keywords: '聚焦、深耕、準備論文',
      resources: ['學術研討會發表補助', '論文投稿計畫（可爭取投稿TSSCI等）', '公益行動補助計畫', '再次申請助教與工讀金'],
      notes: '開始進入論文初步規劃，確認題目與資料搜集方向'
    },
    {
      semester: '碩二下',
      keywords: '產出、申請、拓展履歷',
      resources: ['學生論文發表獎勵（正式投稿）', '傑出碩士論文獎申請', '實習經驗總結／延伸', '模擬法庭／公益實作經驗彙整'],
      notes: '準備畢業口試＋若延畢可進入更深實作'
    },
    {
      semester: '延畢／碩三',
      keywords: '發表、升學／就業規劃',
      resources: ['持續申請論文發表獎金', '公益計畫延伸或出版', '接活動專案助理／參與招生、迎新'],
      notes: '可嘗試整合經驗成履歷作品集，準備留學、考試、就業方向'
    }
  ];
  
  const displayData = timelineData.length > 0 ? timelineData : defaultTimelineData;
  
  return (
    <div className={`relative ${className}`}>
      <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-600 -translate-x-1/2" />
      
      <div className="space-y-8 lg:space-y-12">
        {displayData.map((item, index) => (
          <div 
            key={index} 
            className={`relative ${index % 2 === 0 ? 'lg:pr-1/2' : 'lg:pl-1/2 lg:ml-auto'} transition-all duration-500`}
            style={{ 
              opacity: activeIndex === index ? 1 : 0.7,
              transform: activeIndex === index ? 'scale(1.02)' : 'scale(1)'
            }}
            onMouseEnter={() => setActiveIndex(index)}
            onFocus={() => setActiveIndex(index)}
          >
            <div className="hidden lg:block absolute left-1/2 top-6 w-4 h-4 rounded-full bg-white border-4 border-blue-600 -translate-x-1/2 z-10" />
            
            <div className={`bg-white rounded-xl shadow-lg p-6 ${index % 2 === 0 ? 'lg:mr-10' : 'lg:ml-10'}`}>
              <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium mb-4">
                {item.semester}
              </div>
              
              <h3 className="text-lg font-bold text-gray-800 mb-1">{item.keywords}</h3>
              
              <ul className="space-y-2 my-4">
                {item.resources.map((resource, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{resource}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-4 p-3 bg-blue-50 rounded-lg text-sm text-blue-800">
                <p>{item.notes}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;