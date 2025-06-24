'use client';
import { useRef, useState } from 'react';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setSubmitting(true);
    const form = formRef.current;
    if (!form) return;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim();
    let valid = true;
    if (name.length < 2) valid = false;
    if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) valid = false;
    if (message.length < 2) valid = false;
    if (!valid) {
      setError('Please fill out all fields correctly.');
      setSubmitting(false);
      return;
    }
    setTimeout(() => {
      setSuccess('Thank you! Your message was sent.');
      setSubmitting(false);
      form.reset();
      setTimeout(() => setSuccess(null), 3500);
    }, 800);
  };

  return (
    <form
      className="contact-form"
      ref={formRef}
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit}
      aria-label="Contact form"
    >
      {success && (
        <div className="form-success" style={{ display: 'block', background: 'var(--primary-light)', color: 'var(--primary-dark)', border: '1px solid var(--primary)' }}>{success}</div>
      )}
      {error && (
        <div className="form-success" style={{ display: 'block', background: '#fee2e2', color: '#b91c1c', border: '1px solid #b91c1c' }}>{error}</div>
      )}
      <div>
        <label htmlFor="name">Name</label>
        <input name="name" id="name" type="text" required minLength={2} maxLength={50} placeholder="Your Name" disabled={submitting} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input name="email" id="email" type="email" required maxLength={80} placeholder="you@email.com" disabled={submitting} />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows={4} required maxLength={500} placeholder="Your message" disabled={submitting}></textarea>
      </div>
      <button type="submit" disabled={submitting}>{submitting ? 'Sending…' : 'Send Message'}</button>
    </form>
  );
}
