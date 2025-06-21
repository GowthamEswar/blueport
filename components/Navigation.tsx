// components/Navigation.tsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const navLinks = [
  { href: '/', label: 'Home', slug: '' },
  { href: '/portfolio', label: 'Portfolio', slug: 'portfolio' },
  { href: '/about', label: 'About', slug: 'about' },
  { href: '/contact', label: 'Contact', slug: 'contact' },
];

export default function Navigation() {
  const pathname = usePathname();
  return (
    <nav className="nav" aria-label="Main Navigation">
      <ul>
        {navLinks.map(({ href, label, slug }) => {
          // Home is active on '/'; others on '/slug'
          const isActive =
            (slug === '' && pathname === '/') ||
            (slug && pathname.startsWith(`/${slug}`));
          return (
            <li key={href}>
              <Link
                href={href}
                className={isActive ? 'active' : ''}
                aria-current={isActive ? 'page' : undefined}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
