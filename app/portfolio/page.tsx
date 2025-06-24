import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio projects by Alex Müller – Full-stack web developer.",
  openGraph: {
    title: "Portfolio | blueport",
    description: "Portfolio projects by Alex Müller – Full-stack web developer."
  }
};

const projects = [
  {
    title: "Modern Web Application",
    desc: "A scalable, responsive web app built with React and Node.js. Integrates real-time features and a sleek UI.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    alt: "Modern Web App Screenshot",
    link: "#"
  },
  {
    title: "E-commerce Platform",
    desc: "A full-featured e-commerce site with secure payments, product catalogs, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    alt: "E-commerce Platform Screenshot",
    link: "#"
  },
  {
    title: "Personal Portfolio Website",
    desc: "My own responsive portfolio website, featuring animations, dark mode, and easy content management.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    alt: "Portfolio Website Screenshot",
    link: "#"
  },
  {
    title: "Analytics Dashboard",
    desc: "A real-time analytics dashboard for monitoring KPIs, with interactive charts and custom reports.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    alt: "Dashboard UI Screenshot",
    link: "#"
  }
];

export default function PortfolioPage() {
  return (
    <main className="page-section" aria-label="Portfolio">
      <div className="minimal-nav">
        <span>Portfolio</span>
      </div>
      <section className="feature-grid">
        {projects.map((project, idx) => (
          <article className="feature-card" key={project.title}>
            <Image
              src={project.image}
              alt={project.alt}
              className="feature-img"
              width={600}
              height={180}
              style={{ width: "100%", height: "180px", objectFit: "cover" }}
              sizes="(max-width: 600px) 100vw, 600px"
              priority={idx === 0}
            />
            <div className="feature-card-content">
              <div>
                <h3 className="feature-title">{project.title}</h3>
                <p className="feature-desc">{project.desc}</p>
              </div>
              <a href={project.link} className="feature-link" tabIndex={0}>
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
