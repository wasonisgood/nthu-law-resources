"use client"

import React, { useState, useEffect } from 'react';
import { ArrowRight, BookOpen, Briefcase, Award, School, Heart, Calendar, ChevronDown, Search } from 'lucide-react';

// Custom hook for parallax scrolling effect
const useParallax = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return scrollY;
};

// Animated background component
const AnimatedBackground = () => {
  const scrollY = useParallax();
  
  return (
    
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
    
      <div 
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-100 opacity-30"
        style={{ transform: `translate(${scrollY * 0.02}px, ${scrollY * 0.01}px)` }}
      />
      <div 
        className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-purple-100 opacity-20"
        style={{ transform: `translate(${scrollY * -0.02}px, ${scrollY * 0.03}px)` }}
      />
      <div 
        className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full bg-green-100 opacity-25"
        style={{ transform: `translate(${scrollY * 0.01}px, ${scrollY * -0.02}px)` }}
      />
      {/* Law-themed decorative elements */}
      <div className="absolute top-1/3 right-1/4 opacity-5">
        <svg width="200" height="200" viewBox="0 0 100 100">
          <path d="M50 10 L90 90 L10 90 Z" fill="currentColor" className="text-purple-900" />
        </svg>
      </div>
      <div className="absolute bottom-1/4 left-1/3 opacity-5">
        <svg width="150" height="150" viewBox="0 0 100 100">
          <rect x="20" y="20" width="60" height="60" rx="5" fill="currentColor" className="text-blue-900" />
        </svg>
      </div>
    </div>
  );
};

