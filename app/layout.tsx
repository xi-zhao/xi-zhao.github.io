import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Xi Zhao | AI Solutions Architect & Quantum Computing Researcher',
  description:
    'The personal website of Xi Zhao, an AI solutions architect and quantum computing researcher working on enterprise agents, scientific AI, and verifiable systems.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
