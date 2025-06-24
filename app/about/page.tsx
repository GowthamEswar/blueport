import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: "About Alex Müller – Full-stack web developer portfolio.",
  openGraph: {
    title: "About | blueport",
    description: "About Alex Müller – Full-stack web developer portfolio."
  }
};

export default function AboutPage() {
  return (
    <main className="page-section" aria-label="About">
      <div className="minimal-nav">
        <span>About</span>
      </div>
      <section className="single-column">
        <section className="content-with-image">
          <Image
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Portrait of developer"
            className="content-image"
            width={220}
            height={220}
            priority
          />
          <div>
            <div className="content-title">Hi, I'm Alex Müller</div>
            <div className="content-text">
              I’m a full-stack web developer with a passion for building clean, accessible, and performant digital experiences.<br /><br />
              With over 5 years of experience in the industry, I’ve worked with startups, agencies, and established brands to deliver solutions that blend functionality and design.<br /><br />
              My expertise spans JavaScript, React, Node.js, and modern web standards. I believe in lifelong learning, sharp attention to detail, and the value of great user experience.
            </div>
          </div>
        </section>
      </section>
      <footer className="simple-footer">
        &copy; 2024 <strong>app</strong>. All rights reserved.
      </footer>
    </main>
  );
}
