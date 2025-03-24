"use client";

import React, { useState } from 'react';
import { 
  BookOpen, FileText, History, MessageSquare, 
  FileSearch, Download, Printer, Share2, Copy, 
  CheckSquare, AlertTriangle, Info, ThumbsUp 
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Card } from '../../components/ui/card';

// 假設這些組件已經存在或將被創建
import Header from '../../components/layout/header';
import Footer from '../../components/layout/footer';
import Navigation from '../../components/layout/navigation';

const CharterPage = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [activeTocItem, setActiveTocItem] = useState("第一章");
  
  // 這是一個簡化的章程目錄示例
  const tocItems = [
    { id: "第一章", title: "第一章 總則", items: ["第一條 名稱", "第二條 宗旨", "第三條 組織地位", "第四條 會址"] },
    { id: "第二章", title: "第二章 會員", items: ["第五條 會員資格", "第六條 會員權利", "第七條 會員義務", "第八條 會籍管理"] },
    { id: "第三章", title: "第三章 組織", items: ["第九條 組織架構", "第十條 學生大會", "第十一條 幹部會議", "第十二條 各部門"] },
    { id: "第四章", title: "第四章 會長與幹部", items: ["第十三條 會長職責", "第十四條 幹部產生", "第十五條 任期", "第十六條 去職"] },
    { id: "第五章", title: "第五章 會議", items: ["第十七條 學生大會", "第十八條 學權擴大會議", "第十九條 課程討論會議", "第二十條 會議規則"] },
    { id: "第六章", title: "第六章 財務", items: ["第二十一條 經費來源", "第二十二條 經費運用", "第二十三條 財務公開", "第二十四條 監督機制"] },
    { id: "第七章", title: "第七章 章程修訂與解釋", items: ["第二十五條 修訂程序", "第二十六條 解釋權", "第二十七條 施行日期"] }
  ];
  
  // 模擬章程的歷史版本
  const charterVersions = [
    { version: "1.0.0", date: "2025/01/15", status: "草案", description: "初始章程草案" },
    { version: "1.1.0", date: "2025/03/10", status: "草案", description: "根據第一次公開意見徵集修訂" },
    { version: "1.2.0", date: "2025/06/20", status: "草案", description: "根據法律專家審查意見修訂" },
    { version: "2.0.0", date: "2025/12/01", status: "正式版", description: "學生大會通過的正式版本" }
  ];
  
  // 簡化的章程內容示例
  const charterContent = {
    "第一章": `
      # 第一章 總則
      
      ## 第一條 名稱
      本會定名為「國立清華大學科技法律研究所學生會」（以下簡稱本會）。
      英文名稱為「Student Association of Institute of Law for Science and Technology, National Tsing Hua University」。
      
      ## 第二條 宗旨
      本會以保障會員權益、增進會員福利、促進師生交流、提升學術研究風氣、拓展國際視野為宗旨。
      
      ## 第三條 組織地位
      本會為國立清華大學（以下簡稱本校）科技法律研究所（以下簡稱本所）全體在學研究生自治性組織，受本校學生自治團體輔導辦法之保障與規範。
      
      ## 第四條 會址
      本會會址設於國立清華大學科技法律研究所。
    `,
    "第二章": `
      # 第二章 會員
      
      ## 第五條 會員資格
      凡具有本所在學學籍之研究生，均為本會當然會員。會員資格因休學、退學、畢業而喪失。
      
      ## 第六條 會員權利
      本會會員享有下列權利：
      一、選舉權、被選舉權與罷免權。
      二、參與本會所舉辦各項活動之權利。
      三、參與學生大會並享有發言權與表決權。
      四、向本會反映意見及要求處理學生權益問題之權利。
      五、其他依本章程所衍生之權利。
      
      ## 第七條 會員義務
      本會會員應盡下列義務：
      一、遵守本會章程及各項會議決議。
      二、維護本會聲譽。
      三、其他依本章程所規定之義務。
      
      ## 第八條 會籍管理
      會籍管理相關事宜由本會秘書處負責。
    `,
    "第五章": `
      # 第五章 會議
      
      ## 第十七條 學生大會
      一、學生大會為本會最高決策機構，由全體會員組成。
      二、學生大會每學年至少召開一次，由會長召集並擔任主席。
      三、學生大會應有會員總人數五分之一以上出席始得召開，出席人數二分之一以上同意始得決議。
      四、學生大會負責審議下列事項：
          1. 章程之制定與修訂。
          2. 會長之選舉與罷免。
          3. 學生會重大政策之決定。
          4. 學年度預決算之審議。
          5. 其他重大事項。
      
      ## 第十八條 學權擴大會議
      一、學權擴大會議為處理學生權益相關事務之會議，由會長或權益部部長召集，邀請本所師長參與。
      二、學權擴大會議每學期至少召開一次。
      三、學權擴大會議應有下列人員出席：
          1. 學生會會長、幹部代表。
          2. 本所所長或其代表。
          3. 本所教師代表。
          4. 學生代表。
      四、學權擴大會議主要討論事項：
          1. 學生學習環境與權益相關問題。
          2. 師生溝通及意見交流。
          3. 學生會與系所合作事項。
          4. 其他學生權益相關事項。
      
      ## 第十九條 課程討論會議
      一、課程討論會議為專門針對課程規劃、教學評量等事項的會議，由會長或學術部部長召集。
      二、課程討論會議每學期至少召開一次。
      三、課程討論會議應有下列人員出席：
          1. 學生會會長、學術部部長。
          2. 本所課程委員會代表。
          3. 各年級學生代表。
      四、課程討論會議主要討論事項：
          1. 課程規劃與調整建議。
          2. 教學評量與改善方案。
          3. 跨領域學習相關事宜。
          4. 其他與課程相關事項。
      
      ## 第二十條 會議規則
      本會各項會議之召開，除本章程另有規定外，均應依民主程序進行，並作成會議紀錄，於會後公開。
    `
  };
  
  // 法律意見與問答區
  const legalQA = [
    {
      question: "學生會章程的法律地位為何？",
      answer: "學生會章程是學生自治組織的基本大法，依據《大學法》第33條規定，學生為學生會當然會員，學生會得向會員收取會費，學校應依學生會請求代收會費。因此，學生會章程具有法律授權的自治規範性質。",
      expert: "法律系王教授"
    },
    {
      question: "學權擴大會議的決議是否具有約束力？",
      answer: "學權擴大會議的決議原則上具有內部約束力，但不能違反學校規定或法律。若要使決議具有正式效力，通常需要經過學校相關會議（如系務會議）的確認或採納。",
      expert: "清大法律顧問"
    },
    {
      question: "學生會能否代表全體學生與校方進行協商？",
      answer: "依據學生自治原則，學生會作為學生自治組織，有權代表其會員與校方進行協商。然而，協商結果的效力範圍應視具體情況而定，並受到學校規章與相關法律的限制。",
      expert: "教育部學生事務諮詢專家"
    }
  ];
  
  // 處理目錄項點擊
  const handleTocClick = (itemId) => {
    setActiveTocItem(itemId);
    // 在實際應用中，可能需要滾動到對應的章節
  };
  
  // 處理導航點擊
  const handleNavClick = (section) => {
    setActiveSection(section);
  };
  
  // 渲染章程內容
  const renderCharterContent = () => {
    if (!charterContent[activeTocItem]) {
      return (
        <div className="flex items-center justify-center h-64 text-gray-500">
          <div className="text-center">
            <FileSearch size={48} className="mx-auto mb-4 opacity-50" />
            <p>請從左側選擇章節查看內容</p>
          </div>
        </div>
      );
    }
    
    return (
      <div className="prose prose-blue max-w-none">
        <div dangerouslySetInnerHTML={{ 
          __html: charterContent[activeTocItem]
            .replace(/# (.*)/g, '<h1 class="text-2xl font-bold mb-4 mt-6">$1</h1>')
            .replace(/## (.*)/g, '<h2 class="text-xl font-bold mb-3 mt-5">$1</h2>')
            .replace(/\n/g, '<br />')
        }} />
      </div>
    );
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        title="章程閱讀" 
        subtitle="清大科法所學生會" 
        description="學生會章程是我們組織運作的基本依據"
      />
      
      <Navigation 
        activeSection={activeSection}
        items={[
          { id: 'overview', label: '章程總覽', icon: <BookOpen size={16} /> },
          { id: 'history', label: '修訂歷程', icon: <History size={16} /> },
          { id: 'legal', label: '法律解釋', icon: <FileText size={16} /> },
          { id: 'qa', label: '問答集', icon: <MessageSquare size={16} /> },
        ]}
        onNavClick={handleNavClick}
      />
      
      {/* 章程主體內容 */}
      {activeSection === 'overview' && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <Badge color="blue" variant="subtle" size="lg">最新版本：2.0.0</Badge>
                    <h2 className="text-2xl font-bold mt-2">清大科法所學生會章程</h2>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Download size={16} /> 下載
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Printer size={16} /> 列印
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Share2 size={16} /> 分享
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 mb-4 text-sm text-gray-500">
                  <span>最後更新：2025/12/01</span>
                  <span>•</span>
                  <span>狀態：正式版</span>
                  <span>•</span>
                  <Badge variant="outline" color="green" size="sm">已通過</Badge>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                  <div className="flex">
                    <Info size={20} className="text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-blue-800 mb-1">章程說明</h3>
                      <p className="text-blue-700 text-sm">
                        本章程為清大科法所學生會的基本大法，規範學生會的組織架構、運作方式、會員權利義務等重要事項。
                        章程的制定與修訂經過廣泛的諮詢與討論，確保符合民主原則與正當法律程序。
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-bold text-lg mb-3">章程通過程序</h3>
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 font-medium">1</div>
                    <div className="h-0.5 w-12 bg-gray-300"></div>
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 font-medium">2</div>
                    <div className="h-0.5 w-12 bg-gray-300"></div>
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 font-medium">3</div>
                    <div className="h-0.5 w-12 bg-gray-300"></div>
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 font-medium">4</div>
                    <div className="h-0.5 w-12 bg-gray-300"></div>
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 font-medium">5</div>
                  </div>
                  <div className="flex text-xs text-gray-600 mt-2">
                    <div className="w-10 text-center">起草</div>
                    <div className="w-12"></div>
                    <div className="w-10 text-center">公開<br/>徵求</div>
                    <div className="w-12"></div>
                    <div className="w-10 text-center">法律<br/>審查</div>
                    <div className="w-12"></div>
                    <div className="w-10 text-center">學生<br/>大會</div>
                    <div className="w-12"></div>
                    <div className="w-10 text-center">正式<br/>公布</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="flex items-center bg-green-50 p-3 rounded-lg">
                    <CheckSquare size={20} className="text-green-600 mr-2" />
                    <span className="text-green-800">符合民主程序</span>
                  </div>
                  <div className="flex items-center bg-green-50 p-3 rounded-lg">
                    <CheckSquare size={20} className="text-green-600 mr-2" />
                    <span className="text-green-800">專業法律審查</span>
                  </div>
                  <div className="flex items-center bg-green-50 p-3 rounded-lg">
                    <CheckSquare size={20} className="text-green-600 mr-2" />
                    <span className="text-green-800">公開透明程序</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* 左側目錄 */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-md p-4 sticky top-20">
                  <h3 className="font-bold text-lg mb-4">章程目錄</h3>
                  <div className="space-y-4">
                    {tocItems.map((chapter) => (
                      <div key={chapter.id}>
                        <button
                          className={`w-full text-left font-medium p-2 rounded-md transition-colors ${
                            activeTocItem === chapter.id 
                              ? 'bg-blue-100 text-blue-700' 
                              : 'hover:bg-gray-100'
                          }`}
                          onClick={() => handleTocClick(chapter.id)}
                        >
                          {chapter.title}
                        </button>
                        
                        {activeTocItem === chapter.id && (
                          <ul className="pl-4 mt-2 space-y-1">
                            {chapter.items.map((item, index) => (
                              <li key={index} className="text-sm">
                                <button 
                                  className="w-full text-left p-1.5 rounded hover:bg-gray-100 text-gray-700"
                                >
                                  {item}
                                </button>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* 右側內容 */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-xl">章程內容</h3>
                    <Button variant="ghost" size="sm" className="flex items-center gap-1">
                      <Copy size={16} /> 複製全文
                    </Button>
                  </div>
                  
                  {renderCharterContent()}
                  
                  {/* 條文注釋或說明（只在有選擇章節時顯示） */}
                  {charterContent[activeTocItem] && (
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <h4 className="font-bold text-lg mb-4">條文說明</h4>
                      
                      <div className="bg-yellow-50 rounded-lg p-4 mb-4">
                        <div className="flex">
                          <AlertTriangle size={20} className="text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="font-medium text-yellow-800 mb-1">重要提醒</h3>
                            <p className="text-yellow-700 text-sm">
                              本章程內容為最新版本，但仍在實施初期，部分機制可能需要根據實際運作情況進行調整。
                              如對條文有疑義或建議，請聯繫學生會章程委員會。
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4 text-gray-700">
                        <p>
                          <strong>立法目的：</strong> 本章節旨在明確規定會議的召開方式、出席人數、議事程序等，
                          確保學生會各項會議的正當性與有效性。特別是學權擴大會議與課程討論會議，作為學生參與校務的重要管道，
                          其程序與規範尤為重要。
                        </p>
                        <p>
                          <strong>參考依據：</strong> 本章條文參考了清華大學學生自治團體設置辦法、大學法相關規定，
                          以及其他大學學生會的實踐經驗，在符合法規要求的前提下，兼顧本所特色與實際需求。
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* 修訂歷程部分 */}
      {activeSection === 'history' && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold mb-6">章程修訂歷程</h2>
                
                <div className="mb-6">
                  <p className="text-gray-700">
                    學生會章程的制定與修訂過程遵循嚴謹的程序，確保每一版本都經過充分討論與合法通過。
                    以下是章程的修訂歷程，記錄了每個版本的變更內容與原因。
                  </p>
                </div>
                
                <div className="relative pb-12">
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                  
                  {charterVersions.map((version, index) => (
                    <div key={index} className="relative mb-8 last:mb-0">
                      <div className="flex">
                        <div className="absolute left-6 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-blue-500 z-10 flex items-center justify-center">
                          {version.status === "正式版" ? (
                            <CheckSquare size={20} className="text-blue-600" />
                          ) : (
                            <FileText size={20} className="text-blue-600" />
                          )}
                        </div>
                        
                        <div className="ml-16">
                          <div className="bg-white rounded-xl border border-gray-200 p-4">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="font-bold text-lg">版本 {version.version}</h3>
                                <div className="text-sm text-gray-500">{version.date}</div>
                              </div>
                              <Badge 
                                color={version.status === "正式版" ? "green" : "blue"} 
                                variant="subtle"
                              >
                                {version.status}
                              </Badge>
                            </div>
                            
                            <p className="text-gray-700 mb-3">{version.description}</p>
                            
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm" className="flex items-center gap-1">
                                <FileSearch size={16} /> 查看內容
                              </Button>
                              {index > 0 && (
                                <Button variant="outline" size="sm" className="flex items-center gap-1">
                                  <History size={16} /> 比較差異
                                </Button>
                              )}
                            </div>
                          </div>
                          
                          {/* 顯示主要變更內容（只在非第一個版本顯示） */}
                          {index > 0 && (
                            <div className="mt-4 ml-4 text-sm text-gray-600">
                              <h4 className="font-medium mb-2">主要變更：</h4>
                              <ul className="list-disc pl-5 space-y-1">
                                <li>修改了第X條關於XXX的規定</li>
                                <li>新增了第Y條關於YYY的規定</li>
                                <li>調整了第Z條的表述方式，使其更加明確</li>
                              </ul>
                            </div>
                          )}
                          
                          {/* 顯示參與修訂的人員與程序（只在部分版本顯示） */}
                          {(index === 1 || index === charterVersions.length - 1) && (
                            <div className="mt-4 ml-4">
                              <h4 className="font-medium text-sm mb-2 text-gray-600">修訂程序：</h4>
                              <div className="bg-gray-50 p-3 rounded-lg text-sm">
                                <p>1. 籌備小組提出修訂建議</p>
                                <p>2. 公開徵求意見（為期2週）</p>
                                <p>3. 法律專家審查</p>
                                <p>4. 學生會幹部會議討論通過</p>
                                {version.status === "正式版" && <p>5. 學生大會表決通過</p>}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-lg text-blue-800 mb-3">章程修訂提案流程</h3>
                
                <div className="text-blue-700 space-y-4">
                  <p>
                    如果你對現行章程有修訂建議，可以按照以下流程提出：
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-3">
                      <div className="font-medium mb-1">1. 提出建議</div>
                      <p className="text-sm">填寫線上表單，詳細說明你的修訂建議及理由</p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-3">
                      <div className="font-medium mb-1">2. 初步審核</div>
                      <p className="text-sm">章程委員會將審核提案的合理性與可行性</p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-3">
                      <div className="font-medium mb-1">3. 公開討論</div>
                      <p className="text-sm">提案將公開讓全體會員討論並收集意見</p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-3">
                      <div className="font-medium mb-1">4. 會議表決</div>
                      <p className="text-sm">符合條件的提案將提交學生大會表決</p>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <Button className="bg-blue-600">
                      提交修訂建議
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* 法律解釋部分 */}
      {activeSection === 'legal' && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold mb-6">法律解釋與說明</h2>
                
                <div className="mb-8">
                  <p className="text-gray-700">
                    本頁面提供學生會章程相關的法律解釋與說明，幫助會員更好地理解章程的法律基礎、
                    適用範圍與限制。以下解釋均經過法律專業人士審核，確保其準確性。
                  </p>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">學生會的法律地位</h3>
                    
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <p className="text-gray-700">
                        學生會作為學生自治組織，其法律地位主要源自以下法律依據：
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-bold mb-2">大學法第33條</h4>
                        <p className="text-gray-700 text-sm">
                          「大學為增進教育效果，應由經選舉產生之學生代表出席與其學業、生活及訂定獎懲有關規章之會議。
                          大學應輔導學生成立由全校學生選舉產生之學生會及其他相關自治組織，並出席與其學業、生活及訂定獎懲有關規章之會議；
                          學生為前項學生會當然會員，學生會得向會員收取會費；學校應依學生會請求代收會費。」
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-bold mb-2">司法院釋字第684號解釋</h4>
                        <p className="text-gray-700 text-sm">
                          「大學自治之意涵，包含大學對於教學、研究與學習之事項，享有自治權利；
                          而大學教學、研究與學習之內容，亦受學術自由之保障，不受法律以外之其他公權力之干涉。」
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-bold mb-2">清華大學學生自治團體設置辦法</h4>
                        <p className="text-gray-700 text-sm">
                          「本校學生自治團體為本校全體學生之一般性自治組織，處理全校學生共同事務」、
                          「學生自治團體經學校核可後，得向會員收取會費，並得請求學校代收會費」
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4">學生會決議的效力範圍</h3>
                    
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <div className="text-gray-700 space-y-2">
                        <p>
                          學生會各類會議的決議具有不同的效力範圍，主要可分為以下幾類：
                        </p>
                        
                        <ol className="list-decimal pl-5 space-y-1">
                          <li>
                            <strong>內部效力</strong>：學生會內部運作的規範，對學生會幹部與會員具有約束力。
                          </li>
                          <li>
                            <strong>建議效力</strong>：對系所或學校提出的建議，需經過學校相關會議通過後才具有實質效力。
                          </li>
                          <li>
                            <strong>合作效力</strong>：與系所、學校或外部組織達成的合作協議，依協議內容確定效力範圍。
                          </li>
                        </ol>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-blue-50 rounded-lg p-3">
                        <h4 className="font-medium text-blue-800 mb-2">學生大會決議</h4>
                        <p className="text-sm text-blue-700">
                          學生大會作為最高決策機構，其決議對學生會內部具有最高約束力，對外則為學生會的正式立場。
                        </p>
                      </div>
                      
                      <div className="bg-purple-50 rounded-lg p-3">
                        <h4 className="font-medium text-purple-800 mb-2">學權擴大會議決議</h4>
                        <p className="text-sm text-purple-700">
                          學權擴大會議的決議通常是與系所協商的基礎，具有代表性但不必然具有約束系所的法律效力。
                        </p>
                      </div>
                      
                      <div className="bg-green-50 rounded-lg p-3">
                        <h4 className="font-medium text-green-800 mb-2">課程討論會議決議</h4>
                        <p className="text-sm text-green-700">
                          課程討論會議的決議是向系所課程委員會提出的建議，需經課程委員會採納後納入正式課程規劃。
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4">法律解釋權限</h3>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-gray-700">
                        <p className="mb-3">
                          學生會章程的解釋權限依第二十六條規定，由章程委員會負責。章程委員會的組成與運作方式如下：
                        </p>
                        
                        <ul className="list-disc pl-5 space-y-1">
                          <li>由學生會會長提名，經幹部會議通過，任命5-7名委員</li>
                          <li>委員應包含具法律背景的學生代表至少3名</li>
                          <li>章程委員會定期審查章程適用情況，處理解釋申請，提出修訂建議</li>
                          <li>解釋應以書面形式公布，具有準司法效力</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-xl mb-4">法律諮詢服務</h3>
                
                <p className="opacity-90 mb-6">
                  如果你對學生會章程有法律上的疑問，或需要就特定條文的適用尋求解釋，
                  可以向章程委員會提出諮詢申請。我們將安排專業人士為你解答。
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-blue-600 hover:bg-blue-50">
                    提交諮詢申請
                  </Button>
                  <Button className="bg-blue-700 bg-opacity-40 hover:bg-opacity-60">
                    查看常見解釋
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* 問答集部分 */}
      {activeSection === 'qa' && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold mb-6">章程問答集</h2>
                
                <div className="mb-8">
                  <p className="text-gray-700">
                    以下是關於學生會章程常見問題的解答，由專業人士提供。如果你的問題未在此列出，
                    可以使用頁面底部的表單提交新問題。
                  </p>
                </div>
                
                <div className="space-y-6">
                  {legalQA.map((qa, index) => (
                    <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                      <div className="flex items-start">
                        <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">
                          Q
                        </div>
                        <div className="ml-4">
                          <h3 className="font-bold text-lg">{qa.question}</h3>
                        </div>
                      </div>
                      
                      <div className="flex items-start mt-4">
                        <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">
                          A
                        </div>
                        <div className="ml-4">
                          <p className="text-gray-700 mb-2">{qa.answer}</p>
                          <div className="flex items-center text-sm text-gray-500">
                            <span className="font-medium">回答者：{qa.expert}</span>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="ml-4 flex items-center gap-1 text-blue-600"
                            >
                              <ThumbsUp size={14} /> 有幫助
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="font-bold text-xl mb-6">提交新問題</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      你的問題
                    </label>
                    <textarea 
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" 
                      rows="4"
                      placeholder="請詳細描述你對章程的疑問..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      相關章節 (選填)
                    </label>
                    <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50">
                      <option value="">請選擇...</option>
                      {tocItems.map((item) => (
                        <option key={item.id} value={item.id}>{item.title}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button>提交問題</Button>
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

export default CharterPage;