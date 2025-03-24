"use client";

import React from 'react';
import useParallax from '@/hooks/use-parallax';

/**
 * Special Scholarships section component
 * 
 * @param {Object} props
 * @param {string} [props.title="✨ 跨單位獎學金專區"] - Section title
 * @param {Array} [props.scholarships] - Array of scholarship information
 * @param {Array} [props.recommendations] - Array of recommendation objects
 * @param {string} [props.className] - Additional CSS classes
 * @returns {React.ReactElement}
 */
const SpecialScholarships = ({ 
  title = "✨ 跨單位獎學金專區",
  scholarships,
  recommendations,
  className = ''
}) => {
  const scrollY = useParallax();
  
  // Default scholarships if none provided
  const defaultScholarships = [
    {
      name: "🌈 逐夢獎學金",
      eligibility: "大學部／研究所學生",
      requirements: "無明確成績門檻",
      purpose: "鼓勵學生勇敢實現夢想：不限於學術研究，計畫可具創意、挑戰極限、服務社會、開拓視野等",
      amount: "無固定金額，依提案內容核定"
    },
    {
      name: "🙏 還願獎學金",
      eligibility: "大學生及研究生（含準備入學者）",
      requirements: "初次申請：繳交歷年成績單；再次申請：大學部GPA需達2.43以上、研究生需達2.92以上，且不得有不及格科目",
      purpose: "幫助清寒學生安心就學，無需還款，但鼓勵將來回饋以延續助人精神",
      amount: "無固定金額，視個案核定"
    }
  ];
  
  // Default recommendations if none provided
  const defaultRecommendations = [
    {
      profile: "對人生充滿熱情，想做計畫、走出去看看世界的你",
      recommendation: "✅ 申請「逐夢獎學金」做一場公益之旅、國際參與或藝術創作計畫！"
    },
    {
      profile: "家中經濟壓力大、又想安心念書的你",
      recommendation: "✅ 申請「還願獎學金」，減輕學費壓力，同時獲得溫暖支持"
    }
  ];
  
  const scholarshipsData = scholarships || defaultScholarships;
  const recommendationsData = recommendations || defaultRecommendations;
  
  return (
    <section className={`py-12 ${className}`} id="special">
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
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-blue-600 to-purple-600">
            <h3 className="text-xl font-bold text-white">逐夢 × 還願 × 助你走更遠！</h3>
            <p className="text-white text-opacity-80">除了科法所本身的獎學金，清大其實還有許多由學務處生活輔導組或其他學術單位開放申請的獎助資源</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">獎學金名稱</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">對象</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">申請門檻</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">目的</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">金額說明</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {scholarshipsData.map((scholarship, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{scholarship.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{scholarship.eligibility}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-500">{scholarship.requirements}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-500">{scholarship.purpose}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{scholarship.amount}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-6 bg-blue-50">
            <h4 className="font-medium text-blue-800 mb-4">✨ 推薦申請時機：</h4>
            <div className="space-y-4">
              {recommendationsData.map((rec, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="font-medium">{rec.profile}</div>
                  <div className="text-sm bg-blue-100 p-3 rounded text-blue-800">
                    {rec.recommendation}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialScholarships;