"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Scale, ArrowLeft, Calendar, Clock, Users, 
  FileText, Download, ExternalLink, ChevronDown, 
  Check, AlertTriangle, CheckCircle, GitHub,
  MessageSquare, Mail, Bookmark
} from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Badge } from '../../../components/ui/badge';
import { Card } from '../../../components/ui/card';

// 假設這些組件已經存在或將被創建
import Header from '../../../components/layout/header';
import Footer from '../../../components/layout/footer';
import Navigation from '../../../components/layout/navigation';

const AIHRProjectPage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  // 專案資料
  const project = {
    id: "ai-hr-due-diligence",
    title: "AI人權盡職調查",
    subtitle: "建立AI系統開發與應用的人權保障框架",
    description: "隨著AI技術迅速發展與廣泛應用，其對人權的潛在影響日益受到關注。本專案旨在研究與開發針對AI系統的人權盡職調查框架與工具，協助科技公司、政府機構和其他組織評估、預防和減輕AI系統可能帶來的人權風險。",
    category: "研究專案",
    tags: ["人工智能", "人權", "盡職調查", "法律政策", "風險評估", "道德準則"],
    status: "進行中",
    startDate: "2025/03/01",
    endDate: "2025/12/31",
    progress: 30,
    leader: "張小明",
    members: [
      { name: "張小明", role: "專案負責人", department: "科法所碩二" },
      { name: "李小華", role: "研究組長", department: "科法所碩一" },
      { name: "王大明", role: "技術顧問", department: "資工系博士生" },
      { name: "林小玲", role: "文件編輯", department: "科法所碩一" },
      { name: "陳小青", role: "國際聯絡", department: "科法所碩二" },
      { name: "蔡小雯", role: "法律研究", department: "科法所碩一" },
      { name: "黃小剛", role: "活動籌劃", department: "科法所碩一" },
      { name: "劉小芳", role: "外部協調", department: "科法所碩二" }
    ],
    objectives: [
      "研究國際AI人權盡職調查最佳實踐與標準",
      "開發適合台灣法律環境的AI人權盡職調查框架",
      "建立AI系統人權風險評估與監測工具",
      "舉辦工作坊與培訓，提升相關意識與能力",
      "發布研究報告與政策建議，促進負責任的AI發展"
    ],
    milestones: [
      { title: "研究階段", date: "2025/03 - 2025/05", status: "已完成", deliverables: ["文獻分析報告", "國際標準比較研究"] },
      { title: "框架開發", date: "2025/05 - 2025/07", status: "進行中", deliverables: ["AI人權盡職調查框架初稿", "評估工具原型"] },
      { title: "測試與優化", date: "2025/08 - 2025/10", status: "規劃中", deliverables: ["案例研究報告", "框架與工具最終版"] },
      { title: "推廣與政策倡議", date: "2025/11 - 2025/12", status: "規劃中", deliverables: ["政策建議書", "實施指南"] }
    ],
    resources: [
      { name: "AI人權盡職調查框架草案", type: "文件", url: "#", status: "可下載" },
      { name: "AI系統人權風險評估表", type: "工具", url: "#", status: "開發中" },
      { name: "國際AI人權標準彙編", type: "研究資料", url: "#", status: "可下載" },
      { name: "案例研究：臉部辨識系統", type: "報告", url: "#", status: "可下載" }
    ],
    events: [
      { name: "AI人權工作坊 #1", date: "2025/04/15", location: "清大旺宏館", status: "已舉辦" },
      { name: "專家座談會", date: "2025/06/20", location: "線上會議", status: "已舉辦" },
      { name: "AI人權工作坊 #2", date: "2025/09/10", location: "清大旺宏館", status: "規劃中" },
      { name: "成果發表會", date: "2025/12/15", location: "清大大禮堂", status: "規劃中" }
    ],
    updates: [
      { date: "2025/04/30", title: "完成國際AI人權標準研究", content: "團隊已完成對聯合國、歐盟、OECD等機構AI倫理與人權指南的研究，確定了盡職調查框架的基本架構。" },
      { date: "2025/05/15", title: "舉辦第一次AI人權工作坊", content: "邀請50位來自學界、業界的參與者討論AI人權議題，收集寶貴意見以優化盡職調查框架。" },
      { date: "2025/06/10", title: "發布AI人權盡職調查框架初稿", content: "完成框架初稿，包含風險評估、影響分析、緩解措施和監測機制四大部分，開始徵求專家意見回饋。" }
    ],
    faqs: [
      { 
        question: "什麼是AI人權盡職調查？", 
        answer: "AI人權盡職調查是一個持續性過程，旨在識別、預防、減輕和解釋AI系統在開發和使用過程中可能對人權產生的負面影響。這包括評估AI系統的設計、數據來源、演算法、部署環境等因素，並實施相應的風險管控措施。" 
      },
      { 
        question: "為什麼AI系統需要人權盡職調查？", 
        answer: "AI系統可能無意中複製或強化社會中的偏見和歧視，侵犯隱私權，或對特定群體造成不成比例的負面影響。人權盡職調查可幫助開發者和使用者預先識別這些風險，採取措施防止人權侵害。" 
      },
      { 
        question: "本專案的成果將如何應用？", 
        answer: "本專案的成果包括盡職調查框架、評估工具和最佳實踐指南，將提供給科技公司、政府機構和研究機構使用，協助他們在AI開發和應用過程中保障人權。我們也將向相關政策制定者提出建議，促進負責任的AI治理。" 
      },
      { 
        question: "如何參與這個專案？", 
        answer: "我們歡迎對AI倫理、人權法律或技術政策感興趣的同學參與。您可以通過參加我們的工作坊、提供專業建議、協助研究或測試評估工具等方式貢獻。請使用頁面底部的聯繫方式與我們聯繫。" 
      }
    ],
    contacts: [
      { name: "張小明", role: "專案負責人", email: "xiaoming@example.com" },
      { name: "李小華", role: "研究組長", email: "xiaohua@example.com" }
    ],
    externalLinks: [
      { name: "專案 GitHub", url: "https://github.com/nthu-law/ai-hr-due-diligence", icon: <GitHub size={16} /> },
      { name: "研究資源庫", url: "https://nthu-law.notion.site/ai-hr-resources", icon: <Bookmark size={16} /> }
    ]
  };
  
  // 渲染里程碑狀態標籤
  const renderMilestoneStatus = (status) => {
    switch (status) {
      case "已完成":
        return <Badge color="green">已完成</Badge>;
      case "進行中":
        return <Badge color="blue">進行中</Badge>;
      case "規劃中":
        return <Badge color="gray" variant="outline">規劃中</Badge>;
      default:
        return null;
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        title="AI人權盡職調查" 
        subtitle="清大科法所學生會專案" 
        description="建立AI系統開發與應用的人權保障框架"
      />
      
      {/* 基本導航 */}
      <div className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center py-4">
            <Link href="/projects" className="text-gray-500 hover:text-gray-700 flex items-center mr-6">
              <ArrowLeft size={16} className="mr-1" /> 返回專案列表
            </Link>
            
            <div className="hidden md:flex space-x-6">
              <button 
                className={`pb-4 px-1 border-b-2 font-medium ${
                  activeTab === "overview" 
                    ? "border-blue-500 text-blue-600" 
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("overview")}
              >
                專案概覽
              </button>
              <button 
                className={`pb-4 px-1 border-b-2 font-medium ${
                  activeTab === "resources" 
                    ? "border-blue-500 text-blue-600" 
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("resources")}
              >
                研究資源
              </button>
              <button 
                className={`pb-4 px-1 border-b-2 font-medium ${
                  activeTab === "events" 
                    ? "border-blue-500 text-blue-600" 
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("events")}
              >
                活動與更新
              </button>
              <button 
                className={`pb-4 px-1 border-b-2 font-medium ${
                  activeTab === "team" 
                    ? "border-blue-500 text-blue-600" 
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("team")}
              >
                團隊與參與
              </button>
              <button 
                className={`pb-4 px-1 border-b-2 font-medium ${
                  activeTab === "faq" 
                    ? "border-blue-500 text-blue-600" 
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("faq")}
              >
                常見問題
              </button>
            </div>
            
            <div className="md:hidden ml-auto">
              <select 
                className="border-0 bg-transparent pr-8 py-1.5 text-gray-500 font-medium focus:ring-0"
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value)}
              >
                <option value="overview">專案概覽</option>
                <option value="resources">研究資源</option>
                <option value="events">活動與更新</option>
                <option value="team">團隊與參與</option>
                <option value="faq">常見問題</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      
      {/* 專案概覽 */}
      {activeTab === "overview" && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* 專案基本信息 */}
              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-blue-100 text-blue-600">
                    <Scale size={24} />
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                      <div>
                        <h1 className="text-2xl font-bold">{project.title}</h1>
                        <p className="text-gray-600">{project.subtitle}</p>
                      </div>
                      <Badge color="green" size="lg">{project.status}</Badge>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.map((tag, index) => (
                        <Badge key={index} color="blue" variant="subtle">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        <span>{project.startDate} 至 {project.endDate}</span>
                      </div>
                      <div className="flex items-center">
                        <Users size={14} className="mr-1" />
                        <span>{project.members.length} 位團隊成員</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        <span>專案進度 {project.progress}%</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full bg-blue-500"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      <Button className="flex items-center gap-1">
                        <FileText size={16} /> 專案計畫書
                      </Button>
                      <Button variant="outline" className="flex items-center gap-1">
                        <Check size={16} /> 參與專案
                      </Button>
                      <Button variant="outline" className="flex items-center gap-1">
                        <ExternalLink size={16} /> 專案網站
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 專案目標 */}
              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <h2 className="text-xl font-bold mb-4">專案目標</h2>
                
                <ul className="space-y-3 mb-6">
                  {project.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-medium flex-shrink-0 mt-0.5 mr-3">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{objective}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-2">專案背景</h3>
                  <p className="text-blue-700 text-sm">
                    隨著人工智能技術的廣泛應用，其對個人隱私、平等對待、言論自由等人權的潛在影響日益受到關注。
                    國際組織與各國政府紛紛發布AI倫理指南與法規，要求AI系統開發者與使用者進行人權影響評估。
                    本專案旨在研究國際標準，並結合台灣法律環境，開發適用於本地的AI人權盡職調查工具與框架，
                    協助相關單位在AI創新的同時保障人權。
                  </p>
                </div>
              </div>
              
              {/* 重要里程碑 */}
              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <h2 className="text-xl font-bold mb-4">重要里程碑</h2>
                
                <div className="relative pb-2">
                  <div className="absolute left-8 top-0 h-full w-0.5 bg-gray-200"></div>
                  
                  {project.milestones.map((milestone, index) => (
                    <div key={index} className="relative flex items-start mb-6 last:mb-0">
                      <div className={`absolute left-8 top-8 h-full w-0.5 ${
                        index === project.milestones.length - 1 ? 'bg-transparent' : 'bg-gray-200'
                      }`}></div>
                      
                      <div className={`w-16 h-16 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-lg mr-4 ${
                        milestone.status === "已完成" 
                          ? 'bg-green-100 text-green-600' 
                          : milestone.status === "進行中"
                            ? 'bg-blue-100 text-blue-600'
                            : 'bg-gray-100 text-gray-500'
                      }`}>
                        {index + 1}
                      </div>
                      
                      <div className="bg-white shadow-sm border border-gray-100 rounded-lg p-4 flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                          <h3 className="font-bold text-lg">{milestone.title}</h3>
                          {renderMilestoneStatus(milestone.status)}
                        </div>
                        
                        <p className="text-gray-500 text-sm mb-3">{milestone.date}</p>
                        
                        <div>
                          <h4 className="font-medium text-gray-700 mb-1">預期成果：</h4>
                          <ul className="text-gray-600 space-y-1">
                            {milestone.deliverables.map((item, i) => (
                              <li key={i} className="flex items-center">
                                <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2"></div>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* 參與方式 */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl shadow-lg p-6 text-white">
                <h2 className="text-xl font-bold mb-4">如何參與</h2>
                
                <p className="opacity-90 mb-6">
                  我們歡迎對AI倫理、人權法律或技術政策感興趣的同學加入專案團隊，或以其他方式貢獻。
                  無論是法律背景、技術背景還是社會科學背景，都能在本專案中發揮所長。
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h3 className="font-bold mb-2">研究小組</h3>
                    <p className="text-sm opacity-90 mb-3">
                      負責研究國際AI人權標準、案例分析和框架開發
                    </p>
                    <Badge color="white" variant="outline">適合法律或倫理背景</Badge>
                  </div>
                  
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h3 className="font-bold mb-2">工具開發</h3>
                    <p className="text-sm opacity-90 mb-3">
                      參與AI人權風險評估工具的設計與測試
                    </p>
                    <Badge color="white" variant="outline">適合科技或設計背景</Badge>
                  </div>
                  
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h3 className="font-bold mb-2">活動與推廣</h3>
                    <p className="text-sm opacity-90 mb-3">
                      協助籌辦工作坊、座談會和成果發表會
                    </p>
                    <Badge color="white" variant="outline">適合所有背景</Badge>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-white text-blue-700 hover:bg-blue-50 flex items-center gap-1">
                    <MessageSquare size={16} /> 聯絡專案負責人
                  </Button>
                  <Button variant="outline" className="bg-blue-700 bg-opacity-20 hover:bg-opacity-30 border-white/30">
                    下載專案簡介
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* 研究資源 */}
      {activeTab === "resources" && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <h2 className="text-xl font-bold mb-6">研究資源與成果</h2>
                
                <div className="space-y-6">
                  {project.resources.map((resource, index) => (
                    <div key={index} className="border border-gray-100 rounded-lg p-4 shadow-sm">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <h3 className="font-bold text-lg flex items-center">
                          <FileText size={18} className="text-blue-500 mr-2" />
                          {resource.name}
                        </h3>
                        <Badge 
                          color={resource.status === "可下載" ? "green" : "blue"} 
                          variant={resource.status === "可下載" ? "subtle" : "outline"}
                        >
                          {resource.status}
                        </Badge>
                      </div>
                      
                      <p className="text-gray-500 text-sm mb-3">類型：{resource.type}</p>
                      
                      <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-600">
                          最後更新：2025/06/15
                        </div>
                        
                        <div>
                          {resource.status === "可下載" ? (
                            <Button size="sm" className="flex items-center gap-1">
                              <Download size={14} /> 下載
                            </Button>
                          ) : (
                            <Button size="sm" variant="outline" disabled className="flex items-center gap-1">
                              <AlertTriangle size={14} /> 開發中
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <h2 className="text-xl font-bold mb-4">相關參考資源</h2>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4 py-1">
                    <h3 className="font-bold mb-1">聯合國商業與人權指導原則</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      提供企業在人權盡職調查方面的廣泛框架，可應用於AI系統開發。
                    </p>
                    <a 
                      href="https://www.ohchr.org/documents/publications/guidingprinciplesbusinesshr_en.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 text-sm flex items-center hover:underline"
                    >
                      查看資源 <ExternalLink size={14} className="ml-1" />
                    </a>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4 py-1">
                    <h3 className="font-bold mb-1">歐盟人工智能法案</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      歐盟提出的AI監管法案，對高風險AI系統要求進行強制性風險評估。
                    </p>
                    <a 
                      href="https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 text-sm flex items-center hover:underline"
                    >
                      查看資源 <ExternalLink size={14} className="ml-1" />
                    </a>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4 py-1">
                    <h3 className="font-bold mb-1">丹麥人權研究所AI人權影響評估工具</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      專門針對AI系統的人權影響評估工具，提供詳細的評估方法與指標。
                    </p>
                    <a 
                      href="https://www.humanrights.dk/tools/human-rights-impact-assessment-digital-activities" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 text-sm flex items-center hover:underline"
                    >
                      查看資源 <ExternalLink size={14} className="ml-1" />
                    </a>
                  </div>
                  
                  <div className="border-l-4 border-yellow-500 pl-4 py-1">
                    <h3 className="font-bold mb-1">IEEE倫理認證計畫</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      為AI系統提供倫理認證，包含人權風險評估的框架與標準。
                    </p>
                    <a 
                      href="https://ethicscertification.ieee.org/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 text-sm flex items-center hover:underline"
                    >
                      查看資源 <ExternalLink size={14} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 text-white rounded-xl shadow-md p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <GitHub size={24} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mb-2">開源協作</h2>
                    <p className="opacity-90 mb-4">
                      本專案的部分研究資料和工具在GitHub上開源，歡迎對AI人權議題感興趣的夥伴一起貢獻。
                    </p>
                    <div className="bg-white/10 p-4 rounded-lg mb-4">
                      <h3 className="font-medium mb-2">貢獻方式</h3>
                      <ul className="space-y-1 text-sm opacity-90">
                        <li className="flex items-start">
                          <div className="mt-1 h-1.5 w-1.5 rounded-full bg-white mr-2"></div>
                          <span>提交AI人權案例分析</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mt-1 h-1.5 w-1.5 rounded-full bg-white mr-2"></div>
                          <span>協助翻譯國際標準文件</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mt-1 h-1.5 w-1.5 rounded-full bg-white mr-2"></div>
                          <span>優化評估工具與問卷</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mt-1 h-1.5 w-1.5 rounded-full bg-white mr-2"></div>
                          <span>提出改進建議與文件編輯</span>
                        </li>
                      </ul>
                    </div>
                    <Button 
                      className="bg-white text-gray-800 hover:bg-gray-100"
                      onClick={() => window.open("https://github.com/nthu-law/ai-hr-due-diligence", "_blank")}
                    >
                      <GitHub size={16} className="mr-2" /> 查看GitHub倉庫
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* 活動與更新 */}
      {activeTab === "events" && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <h2 className="text-xl font-bold mb-6">活動行事曆</h2>
                
                <div className="space-y-6">
                  {project.events.map((event, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg">{event.name}</h3>
                        <Badge 
                          color={event.status === "已舉辦" ? "gray" : "green"} 
                          variant={event.status === "已舉辦" ? "outline" : "subtle"}
                        >
                          {event.status}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center text-gray-500 text-sm mb-3">
                        <Calendar size={14} className="mr-1" />
                        <span className="mr-3">{event.date}</span>
                        <Users size={14} className="mr-1" />
                        <span>{event.location}</span>
                      </div>
                      
                      {event.status === "已舉辦" ? (
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="flex items-center gap-1">
                            <FileText size={14} /> 活動紀錄
                          </Button>
                          <Button size="sm" variant="outline" className="flex items-center gap-1">
                            <Download size={14} /> 簡報資料
                          </Button>
                        </div>
                      ) : (
                        <div className="flex gap-2">
                          <Button size="sm" className="flex items-center gap-1">
                            <Calendar size={14} /> 報名參加
                          </Button>
                          <Button size="sm" variant="outline" className="flex items-center gap-1">
                            <FileText size={14} /> 活動詳情
                          </Button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <h2 className="text-xl font-bold mb-6">專案更新</h2>
                
                <div className="relative pb-2">
                  <div className="absolute left-2 top-0 h-full w-0.5 bg-gray-200"></div>
                  
                  {project.updates.map((update, index) => (
                    <div key={index} className="relative pl-10 pb-8 last:pb-0">
                      <div className="absolute left-2 top-2 w-4 h-4 rounded-full bg-blue-500 transform -translate-x-1/2"></div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                        <h3 className="font-bold text-lg">{update.title}</h3>
                        <span className="text-gray-500 text-sm">{update.date}</span>
                      </div>
                      
                      <p className="text-gray-600 mb-3">{update.content}</p>
                      
                      <Button size="sm" variant="ghost" className="text-blue-600">
                        閱讀完整更新
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-xl shadow-md p-6">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                    <MessageSquare size={24} />
                  </div>
                  
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-blue-800 mb-2">訂閱專案更新</h2>
                    <p className="text-blue-700 mb-4">
                      想獲取最新的專案進展、活動通知和研究成果？請填寫您的郵箱訂閱我們的電子報。
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-2">
                      <input 
                        type="email" 
                        placeholder="your.email@example.com" 
                        className="flex-1 px-4 py-2 border border-blue-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <Button>訂閱電子報</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* 團隊與參與 */}
      {activeTab === "team" && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <h2 className="text-xl font-bold mb-6">專案團隊</h2>
                
                <div className="mb-6">
                  <h3 className="font-bold text-gray-700 mb-3">核心成員</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {project.members.slice(0, 3).map((member, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-3">
                          {member.name.slice(0, 1)}
                        </div>
                        <h4 className="font-bold mb-1">{member.name}</h4>
                        <p className="text-sm text-gray-500 mb-1">{member.role}</p>
                        <p className="text-xs text-gray-400">{member.department}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-700 mb-3">其他成員</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                    {project.members.slice(3).map((member, index) => (
                      <div key={index} className="p-3 border border-gray-100 rounded-lg">
                        <h4 className="font-medium mb-1">{member.name}</h4>
                        <p className="text-xs text-gray-500">{member.role}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="text-xl font-bold mb-4">顧問團隊</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0">
                        王
                      </div>
                      <div>
                        <h4 className="font-bold">王教授</h4>
                        <p className="text-sm text-gray-500">清大科法所教授，專長AI倫理與法律</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                        李
                      </div>
                      <div>
                        <h4 className="font-bold">李博士</h4>
                        <p className="text-sm text-gray-500">人權組織資深研究員，專長盡職調查</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 flex-shrink-0">
                        張
                      </div>
                      <div>
                        <h4 className="font-bold">張律師</h4>
                        <p className="text-sm text-gray-500">科技法律事務所合夥人</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="text-xl font-bold mb-4">合作機構</h2>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500 mr-2"></div>
                      <div>
                        <span className="font-medium">台灣人權促進會</span>
                        <p className="text-sm text-gray-500">提供人權評估專業知識</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500 mr-2"></div>
                      <div>
                        <span className="font-medium">台灣科技法律學會</span>
                        <p className="text-sm text-gray-500">協助舉辦工作坊與活動</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500 mr-2"></div>
                      <div>
                        <span className="font-medium">清大資工系人工智能實驗室</span>
                        <p className="text-sm text-gray-500">提供技術支援與案例分析</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500 mr-2"></div>
                      <div>
                        <span className="font-medium">科技部科技法律跨領域研究計畫</span>
                        <p className="text-sm text-gray-500">協助研究資源與國際連結</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl shadow-lg p-6 text-white">
                <h2 className="text-xl font-bold mb-4">參與專案</h2>
                
                <p className="opacity-90 mb-6">
                  我們正在尋找對AI人權與法律政策議題感興趣的夥伴加入團隊。如果你希望為負責任的AI發展貢獻一份力量，
                  無論是研究、開發工具、舉辦活動或提供專業意見，都歡迎與我們聯繫！
                </p>
                
                <div className="bg-white/10 p-4 rounded-lg mb-6">
                  <h3 className="font-bold mb-3">當前招募需求</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle size={18} className="text-green-300 mr-2 mt-0.5" />
                      <span>AI風險評估問卷設計專員（1名）</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={18} className="text-green-300 mr-2 mt-0.5" />
                      <span>案例研究撰寫人員（2名）</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={18} className="text-green-300 mr-2 mt-0.5" />
                      <span>國際標準翻譯志工（3名）</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={18} className="text-green-300 mr-2 mt-0.5" />
                      <span>工作坊活動籌辦助理（2名）</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-white text-blue-700 hover:bg-blue-50">
                    申請加入團隊
                  </Button>
                  <Button variant="outline" className="bg-blue-700 bg-opacity-20 hover:bg-opacity-30 border-white/30">
                    了解招募詳情
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* 常見問題 */}
      {activeTab === "faq" && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <h2 className="text-xl font-bold mb-6">常見問題</h2>
                
                <div className="space-y-6">
                  {project.faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                      <div className="flex items-start">
                        <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">
                          Q
                        </div>
                        <div className="ml-4">
                          <h3 className="font-bold text-lg">{faq.question}</h3>
                        </div>
                      </div>
                      
                      <div className="flex items-start mt-4">
                        <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">
                          A
                        </div>
                        <div className="ml-4">
                          <p className="text-gray-700">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-xl shadow-md p-6 mb-8">
                <h2 className="text-xl font-bold text-blue-800 mb-4">提交問題</h2>
                
                <p className="text-blue-700 mb-4">
                  有其他關於AI人權盡職調查專案的問題？請在下方提交，我們的團隊會盡快回覆。
                </p>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-blue-700 mb-1">您的問題</label>
                    <textarea 
                      className="w-full px-4 py-2 border border-blue-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                      rows="4"
                      placeholder="請輸入您的問題..."
                    ></textarea>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-blue-700 mb-1">姓名</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-blue-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                        placeholder="您的姓名"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-blue-700 mb-1">電子郵件</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-2 border border-blue-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                        placeholder="您的電子郵件"
                      />
                    </div>
                  </div>
                  
                  <Button>提交問題</Button>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">聯絡資訊</h2>
                
                <div className="space-y-4 mb-6">
                  {project.contacts.map((contact, index) => (
                    <div key={index} className="flex items-start">
                      <div className="p-2 bg-gray-100 rounded-full flex-shrink-0 mr-3">
                        <Mail size={18} className="text-gray-500" />
                      </div>
                      <div>
                        <h3 className="font-bold">{contact.name}</h3>
                        <p className="text-sm text-gray-500 mb-1">{contact.role}</p>
                        <a 
                          href={`mailto:${contact.email}`} 
                          className="text-blue-600 text-sm hover:underline"
                        >
                          {contact.email}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div>
                  <h3 className="font-bold mb-3">其他連結</h3>
                  <div className="space-y-2">
                    {project.externalLinks.map((link, index) => (
                      <a 
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:underline"
                      >
                        {link.icon} <span className="ml-2">{link.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      <Footer />
    </div>
  );
};

export default AIHRProjectPage;