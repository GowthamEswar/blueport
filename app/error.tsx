// app/error.tsx
'use client';
import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Optionally log error
    // console.error(error);
  }, [error]);

  return (
    <div style={{
      display: 'flex',
      minHeight: '60vh',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      fontFamily: 'Inter, Arial, sans-serif',
      color: 'var(--primary-dark)'
    }}>
      <h2 style={{ fontWeight: 700, fontSize: '1.5rem' }}>Something went wrong!</h2>
      <p style={{ margin: '1rem 0' }}>{error.message}</p>
      <button
        style={{
          background: 'var(--primary)',
          color: 'var(--text-on-primary)',
          border: 'none',
          borderRadius: '0.375rem',
          padding: '0.75rem 1.25rem',
          fontSize: '1.05rem',
          fontFamily: 'Inter, Arial, sans-serif',
          fontWeight: 500,
          cursor: 'pointer',
          marginTop: '0.5rem',
        }}
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
