// src/app/page.jsx
import NTHULawResources from './NTHULawResources';

// 頁面元數據，用於SEO優化
export const metadata = {
  title: '清大科法所學生資源總覽 | 獎學金×實習×助學×補助',
  description: '無論你是剛進入研究所的新生、還是準備畢業的二年級同學，這裡都是你不可錯過的福利寶典！清大科法所提供多元的獎勵金、助學金、工讀機會、實習管道與論文發表支持。',
  keywords: '清大科法所, 國立清華大學, 科技法律研究所, 獎學金, 實習, 助學金, 論文發表, 學生資源'
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <NTHULawResources />
    </main>
  );
}