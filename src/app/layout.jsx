// src/app/layout.jsx
import './globals.css';

export const metadata = {
  title: '清大科法所學生資源總覽',
  description: '獎學金×實習×助學×補助：打造你的專屬學習旅程',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW">
      <body>
        {children}
      </body>
    </html>
  );
}