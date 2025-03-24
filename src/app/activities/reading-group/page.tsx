"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  BookOpen, ArrowLeft, Calendar, Users, MapPin, 
  Clock, FileText, MessageSquare, Check, AlertCircle,
  ChevronDown, ThumbsUp, ExternalLink, Heart, Send
} from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Badge } from '../../../components/ui/badge';
import { Card } from '../../../components/ui/card';

// 假设这些组件已经存在或将被创建
import Header from '../../../components/layout/header';
import Footer from '../../../components/layout/footer';
import Navigation from '../../../components/layout/navigation';

const ReadingGroupPage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedBook, setExpandedBook] = useState(null);
  
  // 读书会数据
  const readingGroupData = {
    title: "法律科技跨域读书会",
    description: "法律科技跨域读书会是由清大科法所学生会举办的常态性学术活动，旨在促进法律与科技领域的知识交流与深入讨论。每次读书会选定一本经典著作或重要论文，由引导人带领大家共同阅读、思考与讨论，探索法律与科技的交错地带。",
    schedule: "每月第二个星期四晚上7:00-9:00",
    location: "清华大学旺宏馆7楼讨论室",
    participants: "科法所学生、教师及对法律科技议题感兴趣的校内外人士",
    maxParticipants: 20,
    format: "线下讨论为主，特殊情况会改为线上形式",
    coordinator: "林小玲（科法所学术部部长）",
    contactEmail: "reading@example.com",
    upcomingSession: {
      date: "2025/04/12",
      time: "19:00-21:00",
      book: "《演算法、AI与自由民主》",
      author: "陈宝村",
      facilitator: "王大明（科法所碩二）",
      registrationDeadline: "2025/04/09",
      currentRegistrations: 12,
      status: "报名中"
    },
    pastSessions: [
      {
        date: "2025/03/10",
        book: "《无所不在的算法》",
        author: "汉娜·弗莱（Hannah Fry）",
        facilitator: "李小华（科法所碩一）",
        summary: "讨论了算法如何影响我们的日常生活，以及与此相关的法律与伦理问题。",
        materials: ["讨论摘要", "讨论问题集", "延伸阅读清单"],
        participants: 18
      },
      {
        date: "2025/02/15",
        book: "《数据法学》",
        author: "高丝露",
        facilitator: "张小明（科法所碩二）",
        summary: "探讨了数据权属、隐私保护与数据利用之间的平衡问题。",
        materials: ["讨论摘要", "案例分析", "延伸阅读清单"],
        participants: 15
      }
    ],
    futureBooks: [
      {
        title: "《智能化时代的法律变革》",
        author: "何家弘",
        description: "探讨人工智能发展对法律制度带来的挑战与变革，以及未来法律的可能发展方向。",
        tentativeDate: "2025年5月"
      },
      {
        title: "《平台资本主义》",
        author: "尼克·斯尼切克（Nick Srnicek）",
        description: "分析数字平台企业的商业模式，以及这种新型资本主义形式对社会与法律的影响。",
        tentativeDate: "2025年6月"
      },
      {
        title: "《算法霸权》",
        author: "凯西·奥尼尔（Cathy O'Neil）",
        description: "揭示算法决策中隐藏的价值判断与偏见，以及如何通过法律规制减轻其负面影响。",
        tentativeDate: "2025年7月"
      }
    ],
    guidelines: [
      "每次读书会前请至少阅读指定章节",
      "鼓励提前准备问题或讨论点",
      "尊重不同观点，保持开放讨论氛围",
      "可自由分享相关资源与经验",
      "有事无法参加请提前告知"
    ],
    reviews: [
      {
        name: "陈同学",
        department: "科法所碩一",
        content: "读书会提供了一个很好的平台，让我能够与志同道合的同学们一起探讨科技与法律的交叉议题。每次讨论都能激发新的思考，非常有收获。",
        rating: 5
      },
      {
        name: "郭同学",
        department: "资工系大四",
        content: "作为一名工程背景的学生，参加法律科技读书会让我对技术应用的法律限制有了更深入的了解，有助于思考技术开发中的法律伦理问题。",
        rating: 4
      },
      {
        name: "林同学",
        department: "科法所碩二",
        content: "读书会的讨论氛围非常好，引导人准备充分，能够引导大家从不同角度思考问题。阅读书目的选择也很有针对性，紧跟当前科技法律的热点话题。",
        rating: 5
      }
    ]
  };
  
  // 处理展开/收起书籍详情
  const toggleBookDetails = (index) => {
    if (expandedBook === index) {
      setExpandedBook(null);
    } else {
      setExpandedBook(index);
    }
  };
  
  // 渲染评分星星
  const renderStars = (rating) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`text-${i < rating ? 'yellow' : 'gray'}-400`}>
            ★
          </div>
        ))}
      </div>
    );
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        title="法律科技跨域读书会" 
        subtitle="清大科法所学生会" 
        description="共读经典，探索法律与科技的交错地带"
      />
      
      {/* 基本导航 */}
      <div className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center py-4">
            <Link href="/activities" className="text-gray-500 hover:text-gray-700 flex items-center mr-6">
              <ArrowLeft size={16} className="mr-1" /> 返回活动列表
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
                读书会简介
              </button>
              <button 
                className={`pb-4 px-1 border-b-2 font-medium ${
                  activeTab === "sessions" 
                    ? "border-blue-500 text-blue-600" 
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("sessions")}
              >
                活动安排
              </button>
              <button 
                className={`pb-4 px-1 border-b-2 font-medium ${
                  activeTab === "booklist" 
                    ? "border-blue-500 text-blue-600" 
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("booklist")}
              >
                书单推荐
              </button>
              <button 
                className={`pb-4 px-1 border-b-2 font-medium ${
                  activeTab === "participate" 
                    ? "border-blue-500 text-blue-600" 
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("participate")}
              >
                报名参与
              </button>
            </div>
            
            <div className="md:hidden ml-auto">
              <select 
                className="border-0 bg-transparent pr-8 py-1.5 text-gray-500 font-medium focus:ring-0"
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value)}
              >
                <option value="overview">读书会简介</option>
                <option value="sessions">活动安排</option>
                <option value="booklist">书单推荐</option>
                <option value="participate">报名参与</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      
      {/* 读书会简介 */}
      {activeTab === "overview" && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* 读书会基本信息 */}
              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-blue-100 text-blue-600">
                    <BookOpen size={24} />
                  </div>
                  <div className="ml-4 flex-1">
                    <h1 className="text-2xl font-bold mb-4">{readingGroupData.title}</h1>
                    
                    <p className="text-gray-700 mb-6">{readingGroupData.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-start">
                        <div className="mt-1 text-blue-500 mr-2">
                          <Calendar size={18} />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">活动时间</h3>
                          <p className="text-gray-600 text-sm">{readingGroupData.schedule}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="mt-1 text-blue-500 mr-2">
                          <MapPin size={18} />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">活动地点</h3>
                          <p className="text-gray-600 text-sm">{readingGroupData.location}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="mt-1 text-blue-500 mr-2">
                          <Users size={18} />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">参与对象</h3>
                          <p className="text-gray-600 text-sm">{readingGroupData.participants}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="mt-1 text-blue-500 mr-2">
                          <MessageSquare size={18} />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">活动形式</h3>
                          <p className="text-gray-600 text-sm">{readingGroupData.format}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <Button className="flex items-center gap-1">
                        <Calendar size={16} /> 下次读书会报名
                      </Button>
                      <Button variant="outline" className="flex items-center gap-1">
                        <MessageSquare size={16} /> 建议书目
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 即将举行的读书会 */}
              <div className="bg-blue-50 rounded-xl shadow-md p-6 mb-8">
                <div className="flex items-center mb-4">
                  <Calendar size={20} className="text-blue-600 mr-2" />
                  <h2 className="text-xl font-bold text-blue-800">即将举行的读书会</h2>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-lg">{readingGroupData.upcomingSession.book}</h3>
                    <Badge color="green">{readingGroupData.upcomingSession.status}</Badge>
                  </div>
                  
                  <p className="text-gray-700 mb-3">作者：{readingGroupData.upcomingSession.author}</p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      <span>{readingGroupData.upcomingSession.date}</span>
                    </div>
                    <div className="hidden sm:block">•</div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      <span>{readingGroupData.upcomingSession.time}</span>
                    </div>
                    <div className="hidden sm:block">•</div>
                    <div className="flex items-center">
                      <Users size={14} className="mr-1" />
                      <span>引导人：{readingGroupData.upcomingSession.facilitator}</span>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-3 rounded-lg mb-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-blue-700">报名情况</span>
                      <span className="text-sm text-blue-700">{readingGroupData.upcomingSession.currentRegistrations}/{readingGroupData.maxParticipants}</span>
                    </div>
                    <div className="w-full h-2 bg-blue-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: `${(readingGroupData.upcomingSession.currentRegistrations / readingGroupData.maxParticipants) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-blue-600 mt-1">
                      报名截止日期：{readingGroupData.upcomingSession.registrationDeadline}
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Button size="sm" variant="outline" className="flex items-center gap-1">
                      <FileText size={14} /> 预习材料
                    </Button>
                    <Button size="sm" className="flex items-center gap-1">
                      <Check size={14} /> 立即报名
                    </Button>
                  </div>
                </div>
                
                <div className="text-sm text-blue-700">
                  <div className="flex items-start">
                    <AlertCircle size={16} className="mt-0.5 mr-2 flex-shrink-0" />
                    <p>
                      请提前阅读指定章节，准备讨论问题。若有事无法参加，请提前通知组织者，以便安排候补名额。
                    </p>
                  </div>
                </div>
              </div>
              
              {/* 参与指南 */}
              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <h2 className="text-xl font-bold mb-4">参与指南</h2>
                
                <ul className="space-y-3 mb-6">
                  {readingGroupData.guidelines.map((guideline, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mt-1 text-blue-500 mr-2">
                        <Check size={16} />
                      </div>
                      <span className="text-gray-700">{guideline}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">推荐参与方式</h3>
                  <p className="text-gray-600 text-sm">
                    为了让读书会讨论更加深入和有意义，建议参与者：1）提前完整阅读指定书籍或章节；2）准备2-3个与主题相关的讨论问题；
                    3）思考实际案例或个人经验与读物内容的联系；4）带着开放心态参与，尊重并倾听不同观点。
                  </p>
                </div>
              </div>
              
              {/* 参与者心得 */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">参与者心得</h2>
                
                <div className="space-y-6">
                  {readingGroupData.reviews.map((review, index) => (
                    <div key={index} className="border-b border-gray-100 pb-6 last:border-0">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mr-2">
                          {review.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-medium">{review.name}</h3>
                          <p className="text-xs text-gray-500">{review.department}</p>
                        </div>
                        <div className="ml-auto text-yellow-400 flex">
                          {[...Array(5)].map((_, i) => (
                            <span key={i}>{i < review.rating ? '★' : '☆'}</span>
                          ))}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-sm">{review.content}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 text-center">
                  <Button variant="outline" className="flex items-center gap-1 mx-auto">
                    <ThumbsUp size={16} /> 分享您的心得
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* 活动安排 */}
      {activeTab === "sessions" && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* 近期活动安排 */}
              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <h2 className="text-xl font-bold mb-6">近期活动安排</h2>
                
                <div className="relative pb-2">
                  <div className="absolute left-8 top-0 h-full w-0.5 bg-gray-200"></div>
                  
                  {/* 即将举行的读书会 */}
                  <div className="relative flex items-start mb-8">
                    <div className="absolute left-8 top-8 h-full w-0.5 bg-gray-200"></div>
                    
                    <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold flex-shrink-0 mr-4">
                      即将
                    </div>
                    
                    <div className="bg-white shadow-sm border border-gray-100 rounded-lg p-4 flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg">{readingGroupData.upcomingSession.book}</h3>
                        <Badge color="green">{readingGroupData.upcomingSession.status}</Badge>
                      </div>
                      
                      <p className="text-gray-700 mb-3">作者：{readingGroupData.upcomingSession.author}</p>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          <span>{readingGroupData.upcomingSession.date}</span>
                        </div>
                        <div className="hidden sm:block">•</div>
                        <div className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          <span>{readingGroupData.upcomingSession.time}</span>
                        </div>
                        <div className="hidden sm:block">•</div>
                        <div className="flex items-center">
                          <Users size={14} className="mr-1" />
                          <span>引导人：{readingGroupData.upcomingSession.facilitator}</span>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex items-center gap-1">
                          <FileText size={14} /> 预习材料
                        </Button>
                        <Button size="sm" className="flex items-center gap-1">
                          <Check size={14} /> 立即报名
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  {/* 未来预计读书会 */}
                  {readingGroupData.futureBooks.map((book, index) => (
                    <div key={index} className="relative flex items-start mb-8 last:mb-0">
                      <div className={`absolute left-8 top-8 h-full w-0.5 ${
                        index === readingGroupData.futureBooks.length - 1 ? 'bg-transparent' : 'bg-gray-200'
                      }`}></div>
                      
                      <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold flex-shrink-0 mr-4">
                        预定
                      </div>
                      
                      <div className="bg-white shadow-sm border border-gray-100 rounded-lg p-4 flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold text-lg">{book.title}</h3>
                          <Badge color="blue" variant="outline">计划中</Badge>
                        </div>
                        
                        <p className="text-gray-700 mb-3">作者：{book.author}</p>
                        
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <Calendar size={14} className="mr-1" />
                          <span>预计时间：{book.tentativeDate}</span>
                        </div>
                        
                        <p className="text-gray-600 text-sm mb-4">{book.description}</p>
                        
                        <Button size="sm" variant="outline" className="flex items-center gap-1">
                          <MessageSquare size={14} /> 表达参与意愿
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* 历史读书会记录 */}
              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <h2 className="text-xl font-bold mb-6">历史读书会记录</h2>
                
                <div className="space-y-6">
                  {readingGroupData.pastSessions.map((session, index) => (
                    <div key={index} className="border-b border-gray-100 pb-6 last:border-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                        <h3 className="font-bold text-lg">{session.book}</h3>
                        <div className="text-sm text-gray-500">
                          <Calendar size={14} className="inline mr-1" />
                          <span>{session.date}</span>
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <p className="text-gray-700">作者：{session.author}</p>
                        <p className="text-gray-600 text-sm">引导人：{session.facilitator}</p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg mb-4">
                        <h4 className="font-medium mb-2">讨论摘要</h4>
                        <p className="text-gray-600 text-sm">{session.summary}</p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {session.materials.map((material, i) => (
                          <Badge key={i} color="blue" variant="subtle">
                            {material}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="mt-4 flex justify-between items-center">
                        <div className="text-sm text-gray-500 flex items-center">
                          <Users size={14} className="mr-1" />
                          <span>{session.participants} 人参与</span>
                        </div>
                        
                        <Button size="sm" variant="outline" className="flex items-center gap-1">
                          <FileText size={14} /> 查看完整记录
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* 活动日历 */}
              <div className="bg-blue-50 rounded-xl shadow-md p-6">
                <div className="flex items-center mb-4">
                  <Calendar size={20} className="text-blue-600 mr-2" />
                  <h2 className="text-xl font-bold text-blue-800">活动日历</h2>
                </div>
                
                <p className="text-blue-700 mb-4">
                  您可以订阅我们的活动日历，获取读书会的实时更新与提醒。
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="flex items-center gap-1">
                    <Calendar size={16} /> 添加到日历
                  </Button>
                  <Button variant="outline" className="flex items-center gap-1">
                    <ExternalLink size={16} /> 查看完整日历
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* 书单推荐 */}
      {activeTab === "booklist" && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <h2 className="text-xl font-bold mb-6">法律科技主题推荐书单</h2>
                
                <p className="text-gray-700 mb-6">
                  以下是我们精心挑选的法律科技主题书籍，涵盖人工智能法律、数据隐私、平台治理等多个领域。
                  这些书籍既有理论深度，又关注实践应用，适合不同背景的读者阅读与思考。
                </p>
                
                <div className="space-y-4 mb-6">
                  {/* 人工智能与法律领域 */}
                  <div>
                    <h3 className="font-bold text-lg bg-blue-50 p-2 rounded-md mb-3">人工智能与法律</h3>
                    
                    <div className="space-y-4">
                      {[
                        {
                          title: "《演算法、AI与自由民主》",
                          author: "陈宝村",
                          publisher: "清华大学出版社",
                          year: "2023",
                          description: "探讨人工智能和算法对民主制度和自由价值的影响，以及如何通过法律规制确保技术发展与民主价值相容。",
                          tags: ["人工智能", "民主制度", "算法规制"]
                        },
                        {
                          title: "《人工智能法律与伦理》",
                          author: "张书宁",
                          publisher: "北京大学出版社",
                          year: "2022",
                          description: "系统分析人工智能应用中的法律与伦理问题，包括责任归属、隐私保护、算法偏见等，提出相应的法律对策。",
                          tags: ["人工智能", "法律伦理", "责任认定"]
                        },
                        {
                          title: "《算法霸权》",
                          author: "凯西·奥尼尔",
                          publisher: "中信出版社",
                          year: "2020",
                          description: "揭示数学模型和算法如何强化歧视和不平等，以及如何通过法律和政策手段解决这些问题。",
                          tags: ["算法歧视", "社会不平等", "技术监管"]
                        }
                      ].map((book, index) => (
                        <div key={index} className="border border-gray-100 rounded-lg p-4 shadow-sm">
                          <div className="flex justify-between items-start">
                            <h4 className="font-bold mb-1">{book.title}</h4>
                            <Button 
                              size="sm" 
                              variant="ghost" 
                              className="text-blue-500"
                              onClick={() => toggleBookDetails(index)}
                            >
                              <ChevronDown 
                                size={16} 
                                className={`transition-transform duration-300 ${
                                  expandedBook === index ? 'rotate-180' : ''
                                }`} 
                              />
                            </Button>
                          </div>
                          
                          <p className="text-gray-500 text-sm mb-2">
                            {book.author} · {book.publisher} · {book.year}
                          </p>
                          
                          {expandedBook === index && (
                            <div className="mt-3 pt-3 border-t border-gray-100">
                              <p className="text-gray-600 text-sm mb-3">{book.description}</p>
                              
                              <div className="flex flex-wrap gap-1 mb-3">
                                {book.tags.map((tag, i) => (
                                  <Badge key={i} color="blue" variant="subtle" size="sm">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                              
                              <div className="flex gap-2">
                                <Button size="sm" variant="outline" className="flex items-center gap-1">
                                  <ExternalLink size={14} /> 查看详情
                                </Button>
                                <Button size="sm" variant="ghost" className="flex items-center gap-1 text-blue-600">
                                  <Heart size={14} /> 推荐为读书会书目
                                </Button>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* 数据隐私与保护领域 */}
                  <div>
                    <h3 className="font-bold text-lg bg-purple-50 p-2 rounded-md mb-3">数据隐私与保护</h3>
                    
                    <div className="space-y-4">
                      {[
                        {
                          title: "《数据法学》",
                          author: "高丝露",
                          publisher: "法律出版社",
                          year: "2022",
                          description: "系统阐述数据的法律属性与保护机制，探讨数据权属、交易规则、安全保障等法律问题。",
                          tags: ["数据权属", "数据交易", "法律规范"]
                        },
                        {
                          title: "《隐私算法》",
                          author: "马丁·乔克",
                          publisher: "人民邮电出版社",
                          year: "2021",
                          description: "介绍保护数据隐私的算法技术与法律要求，探讨如何在数据利用与隐私保护之间取得平衡。",
                          tags: ["隐私保护", "算法技术", "数据利用"]
                        }
                      ].map((book, index) => (
                        <div key={index} className="border border-gray-100 rounded-lg p-4 shadow-sm">
                          <div className="flex justify-between items-start">
                            <h4 className="font-bold mb-1">{book.title}</h4>
                            <Button 
                              size="sm" 
                              variant="ghost" 
                              className="text-blue-500"
                              onClick={() => toggleBookDetails(index + 10)}
                            >
                              <ChevronDown 
                                size={16} 
                                className={`transition-transform duration-300 ${
                                  expandedBook === index + 10 ? 'rotate-180' : ''
                                }`} 
                              />
                            </Button>
                          </div>
                          
                          <p className="text-gray-500 text-sm mb-2">
                            {book.author} · {book.publisher} · {book.year}
                          </p>
                          
                          {expandedBook === index + 10 && (
                            <div className="mt-3 pt-3 border-t border-gray-100">
                              <p className="text-gray-600 text-sm mb-3">{book.description}</p>
                              
                              <div className="flex flex-wrap gap-1 mb-3">
                                {book.tags.map((tag, i) => (
                                  <Badge key={i} color="purple" variant="subtle" size="sm">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                              
                              <div className="flex gap-2">
                                <Button size="sm" variant="outline" className="flex items-center gap-1">
                                  <ExternalLink size={14} /> 查看详情
                                </Button>
                                <Button size="sm" variant="ghost" className="flex items-center gap-1 text-blue-600">
                                  <Heart size={14} /> 推荐为读书会书目
                                </Button>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* 平台经济与监管领域 */}
                  <div>
                    <h3 className="font-bold text-lg bg-green-50 p-2 rounded-md mb-3">平台经济与监管</h3>
                    
                    <div className="space-y-4">
                      {[
                        {
                          title: "《平台资本主义》",
                          author: "尼克·斯尼切克",
                          publisher: "上海人民出版社",
                          year: "2022",
                          description: "分析数字平台作为新型商业模式的特征与社会影响，探讨平台资本主义的运作逻辑与法律规制。",
                          tags: ["平台经济", "数据资本主义", "平台规制"]
                        },
                        {
                          title: "《互联网平台监管的法律框架》",
                          author: "林小青",
                          publisher: "中国社会科学出版社",
                          year: "2023",
                          description: "系统分析互联网平台监管的法律理论与实践问题，探讨反垄断、消费者保护、数据安全等法律工具的应用。",
                          tags: ["平台监管", "反垄断", "数据安全"]
                        }
                      ].map((book, index) => (
                        <div key={index} className="border border-gray-100 rounded-lg p-4 shadow-sm">
                          <div className="flex justify-between items-start">
                            <h4 className="font-bold mb-1">{book.title}</h4>
                            <Button 
                              size="sm" 
                              variant="ghost" 
                              className="text-blue-500"
                              onClick={() => toggleBookDetails(index + 20)}
                            >
                              <ChevronDown 
                                size={16} 
                                className={`transition-transform duration-300 ${
                                  expandedBook === index + 20 ? 'rotate-180' : ''
                                }`} 
                              />
                            </Button>
                          </div>
                          
                          <p className="text-gray-500 text-sm mb-2">
                            {book.author} · {book.publisher} · {book.year}
                          </p>
                          
                          {expandedBook === index + 20 && (
                            <div className="mt-3 pt-3 border-t border-gray-100">
                              <p className="text-gray-600 text-sm mb-3">{book.description}</p>
                              
                              <div className="flex flex-wrap gap-1 mb-3">
                                {book.tags.map((tag, i) => (
                                  <Badge key={i} color="green" variant="subtle" size="sm">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                              
                              <div className="flex gap-2">
                                <Button size="sm" variant="outline" className="flex items-center gap-1">
                                  <ExternalLink size={14} /> 查看详情
                                </Button>
                                <Button size="sm" variant="ghost" className="flex items-center gap-1 text-blue-600">
                                  <Heart size={14} /> 推荐为读书会书目
                                </Button>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <Button className="mx-auto">查看更多推荐书籍</Button>
                </div>
              </div>
              
              {/* 书籍建议 */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl shadow-lg p-6 text-white">
                <h2 className="text-xl font-bold mb-4">推荐书籍</h2>
                
                <p className="opacity-90 mb-6">
                  您有好的书籍想推荐给读书会成员一起阅读讨论吗？请填写以下表单提交您的建议。
                  我们会定期审核并将合适的书籍纳入未来读书会安排。
                </p>
                
                <div className="bg-white/10 p-4 rounded-lg mb-6">
                  <h3 className="font-bold mb-3">推荐书籍标准</h3>
                  <ul className="space-y-2 text-sm opacity-90">
                    <li className="flex items-start">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-white mr-2"></div>
                      <span>与法律科技、AI伦理、数据治理等相关主题</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-white mr-2"></div>
                      <span>内容具有一定深度但不过于艰深，适合小组讨论</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-white mr-2"></div>
                      <span>最好有中文版或英文版容易获取</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-white mr-2"></div>
                      <span>近五年出版的著作优先考虑</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium opacity-90 mb-1">书籍名称</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md focus:ring-2 focus:ring-white/50 focus:border-transparent text-white placeholder-white/50"
                      placeholder="请输入完整书名"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium opacity-90 mb-1">作者</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md focus:ring-2 focus:ring-white/50 focus:border-transparent text-white placeholder-white/50"
                        placeholder="作者姓名"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium opacity-90 mb-1">出版年份</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md focus:ring-2 focus:ring-white/50 focus:border-transparent text-white placeholder-white/50"
                        placeholder="如：2023"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium opacity-90 mb-1">推荐理由</label>
                    <textarea 
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md focus:ring-2 focus:ring-white/50 focus:border-transparent text-white placeholder-white/50" 
                      rows="3"
                      placeholder="请简述为什么推荐这本书及其适合讨论的主题"
                    ></textarea>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button className="bg-white text-blue-700 hover:bg-blue-50 flex items-center gap-1">
                      <Send size={16} /> 提交推荐
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* 报名参与 */}
      {activeTab === "participate" && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* 报名参与说明 */}
              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <h2 className="text-xl font-bold mb-4">如何参与读书会</h2>
                
                <p className="text-gray-700 mb-6">
                  我们欢迎所有对法律科技交叉领域感兴趣的同学参与读书会活动。参与者不需要具备专业背景，
                  只要有阅读与交流的热情即可。以下是参与读书会的几种方式：
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="border border-gray-100 rounded-lg p-4 shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mb-3">
                      1
                    </div>
                    <h3 className="font-bold mb-2">常规参与者</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      定期参加读书会活动，阅读指定书籍，参与讨论交流。
                    </p>
                    <Button size="sm" className="w-full">报名下次活动</Button>
                  </div>
                  
                  <div className="border border-gray-100 rounded-lg p-4 shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold mb-3">
                      2
                    </div>
                    <h3 className="font-bold mb-2">引导人</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      深入研读特定书籍，担任讨论引导人，组织和促进讨论。
                    </p>
                    <Button size="sm" variant="outline" className="w-full">申请成为引导人</Button>
                  </div>
                  
                  <div className="border border-gray-100 rounded-lg p-4 shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold mb-3">
                      3
                    </div>
                    <h3 className="font-bold mb-2">组织志愿者</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      协助活动组织、场地安排、材料准备、记录整理等工作。
                    </p>
                    <Button size="sm" variant="outline" className="w-full">加入志愿团队</Button>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-start">
                    <AlertCircle size={20} className="text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-blue-800 mb-1">特别说明</h4>
                      <p className="text-blue-700 text-sm">
                        读书会完全免费参与，但为保证讨论质量，每次活动限制人数为 {readingGroupData.maxParticipants} 人。
                        报名采取先到先得原则，额满后可加入候补名单。请确保报名后能够参加，如有变动请提前通知，
                        以便安排候补人员。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 即将举行的读书会报名 */}
              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <h2 className="text-xl font-bold mb-6">即将举行的读书会报名</h2>
                
                <div className="border border-gray-100 rounded-lg p-6 shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                    <h3 className="text-xl font-bold">{readingGroupData.upcomingSession.book}</h3>
                    <Badge color="green">{readingGroupData.upcomingSession.status}</Badge>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">活动信息</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <Calendar size={16} className="mr-2 text-blue-500" />
                          <span>日期：{readingGroupData.upcomingSession.date}</span>
                        </li>
                        <li className="flex items-center">
                          <Clock size={16} className="mr-2 text-blue-500" />
                          <span>时间：{readingGroupData.upcomingSession.time}</span>
                        </li>
                        <li className="flex items-center">
                          <MapPin size={16} className="mr-2 text-blue-500" />
                          <span>地点：{readingGroupData.location}</span>
                        </li>
                        <li className="flex items-center">
                          <Users size={16} className="mr-2 text-blue-500" />
                          <span>引导人：{readingGroupData.upcomingSession.facilitator}</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">报名情况</h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">已报名人数</span>
                          <span className="text-sm font-medium">{readingGroupData.upcomingSession.currentRegistrations}/{readingGroupData.maxParticipants}</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-3">
                          <div 
                            className="h-full bg-blue-500 rounded-full"
                            style={{ width: `${(readingGroupData.upcomingSession.currentRegistrations / readingGroupData.maxParticipants) * 100}%` }}
                          ></div>
                        </div>
                        <p className="text-sm text-gray-500">
                          报名截止日期：{readingGroupData.upcomingSession.registrationDeadline}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-6 mb-6">
                    <h4 className="font-medium text-gray-700 mb-3">阅读材料</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="mt-1 text-blue-500 mr-2">
                          <FileText size={16} />
                        </div>
                        <div>
                          <p className="font-medium">指定阅读范围</p>
                          <p className="text-sm text-gray-600">第1-4章（共计约80页）</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="mt-1 text-blue-500 mr-2">
                          <FileText size={16} />
                        </div>
                        <div>
                          <p className="font-medium">引导问题</p>
                          <p className="text-sm text-gray-600">作者提出的算法规制框架有哪些核心原则？</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="mt-1 text-blue-500 mr-2">
                          <FileText size={16} />
                        </div>
                        <div>
                          <p className="font-medium">延伸阅读材料</p>
                          <p className="text-sm text-gray-600">《算法公平性评估》论文节选（可选阅读）</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-6">
                    <h4 className="font-medium text-gray-700 mb-3">报名表单</h4>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">姓名</label>
                          <input 
                            type="text" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="您的姓名"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">院系年级</label>
                          <input 
                            type="text" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="如：科法所碩一"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">电子邮件</label>
                        <input 
                          type="email" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="您的联系邮箱"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">参与动机</label>
                        <textarea 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                          rows="3"
                          placeholder="请简述您参与此次读书会的原因"
                        ></textarea>
                      </div>
                      
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          id="agree" 
                          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="agree" className="ml-2 text-sm text-gray-600">
                          我承诺会提前阅读指定材料，并积极参与讨论
                        </label>
                      </div>
                      
                      <div className="flex justify-end">
                        <Button>提交报名</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 联系信息 */}
              <div className="bg-blue-50 rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold text-blue-800 mb-4">联系方式</h2>
                
                <p className="text-blue-700 mb-6">
                  如果您对读书会有任何疑问或建议，请随时联系我们的活动负责人。
                </p>
                
                <div className="bg-white rounded-lg p-4 mb-6">
                  <h3 className="font-medium mb-3">读书会联系人</h3>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold flex-shrink-0 mr-3">
                      {readingGroupData.coordinator.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-medium">{readingGroupData.coordinator}</h4>
                      <p className="text-sm text-gray-500 mb-2">学术部部长</p>
                      <a 
                        href={`mailto:${readingGroupData.contactEmail}`} 
                        className="text-blue-600 text-sm flex items-center hover:underline"
                      >
                        {readingGroupData.contactEmail}
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button className="flex items-center gap-1">
                    <MessageSquare size={16} /> 加入交流群
                  </Button>
                  <Button variant="outline" className="flex items-center gap-1">
                    <Send size={16} /> 发送邮件
                  </Button>
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

export default ReadingGroupPage;