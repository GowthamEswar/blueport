import type { Metadata } from "next";
import ContactForm from "@components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Alex Müller – Full-stack web developer portfolio.",
  openGraph: {
    title: "Contact | blueport",
    description: "Contact Alex Müller – Full-stack web developer portfolio."
  }
};

export default function ContactPage() {
  return (
    <main className="page-section" aria-label="Contact">
      <div className="minimal-nav">
        <span>Contact</span>
      </div>
      <section className="single-column">
        <section className="hero-section">
          <div className="hero-section-title">Let’s Connect</div>
          <div className="hero-section-desc">
            I’m open to new collaborations, challenges, and opportunities.<br />
            Fill out the form below or reach out on LinkedIn.
          </div>
        </section>
        <ContactForm />
      </section>
      <footer className="simple-footer">
        &copy; 2024 <strong>app</strong>. All rights reserved.
      </footer>
    </main>
  );
}
