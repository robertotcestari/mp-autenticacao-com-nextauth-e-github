import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Autenticação com NextAuth.js e Next.js',
  description: 'Autenticação com NextAuth.js e Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-neutral-50 ${inter.className}`}>{children}</body>
    </html>
  );
}
