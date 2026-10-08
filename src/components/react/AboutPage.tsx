"use client";

import React from "react";
import Navigation from "@/components/Navigation";
import Logo from "@/components/Logo";
import {
  Plane,
  Smartphone,
  Cpu,
  ShieldCheck,
  Award,
  Zap,
  Target,
  Eye,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

export default function AboutPage() {
  const brand = {
    name: "NeuroDyn Tech Solutions",
    tagline: "Innovate. Integrate. Elevate.",
    phone: "9369479090",
    email: "info@neurodyn.in",
  };

  const coreValues = [
    {
      icon: <Plane className="h-6 w-6" />,
      title: "Domain Precision in Travel",
      description:
        "Deep architectural mastery of travel distribution protocols (Amadeus, Sabre, Hotelbeds), multi-currency markups, and high-concurrency booking flows.",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile-First Craftsmanship",
      description:
        "Engineering fluid, high-converting iOS and Android companion apps that delight travelers with instant offline vouchers and real-time gate updates.",
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Architectural Rigor & AI",
      description:
        "Building resilient backend foundations using Postgres, Redis in-memory concurrency locks, and automated AI workflows built for zero-downtime scale.",
    },
  ];

  const strengths = [
    "Proprietary Travel Booking Engine Architecture (Flights, Hotels, Tours)",
    "Bespoke White-Label Travel Mobile Apps for iOS & Android",
    "Real-Time Concurrency State Management with Redis & Postgres",
    "Automated Enterprise ETL Pipelines replacing manual spreadsheets",
    "Turnkey Delivery in Days, Not Months with strict engineering standards",
    "Direct Senior Engineering Consultation & Post-Launch Support",
  ];

  function handleWhatsAppClick() {
    window.open(
      "https://wa.me/919369479090?text=Hi%20NeuroDyn,%20I'm%20interested%20in%20learning%20more%20about%20your%20company%20and%20tech%20solutions",
      "_blank"
    );
  }

  return (
    <div className="min-h-screen bg-[#120a06] text-[#fcf8ee] selection:bg-[#d4af37]/30 selection:text-[#fae8b2] overflow-x-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[650px] h-[650px] bg-gradient-to-br from-[#d4af37]/10 via-[#996515]/05 to-transparent rounded-full blur-[140px]" />
        <div className="absolute top-[40%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-[#996515]/10 via-[#422210]/15 to-transparent rounded-full blur-[160px]" />
      </div>

      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 border-b border-[#d4af37]/15">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#24140c] border border-[#d4af37]/30 text-[#fae8b2] font-mono text-[11px] uppercase tracking-widest">
              <Sparkles size={13} className="text-[#d4af37]" />
              Engineering Excellence
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-[#fdfbf7] leading-tight">
              About <span className="text-gradient-gold">NeuroDyn</span>
            </h1>
            <p className="text-lg md:text-xl text-[#c5b29c] font-light leading-relaxed">
              We are specialized software architects engineering custom travel booking engines, travel business mobile applications, and high-concurrency AI systems.
            </p>
          </div>
        </div>
      </section>

      {/* Story & Introduction */}
      <section className="py-24 border-b border-[#d4af37]/15">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#d4af37] block">
                OUR ENGINEERING PHILOSOPHY
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-[#fdfbf7]">
                Bridging commercial ambition with robust, unshakeable software.
              </h2>
              <p className="text-sm md:text-base text-[#c5b29c] leading-relaxed font-light">
                NeuroDyn was founded to solve a critical industry bottleneck: businesses are forced to choose between rigid, royalty-heavy legacy software or fragile freelance prototypes that break under production traffic.
              </p>
              <p className="text-sm md:text-base text-[#c5b29c] leading-relaxed font-light">
                We take a different approach. By combining deep domain knowledge in travel distribution (GDS APIs, airline ticketing, hotel aggregation) with modern cloud architecture (Next.js, Postgres, Redis, and custom AI agents), we deliver bespoke software platforms that our clients own outright and scale indefinitely.
              </p>

              {/* Numerical Highlights */}
              <div className="grid grid-cols-3 gap-6 pt-4 border-t border-[#d4af37]/15">
                <div>
                  <div className="text-3xl font-serif text-[#fae8b2] font-semibold">50+</div>
                  <div className="text-[11px] font-mono tracking-wider uppercase text-[#a99583] mt-1">Platforms Shipped</div>
                </div>
                <div>
                  <div className="text-3xl font-serif text-[#fae8b2] font-semibold">&lt; 350ms</div>
                  <div className="text-[11px] font-mono tracking-wider uppercase text-[#a99583] mt-1">Engine Response</div>
                </div>
                <div>
                  <div className="text-3xl font-serif text-[#fae8b2] font-semibold">100%</div>
                  <div className="text-[11px] font-mono tracking-wider uppercase text-[#a99583] mt-1">Client IP Ownership</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-[#d4af37]/30 bg-gradient-to-br from-[#1c100a] to-[#120a06] p-4 relative overflow-hidden shadow-2xl">
                <div className="rounded-xl overflow-hidden aspect-[4/3] border border-[#d4af37]/20 relative">
                  <img
                    src="/images/ai-data-gold.jpg"
                    alt="NeuroDyn Architectural Rigor"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120a06] via-[#120a06]/30 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#180e08]/90 border border-[#d4af37]/35 backdrop-blur-md">
                    <p className="text-xs text-[#fae8b2] font-serif italic text-center">
                      "Transforming complex industry operations into elegant, revenue-generating software."
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 border-b border-[#d4af37]/15 bg-[#160d08]/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="rounded-2xl border border-[#d4af37]/25 bg-gradient-to-br from-[#1c100a] to-[#120a06] p-8 md:p-10 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-[#2b170e] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] mb-6">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-serif text-[#fdfbf7] mb-3">Our Mission</h3>
              <p className="text-sm text-[#c5b29c] leading-relaxed font-light">
                To equip travel enterprises, high-growth startups, and modern businesses with custom, high-velocity digital infrastructure. We eliminate dependency on bloated third-party aggregators and empower our partners with proprietary travel engines, apps, and automated workflows.
              </p>
            </div>

            <div className="rounded-2xl border border-[#d4af37]/25 bg-gradient-to-br from-[#1c100a] to-[#120a06] p-8 md:p-10 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-[#2b170e] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] mb-6">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-serif text-[#fdfbf7] mb-3">Our Vision</h3>
              <p className="text-sm text-[#c5b29c] leading-relaxed font-light">
                To stand as the premier technology powerhouse for travel innovation, custom mobile platforms, and intelligent automation across global markets, recognized for unwavering technical elegance, speed of execution, and measurable commercial return.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 border-b border-[#d4af37]/15">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#d4af37] block">
              FOUNDATIONAL PILLARS
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-[#fdfbf7]">
              The Principles That Guide Our Craft
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((val) => (
              <div
                key={val.title}
                className="rounded-2xl border border-[#d4af37]/25 bg-gradient-to-br from-[#1c100a] to-[#120a06] p-8 text-center flex flex-col items-center shadow-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-[#2e190e] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] mb-5">
                  {val.icon}
                </div>
                <h3 className="text-lg font-serif font-semibold text-[#fdfbf7] mb-2">{val.title}</h3>
                <p className="text-xs text-[#bda692] leading-relaxed font-light">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Strengths Checklist */}
      <section className="py-24 border-b border-[#d4af37]/15 bg-[#160d08]/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#d4af37] block">
              UNCOMPROMISING ADVANTAGE
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-[#fdfbf7]">
              Why Businesses Choose NeuroDyn
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strengths.map((str) => (
              <div
                key={str}
                className="p-5 rounded-xl border border-[#d4af37]/20 bg-[#1c100a]/80 flex items-start gap-3.5"
              >
                <CheckCircle2 size={18} className="text-[#d4af37] flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-[#ebdcc7] leading-relaxed">{str}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-2xl border border-[#d4af37]/30 bg-gradient-to-br from-[#24140c] via-[#1a0e08] to-[#120a06] p-10 md:p-14 text-center relative overflow-hidden shadow-2xl">
            <div className="max-w-2xl mx-auto space-y-4">
              <h2 className="text-3xl md:text-4xl font-serif text-[#fdfbf7]">
                Ready to partner with NeuroDyn?
              </h2>
              <p className="text-sm md:text-base text-[#c5b29c] font-light">
                Connect with our lead architects to walk through your specifications, review live platform demos, or plan your next development sprint.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-7 py-3.5 bg-gradient-to-r from-[#d4af37] via-[#f5d77f] to-[#c59b27] text-[#120a06] font-bold text-sm rounded-lg transition-all duration-300 hover:brightness-110 shadow-lg"
                >
                  Schedule Initial Consultation
                </a>
                <button
                  onClick={handleWhatsAppClick}
                  className="px-7 py-3.5 border border-[#d4af37]/40 bg-[#1c100a] hover:bg-[#28160e] text-[#fae8b2] font-semibold text-sm rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle size={16} className="text-[#d4af37]" />
                  Chat on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#d4af37]/15 py-12 bg-[#0e0704]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Logo showTagline={true} />
          <div className="text-xs font-mono text-[#8c7866]">
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleWhatsAppClick}
          className="w-12 h-12 bg-gradient-to-br from-[#2a170e] to-[#170c07] border border-[#d4af37]/60 hover:border-[#d4af37] text-[#fae8b2] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.8)] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={20} className="text-[#d4af37]" />
        </button>
      </div>
    </div>
  );
}
