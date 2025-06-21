// components/PortfolioPage.tsx
import Image from 'next/image';

const projects = [
  {
    title: 'Modern Web Application',
    desc: 'A scalable, responsive web app built with React and Node.js. Integrates real-time features and a sleek UI.',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    alt: 'Modern Web App Screenshot',
    link: '#',
  },
  {
    title: 'E-commerce Platform',
    desc: 'A full-featured e-commerce site with secure payments, product catalogs, and admin dashboard.',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    alt: 'E-commerce Platform Screenshot',
    link: '#',
  },
  {
    title: 'Personal Portfolio Website',
    desc: 'My own responsive portfolio website, featuring animations, dark mode, and easy content management.',
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    alt: 'Portfolio Website Screenshot',
    link: '#',
  },
  {
    title: 'Analytics Dashboard',
    desc: 'A real-time analytics dashboard for monitoring KPIs, with interactive charts and custom reports.',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    alt: 'Dashboard UI Screenshot',
    link: '#',
  },
];

export default function PortfolioPage() {
  return (
    <main aria-label="Portfolio">
      <div className="minimal-nav">
        <span>Portfolio</span>
      </div>
      <section className="feature-grid">
        {projects.map((proj, idx) => (
          <article className="feature-card" key={idx}>
            <Image
              src={proj.img}
              alt={proj.alt}
              width={600}
              height={180}
              className="feature-img"
              style={{ width: '100%', height: '180px', objectFit: 'cover' }}
              priority={idx === 0}
            />
            <div className="feature-card-content">
              <div>
                <h3 className="feature-title">{proj.title}</h3>
                <p className="feature-desc">{proj.desc}</p>
              </div>
              <a href={proj.link} className="feature-link" tabIndex={0}>
                View Project
              </a>
            </div>
          </article>
        ))}
      </section>
      <footer className="simple-footer">
        &copy; 2024 <strong>app</strong>. All rights reserved.
      </footer>
    </main>
  );
}
