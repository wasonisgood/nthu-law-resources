"use client";

import React, { useState } from 'react';
import { BookOpen, Briefcase, Award, School, Heart, Calendar, ChevronDown, Search } from 'lucide-react';

// Import components
import AnimatedBackground from '@/components/animated-background';
import Header from '@/components/layout/header';
import Navigation from '@/components/layout/navigation';
import Footer from '@/components/layout/footer';
import Timeline from '@/components/sections/timeline';
import EligibilityChecker from '@/components/sections/eligibility-checker';
import AcademicRewards from '@/components/sections/academic-rewards';
import PracticalExperience from '@/components/sections/practical-experience';
import CampusWork from '@/components/sections/campus-work';
import SpecialScholarships from '@/components/sections/special-scholarships';

/**
 * Main component for NTHU Law Resources page
 */
const NTHULawResources = () => {
  const [activeSection, setActiveSection] = useState('overview');

  // Define navigation items
  const navItems = [
    { id: 'overview', label: '總覽', icon: <BookOpen size={16} /> },
    { id: 'academic', label: '學術獎勵', icon: <Award size={16} /> },
    { id: 'practice', label: '實務經驗', icon: <Briefcase size={16} /> },
    { id: 'work', label: '校內工讀', icon: <School size={16} /> },
    { id: 'special', label: '跨單位獎學金', icon: <Heart size={16} /> },
    { id: 'timeline', label: '三年規劃', icon: <Calendar size={16} /> },
    { id: 'checker', label: '適合度檢測', icon: <Search size={16} /> }
  ];

  // Navigation click handler
  const handleNavClick = (section) => {
    setActiveSection(section);
    
    // Find the section element and scroll to it
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <AnimatedBackground theme="law" />
      
      {/* Header */}
      <Header 
        title="清大科法所" 
        subtitle="學生資源總覽" 
        description="獎學金 × 實習 × 助學 × 補助：打造你的專屬學習旅程"
        onButtonClick={handleNavClick}
      />
      
      {/* Navigation */}
      <Navigation 
        activeSection={activeSection} 
        onNavClick={handleNavClick} 
        items={navItems}
      />
      
      {/* Quick guide */}
      <section id="overview" className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">📌【快速選擇引導】我是誰 → 我該看哪一區？</h2>
            
            <div className="overflow-hidden rounded-xl shadow-lg mb-12">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4">
                <h3 className="text-lg font-medium text-white">你是這樣的學生嗎？</h3>
              </div>
              <div className="bg-white divide-y divide-gray-100">
                {[
                  { type: '🎓 剛入學的新生，還在探索資源', sections: '1. 書卷獎 2. 教學助教金 3. 工讀機會' },
                  { type: '📚 努力衝刺學術、想投稿期刊的你', sections: '4. 學術論文發表獎勵 5. 傑出論文獎' },
                  { type: '⚖️ 喜歡上台辯論、參加比賽', sections: '6. 模擬法庭辯論賽獎助金' },
                  { type: '🧳 想累積實務經驗、找實習機會', sections: '7. 理律法律事務所實習 8. 國際產學總中心實習' },
                  { type: '❤️ 想做公益、有社會參與熱忱', sections: '9. 公益行動補助計畫' },
                  { type: '🧑‍🏫 有教學熱情、想當助教賺生活費', sections: '3. 教學獎助金（課程助教）' },
                  { type: '💼 想校內工讀、兼顧讀書與收入', sections: '10. 所辦工讀／活動助理' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start p-4">
                    <div className="flex-1">
                      <p className="font-medium">{item.type}</p>
                    </div>
                    <div className="flex-1 text-sm bg-gray-50 p-3 rounded ml-4">
                      <p className="text-gray-700">{item.sections}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Academic rewards section */}
      <AcademicRewards />
      
      {/* Practical experience section */}
      <PracticalExperience />
      
      {/* Campus work section */}
      <CampusWork />
      
      {/* Special scholarships section */}
      <SpecialScholarships />
      
      {/* Timeline section */}
      <section id="timeline" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="relative mb-12">
            <h2 className="text-3xl font-bold text-center">
              <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">📆 四、清大科法所三年期規劃建議</span>
            </h2>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="p-6 bg-white rounded-xl shadow-lg mb-12">
              <p className="text-gray-700">
                💡 想要讓自己的研究所生涯過得穩定又充實？不只是拚成績拿書卷獎，也可以透過教學助理、論文補助、實習、工讀等多管道取得經費支援，更重要的是——有計畫地參與這些資源，對履歷與未來出路也會有大大加分！
              </p>
            </div>
            
            <Timeline />
            
            <div className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-blue-600 to-purple-600">
                <h3 className="text-xl font-bold text-white">🎯 核心建議三原則</h3>
              </div>
              <div className="p-6 space-y-6">
                {[
                  { number: "1️⃣", title: "「不要等有需要才開始申請」", desc: "所有補助都需要時間準備與審核，提早三週～一個月準備為佳。" },
                  { number: "2️⃣", title: "「每個學期都至少申請一項補助或資源」", desc: "不論是論文、工讀、助教、實習，只要累積經驗，就會發現申請越來越容易。" },
                  { number: "3️⃣", title: "「多元組合，打造自己的研究所履歷」", desc: "像玩 RPG 一樣，策略搭配補助與資源，畢業時你就會有完整學術＋實務＋公益的履歷！" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-6 p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-700">{item.number}</div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">{item.title}</h4>
                      <p className="text-gray-700">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Eligibility checker section */}
      <section id="checker" className="py-12">
        <div className="container mx-auto px-4">
          <div className="relative mb-12">
            <h2 className="text-3xl font-bold text-center">
              <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">資源適合度檢測</span>
            </h2>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <EligibilityChecker />
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NTHULawResources;