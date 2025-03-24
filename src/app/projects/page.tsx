"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Lightbulb, Cpu, Scale, BookOpen, 
  Globe, Users, Calendar, ArrowRight, 
  GitHub, ExternalLink, Search, Tag
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Card } from '../../components/ui/card';

// 假設這些組件已經存在或將被創建
import Header from '../../components/layout/header';
import Footer from '../../components/layout/footer';
import Navigation from '../../components/layout/navigation';

const ProjectsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("全部");
  
  // 模擬專案數據
  const projects = [
    {
      id: "ai-hr-due-diligence",
      title: "AI人權盡職調查",
      description: "針對AI系統開發與應用過程中的人權影響進行盡職調查，建立評估框架與監測機制",
      category: "研究專案",
      tags: ["人工智能", "人權", "盡職調查", "法律政策"],
      status: "進行中",
      startDate: "2025/03/01",
      endDate: "2025/12/31",
      progress: 30,
      leader: "張小明",
      members: 8,
      highlights: [
        "建立AI人權影響評估框架",
        "開發AI系統人權風險檢核表",
        "舉辦AI人權盡職調查工作坊",
        "發布研究報告與政策建議"
      ],
      imageUrl: "/ai-hr.jpg"
    },
    {
      id: "ai-teaching-assistant",
      title: "AI小助教共筆",
      description: "運用AI技術協助課堂筆記整理、複習重點提取與學習資源分類，提升學習效率",
      category: "教學工具",
      tags: ["AI輔助教學", "筆記共享", "學習工具", "知識管理"],
      status: "進行中",
      startDate: "2025/02/15",
      endDate: "2025/07/31",
      progress: 45,
      leader: "李小華",
      members: 5,
      highlights: [
        "開發科法課程專用AI筆記助手",
        "建立課程知識圖譜與關聯分析",
        "推動跨課程知識整合系統",
        "舉辦AI學習工具使用工作坊"
      ],
      imageUrl: "/ai-teaching.jpg"
    },
    {
      id: "ai-legal-aid",
      title: "AI法律扶助",
      description: "開發AI法律諮詢系統，協助解答基本法律問題，提供初步法律資訊與資源引導",
      category: "社會服務",
      tags: ["法律諮詢", "AI系統", "公益服務", "法律資源"],
      status: "規劃中",
      startDate: "2025/05/01",
      endDate: "2025/12/31",
      progress: 10,
      leader: "王大明",
      members: 6,
      highlights: [
        "開發基礎法律問題自動回覆系統",
        "建立常見法律問題知識庫",
        "舉辦公益法律諮詢服務",
        "與法律扶助基金會合作推廣"
      ],
      imageUrl: "/ai-legal-aid.jpg"
    },
    {
      id: "ai-intl-resources",
      title: "AI國際學習資源整理",
      description: "收集、整理與分享全球頂尖大學與機構的AI法律相關開放資源，促進國際視野",
      category: "學習資源",
      tags: ["國際資源", "開放教育", "自學指南", "知識共享"],
      status: "進行中",
      startDate: "2025/01/15",
      endDate: "2025/08/31",
      progress: 60,
      leader: "林小玲",
      members: 4,
      highlights: [
        "建立全球AI法律學習資源數據庫",
        "開發資源評級與推薦系統",
        "定期發布優質資源導讀",
        "組織國際資源學習小組"
      ],
      imageUrl: "/ai-resources.jpg"
    },
    {
      id: "ai-ethics-debate",
      title: "AI倫理辯論賽",
      description: "舉辦圍繞AI倫理議題的辯論賽，促進多角度思考與深度討論",
      category: "活動專案",
      tags: ["AI倫理", "辯論賽", "跨校交流", "思辨能力"],
      status: "規劃中",
      startDate: "2025/09/01",
      endDate: "2025/11/30",
      progress: 5,
      leader: "陳小青",
      members: 7,
      highlights: [
        "設計AI倫理辯論主題與規則",
        "邀請跨校學生與專家參與",
        "舉辦預賽與決賽活動",
        "出版辯論精華彙編"
      ],
      imageUrl: "/ai-ethics.jpg"
    }
  ];
  
  // 過濾專案
  const filteredProjects = projects.filter(project => {
    // 類別過濾
    if (activeCategory !== "全部" && project.category !== activeCategory) {
      return false;
    }
    
    // 搜尋過濾
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    return true;
  });
  
  // 取得所有專案類別
  const categories = ["全部", ...new Set(projects.map(p => p.category))];
  
  // 處理進度條顏色
  const getProgressColor = (progress) => {
    if (progress < 30) return "bg-blue-500";
    if (progress < 70) return "bg-purple-500";
    return "bg-green-500";
  };
  
  // 處理狀態標籤顏色
  const getStatusColor = (status) => {
    switch (status) {
      case "進行中": return "green";
      case "規劃中": return "blue";
      case "已完成": return "gray";
      default: return "gray";
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        title="專案計畫" 
        subtitle="清大科法所學生會" 
        description="探索學生會主導的創新專案與計畫"
      />
      
      <Navigation 
        activeSection="overview"
        items={[
          { id: 'overview', label: '專案總覽', icon: <Lightbulb size={16} /> },
          { id: 'ai-hr-due-diligence', label: 'AI人權盡職調查', icon: <Scale size={16} /> },
          { id: 'ai-teaching-assistant', label: 'AI小助教共筆', icon: <BookOpen size={16} /> },
          { id: 'ai-legal-aid', label: 'AI法律扶助', icon: <Users size={16} /> },
          { id: 'ai-intl-resources', label: 'AI國際學習資源', icon: <Globe size={16} /> },
        ]}
        onNavClick={(section) => {
          if (section === "overview") {
            // 保持在當前頁面，滾動到頂部
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            // 導航到特定專案頁面
            window.location.href = `/projects/${section}`;
          }
        }}
      />
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">專案總覽</h2>
              <p className="text-gray-600 max-w-3xl">
                學生會推動多項創新專案，結合法律與科技領域的專業，為學生提供多元學習與實踐機會，
                同時為社會創造價值。以下是目前正在進行與規劃中的專案。
              </p>
            </div>
            
            {/* 搜尋與過濾 */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                      category === activeCategory
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={16} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  className="pl-10 pr-4 py-2 w-full md:w-64 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="搜尋專案..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            
            {/* 專案卡片 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {filteredProjects.map((project) => (
                <Link key={project.id} href={`/projects/${project.id}`} className="block h-full">
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="h-40 bg-gradient-to-r from-blue-500 to-purple-600 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Cpu size={64} className="text-white opacity-20" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                        <div className="flex justify-between items-start">
                          <h3 className="text-xl font-bold text-white">{project.title}</h3>
                          <Badge color={getStatusColor(project.status)}>
                            {project.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-5">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar size={14} className="mr-1" />
                        <span>{project.startDate} 至 {project.endDate}</span>
                      </div>
                      
                      <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                      
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span>完成進度</span>
                          <span className="font-medium">{project.progress}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${getProgressColor(project.progress)}`}
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.tags.slice(0, 3).map((tag, index) => (
                          <Badge key={index} color="blue" variant="subtle" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {project.tags.length > 3 && (
                          <Badge color="gray" variant="subtle" className="text-xs">
                            +{project.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <Users size={14} className="mr-1" />
                          <span>{project.members} 位成員</span>
                        </div>
                        <div className="text-blue-600 text-sm font-medium flex items-center">
                          查看詳情 <ArrowRight size={14} className="ml-1" />
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
            
            {filteredProjects.length === 0 && (
              <div className="bg-white rounded-xl shadow p-8 text-center">
                <Lightbulb size={48} className="mx-auto mb-4 text-gray-300" />
                <h3 className="text-lg font-bold text-gray-700 mb-2">找不到符合條件的專案</h3>
                <p className="text-gray-500 mb-4">
                  嘗試更改搜尋條件或類別過濾器以查看更多專案。
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("全部");
                  }}
                >
                  清除過濾條件
                </Button>
              </div>
            )}
            
            {/* 專案申請資訊 */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl shadow-lg p-6 text-white">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="p-4 bg-white/10 rounded-xl">
                  <Lightbulb size={48} className="text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">有創新專案想法？</h3>
                  <p className="opacity-90 mb-6">
                    學生會鼓勵並支持同學提出創新專案提案。如果你有關於法律科技、學生權益、學術交流等方面的
                    專案構想，歡迎提交專案計畫申請，經審核通過後可獲得資源支持與執行機會。
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white/10 p-3 rounded-lg">
                      <h4 className="font-bold mb-1">支持資源</h4>
                      <p className="text-sm opacity-90">提供場地、活動經費、技術支援等資源</p>
                    </div>
                    
                    <div className="bg-white/10 p-3 rounded-lg">
                      <h4 className="font-bold mb-1">宣傳推廣</h4>
                      <p className="text-sm opacity-90">協助專案宣傳、招募團隊成員與推廣成果</p>
                    </div>
                    
                    <div className="bg-white/10 p-3 rounded-lg">
                      <h4 className="font-bold mb-1">專業指導</h4>
                      <p className="text-sm opacity-90">邀請相關領域教師或專家提供指導與建議</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="bg-white text-blue-700 hover:bg-blue-50">
                      提交專案提案
                    </Button>
                    <Button variant="outline" className="bg-blue-700 bg-opacity-20 text-white hover:bg-opacity-30 border-white/30">
                      了解申請流程
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProjectsPage;