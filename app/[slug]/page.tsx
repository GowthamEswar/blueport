// app/[slug]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PortfolioPage from '@components/PortfolioPage';
import AboutPage from '@components/AboutPage';
import ContactPage from '@components/ContactPage';

export async function generateStaticParams() {
  return [
    { slug: 'portfolio' },
    { slug: 'about' },
    { slug: 'contact' },
  ];
}

const pageMeta: Record<string, Metadata> = {
  portfolio: {
    title: 'Portfolio',
    description: 'Showcase of projects by Alex Müller.',
  },
  about: {
    title: 'About',
    description: 'About Alex Müller – full-stack web developer.',
  },
  contact: {
    title: 'Contact',
    description: 'Contact Alex Müller for new opportunities and collaborations.',
  },
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return pageMeta[params.slug] || {};
}

export default function SlugPage({ params }: { params: { slug: string } }) {
  switch (params.slug) {
    case 'portfolio':
      return <PortfolioPage />;
    case 'about':
      return <AboutPage />;
    case 'contact':
      return <ContactPage />;
    default:
      notFound();
  }
}
