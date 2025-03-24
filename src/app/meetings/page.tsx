"use client";

import React, { useState } from 'react';
import { 
  Calendar, Users, BookOpen, Clipboard, 
  MessageSquare, CheckCircle, AlertCircle, 
  FileText, Download, Search, Filter, Clock
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Card } from '../../components/ui/card';

// 假設這些組件已經存在或將被創建
import Header from '../../components/layout/header';
import Footer from '../../components/layout/footer';
import Navigation from '../../components/layout/navigation';

const MeetingsPage = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [activeFilter, setActiveFilter] = useState("全部");
  const [searchQuery, setSearchQuery] = useState("");
  
  // 模擬會議數據
  const meetings = [
    {
      id: "sre-2025-1",
      type: "學權擴大會議",
      title: "2025學年度第1次學權擴大會議",
      date: "2025/04/15",
      time: "18:30-20:30",
      location: "科法所會議室",
      status: "即將舉行",
      agenda: [
        "系所課程規劃與學生建議",
        "研究資源分配與使用情況",
        "學生活動空間優化提案",
        "學生意見收集機制討論"
      ],
      participants: {
        faculty: ["所長", "課程委員會主席", "3位教師代表"],
        students: ["學生會會長", "權益部部長", "各年級學生代表"]
      },
      documents: ["會議提案表", "上次會議紀錄", "學生意見彙整"]
    },
    {
      id: "cdm-2025-1",
      type: "課程討論會議",
      title: "2025學年度第1次課程討論會議",
      date: "2025/03/20",
      time: "12:30-14:00",
      location: "線上會議",
      status: "已舉行",
      agenda: [
        "新學期課程評估",
        "AI法律專題課程提案",
        "跨領域選修機制優化",
        "教學評量回饋討論"
      ],
      participants: {
        faculty: ["課程委員會主席", "2位教師代表"],
        students: ["學術部部長", "各年級學生代表"]
      },
      documents: ["課程建議書", "教學評量彙整", "會議紀錄"]
    },
    {
      id: "sre-2024-2",
      type: "學權擴大會議",
      title: "2024學年度第2次學權擴大會議",
      date: "2024/12/10",
      time: "18:30-20:30",
      location: "科法所會議室",
      status: "已舉行",
      agenda: [
        "期末考試安排討論",
        "獎學金分配機制檢討",
        "研究室使用規則修訂",
        "學生權益問題處理"
      ],
      participants: {
        faculty: ["所長", "2位教師代表"],
        students: ["學生會籌備小組代表", "各年級學生代表"]
      },
      documents: ["會議紀錄", "學生提案彙整", "決議執行追蹤表"]
    },
    {
      id: "cdm-2024-2",
      type: "課程討論會議",
      title: "2024學年度第2次課程討論會議",
      date: "2024/11/25",
      time: "12:00-13:30",
      location: "科法所研討室",
      status: "已舉行",
      agenda: [
        "下學期課程規劃建議",
        "教學方式改善討論",
        "線上課程資源利用",
        "實務課程增設提案"
      ],
      participants: {
        faculty: ["課程委員會代表", "1位教師代表"],
        students: ["學生代表"]
      },
      documents: ["會議紀錄", "課程建議彙整表"]
    },
    {
      id: "gen-2025-1",
      type: "學生大會",
      title: "2025年度第1次學生大會",
      date: "2025/05/20",
      time: "18:00-20:00",
      location: "大禮堂",
      status: "規劃中",
      agenda: [
        "學生會正式成立提案",
        "章程草案表決",
        "第一屆幹部選舉辦法",
        "學生會預算規劃"
      ],
      participants: {
        students: ["全體科法所學生"]
      },
      documents: ["章程草案", "選舉辦法草案", "預算規劃書"]
    }
  ];
  
  // 過濾會議數據
  const filteredMeetings = meetings.filter(meeting => {
    // 過濾類型
    if (activeFilter !== "全部" && meeting.type !== activeFilter) {
      return false;
    }
    
    // 搜尋查詢
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        meeting.title.toLowerCase().includes(query) ||
        meeting.agenda.some(item => item.toLowerCase().includes(query))
      );
    }
    
    return true;
  });
  
  // 處理導航點擊
  const handleNavClick = (section) => {
    setActiveSection(section);
  };
  
  // 渲染會議卡片
  const renderMeetingCard = (meeting) => {
    const statusColor = meeting.status === "已舉行" 
      ? "gray" 
      : meeting.status === "即將舉行" 
        ? "green" 
        : "blue";
    
    return (
      <Card key={meeting.id} className="transition-all duration-300 hover:shadow-lg">
        <div className="p-6">
          <div className="flex justify-between items-start mb-3">
            <Badge color="blue" variant="subtle">{meeting.type}</Badge>
            <Badge color={statusColor} variant={statusColor === "gray" ? "outline" : "default"}>
              {meeting.status}
            </Badge>
          </div>
          
          <h3 className="text-xl font-bold mb-2">{meeting.title}</h3>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-500 mb-4">
            <div className="flex items-center">
              <Calendar size={16} className="mr-1" />
              <span>{meeting.date}</span>
            </div>
            <div className="hidden sm:block">•</div>
            <div className="flex items-center">
              <Clock size={16} className="mr-1" />
              <span>{meeting.time}</span>
            </div>
            <div className="hidden sm:block">•</div>
            <div className="flex items-center">
              <Users size={16} className="mr-1" />
              <span>{meeting.location}</span>
            </div>
          </div>
          
          <div className="mb-4">
            <h4 className="font-medium text-gray-700 mb-2">議程：</h4>
            <ul className="space-y-1">
              {meeting.agenda.slice(0, 2).map((item, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2"></div>
                  <span>{item}</span>
                </li>
              ))}
              {meeting.agenda.length > 2 && (
                <li className="text-blue-600 text-sm font-medium">
                  +還有 {meeting.agenda.length - 2} 項議程...
                </li>
              )}
            </ul>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex -space-x-2">
              {[...Array(Math.min(3, (meeting.participants.faculty?.length || 0) + (meeting.participants.students?.length || 0)))].map((_, index) => (
                <div key={index} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs text-gray-600">
                  {index + 1}
                </div>
              ))}
              {((meeting.participants.faculty?.length || 0) + (meeting.participants.students?.length || 0)) > 3 && (
                <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs text-gray-600">
                  +{((meeting.participants.faculty?.length || 0) + (meeting.participants.students?.length || 0)) - 3}
                </div>
              )}
            </div>
            
            <Link href={`/meetings/${meeting.id}`}>
              <Button variant="outline" size="sm">
                查看詳情
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    );
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        title="會議資訊" 
        subtitle="清大科法所學生會" 
        description="學權擴大會議、課程討論會議等重要會議資訊"
      />
      
      <Navigation 
        activeSection={activeSection}
        items={[
          { id: 'overview', label: '會議總覽', icon: <Calendar size={16} /> },
          { id: 'student-rights', label: '學權擴大會議', icon: <Users size={16} /> },
          { id: 'course-discussion', label: '課程討論會議', icon: <BookOpen size={16} /> },
          { id: 'calendar', label: '會議日曆', icon: <Calendar size={16} /> },
        ]}
        onNavClick={handleNavClick}
      />
      
      {/* 會議總覽部分 */}
      {activeSection === 'overview' && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
                <div>
                  <h2 className="text-2xl font-bold">會議總覽</h2>
                  <p className="text-gray-600">
                    查看學生會舉辦的各類會議資訊，了解學生參與校務的管道
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search size={16} className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full"
                      placeholder="搜尋會議..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Filter size={16} className="text-gray-400" />
                    </div>
                    <select
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full"
                      value={activeFilter}
                      onChange={(e) => setActiveFilter(e.target.value)}
                    >
                      <option value="全部">所有類型</option>
                      <option value="學權擴大會議">學權擴大會議</option>
                      <option value="課程討論會議">課程討論會議</option>
                      <option value="學生大會">學生大會</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-blue-100 text-blue-600">
                    <Clipboard size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">會議參與機制</h3>
                    <p className="text-gray-700 mb-4">
                      學生會定期舉辦不同類型的會議，確保學生意見能夠被充分表達，並與系所建立有效的溝通渠道。
                      各類會議有不同的參與方式與目的，以下是主要會議類型說明：
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-blue-50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Users size={20} className="text-blue-600" />
                          <h4 className="font-bold text-blue-800">學權擴大會議</h4>
                        </div>
                        <p className="text-sm text-blue-700">
                          由學生會主辦，邀請系所師長參與，專門討論學生權益相關議題，每學期至少召開一次。
                        </p>
                      </div>
                      
                      <div className="bg-green-50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <BookOpen size={20} className="text-green-600" />
                          <h4 className="font-bold text-green-800">課程討論會議</h4>
                        </div>
                        <p className="text-sm text-green-700">
                          專門針對課程規劃、教學評量等議題，邀請課程委員會代表參與，每學期至少召開一次。
                        </p>
                      </div>
                      
                      <div className="bg-purple-50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <MessageSquare size={20} className="text-purple-600" />
                          <h4 className="font-bold text-purple-800">學生大會</h4>
                        </div>
                        <p className="text-sm text-purple-700">
                          全體學生參與的最高決策會議，負責章程制定、重大事項表決、幹部選舉等，每學年至少召開一次。
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button className="flex items-center gap-2" variant="outline">
                        <FileText size={16} /> 下載會議手冊
                      </Button>
                      <Button className="flex items-center gap-2" variant="outline">
                        <Download size={16} /> 提案表格下載
                      </Button>
                      <Button className="flex items-center gap-2">
                        <CheckCircle size={16} /> 申請參與會議
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 即將舉行的會議 */}
              <div className="mb-10">
                <h3 className="text-xl font-bold mb-4">即將舉行的會議</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredMeetings
                    .filter(m => m.status === "即將舉行" || m.status === "規劃中")
                    .map(meeting => renderMeetingCard(meeting))}
                </div>
                
                {filteredMeetings.filter(m => m.status === "即將舉行" || m.status === "規劃中").length === 0 && (
                  <div className="bg-gray-50 rounded-xl p-8 text-center">
                    <AlertCircle size={40} className="mx-auto mb-4 text-gray-400" />
                    <h4 className="text-lg font-medium text-gray-700 mb-2">暫無即將舉行的會議</h4>
                    <p className="text-gray-500">
                      目前沒有符合篩選條件的即將舉行會議，請調整搜尋條件或查看已舉行的會議記錄。
                    </p>
                  </div>
                )}
              </div>
              
              {/* 已舉行的會議 */}
              <div>
                <h3 className="text-xl font-bold mb-4">歷史會議記錄</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredMeetings
                    .filter(m => m.status === "已舉行")
                    .map(meeting => renderMeetingCard(meeting))}
                </div>
                
                {filteredMeetings.filter(m => m.status === "已舉行").length === 0 && (
                  <div className="bg-gray-50 rounded-xl p-8 text-center">
                    <AlertCircle size={40} className="mx-auto mb-4 text-gray-400" />
                    <h4 className="text-lg font-medium text-gray-700 mb-2">暫無歷史會議記錄</h4>
                    <p className="text-gray-500">
                      目前沒有符合篩選條件的歷史會議記錄，請調整搜尋條件。
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* 學權擴大會議部分 */}
      {activeSection === 'student-rights' && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold mb-6">學權擴大會議</h2>
                
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                    <Users size={24} />
                  </div>
                  <div>
                    <p className="text-gray-700 mb-4">
                      學權擴大會議是學生會與系所之間正式溝通的重要平台，專注於討論與解決學生權益相關問題。
                      每學期至少召開一次，由學生會會長或權益部部長召集，邀請系所師長共同參與。
                    </p>
                    
                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <h3 className="font-bold text-blue-800 mb-2">會議宗旨</h3>
                      <ul className="space-y-1 text-blue-700">
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-blue-200 flex items-center justify-center text-blue-700 font-bold text-xs mr-2 mt-0.5">1</div>
                          <span>建立學生與系所之間常態化、制度化的溝通渠道</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-blue-200 flex items-center justify-center text-blue-700 font-bold text-xs mr-2 mt-0.5">2</div>
                          <span>保障學生在學習環境、資源分配、評量方式等方面的權益</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-blue-200 flex items-center justify-center text-blue-700 font-bold text-xs mr-2 mt-0.5">3</div>
                          <span>促進師生間的理解與合作，共同打造良好的學習環境</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-blue-200 flex items-center justify-center text-blue-700 font-bold text-xs mr-2 mt-0.5">4</div>
                          <span>收集並系統化反映學生意見，推動系所政策的改善</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h3 className="font-bold text-gray-800 mb-2">參與對象</h3>
                        <ul className="space-y-1 text-gray-600">
                          <li className="flex items-start">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2 mt-2"></div>
                            <span>學生會會長與權益部部長</span>
                          </li>
                          <li className="flex items-start">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2 mt-2"></div>
                            <span>各年級學生代表</span>
                          </li>
                          <li className="flex items-start">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2 mt-2"></div>
                            <span>科法所所長或其代表</span>
                          </li>
                          <li className="flex items-start">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2 mt-2"></div>
                            <span>相關教師代表</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-bold text-gray-800 mb-2">主要議題</h3>
                        <ul className="space-y-1 text-gray-600">
                          <li className="flex items-start">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2 mt-2"></div>
                            <span>學習環境與資源分配</span>
                          </li>
                          <li className="flex items-start">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2 mt-2"></div>
                            <span>學生福利與權益保障</span>
                          </li>
                          <li className="flex items-start">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2 mt-2"></div>
                            <span>系所政策與規劃的學生建議</span>
                          </li>
                          <li className="flex items-start">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2 mt-2"></div>
                            <span>學生反映問題的處理與追蹤</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <Button className="flex items-center gap-2">
                      <FileText size={16} /> 下載會議手冊
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* 學權擴大會議流程與準備 */}
              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">會議流程與準備</h3>
                
                <div className="relative mb-6">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200"></div>
                  
                  {[
                    {
                      title: "會前準備",
                      days: "會議前2週",
                      content: "學生會收集學生意見，整理成提案；聯繫系所確認時間地點；邀請相關師長參與",
                      badge: "準備階段"
                    },
                    {
                      title: "議程公布",
                      days: "會議前1週",
                      content: "公布正式議程與提案內容；開放學生報名旁聽；提供會議相關資料下載",
                      badge: "通知階段"
                    },
                    {
                      title: "會議進行",
                      days: "會議當天",
                      content: "按議程進行討論，學生代表提出問題並與師長對話；記錄會議過程和決議",
                      badge: "執行階段"
                    },
                    {
                      title: "會後追蹤",
                      days: "會議後1週內",
                      content: "發布會議記錄；追蹤決議執行情況；向全體學生報告會議成果",
                      badge: "追蹤階段"
                    }
                  ].map((step, index) => (
                    <div key={index} className="relative pl-10 pb-6">
                      <div className="absolute left-4 top-2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-2 border-blue-400 z-10"></div>
                      <div className="flex flex-col md:flex-row md:items-center mb-1">
                        <h4 className="font-bold text-gray-800">{step.title}</h4>
                        <Badge color="blue" variant="subtle" className="md:ml-3 mt-1 md:mt-0">{step.days}</Badge>
                      </div>
                      <p className="text-gray-600 mb-2">{step.content}</p>
                      <Badge color="gray" variant="outline" size="sm">{step.badge}</Badge>
                    </div>
                  ))}
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                  <div className="flex items-start">
                    <AlertCircle size={20} className="text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-yellow-800 mb-1">提案須知</h4>
                      <p className="text-yellow-700 text-sm">
                        如果你有想在學權擴大會議中提出的議題，可以在會議前至少10天向學生會權益部提交提案表。
                        提案需清楚說明問題背景、訴求內容和可能的解決方案，以利會議討論。
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Download size={16} /> 提案表格下載
                  </Button>
                  <Button className="flex items-center gap-2">
                    <FileText size={16} /> 線上提交提案
                  </Button>
                </div>
              </div>
              
              {/* 歷次學權擴大會議 */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">歷次學權擴大會議</h3>
                
                <div className="space-y-6">
                  {meetings
                    .filter(m => m.type === "學權擴大會議")
                    .map((meeting, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <h4 className="font-bold text-lg">{meeting.title}</h4>
                          <Badge 
                            color={meeting.status === "已舉行" ? "gray" : "green"} 
                            variant={meeting.status === "已舉行" ? "outline" : "subtle"}
                          >
                            {meeting.status}
                          </Badge>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-500 mb-3">
                          <div className="flex items-center">
                            <Calendar size={14} className="mr-1" />
                            <span>{meeting.date}</span>
                          </div>
                          <div className="hidden sm:block text-gray-300">|</div>
                          <div className="flex items-center">
                            <Clock size={14} className="mr-1" />
                            <span>{meeting.time}</span>
                          </div>
                          <div className="hidden sm:block text-gray-300">|</div>
                          <div className="flex items-center">
                            <Users size={14} className="mr-1" />
                            <span>{meeting.location}</span>
                          </div>
                        </div>
                        
                        {meeting.status === "已舉行" && (
                          <div className="bg-green-50 p-3 rounded-lg mb-4">
                            <h5 className="font-medium text-green-800 mb-1">主要決議與成果：</h5>
                            <ul className="text-sm text-green-700 space-y-1">
                              <li>• 決議增加研究生研究室使用時段，並增設自習空間</li>
                              <li>• 同意設立學生意見定期收集與回應機制</li>
                              <li>• 通過增設AI法律專題課程的提案</li>
                            </ul>
                          </div>
                        )}
                        
                        <div className="flex flex-col sm:flex-row gap-2">
                          {meeting.status === "已舉行" ? (
                            <>
                              <Button size="sm" variant="outline" className="flex items-center gap-1">
                                <FileText size={14} /> 會議紀錄
                              </Button>
                              <Button size="sm" variant="outline" className="flex items-center gap-1">
                                <CheckCircle size={14} /> 決議追蹤
                              </Button>
                            </>
                          ) : (
                            <>
                              <Button size="sm" variant="outline" className="flex items-center gap-1">
                                <FileText size={14} /> 議程預覽
                              </Button>
                              <Button size="sm" className="flex items-center gap-1">
                                <CheckCircle size={14} /> 報名參與
                              </Button>
                            </>
                          )}
                          <Link href={`/meetings/${meeting.id}`}>
                            <Button size="sm" variant="ghost">查看詳情</Button>
                          </Link>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* 課程討論會議部分 */}
      {activeSection === 'course-discussion' && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold mb-6">課程討論會議</h2>
                
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-full bg-green-100 text-green-600">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <p className="text-gray-700 mb-4">
                      課程討論會議專注於科法所課程規劃、教學評量與學習成效相關議題，是學生參與課程決策的重要管道。
                      每學期至少召開一次，由學生會學術部部長召集，邀請課程委員會代表參與。
                    </p>
                    
                    <div className="bg-green-50 p-4 rounded-lg mb-4">
                      <h3 className="font-bold text-green-800 mb-2">會議宗旨</h3>
                      <ul className="space-y-1 text-green-700">
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-green-200 flex items-center justify-center text-green-700 font-bold text-xs mr-2 mt-0.5">1</div>
                          <span>促進學生在課程規劃與設計上的參與</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-green-200 flex items-center justify-center text-green-700 font-bold text-xs mr-2 mt-0.5">2</div>
                          <span>收集學生對於教學方式與內容的回饋</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-green-200 flex items-center justify-center text-green-700 font-bold text-xs mr-2 mt-0.5">3</div>
                          <span>推動創新課程與跨領域學習機會</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-green-200 flex items-center justify-center text-green-700 font-bold text-xs mr-2 mt-0.5">4</div>
                          <span>提升課程品質與學習成效評估</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h3 className="font-bold text-gray-800 mb-2">參與對象</h3>
                        <ul className="space-y-1 text-gray-600">
                          <li className="flex items-start">
                            <div className="h-1.5 w-1.5 rounded-full bg-green-500 mr-2 mt-2"></div>
                            <span>學生會學術部部長</span>
                          </li>
                          <li className="flex items-start">
                            <div className="h-1.5 w-1.5 rounded-full bg-green-500 mr-2 mt-2"></div>
                            <span>各年級學生代表</span>
                          </li>
                          <li className="flex items-start">
                            <div className="h-1.5 w-1.5 rounded-full bg-green-500 mr-2 mt-2"></div>
                            <span>課程委員會代表</span>
                          </li>
                          <li className="flex items-start">
                            <div className="h-1.5 w-1.5 rounded-full bg-green-500 mr-2 mt-2"></div>
                            <span>授課教師代表</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-bold text-gray-800 mb-2">主要議題</h3>
                        <ul className="space-y-1 text-gray-600">
                          <li className="flex items-start">
                            <div className="h-1.5 w-1.5 rounded-full bg-green-500 mr-2 mt-2"></div>
                            <span>課程規劃與調整建議</span>
                          </li>
                          <li className="flex items-start">
                            <div className="h-1.5 w-1.5 rounded-full bg-green-500 mr-2 mt-2"></div>
                            <span>教學方式與評量機制優化</span>
                          </li>
                          <li className="flex items-start">
                            <div className="h-1.5 w-1.5 rounded-full bg-green-500 mr-2 mt-2"></div>
                            <span>新課程提案與需求調查</span>
                          </li>
                          <li className="flex items-start">
                            <div className="h-1.5 w-1.5 rounded-full bg-green-500 mr-2 mt-2"></div>
                            <span>學習資源與輔助工具</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <Button className="flex items-center gap-2" color="green">
                      <FileText size={16} /> 課程建議表單
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* 課程建議流程 */}
              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">課程建議流程</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-3">
                      <span className="font-bold">1</span>
                    </div>
                    <h4 className="font-bold mb-2">意見收集</h4>
                    <p className="text-sm text-gray-600">
                      透過問卷調查、座談會等方式，收集學生對課程的需求與建議
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-3">
                      <span className="font-bold">2</span>
                    </div>
                    <h4 className="font-bold mb-2">整理分析</h4>
                    <p className="text-sm text-gray-600">
                      學術部彙整意見，進行分析與初步評估可行性
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-3">
                      <span className="font-bold">3</span>
                    </div>
                    <h4 className="font-bold mb-2">會議討論</h4>
                    <p className="text-sm text-gray-600">
                      在課程討論會議上提出建議，與師長共同討論
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-3">
                      <span className="font-bold">4</span>
                    </div>
                    <h4 className="font-bold mb-2">追蹤反饋</h4>
                    <p className="text-sm text-gray-600">
                      追蹤建議採納情況，向學生反饋處理結果
                    </p>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-blue-800 mb-1">歷年成果</h4>
                      <p className="text-blue-700 text-sm mb-2">
                        課程討論會議已成功推動多項課程改革，包括：
                      </p>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• 新增AI與法律倫理專題課程</li>
                        <li>• 優化實務課程的業師參與機制</li>
                        <li>• 改善課程評量方式，增加多元評量選項</li>
                        <li>• 建立課程教材的數位化與共享平台</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Download size={16} /> 下載課程建議表
                  </Button>
                  <Button className="flex items-center gap-2">
                    <MessageSquare size={16} /> 提交課程建議
                  </Button>
                </div>
              </div>
              
              {/* 歷次課程討論會議 */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">歷次課程討論會議</h3>
                
                <div className="space-y-6">
                  {meetings
                    .filter(m => m.type === "課程討論會議")
                    .map((meeting, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <h4 className="font-bold text-lg">{meeting.title}</h4>
                          <Badge 
                            color={meeting.status === "已舉行" ? "gray" : "green"} 
                            variant={meeting.status === "已舉行" ? "outline" : "subtle"}
                          >
                            {meeting.status}
                          </Badge>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-500 mb-3">
                          <div className="flex items-center">
                            <Calendar size={14} className="mr-1" />
                            <span>{meeting.date}</span>
                          </div>
                          <div className="hidden sm:block text-gray-300">|</div>
                          <div className="flex items-center">
                            <Clock size={14} className="mr-1" />
                            <span>{meeting.time}</span>
                          </div>
                          <div className="hidden sm:block text-gray-300">|</div>
                          <div className="flex items-center">
                            <Users size={14} className="mr-1" />
                            <span>{meeting.location}</span>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <h5 className="font-medium text-gray-700 mb-1">主要議題：</h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {meeting.agenda.map((item, i) => (
                              <li key={i}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-2">
                          {meeting.status === "已舉行" ? (
                            <>
                              <Button size="sm" variant="outline" className="flex items-center gap-1">
                                <FileText size={14} /> 會議紀錄
                              </Button>
                              <Button size="sm" variant="outline" className="flex items-center gap-1">
                                <CheckCircle size={14} /> 建議採納情況
                              </Button>
                            </>
                          ) : (
                            <>
                              <Button size="sm" variant="outline" className="flex items-center gap-1">
                                <FileText size={14} /> 議程預覽
                              </Button>
                              <Button size="sm" className="flex items-center gap-1">
                                <CheckCircle size={14} /> 報名參與
                              </Button>
                            </>
                          )}
                          <Link href={`/meetings/${meeting.id}`}>
                            <Button size="sm" variant="ghost">查看詳情</Button>
                          </Link>
                        </div>
                      </div>
                    ))}
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

export default MeetingsPage;