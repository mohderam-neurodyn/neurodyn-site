import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NeuroDyn IT Solutions | Innovate. Integrate. Elevate.",
  description: "Smart Solutions. Stronger Future. Premium IT services including web development, mobile apps, AI chatbots, data analytics, and custom software solutions.",
  keywords: "IT solutions, web development, mobile apps, AI chatbot, data analytics, custom software, IT consulting, NeuroDyn",
  authors: [{ name: "NeuroDyn IT Solutions" }],
  openGraph: {
    title: "NeuroDyn IT Solutions | Innovate. Integrate. Elevate.",
    description: "Smart Solutions. Stronger Future. Premium IT services for your business growth.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

