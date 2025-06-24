import Link from "next/link";

export default function HomePage() {
  return (
    <main className="page-section" aria-label="Home">
      <section className="hero-centered">
        <div className="hero-header">Welcome to My Professional Portfolio</div>
        <div className="hero-section-description">
          Discover my work, skills, and story.<br />
          I’m a passionate web developer delivering modern, impactful digital solutions.<br />
          Explore my portfolio and let’s connect.
        </div>
        <Link href="/portfolio" className="hero-cta">
          View Portfolio
        </Link>
      </section>
      <footer className="simple-footer">
        &copy; 2024 <strong>app</strong>. All rights reserved.
      </footer>
    </main>
  );
}