// Custom card component with hover effect
const ResourceCard = ({ icon, title, amount, eligibility, color, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`relative overflow-hidden rounded-xl shadow-lg p-6 transition-all duration-300 ${color} h-full`}
      style={{ 
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)', 
        animationDelay: `${delay}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-white bg-opacity-20">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-white text-opacity-90 mb-4">{amount}</p>
          <div className="bg-white bg-opacity-10 p-3 rounded-lg">
            <p className="text-white text-sm">{eligibility}</p>
          </div>
        </div>
      </div>
      <div 
        className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full bg-white bg-opacity-10 transition-transform duration-300"
        style={{ transform: isHovered ? 'scale(1.2)' : 'scale(1)' }}
      />
    </div>
  );
};

// Eligibility checker component
const EligibilityChecker = () => {
  const [answers, setAnswers] = useState({
    year: '',
    focus: '',
    financialNeed: ''
  });
  
  const [results, setResults] = useState([]);
  
  const handleChange = (field, value) => {
    setAnswers({...answers, [field]: value});
  };
  
  const checkEligibility = () => {
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
    
    setResults(eligibleResources);
  };
  
  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden">
      <div className="p-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <h3 className="text-xl font-bold text-white">資源適合度檢測</h3>
        <p className="text-white text-opacity-80">回答幾個問題，找出最適合你的資源</p>
      </div>
      <div className="p-6">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">你目前是哪個年級？</label>
          <select 
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={answers.year}
            onChange={(e) => handleChange('year', e.target.value)}
          >
            <option value="">請選擇...</option>
            <option value="碩一">碩一</option>
            <option value="碩二">碩二</option>
            <option value="延畢生">延畢生</option>
          </select>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">你最感興趣的發展方向是？</label>
          <select 
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={answers.focus}
            onChange={(e) => handleChange('focus', e.target.value)}
          >
            <option value="">請選擇...</option>
            <option value="學術">學術研究與論文發表</option>
            <option value="辯論">法律辯論與競賽</option>
            <option value="實務">法律實務與實習</option>
            <option value="公益">公益與社會參與</option>
            <option value="教學">教學與助教工作</option>
          </select>
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">是否需要經濟支持？</label>
          <select 
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={answers.financialNeed}
            onChange={(e) => handleChange('financialNeed', e.target.value)}
          >
            <option value="">請選擇...</option>
            <option value="是">是</option>
            <option value="否">否</option>
          </select>
        </div>
        
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

// Timeline component for the 3-year planning
const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const timelineData = [
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
  
  return (
    <div className="relative">
      <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-600 -translate-x-1/2" />
      
      <div className="space-y-8 lg:space-y-12">
        {timelineData.map((item, index) => (
          <div 
            key={index} 
            className={`relative ${index % 2 === 0 ? 'lg:pr-1/2' : 'lg:pl-1/2 lg:ml-auto'} transition-opacity duration-300`}
            style={{ opacity: activeIndex === index ? 1 : 0.7 }}
            onMouseEnter={() => setActiveIndex(index)}
          >
            <div className="hidden lg:block absolute left-1/2 top-6 w-4 h-4 rounded-full bg-white border-4 border-blue-600 -translate-x-1/2" />
            
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

// Main component
const NTHULawResources = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const scrollY = useParallax();
  
  const handleNavClick = (section) => {
    setActiveSection(section);
    // In a real Next.js app, we'd use router.push or scroll to section
  };
  
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <AnimatedBackground />
      
      {/* Header */}
      <header className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 transform skew-y-3 origin-top-left -z-10" 
          style={{ top: '-2rem', height: 'calc(100% + 4rem)' }} />
        
        <div className="container mx-auto px-4 py-16 sm:py-24">
          <div className="flex flex-col items-start">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4"
              style={{ textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
            >
              清大科法所
              <span className="block">學生資源總覽</span>
            </h1>
            <p className="text-xl text-white text-opacity-90 max-w-2xl mb-8">
              獎學金 × 實習 × 助學 × 補助：打造你的專屬學習旅程
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                className="flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-colors"
                onClick={() => handleNavClick('checker')}
              >
                找適合我的資源 <ArrowRight size={18} />
              </button>
              <button 
                className="flex items-center gap-2 px-6 py-3 bg-blue-500 bg-opacity-20 text-white rounded-full font-medium hover:bg-opacity-30 transition-colors"
                onClick={() => handleNavClick('timeline')}
              >
                三年規劃建議 <Calendar size={18} />
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Navigation */}
      <nav className="sticky top-0 bg-white shadow-md z-30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-blue-600">NTHU LAW</div>
            <div className="flex items-center space-x-1 md:space-x-4 overflow-x-auto hide-scrollbar">
              {[
                { id: 'overview', label: '總覽', icon: <BookOpen size={16} /> },
                { id: 'academic', label: '學術獎勵', icon: <Award size={16} /> },
                { id: 'practice', label: '實務經驗', icon: <Briefcase size={16} /> },
                { id: 'work', label: '校內工讀', icon: <School size={16} /> },
                { id: 'special', label: '跨單位獎學金', icon: <Heart size={16} /> },
                { id: 'timeline', label: '三年規劃', icon: <Calendar size={16} /> },
                { id: 'checker', label: '適合度檢測', icon: <Search size={16} /> }
              ].map((item) => (
                <button
                  key={item.id}
                  className={`flex items-center gap-1 px-3 py-2 text-sm whitespace-nowrap rounded-md transition-colors ${
                    activeSection === item.id 
                      ? 'bg-blue-100 text-blue-700 font-medium' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
            <div className="md:hidden">
              <button className="p-2 rounded-md text-gray-500 hover:bg-gray-100">
                <ChevronDown size={20} />
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Quick guide */}
      <section className="py-12">
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
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div 
            className="relative mb-12"
            style={{ transform: `translateY(${scrollY * 0.05}px)` }}
          >
            <h2 className="text-3xl font-bold text-center">
              <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">🎖️ 一、表現優異？別錯過這些學術獎勵！</span>
            </h2>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResourceCard 
              icon={<BookOpen size={24} className="text-white" />}
              title="📘 書卷獎"
              amount="每人金額：5,000 元／學期"
              eligibility="當學期「碩一甲」、「碩二甲」成績排名第一的學生。不需申請，所方自動依成績排名選出。"
              color="bg-gradient-to-br from-blue-500 to-blue-700"
              delay={100}
            />
            
            <ResourceCard 
              icon={<Briefcase size={24} className="text-white" />}
              title="🏛 模擬法庭辯論賽獎助金"
              amount="每人金額：5,000 元"
              eligibility="有實際「報名參加」國內或國際模擬法庭比賽的成員。建議先參加系上舉辦的「徵選」！"
              color="bg-gradient-to-br from-purple-500 to-purple-700"
              delay={200}
            />
            
            <ResourceCard 
              icon={<School size={24} className="text-white" />}
              title="📊 教學獎助金（課程助教）"
              amount="金額：2,000 元 ~ 8,000 元/月"
              eligibility="擔任課程助教的同學。想學習如何設計教學與評量，希望每月有穩定生活費補助的同學適合申請。"
              color="bg-gradient-to-br from-indigo-500 to-indigo-700"
              delay={300}
            />
            
            <ResourceCard 
              icon={<Award size={24} className="text-white" />}
              title="📝 學生論文發表獎勵"
              amount="金額：2,000 元 ~ 10,000 元/篇"
              eligibility="不同發表形式有不同補助。若你打算投稿期刊、參加研討會，若你畢業論文已發展為正式文章，這筆資源請務必利用！"
              color="bg-gradient-to-br from-green-500 to-green-700"
              delay={400}
            />
            
            <ResourceCard 
              icon={<Award size={24} className="text-white" />}
              title="🏆 傑出博碩士論文獎"
              amount="每篇頒發：10,000 元＋獎狀或獎座"
              eligibility="每年選出 3 篇優秀論文。若你對畢業論文投入大量心血，值得推薦參賽！"
              color="bg-gradient-to-br from-yellow-500 to-yellow-700"
              delay={500}
            />
          </div>
        </div>
      </section>
      
      {/* Practical experience section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div 
            className="relative mb-12"
            style={{ transform: `translateY(${scrollY * 0.05}px)` }}
          >
            <h2 className="text-3xl font-bold text-center">
              <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">👥 二、實務經驗與社會參與機會</span>
            </h2>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResourceCard 
              icon={<Briefcase size={24} className="text-white" />}
              title="⚖️ 理律法律事務所實習"
              amount="每月實習補助：8,000 元"
              eligibility="每學期錄取3人。想了解實務律師日常、未來走事務所路線的你必看！"
              color="bg-gradient-to-br from-blue-600 to-indigo-700"
              delay={100}
            />
            
            <ResourceCard 
              icon={<Briefcase size={24} className="text-white" />}
              title="🌐 國際產學總中心實習"
              amount="每月補助：8,000 元"
              eligibility="實習時間：每週 8 小時，共 12 個月。想了解政策與科技業界合作的行政流程、想強化履歷的你！"
              color="bg-gradient-to-br from-indigo-600 to-purple-700"
              delay={200}
            />
            
            <ResourceCard 
              icon={<Heart size={24} className="text-white" />}
              title="❤️ 公益行動補助計畫"
              amount="依計畫內容核定"
              eligibility="可申請NGO／NPO公益實習、創新公益競賽、公益訴訟協力計畫等。對社會議題有熱情、有想法的你！"
              color="bg-gradient-to-br from-red-500 to-pink-700"
              delay={300}
            />
          </div>
        </div>
      </section>
      
      {/* Campus work section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div 
            className="relative mb-12"
            style={{ transform: `translateY(${scrollY * 0.05}px)` }}
          >
            <h2 className="text-3xl font-bold text-center">
              <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">💼 三、校內工讀 × 活動助理</span>
            </h2>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <ResourceCard 
              icon={<School size={24} className="text-white" />}
              title="9. 科法所辦公室工讀生"
              amount="薪資：依學校公告時薪標準"
              eligibility="時間：輪班制，依學期公告名額。想在課餘時間穩定工讀、又不想離開校園跑外送！"
              color="bg-gradient-to-br from-green-500 to-teal-700"
              delay={100}
            />
            
            <ResourceCard 
              icon={<School size={24} className="text-white" />}
              title="10. 活動專案助理"
              amount="薪資：月薪或時薪，視專案公告"
              eligibility="內容包含：協助迎新、送舊、招生說明會、甄試入學等活動。擅長活動規劃、喜歡團隊合作與參與！"
              color="bg-gradient-to-br from-teal-500 to-blue-700"
              delay={200}
            />
          </div>
        </div>
      </section>
      
      {/* Special scholarships section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div 
            className="relative mb-12"
            style={{ transform: `translateY(${scrollY * 0.05}px)` }}
          >
            <h2 className="text-3xl font-bold text-center">
              <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">✨ 跨單位獎學金專區</span>
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
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">🌈 逐夢獎學金</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">大學部／研究所學生</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-500">無明確成績門檻</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-500">鼓勵學生勇敢實現夢想：不限於學術研究，計畫可具創意、挑戰極限、服務社會、開拓視野等</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">無固定金額，依提案內容核定</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">🙏 還願獎學金</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">大學生及研究生（含準備入學者）</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-500">初次申請：繳交歷年成績單；再次申請：大學部GPA需達2.43以上、研究生需達2.92以上，且不得有不及格科目</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-500">幫助清寒學生安心就學，無需還款，但鼓勵將來回饋以延續助人精神</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">無固定金額，視個案核定</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="p-6 bg-blue-50">
              <h4 className="font-medium text-blue-800 mb-4">✨ 推薦申請時機：</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="font-medium">對人生充滿熱情，想做計畫、走出去看看世界的你</div>
                  <div className="text-sm bg-blue-100 p-3 rounded text-blue-800">
                    ✅ 申請「逐夢獎學金」做一場公益之旅、國際參與或藝術創作計畫！
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="font-medium">家中經濟壓力大、又想安心念書的你</div>
                  <div className="text-sm bg-blue-100 p-3 rounded text-blue-800">
                    ✅ 申請「還願獎學金」，減輕學費壓力，同時獲得溫暖支持
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Timeline section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div 
            className="relative mb-12"
            style={{ transform: `translateY(${scrollY * 0.05}px)` }}
          >
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
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div 
            className="relative mb-12"
            style={{ transform: `translateY(${scrollY * 0.05}px)` }}
          >
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
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold">清大科法所學生資源總覽</h3>
              <p className="text-gray-400">打造你的專屬學習旅程</p>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <p className="text-sm text-gray-400">由清大科法所迎新團隊進行資料整理</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
              <p className="text-sm text-gray-400">© 2025 NTHU Institute of Law for Science and Technology. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NTHULawResources;