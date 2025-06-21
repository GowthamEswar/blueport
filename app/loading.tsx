// app/loading.tsx
export default function Loading() {
  return (
    <div style={{
      display: 'flex',
      minHeight: '60vh',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Inter, Arial, sans-serif',
      fontSize: '1.3rem',
      color: 'var(--primary-dark)'
    }}>
      Loading…
    </div>
  );
}
