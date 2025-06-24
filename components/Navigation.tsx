"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export default function Navigation() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (navRef.current) {
      const links = navRef.current.querySelectorAll("a");
      links.forEach(link => {
        if (link.getAttribute("href") === pathname) {
          link.classList.add("active");
          link.setAttribute("aria-current", "page");
        } else {
          link.classList.remove("active");
          link.removeAttribute("aria-current");
        }
      });
    }
  }, [pathname]);

  return (
    <nav className="nav" aria-label="Main Navigation" ref={navRef}>
      <ul>
        {navLinks.map(link => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={pathname === link.href ? "active" : undefined}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
