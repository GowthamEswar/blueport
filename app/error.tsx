"use client";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Optionally log error
  }, [error]);
  return (
    <div style={{
      minHeight: "60vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Inter, Arial, sans-serif",
      color: "#b91c1c"
    }}>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Something went wrong</h2>
      <pre style={{ background: "#fee2e2", color: "#b91c1c", padding: "1rem", borderRadius: "0.5rem" }}>{error.message}</pre>
      <button
        style={{
          marginTop: "2rem",
          background: "var(--primary)",
          color: "var(--text-on-primary)",
          border: "none",
          borderRadius: "0.375rem",
          padding: "0.75rem 1.25rem",
          fontSize: "1.05rem",
          fontFamily: "Inter, Arial, sans-serif",
          fontWeight: 500,
          cursor: "pointer"
        }}
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
