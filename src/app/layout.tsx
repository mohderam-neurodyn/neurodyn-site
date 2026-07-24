import { Inter } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "NeuroDyn IT Solutions | Premium Web & App Development",
  description: "NeuroDyn IT Solutions provides cutting-edge web development, mobile apps, data analytics, and custom software for businesses worldwide.",
  keywords: "IT solutions, web development, mobile apps, data analytics, custom software, IT consulting, NeuroDyn, Lucknow IT company",
  authors: [{ name: "NeuroDyn IT Solutions" }],
  openGraph: {
    title: "NeuroDyn IT Solutions | Innovate. Integrate. Elevate.",
    description: "Smart Solutions. Stronger Future. Premium IT services for your business growth.",
    type: "website",
    url: "https://neurodyn.in",
    siteName: "NeuroDyn IT Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "NeuroDyn IT Solutions | Premium Web & App Development",
    description: "Smart Solutions. Stronger Future. Premium IT services for your business growth.",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ITUtility",
    "name": "NeuroDyn IT Solutions",
    "url": "https://neurodyn.in",
    "logo": "https://neurodyn.in/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lucknow",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9935232167",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://www.linkedin.com/company/neurodyn",
      "https://twitter.com/neurodyn"
    ]
  };

  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
