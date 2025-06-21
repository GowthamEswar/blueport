// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@components/Navigation';

export const metadata: Metadata = {
  title: {
    default: 'blueport – Portfolio',
    template: '%s – blueport',
  },
  description: 'Professional portfolio of Alex Müller – full-stack web developer.',
  keywords: [
    'portfolio',
    'web developer',
    'React',
    'Node.js',
    'Alex Müller',
    'projects',
    'contact',
    'about',
    'blueport'
  ],
  authors: [{ name: 'Alex Müller' }],
  creator: 'Alex Müller',
  openGraph: {
    title: 'blueport – Portfolio',
    description: 'Professional portfolio of Alex Müller – full-stack web developer.',
    url: 'https://blueport.vercel.app',
    siteName: 'blueport',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
        width: 600,
        height: 400,
        alt: 'Portfolio Cover',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'blueport – Portfolio',
    description: 'Professional portfolio of Alex Müller – full-stack web developer.'
  },
  themeColor: '#2563eb',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
