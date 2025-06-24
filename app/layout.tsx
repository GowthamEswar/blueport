import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@components/Navigation";

export const metadata: Metadata = {
  title: {
    default: "blueport – Portfolio",
    template: "%s | blueport"
  },
  description: "Professional portfolio of Alex Müller – Full-stack web developer.",
  keywords: [
    "portfolio",
    "web developer",
    "react",
    "nextjs",
    "full-stack",
    "Alex Müller"
  ],
  creator: "Alex Müller",
  openGraph: {
    title: "blueport – Portfolio",
    description: "Professional portfolio of Alex Müller – Full-stack web developer.",
    url: "https://blueport.vercel.app/",
    siteName: "blueport",
    type: "website"
  },
  metadataBase: new URL("https://blueport.vercel.app/")
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Montserrat:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
