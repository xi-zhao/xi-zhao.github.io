import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '赵茜｜AI Agent 架构师与量子计算博士',
  description:
    '赵茜的个人主页：企业级 AI Agent 架构、科研智能体与量子计算项目。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
