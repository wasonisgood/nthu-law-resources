"use client";

import React from 'react';
import { 
  Users, ShieldCheck, Globe, BookOpen, 
  GraduationCap, LucideScale, Megaphone, 
  Heart, Award, PlayCircle 
} from 'lucide-react';
import Image from 'next/image';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';

// 假設這些組件已經存在或將被創建
import Header from '../../components/layout/header';
import Footer from '../../components/layout/footer';
import Navigation from '../../components/layout/navigation';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        title="關於我們" 
        subtitle="清大科法所學生會" 
        description="了解我們的宗旨、組織架構與發展歷程"
      />
      
      <Navigation 
        activeSection="about"
        items={[
          { id: 'mission', label: '宗旨願景', icon: <ShieldCheck size={16} /> },
          { id: 'history', label: '發展歷程', icon: <BookOpen size={16} /> },
          { id: 'structure', label: '組織架構', icon: <Users size={16} /> },
          { id: 'team', label: '核心團隊', icon: <Heart size={16} /> },
          { id: 'future', label: '未來規劃', icon: <Globe size={16} /> },
        ]}
        onNavClick={(section) => {
          const element = document.getElementById(section);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />
      
      {/* 宗旨與願景部分 */}
      <section id="mission" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge color="blue" variant="subtle" size="lg" className="mb-4">我們的宗旨</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">連結、對話、參與、保障</h2>
              <p className="text-xl text-gray-600">
                清大科法所學生會致力於連結學術與實務、促進師生對話與參與、保障學生權益，
                打造一個更開放、更公平、更具創新精神的法學教育環境。
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {[
                {
                  icon: <Megaphone size={32} className="text-blue-600" />,
                  title: "學生權益保障",
                  description: "透過學權擴大會議，確保學生意見被聽見，並在教學、評量、資源分配等問題上爭取公平合理的處理方式。"
                },
                {
                  icon: <BookOpen size={32} className="text-purple-600" />,
                  title: "學術交流促進",
                  description: "組織讀書會、學術講座，鼓勵跨領域交流，促進法律科技領域的深入探討與創新思考。"
                },
                {
                  icon: <LucideScale size={32} className="text-green-600" />,
                  title: "法律與科技融合",
                  description: "關注科技發展對法律的影響，特別是人工智能、數據隱私等新興議題，促進法律對科技的適應與引導。"
                },
                {
                  icon: <Globe size={32} className="text-red-600" />,
                  title: "國際視野拓展",
                  description: "建立與國際法律學生組織的連結，舉辦跨國交流活動，拓展會員的國際視野與職業發展可能性。"
                }
              ].map((item, index) => (
                <div key={index} className="flex">
                  <div className="mr-4 mt-1">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* 發展歷程部分 */}
      <section id="history" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge color="purple" variant="subtle" size="lg" className="mb-4">發展歷程</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">從願景到實踐的旅程</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                清大科法所學生會的成立是一個循序漸進的過程，我們將以三年為期，逐步建立一個完善的學生自治組織。
              </p>
            </div>
            
            <div className="relative mt-20">
              {/* 中央時間線 */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform -translate-x-1/2"></div>
              
              {/* 2025年：籌備階段 */}
              <div className="relative z-10 mb-24">
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-blue-600 text-white text-2xl font-bold px-8 py-2 rounded-full relative z-10">
                    2025
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-blue-600"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl shadow-md p-6 transform md:translate-x-16">
                    <h3 className="text-xl font-bold mb-3">專案起步階段</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mt-0.5 mr-2">Q1</div>
                        <p>成立籌備團隊，開始研擬學生會章程草案</p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mt-0.5 mr-2">Q2</div>
                        <p>啟動AI法律應用小專案，培養團隊默契</p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mt-0.5 mr-2">Q3</div>
                        <p>舉辦首次非正式學生座談會，收集學生需求與期望</p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mt-0.5 mr-2">Q4</div>
                        <p>完成章程初稿，開始籌備正式成立事宜</p>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-md p-6 transform md:-translate-x-16">
                    <h3 className="text-xl font-bold mb-3">核心目標</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mr-4">
                          <Users size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold">建立核心團隊</h4>
                          <p className="text-gray-600">識別並聚集有熱情的同學，建立初步的工作團隊</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="h-10 w-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0 mr-4">
                          <BookOpen size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold">制定章程</h4>
                          <p className="text-gray-600">參考相關法規與其他學生會經驗，起草符合科法所特色的章程</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="h-10 w-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mr-4">
                          <PlayCircle size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold">試行專案</h4>
                          <p className="text-gray-600">以小型專案為起點，累積運作經驗，為正式成立做準備</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 2026年：正式成立 */}
              <div className="relative z-10 mb-24">
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-purple-600 text-white text-2xl font-bold px-8 py-2 rounded-full relative z-10">
                    2026
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-purple-600"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl shadow-md p-6 transform md:translate-x-16 order-1 md:order-2">
                    <h3 className="text-xl font-bold mb-3">核心目標</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="h-10 w-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0 mr-4">
                          <ShieldCheck size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold">正式建制</h4>
                          <p className="text-gray-600">完成選舉制度設計，選出第一屆學生會幹部</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mr-4">
                          <Megaphone size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold">擴大參與</h4>
                          <p className="text-gray-600">定期舉辦學權擴大會議，建立學生與系所溝通的常態機制</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="h-10 w-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mr-4">
                          <GraduationCap size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold">課程參與</h4>
                          <p className="text-gray-600">推動課程討論會議，讓學生在課程規劃上有更多發言權</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-md p-6 transform md:-translate-x-16 order-2 md:order-1">
                    <h3 className="text-xl font-bold mb-3">正式成立階段</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mt-0.5 mr-2">Q1</div>
                        <p>通過章程，組織第一次學生大會，選舉產生第一屆學生會幹部</p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mt-0.5 mr-2">Q2</div>
                        <p>啟動首次學權擴大會議，建立與系所定期溝通的機制</p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mt-0.5 mr-2">Q3</div>
                        <p>推動課程討論會議制度，參與課程規劃與評鑑</p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mt-0.5 mr-2">Q4</div>
                        <p>擴大專案規模，建立讀書會、講座等常態活動</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* 2027年：國際連結 */}
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-green-600 text-white text-2xl font-bold px-8 py-2 rounded-full relative z-10">
                    2027
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-green-600"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl shadow-md p-6 transform md:translate-x-16">
                    <h3 className="text-xl font-bold mb-3">國際化階段</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mt-0.5 mr-2">Q1</div>
                        <p>加入國際法律學生會聯盟，拓展國際連結</p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mt-0.5 mr-2">Q2</div>
                        <p>舉辦首次跨國法律義務性講座，邀請國際知名學者參與</p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mt-0.5 mr-2">Q3</div>
                        <p>啟動國際交流計畫，鼓勵會員參與國際學術活動</p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mt-0.5 mr-2">Q4</div>
                        <p>整合發展成果，制定長期發展規劃，確保組織永續</p>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-md p-6 transform md:-translate-x-16">
                    <h3 className="text-xl font-bold mb-3">核心目標</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="h-10 w-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mr-4">
                          <Globe size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold">國際連結</h4>
                          <p className="text-gray-600">加入國際法律學生組織，建立跨國交流網絡</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="h-10 w-10 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center flex-shrink-0 mr-4">
                          <Award size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold">高階活動</h4>
                          <p className="text-gray-600">舉辦跨國講座、研討會等高規格學術活動</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="h-10 w-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0 mr-4">
                          <Heart size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold">永續發展</h4>
                          <p className="text-gray-600">確立完整組織架構，建立穩定的經費來源與傳承機制</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 未來展望 */}
              <div className="flex justify-center mt-16">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-center max-w-xl">
                  <h3 className="text-xl font-bold mb-2">未來展望</h3>
                  <p>
                    在完成這三年的發展計畫後，清大科法所學生會將成為一個成熟、永續的學生自治組織，在保障學生權益、
                    促進學術交流、拓展國際視野上發揮重要作用，為科法所學生提供更豐富的學習與成長機會。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 核心團隊部分 - 這裡只是示意，實際團隊成員資料需要更新 */}
      <section id="team" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge color="green" variant="subtle" size="lg" className="mb-4">核心團隊</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">籌備團隊成員</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                學生會的籌備工作由一群充滿熱情的科法所同學共同推動，他們在各自的專業領域具有豐富經驗。
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* 這裡放置團隊成員卡片，僅為示意 */}
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Card key={item} className="overflow-hidden">
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <Users size={64} className="text-gray-400" />
                  </div>
                  <Card.Content>
                    <h3 className="text-lg font-bold">團隊成員 {item}</h3>
                    <p className="text-sm text-gray-500 mb-2">職位 / 年級</p>
                    <p className="text-gray-600">
                      專長領域與簡短介紹...
                    </p>
                  </Card.Content>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button variant="outline">加入我們的團隊</Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* 組織架構部分 */}
      <section id="structure" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge color="red" variant="subtle" size="lg" className="mb-4">組織架構</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">學生會架構規劃</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                學生會將建立完善的組織架構，確保各項功能的有效運作，同時保證決策過程的民主與透明。
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h3 className="text-xl font-bold mb-6 text-center">組織架構圖</h3>
              
              <div className="relative">
                {/* 這裡只是一個簡化的組織架構示意圖，實際可能需要更複雜的設計 */}
                <div className="flex flex-col items-center">
                  <div className="w-64 py-4 bg-blue-600 text-white text-center font-bold rounded-lg mb-4">
                    學生大會
                  </div>
                  <div className="h-8 w-0.5 bg-gray-300"></div>
                  <div className="w-64 py-4 bg-purple-600 text-white text-center font-bold rounded-lg mb-4">
                    學生會會長
                  </div>
                  <div className="h-8 w-0.5 bg-gray-300"></div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl">
                    <div className="py-3 bg-green-500 text-white text-center font-medium rounded-lg">
                      學術部
                    </div>
                    <div className="py-3 bg-yellow-500 text-white text-center font-medium rounded-lg">
                      活動部
                    </div>
                    <div className="py-3 bg-red-500 text-white text-center font-medium rounded-lg">
                      權益部
                    </div>
                  </div>
                  
                  <div className="h-8 w-0.5 bg-gray-300 my-4"></div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
                    <div className="py-3 bg-indigo-500 text-white text-center font-medium rounded-lg">
                      國際交流組
                    </div>
                    <div className="py-3 bg-pink-500 text-white text-center font-medium rounded-lg">
                      專案小組
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">決策機制</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mt-0.5 mr-2">1</div>
                    <p><strong>學生大會</strong>：最高決策機構，由全體學生組成，定期召開</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mt-0.5 mr-2">2</div>
                    <p><strong>幹部會議</strong>：由會長召集，各部門負責人參與，負責日常決策</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mt-0.5 mr-2">3</div>
                    <p><strong>學權擴大會議</strong>：聚焦學生權益議題，邀請系所師長參與</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mt-0.5 mr-2">4</div>
                    <p><strong>課程討論會議</strong>：專門針對課程規劃與教學評量的特定會議</p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">各部門職責</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mt-0.5 mr-2">學</div>
                    <p><strong>學術部</strong>：負責讀書會、講座、研討會等學術活動的籌劃與執行</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center mt-0.5 mr-2">活</div>
                    <p><strong>活動部</strong>：負責迎新、送舊、聯誼等各類社交活動的籌劃與執行</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center mt-0.5 mr-2">權</div>
                    <p><strong>權益部</strong>：負責學權擴大會議、意見收集與反映、學生權益保障工作</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mt-0.5 mr-2">國</div>
                    <p><strong>國際交流組</strong>：負責與國際學生組織的連結與交流活動籌劃</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center mt-0.5 mr-2">專</div>
                    <p><strong>專案小組</strong>：針對特定主題（如AI法律應用）的專門工作小組</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 未來規劃與招募 */}
      <section id="future" className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">參與我們的旅程</h2>
            <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
              清大科法所學生會的成功需要每一位同學的參與和支持。無論你是想加入核心團隊，還是有寶貴的建議與想法，
              我們都歡迎你的參與！
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white bg-opacity-10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">提供意見</h3>
                <p className="opacity-90 mb-4">
                  分享你對學生會的期望、建議或關注的議題，幫助我們更好地服務同學
                </p>
                <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">
                  填寫意見表單
                </Button>
              </div>
              
              <div className="bg-white bg-opacity-10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">加入團隊</h3>
                <p className="opacity-90 mb-4">
                  成為核心團隊的一員，發揮你的專長，參與學生會的籌建與運作
                </p>
                <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">
                  申請加入
                </Button>
              </div>
              
              <div className="bg-white bg-opacity-10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">專案合作</h3>
                <p className="opacity-90 mb-4">
                  提出你的專案點子，或參與現有的專案活動，共同創造價值
                </p>
                <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">
                  專案申請
                </Button>
              </div>
            </div>
            
            <p className="italic opacity-80">
              "學生會的核心價值在於促進學生間的連結、保障每位同學的權益、創造更豐富的學習機會。
              這是我們共同的旅程，也是我們共同的責任。"
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage;