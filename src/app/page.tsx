"use client";

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Users, Book, Calendar, Lightbulb, School, GraduationCap } from 'lucide-react';

// 導入重新設計的頁頭
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

const SectionTitle = ({ children, center = false }) => (
  <div className={`relative mb-12 ${center ? 'text-center' : ''}`}>
    <h2 className="text-3xl font-bold">
      <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
        {children}
      </span>
    </h2>
    <div className={`absolute bottom-0 ${center ? 'left-1/2 transform -translate-x-1/2' : 'left-0'} w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full`}></div>
  </div>
);

const FeatureCard = ({ icon, title, description, link, delay = 0 }) => (
  <Link href={link} className="block h-full">
    <Card hover={true} className="p-6 h-full transition-all duration-300 hover:shadow-lg" 
      style={{ animationDelay: `${delay}ms` }}>
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-blue-100 text-blue-700">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex items-center text-blue-600 font-medium">
            了解更多 <ChevronRight size={16} className="ml-1" />
          </div>
        </div>
      </div>
    </Card>
  </Link>
);

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 使用重新設計的頁頭 */}
      <Header 
        title="清大科法所" 
        subtitle="學生會" 
        description="連結學術與實務、促進對話與參與、保障學生權益"
      />
      
      {/* 最新公告 */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle>最新公告</SectionTitle>
          
          <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-600">
            <h3 className="text-xl font-bold text-blue-800 mb-2">學生會籌備進度更新</h3>
            <p className="text-gray-700 mb-4">
              我們很高興地宣布，清大科法所學生會正在籌備中！2025年將從小型專案開始，
              希望建立團隊默契並探索最適合同學們的運作模式。
            </p>
            <Button variant="default" size="sm">
              查看詳情
            </Button>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-sm text-gray-500">2025/04/15</span>
                  <h4 className="font-medium">AI人權盡職調查專案啟動</h4>
                </div>
                <span className="px-2 py-1 rounded bg-green-100 text-green-800 text-xs font-medium">新專案</span>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-sm text-gray-500">2025/04/10</span>
                  <h4 className="font-medium">章程草案公開徵求意見</h4>
                </div>
                <span className="px-2 py-1 rounded bg-blue-100 text-blue-800 text-xs font-medium">重要</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 主要功能區塊 */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <SectionTitle center={true}>探索學生會</SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<Users size={24} />}
              title="關於我們"
              description="了解清大科法所學生會的發展歷程、組織架構及未來展望"
              link="/about"
              delay={100}
            />
            
            <FeatureCard 
              icon={<Book size={24} />}
              title="章程閱讀"
              description="查看學生會章程與各項規定，了解組織運作的法律基礎"
              link="/charter"
              delay={200}
            />
            
            <FeatureCard 
              icon={<Calendar size={24} />}
              title="會議資訊"
              description="學權擴大會議、課程討論會議等重要會議的時間和議程"
              link="/meetings"
              delay={300}
            />
            
            <FeatureCard 
              icon={<Lightbulb size={24} />}
              title="專案計畫"
              description="探索AI人權調查、法律扶助等學生會主導的各項創新專案"
              link="/projects"
              delay={400}
            />
            
            <FeatureCard 
              icon={<School size={24} />}
              title="活動資訊"
              description="讀書會、講座、工作坊等學術與社交活動的詳細信息"
              link="/activities"
              delay={500}
            />
            
            <FeatureCard 
              icon={<GraduationCap size={24} />}
              title="學生資源"
              description="獎學金、實習機會、助學金等學生資源的整合資訊"
              link="/resources"
              delay={600}
            />
          </div>
        </div>
      </section>
      
      {/* 發展歷程預覽 */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionTitle center={true}>學生會發展藍圖</SectionTitle>
            
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform -translate-x-1/2"></div>
              
              {[
                {
                  year: '2025',
                  title: '打基礎、築願景',
                  description: '從小型專案開始，建立團隊默契，培養專業能力'
                },
                {
                  year: '2026',
                  title: '正式成立、廣納意見',
                  description: '學生會正式成立，開始舉辦學權擴大會議和課程討論會議'
                },
                {
                  year: '2027',
                  title: '國際連結、擴展視野',
                  description: '加入國際法律學生會，舉辦跨國法律講座，增強國際連結'
                }
              ].map((item, index) => (
                <div key={index} className="relative z-10 mb-12 last:mb-0">
                  <div className="flex items-center mb-4">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-blue-500"></div>
                    <div className={`text-2xl font-bold py-2 px-6 rounded-full ${
                      index % 2 === 0 ? 'mr-auto bg-blue-500 text-white' : 'ml-auto bg-purple-500 text-white'
                    }`}>
                      {item.year}
                    </div>
                  </div>
                  <div className={`bg-white rounded-xl shadow-md p-6 max-w-md ${
                    index % 2 === 0 ? 'ml-auto mr-12' : 'mr-auto ml-12'
                  }`}>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link href="/about">
                <Button variant="outline" size="lg">
                  查看完整發展計畫
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* 學生參與呼籲 */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">與我們一起成長</h2>
            <p className="text-xl opacity-90 mb-8">
              清大科法所學生會是由你我共同創建的組織。無論你有什麼想法、建議或願意參與的項目，
              我們都期待聽到你的聲音。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="px-8 py-3 bg-white text-blue-700 hover:bg-blue-50"
              >
                加入我們
              </Button>
              <Button
                className="px-8 py-3 bg-blue-800 bg-opacity-40 hover:bg-opacity-60"
              >
                提供建議
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default HomePage;