"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  BookOpen, Users, Calendar, Tag, Clock, 
  MapPin, Search, Filter, ArrowRight,
  CheckCircle, BarChart, Heart, MessageSquare
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Card } from '../../components/ui/card';

// 假设这些组件已经存在或将被创建
import Header from '../../components/layout/header';
import Footer from '../../components/layout/footer';
import Navigation from '../../components/layout/navigation';

const ActivitiesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("全部");
  const [activeTime, setActiveTime] = useState("全部");
  
  // 模拟活动数据
  const activities = [
    {
      id: "reading-group",
      title: "法律科技跨域读书会",
      category: "学术活动",
      description: "每月一次的读书会活动，讨论法律科技相关经典著作与前沿论文，促进跨领域交流。",
      nextDate: "2025/04/12",
      time: "19:00-21:00",
      location: "清华大学旺宏馆7楼讨论室",
      image: "/reading-group.jpg",
      status: "报名中",
      registered: 12,
      capacity: 20,
      tags: ["读书会", "法律科技", "学术交流"],
      organizer: "学术部",
      highlight: true
    },
    {
      id: "ai-ethics-workshop",
      title: "AI伦理工作坊",
      category: "工作坊",
      description: "通过案例研讨、分组讨论等形式，探讨AI技术应用中的伦理困境与法律解决方案。",
      nextDate: "2025/04/25",
      time: "14:00-17:00",
      location: "清华大学法学院报告厅",
      image: "/ai-ethics.jpg",
      status: "即将开放报名",
      registered: 0,
      capacity: 30,
      tags: ["人工智能", "伦理", "工作坊"],
      organizer: "权益部",
      highlight: true
    },
    {
      id: "legal-clinic",
      title: "科技法律诊所",
      category: "公益服务",
      description: "为校内外人士提供科技法律相关咨询服务，由科法所学生在教师指导下解答法律问题。",
      nextDate: "2025/04/18",
      time: "13:00-16:00",
      location: "线上咨询",
      image: "/legal-clinic.jpg",
      status: "长期活动",
      registered: 8,
      capacity: 15,
      tags: ["法律咨询", "公益服务", "实践"],
      organizer: "实践部",
      highlight: false
    },
    {
      id: "moot-court",
      title: "模拟法庭辩论赛",
      category: "竞赛活动",
      description: "以科技法律案例为背景的模拟法庭比赛，锻炼法律推理、辩论与表达能力。",
      nextDate: "2025/05/20",
      time: "全天",
      location: "清华大学法学院模拟法庭",
      image: "/moot-court.jpg",
      status: "筹备中",
      registered: 0,
      capacity: 40,
      tags: ["模拟法庭", "辩论", "竞赛"],
      organizer: "学术部",
      highlight: true
    },
    {
      id: "tech-law-salon",
      title: "科技法律沙龙",
      category: "学术活动",
      description: "邀请业界专家与学界教授，就科技法律热点话题进行圆桌讨论与经验分享。",
      nextDate: "2025/04/30",
      time: "19:00-21:00",
      location: "清华大学法学院会议室",
      image: "/tech-salon.jpg",
      status: "报名中",
      registered: 25,
      capacity: 40,
      tags: ["沙龙", "圆桌讨论", "经验分享"],
      organizer: "学术部",
      highlight: false
    },
    {
      id: "orientation",
      title: "新生学术导航",
      category: "迎新活动",
      description: "为新入学的科法所同学提供学术指导，分享学习经验、研究方法与资源获取途径。",
      nextDate: "2025/09/10",
      time: "14:00-16:00",
      location: "清华大学法学院报告厅",
      image: "/orientation.jpg",
      status: "未开始",
      registered: 0,
      capacity: 50,
      tags: ["新生指导", "学术经验", "资源分享"],
      organizer: "学生会主席团",
      highlight: false
    },
    {
      id: "career-fair",
      title: "科法所职业发展论坛",
      category: "职业发展",
      description: "邀请校友和业界人士分享科法专业的职业发展路径，建立学生与职场的联系。",
      nextDate: "2025/05/15",
      time: "14:00-17:00",
      location: "清华大学法学院报告厅",
      image: "/career-fair.jpg",
      status: "即将开放报名",
      registered: 0,
      capacity: 60,
      tags: ["职业发展", "校友分享", "职场指导"],
      organizer: "职业发展部",
      highlight: true
    }
  ];
  
  // 获取所有活动类别
  const categories = ["全部", ...new Set(activities.map(a => a.category))];
  
  // 时间筛选选项
  const timeFilters = ["全部", "本周", "本月", "未来活动"];
  
  // 根据筛选条件过滤活动
  const filteredActivities = activities.filter(activity => {
    // 类别筛选
    if (activeCategory !== "全部" && activity.category !== activeCategory) {
      return false;
    }
    
    // 时间筛选（简化处理，实际应用中需根据日期进行计算）
    if (activeTime === "本周" && !["2025/04/12", "2025/04/18"].includes(activity.nextDate)) {
      return false;
    }
    
    if (activeTime === "本月" && !activity.nextDate.startsWith("2025/04")) {
      return false;
    }
    
    if (activeTime === "未来活动" && activity.nextDate < "2025/04/10") {
      return false;
    }
    
    // 搜索筛选
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        activity.title.toLowerCase().includes(query) ||
        activity.description.toLowerCase().includes(query) ||
        activity.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    return true;
  });
  
  // 分离精选活动
  const highlightedActivities = filteredActivities.filter(a => a.highlight);
  const regularActivities = filteredActivities.filter(a => !a.highlight);
  
  // 获取活动状态标签颜色
  const getStatusColor = (status) => {
    switch (status) {
      case "报名中": return "green";
      case "即将开放报名": return "blue";
      case "长期活动": return "purple";
      case "筹备中": 
      case "未开始": 
      default: return "gray";
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        title="活动中心" 
        subtitle="清大科法所学生会" 
        description="探索丰富多彩的学术、实践与社交活动"
      />
      
      <Navigation 
        activeSection="overview"
        items={[
          { id: 'overview', label: '活动总览', icon: <Calendar size={16} /> },
          { id: 'reading', label: '读书会', icon: <BookOpen size={16} /> },
          { id: 'workshops', label: '工作坊', icon: <Users size={16} /> },
          { id: 'competitions', label: '竞赛活动', icon: <BarChart size={16} /> },
          { id: 'calendar', label: '活动日历', icon: <Calendar size={16} /> },
        ]}
        onNavClick={(section) => {
          if (section === "overview") {
            // 保持在当前页面，滚动到顶部
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else if (section === "reading") {
            // 导航到读书会页面
            window.location.href = "/activities/reading-group";
          } else {
            // 导航到其他特定活动类别页面
            setActiveCategory(
              section === "workshops" ? "工作坊" : 
              section === "competitions" ? "竞赛活动" : "全部"
            );
          }
        }}
      />
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">活动总览</h2>
              <p className="text-gray-600 max-w-3xl">
                学生会组织各类丰富多彩的活动，包括学术读书会、专业工作坊、模拟法庭、公益实践等，
                旨在促进学术交流、培养专业能力、丰富校园生活。快来找到适合你的活动吧！
              </p>
            </div>
            
            {/* 搜索与筛选 */}
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
              
              <div className="flex gap-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search size={16} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="pl-10 pr-4 py-2 w-full md:w-64 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="搜索活动..."
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
                    value={activeTime}
                    onChange={(e) => setActiveTime(e.target.value)}
                  >
                    {timeFilters.map((filter) => (
                      <option key={filter} value={filter}>{filter}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            
            {/* 精选活动 */}
            {highlightedActivities.length > 0 && (
              <div className="mb-12">
                <div className="flex items-center mb-4">
                  <Heart size={20} className="text-pink-500 mr-2" />
                  <h3 className="text-xl font-bold">精选活动</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {highlightedActivities.map((activity) => (
                    <Link href={`/activities/${activity.id}`} key={activity.id} className="block h-full">
                      <Card className="h-full transition-all duration-300 hover:shadow-lg">
                        <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 relative overflow-hidden">
                          <div className="absolute inset-0 flex items-center justify-center">
                            {activity.id === "reading-group" ? (
                              <BookOpen size={64} className="text-white opacity-20" />
                            ) : activity.id === "ai-ethics-workshop" ? (
                              <Users size={64} className="text-white opacity-20" />
                            ) : (
                              <Calendar size={64} className="text-white opacity-20" />
                            )}
                          </div>
                          <div className="absolute top-3 left-3">
                            <Badge color="yellow">{activity.category}</Badge>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                            <div className="flex justify-between items-start">
                              <h3 className="text-xl font-bold text-white">{activity.title}</h3>
                              <Badge color={getStatusColor(activity.status)}>
                                {activity.status}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-5">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-500 mb-3">
                            <div className="flex items-center">
                              <Calendar size={14} className="mr-1" />
                              <span>{activity.nextDate}</span>
                            </div>
                            <div className="hidden sm:block">•</div>
                            <div className="flex items-center">
                              <Clock size={14} className="mr-1" />
                              <span>{activity.time}</span>
                            </div>
                            <div className="hidden sm:block">•</div>
                            <div className="flex items-center">
                              <MapPin size={14} className="mr-1" />
                              <span>{activity.location}</span>
                            </div>
                          </div>
                          
                          <p className="text-gray-600 mb-4 line-clamp-2">{activity.description}</p>
                          
                          {activity.status === "报名中" && (
                            <div className="mb-4">
                              <div className="flex justify-between text-sm mb-1">
                                <span>报名情况</span>
                                <span className="font-medium">{activity.registered}/{activity.capacity}</span>
                              </div>
                              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div 
                                  className="h-full rounded-full bg-blue-500"
                                  style={{ width: `${(activity.registered / activity.capacity) * 100}%` }}
                                ></div>
                              </div>
                            </div>
                          )}
                          
                          <div className="flex flex-wrap gap-1 mb-4">
                            {activity.tags.map((tag, index) => (
                              <Badge key={index} color="blue" variant="subtle" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="text-sm text-gray-500">
                              <span>主办：{activity.organizer}</span>
                            </div>
                            <div className="text-blue-600 text-sm font-medium flex items-center">
                              查看详情 <ArrowRight size={14} className="ml-1" />
                            </div>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            
            {/* 所有活动 */}
            <div>
              <h3 className="text-xl font-bold mb-4">全部活动</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {regularActivities.map((activity) => (
                  <Link href={`/activities/${activity.id}`} key={activity.id} className="block h-full">
                    <Card className="h-full transition-all duration-300 hover:shadow-lg">
                      <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Calendar size={48} className="text-white opacity-20" />
                        </div>
                        <div className="absolute top-3 left-3">
                          <Badge color="yellow" size="sm">{activity.category}</Badge>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                          <div className="flex justify-between items-start">
                            <h3 className="font-bold text-white">{activity.title}</h3>
                            <Badge color={getStatusColor(activity.status)} size="sm">
                              {activity.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4">
                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                          <div className="flex items-center">
                            <Calendar size={12} className="mr-1" />
                            <span>{activity.nextDate}</span>
                          </div>
                          <div>•</div>
                          <div className="flex items-center">
                            <MapPin size={12} className="mr-1" />
                            <span className="truncate">{activity.location}</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{activity.description}</p>
                        
                        <div className="flex flex-wrap gap-1 mb-3">
                          {activity.tags.slice(0, 2).map((tag, index) => (
                            <Badge key={index} color="blue" variant="subtle" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                          {activity.tags.length > 2 && (
                            <Badge color="gray" variant="subtle" className="text-xs">
                              +{activity.tags.length - 2}
                            </Badge>
                          )}
                        </div>
                        
                        <div className="text-blue-600 text-xs font-medium flex items-center">
                          查看详情 <ArrowRight size={12} className="ml-1" />
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
              
              {filteredActivities.length === 0 && (
                <div className="bg-white rounded-xl shadow p-8 text-center">
                  <Calendar size={48} className="mx-auto mb-4 text-gray-300" />
                  <h3 className="text-lg font-bold text-gray-700 mb-2">找不到符合条件的活动</h3>
                  <p className="text-gray-500 mb-4">
                    尝试更改搜索条件或类别过滤器以查看更多活动。
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchQuery("");
                      setActiveCategory("全部");
                      setActiveTime("全部");
                    }}
                  >
                    清除过滤条件
                  </Button>
                </div>
              )}
            </div>
            
            {/* 活动提案 */}
            <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl shadow-lg p-6 text-white">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="p-4 bg-white/10 rounded-xl">
                  <MessageSquare size={48} className="text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">有活动创意？</h3>
                  <p className="opacity-90 mb-6">
                    学生会鼓励并支持同学提出创新活动提案。如果你有关于学术交流、实践项目、社交活动等方面的
                    创意构想，欢迎提交活动计划申请，经审核通过后可获得资源支持与举办机会。
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white/10 p-3 rounded-lg">
                      <h4 className="font-bold mb-1">场地支持</h4>
                      <p className="text-sm opacity-90">协助预订适合的校内活动场地</p>
                    </div>
                    
                    <div className="bg-white/10 p-3 rounded-lg">
                      <h4 className="font-bold mb-1">宣传推广</h4>
                      <p className="text-sm opacity-90">通过学生会官方渠道宣传活动</p>
                    </div>
                    
                    <div className="bg-white/10 p-3 rounded-lg">
                      <h4 className="font-bold mb-1">经费资助</h4>
                      <p className="text-sm opacity-90">符合条件的活动可申请经费支持</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="bg-white text-blue-700 hover:bg-blue-50">
                      提交活动提案
                    </Button>
                    <Button variant="outline" className="bg-blue-700 bg-opacity-20 text-white hover:bg-opacity-30 border-white/30">
                      了解申请流程
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

export default ActivitiesPage;