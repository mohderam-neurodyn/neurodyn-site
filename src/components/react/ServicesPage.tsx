"use client";

import React from "react";
import Navigation from "@/components/Navigation";
import Logo from "@/components/Logo";
import {
  Plane,
  Smartphone,
  Cpu,
  BarChart3,
  Globe,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Shield,
  Layers,
  MessageCircle,
} from "lucide-react";

export default function ServicesPage() {
  const brand = {
    name: "NeuroDyn Tech Solutions",
    tagline: "Custom Travel Technology, Intelligent AI & Data Systems",
    phone: "9369479090",
    email: "info@neurodyn.in",
  };

  const services = [
    {
      icon: <Plane className="h-7 w-7" />,
      title: "Custom Travel Booking Engine (B2B & B2C)",
      image: "/images/travel-engine.jpg",
      badge: "FLAGSHIP SPECIALIZATION",
      description:
        "High-performance flight, hotel, and holiday booking engines built from the ground up. We integrate leading Global Distribution Systems (GDS) and aggregators with proprietary dynamic margin and ticketing systems.",
      features: [
        "Amadeus, Sabre, Galileo, & Hotelbeds API integrations",
        "Sub-second Redis in-memory search caching",
        "Dynamic rule-based markup engine for B2B sub-agents",
        "Automated PNR generation and e-ticket issuance",
        "Multi-currency payment gateways (Stripe, Razorpay, etc.)",
        "Corporate travel desk with credit ledger & approvals",
      ],
    },
    {
      icon: <Smartphone className="h-7 w-7" />,
      title: "Travel Business Mobile Apps (iOS & Android)",
      image: "/images/travel-mobile.jpg",
      badge: "PROPRIETARY APPS",
      description:
        "Branded, high-converting mobile applications tailored for travel agencies, tour operators, and boutique travel clubs. Drive recurring bookings with a five-star digital concierge in your customer's pocket.",
      features: [
        "Native iOS & Android performance (Flutter & React Native)",
        "Real-time flight status and gate change alerts",
        "Offline digital itinerary wallet & boarding passes",
        "Instant one-click rebooking and in-app checkout",
        "VIP concierge live chat & WhatsApp escalation",
        "Personalized push notifications for flash flight deals",
      ],
    },
    {
      icon: <Cpu className="h-7 w-7" />,
      title: "Custom AI Applications & Autonomous Agents",
      image: "/images/ai-data-gold.jpg",
      badge: "INTELLIGENT SYSTEMS",
      description:
        "Custom artificial intelligence agents that automate client scheduling, qualify high-intent inbound leads, and streamline business workflows with zero human error.",
      features: [
        "Bespoke conversational AI booking concierges",
        "Live Redis-backed appointment concurrency locks",
        "Automated lead qualification and CRM synchronization",
        "Context-aware workflow automation and document parsers",
        "Custom LLM fine-tuning on your proprietary business data",
        "Enterprise-grade data privacy and secure API gateways",
      ],
    },
    {
      icon: <BarChart3 className="h-7 w-7" />,
      title: "Enterprise Data Pipelines & Real-Time Analytics",
      image: "/images/analytics-dashboard.jpg",
      badge: "DECISION TELEMETRY",
      description:
        "End-to-end data transformation pipelines that replace error-prone manual spreadsheets with automated ETL jobs and crystal-clear executive decision dashboards.",
      features: [
        "Automated multi-source data extraction and cleaning",
        "Real-time revenue telemetry and margin analytics",
        "Interactive PowerBI, Tableau, and custom web dashboards",
        "Automated scheduled executive PDF and email reports",
        "PostgreSQL and Redis high-concurrency database modeling",
        "Predictive forecasting for demand and pricing yield",
      ],
    },
    {
      icon: <Globe className="h-7 w-7" />,
      title: "High-Performance Web Platforms & MVPs",
      image: "/images/luxury-destination.jpg",
      badge: "RAPID DELIVERY",
      description:
        "Lightning-fast, search-engine-optimized web applications delivered in days, not months. Crafted with modern full-stack architectures built to convert visitors into loyal clients.",
      features: [
        "Next.js, React, and Tailwind CSS responsive architecture",
        "Sub-second Lighthouse performance & core web vitals",
        "Enterprise search engine optimization (SEO) architecture",
        "Headless CMS integration for effortless content updates",
        "Robust authentication & role-based access management",
        "Scalable cloud deployments on Vercel, AWS, and GCP",
      ],
    },
    {
      icon: <Shield className="h-7 w-7" />,
      title: "Architecture Consulting & Cloud Optimization",
      image: "/images/salon-crm.jpg",
      badge: "STRATEGIC ADVISORY",
      description:
        "Senior architectural guidance to future-proof your digital infrastructure. We audit bottlenecks, reduce cloud hosting overhead, and strengthen platform security.",
      features: [
        "Comprehensive infrastructure and codebase audits",
        "Database query optimization and caching strategies",
        "Cloud cost reduction and serverless migration",
        "High-availability and zero-downtime failover setup",
        "Security compliance and penetration hardening",
        "Dedicated fractional CTO & technical advisory sessions",
      ],
    },
  ];

  function handleWhatsAppClick() {
    window.open(
      "https://wa.me/919369479090?text=Hi%20NeuroDyn,%20I'm%20interested%20in%20your%20custom%20travel%20engine%20and%20tech%20services",
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

      {/* Header Section */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 border-b border-[#d4af37]/15">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#24140c] border border-[#d4af37]/30 text-[#fae8b2] font-mono text-[11px] uppercase tracking-widest">
              <Sparkles size={13} className="text-[#d4af37]" />
              End-to-End Technical Engineering
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-[#fdfbf7] leading-tight">
              Our Capabilities &amp; <span className="text-gradient-gold">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-[#c5b29c] font-light leading-relaxed">
              From bespoke B2B/B2C travel engines and branded mobile apps to intelligent AI pipelines, we engineer software that generates commercial momentum.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 border-b border-[#d4af37]/15">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-[#d4af37]/25 bg-gradient-to-br from-[#1c100a] via-[#170d08] to-[#120a06] p-7 md:p-8 flex flex-col justify-between shadow-xl hover:border-[#d4af37]/50 transition-all duration-300 group"
              >
                <div>
                  {/* Service Image Preview */}
                  <div className="rounded-xl overflow-hidden aspect-[16/9] border border-[#d4af37]/20 relative mb-6">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#120a06] via-[#120a06]/30 to-transparent" />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#180e08]/90 border border-[#d4af37]/40 text-[#fae8b2] font-mono text-[10px] uppercase">
                      {service.badge}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#2b170e] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                      {service.icon}
                    </div>
                    <h2 className="text-xl md:text-2xl font-serif text-[#fdfbf7]">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-sm text-[#c5b29c] leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="font-mono text-[10px] uppercase tracking-wider text-[#d4af37] mb-2">
                      Key Deliverables &amp; Features:
                    </div>
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5">
                        <CheckCircle2 size={15} className="text-[#d4af37] flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-[#ebdcc7] leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[#d4af37]/15">
                  <a
                    href="/contact"
                    className="w-full py-3 bg-[#24140c] hover:bg-[#311a10] border border-[#d4af37]/30 hover:border-[#d4af37] text-[#fae8b2] font-semibold text-xs rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                  >
                    Inquire About This Service
                    <ArrowRight size={13} className="text-[#d4af37]" />
                  </a>
                </div>
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
              <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#d4af37] block">
                HAVE A BESPOKE REQUIREMENT?
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-[#fdfbf7]">
                Ready to engineer your custom solution?
              </h2>
              <p className="text-sm md:text-base text-[#c5b29c] font-light">
                Schedule a 15-minute briefing to discuss your technical architecture, GDS integrations, mobile app features, or project timeline.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-7 py-3.5 bg-gradient-to-r from-[#d4af37] via-[#f5d77f] to-[#c59b27] text-[#120a06] font-bold text-sm rounded-lg transition-all duration-300 hover:brightness-110 shadow-lg"
                >
                  Request Technical Proposal
                </a>
                <button
                  onClick={handleWhatsAppClick}
                  className="px-7 py-3.5 border border-[#d4af37]/40 bg-[#1c100a] hover:bg-[#28160e] text-[#fae8b2] font-semibold text-sm rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle size={16} className="text-[#d4af37]" />
                  WhatsApp Direct Inquiry
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
