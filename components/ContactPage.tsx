// components/ContactPage.tsx
'use client';
import React, { useRef, useState } from 'react';

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function validateEmail(email: string) {
    return /^[^@]+@[^@]+\.[^@]+$/.test(email);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(null);
    setError(null);
    setLoading(true);
    const form = formRef.current;
    if (!form) return;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim();
    let valid = true;
    if (name.length < 2) valid = false;
    if (!validateEmail(email)) valid = false;
    if (message.length < 2) valid = false;
    if (!valid) {
      setError('Please fill out all fields correctly.');
      setLoading(false);
      return;
    }
    // Simulate async submission
    setTimeout(() => {
      setSuccess('Thank you! Your message was sent.');
      form.reset();
      setLoading(false);
      setTimeout(() => setSuccess(null), 3500);
    }, 900);
  };

  return (
    <main aria-label="Contact">
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
        <form
          className="contact-form"
          ref={formRef}
          autoComplete="off"
          noValidate
          onSubmit={handleSubmit}
        >
          {success && (
            <div className="form-success" style={{ display: 'block' }}>{success}</div>
          )}
          {error && (
            <div className="form-success" style={{ display: 'block', background: '#fee2e2', color: '#b91c1c', border: '1px solid #b91c1c' }}>{error}</div>
          )}
          <div>
            <label htmlFor="name">Name</label>
            <input name="name" id="name" type="text" required minLength={2} maxLength={50} placeholder="Your Name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input name="email" id="email" type="email" required maxLength={80} placeholder="you@email.com" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows={4} required maxLength={500} placeholder="Your message"></textarea>
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Sending…' : 'Send Message'}
          </button>
        </form>
      </section>
      <footer className="simple-footer">
        &copy; 2024 <strong>app</strong>. All rights reserved.
      </footer>
    </main>
  );
}
