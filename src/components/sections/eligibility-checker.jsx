"use client";

import React, { useState } from 'react';

/**
 * EligibilityChecker component for users to find appropriate resources
 * 
 * @param {Object} props
 * @param {Array} [props.questions] - Custom questions to ask
 * @param {Function} [props.customChecker] - Custom eligibility checking logic
 * @param {Object} [props.initialAnswers] - Initial answers to prefill
 * @param {string} [props.className] - Additional CSS classes
 * @returns {React.ReactElement}
 */
const EligibilityChecker = ({ 
  questions,
  customChecker,
  initialAnswers,
  className = ''
}) => {
  const defaultQuestions = [
    {
      id: 'year',
      label: '你目前是哪個年級？',
      options: [
        { value: '', label: '請選擇...' },
        { value: '碩一', label: '碩一' },
        { value: '碩二', label: '碩二' },
        { value: '延畢生', label: '延畢生' }
      ]
    },
    {
      id: 'focus',
      label: '你最感興趣的發展方向是？',
      options: [
        { value: '', label: '請選擇...' },
        { value: '學術', label: '學術研究與論文發表' },
        { value: '辯論', label: '法律辯論與競賽' },
        { value: '實務', label: '法律實務與實習' },
        { value: '公益', label: '公益與社會參與' },
        { value: '教學', label: '教學與助教工作' }
      ]
    },
    {
      id: 'financialNeed',
      label: '是否需要經濟支持？',
      options: [
        { value: '', label: '請選擇...' },
        { value: '是', label: '是' },
        { value: '否', label: '否' }
      ]
    }
  ];
  
  const [answers, setAnswers] = useState(initialAnswers || {
    year: '',
    focus: '',
    financialNeed: ''
  });
  
  const [results, setResults] = useState([]);
  
  const handleChange = (field, value) => {
    setAnswers({...answers, [field]: value});
  };
  
  const defaultEligibilityCheck = () => {
    const eligibleResources = [];
    
    if (answers.year === '碩一') {
      eligibleResources.push('書卷獎', '教學助教金', '工讀機會');
    }
    
    if (answers.focus === '學術') {
      eligibleResources.push('學術論文發表獎勵', '傑出論文獎');
    }
    
    if (answers.focus === '辯論') {
      eligibleResources.push('模擬法庭辯論賽獎助金');
    }
    
    if (answers.focus === '實務') {
      eligibleResources.push('理律法律事務所實習', '國際產學總中心實習');
    }
    
    if (answers.focus === '公益') {
      eligibleResources.push('公益行動補助計畫');
    }
    
    if (answers.focus === '教學') {
      eligibleResources.push('教學獎助金（課程助教）');
    }
    
    if (answers.financialNeed === '是') {
      eligibleResources.push('所辦工讀／活動助理', '還願獎學金');
    }
    
    return eligibleResources;
  };
  
  const checkEligibility = () => {
    const eligibleResources = customChecker 
      ? customChecker(answers) 
      : defaultEligibilityCheck();
    
    setResults(eligibleResources);
  };
  
  const questionsToRender = questions || defaultQuestions;
  
  return (
    <div className={`bg-white rounded-xl shadow-xl overflow-hidden ${className}`}>
      <div className="p-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <h3 className="text-xl font-bold text-white">資源適合度檢測</h3>
        <p className="text-white text-opacity-80">回答幾個問題，找出最適合你的資源</p>
      </div>
      <div className="p-6">
        {questionsToRender.map((question) => (
          <div className="mb-4" key={question.id}>
            <label className="block text-sm font-medium text-gray-700 mb-1">{question.label}</label>
            <select 
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={answers[question.id] || ''}
              onChange={(e) => handleChange(question.id, e.target.value)}
            >
              {question.options.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
        ))}
        
        <button 
          className="w-full py-2 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-md hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onClick={checkEligibility}
        >
          檢測適合資源
        </button>
        
        {results.length > 0 && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-blue-800 mb-2">推薦資源：</h4>
            <ul className="space-y-2">
              {results.map((resource, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span>{resource}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default EligibilityChecker;