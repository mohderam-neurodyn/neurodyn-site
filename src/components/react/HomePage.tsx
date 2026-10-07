"use client";
import React, { useMemo } from "react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Logo from "@/components/Logo";
import {
  ArrowRight,
  Play,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

export default function NeuroDynSite() {
  const brand = useMemo(
    () => ({
      name: "NeuroDyn Tech Solutions",
      phone: "9369479090",
      email: "info@neurodyn.in",
    }),
    []
  );

  function handleContact(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = (data.get("name") as string) || "";
    const email = (data.get("email") as string) || "";
    const message = (data.get("message") as string) || "";
    const subject = encodeURIComponent(`New enquiry - ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
    window.location.href = `mailto:info@neurodyn.in?subject=${subject}&body=${body}`;
  }

  return (
    <div className="min-h-screen bg-[#08080a] text-white selection:bg-emerald-500/20 selection:text-emerald-300">
      {/* Background Ambience */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-emerald-500/[0.04] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-indigo-500/[0.03] rounded-full blur-[140px]" />
      </div>

      <Navigation />

      {/* ══════════════════════════════════════════
          01. HERO SECTION (Stratocope Architecture)
      ══════════════════════════════════════════ */}
      <section id="home" className="relative pt-36 pb-32 md:pt-44 md:pb-40 border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Injected Top Tag */}
            <div>
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-zinc-500">
                Neurodyn Intelligent Systems
              </span>
            </div>

            {/* Title Refit */}
            <h1 className="text-5xl md:text-7xl font-sans font-medium tracking-tight text-white mt-6 max-w-4xl leading-[1.08]">
              We build custom AI applications and automated data pipelines.
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl mt-6">
              Accelerate your workflows with bespoke full-stack web applications, real-time analytics pipelines, and automated CRM systems built in days—not months.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-10">
              <a
                href="https://calendly.com/neurodyn-info"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-black font-medium text-sm rounded-md transition-all duration-300 hover:bg-zinc-200 inline-flex items-center justify-center gap-2"
              >
                Book a Free 15-Min Strategy Call
                <ArrowRight size={14} />
              </a>
              <a
                href="#case-studies"
                className="px-6 py-3 border border-white/10 text-zinc-300 hover:border-white/20 hover:text-white font-medium text-sm rounded-md transition-all duration-300 inline-flex items-center justify-center"
              >
                View Live MVPs
              </a>
            </div>

            {/* Stratocope Architectural Telemetry Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 mt-16 border-t border-white/[0.06]">
              <div>
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-zinc-500 block mb-2">
                  00.1 / RAPID MVP DELIVERY
                </span>
                <div className="text-xl font-sans font-medium text-white tracking-tight">Days, not months</div>
                <p className="text-xs text-zinc-500 leading-relaxed mt-1">
                  Bespoke full-stack web MVPs built for accelerated validation and production deployment.
                </p>
              </div>

              <div>
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-zinc-500 block mb-2">
                  00.2 / ARCHITECTURAL RESILIENCE
                </span>
                <div className="text-xl font-sans font-medium text-white tracking-tight">Postgres + Redis</div>
                <p className="text-xs text-zinc-500 leading-relaxed mt-1">
                  Isolated relational databases paired with in-memory caching for zero-collision state management.
                </p>
              </div>

              <div>
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-zinc-500 block mb-2">
                  00.3 / PIPELINE AUTOMATION
                </span>
                <div className="text-xl font-sans font-medium text-white tracking-tight">Live Analytics</div>
                <p className="text-xs text-zinc-500 leading-relaxed mt-1">
                  Automated ETL workflows and custom dashboards replacing manual enterprise spreadsheets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          02. STRATOCOPE-STYLE CASE STUDY (Salon App)
      ══════════════════════════════════════════ */}
      <section id="case-studies" className="py-28 md:py-36 border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-zinc-500 block">
              01 / PROOF OF CONCEPT
            </span>
            <h2 className="text-3xl md:text-5xl font-sans font-medium tracking-tight text-white mt-3">
              Engineered Case Study
            </h2>
          </div>

          {/* Stratocope Grid Block Container */}
          <div className="border border-white/[0.06] bg-zinc-900/20 backdrop-blur-md rounded-xl p-8 md:p-12 relative overflow-hidden">
            {/* Background Accent Div */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" />

            {/* Left-Aligned Header with Massive Typographic Display */}
            <div>
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-emerald-400 block mb-6">
                01 / SYSTEM INTERACTION
              </span>

              {/* Massive Typographic Display of the Core Metric */}
              <div className="mb-8">
                <div className="text-6xl md:text-8xl font-sans font-light tracking-tighter text-white">
                  15%
                </div>
                <div className="font-mono text-xs text-zinc-400 uppercase tracking-[0.2em] mt-2">
                  Daily Revenue Leakage Prevented via Live Slot Concurrency
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-4xl font-sans font-medium tracking-tight text-white mb-8">
                AI-Driven Salon Booking & CRM Engine
              </h3>
            </div>

            {/* Architectural Dissection Grid */}
            <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-white/[0.06]">
              {/* Problem */}
              <div className="space-y-3">
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-zinc-500 block">
                  01.1 / PROBLEM STATEMENT
                </span>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                  Local appointment-based businesses lose up to 15% of daily revenue due to double-booking errors and manual spreadsheet tracking.
                </p>
              </div>

              {/* Solution */}
              <div className="space-y-3">
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-emerald-400 block">
                  01.2 / ENGINEERED SOLUTION
                </span>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                  An isolated, ultra-fast booking workflow built using Next.js for high-speed UI rendering, Supabase (PostgreSQL) for relational data persistence, and a dedicated Redis layer for live appointment slot locking.
                </p>
              </div>
            </div>

            {/* Technology Stack Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-8 mt-8 border-t border-white/[0.06]">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-zinc-500 mr-2">
                Engineered With:
              </span>
              {["Next.js", "Supabase", "Redis"].map((tech) => (
                <span
                  key={tech}
                  className="border border-white/[0.08] bg-white/[0.02] text-zinc-400 px-3 py-1 rounded text-[11px] font-mono tracking-wide"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Video Walkthrough Interactive Strip */}
            <div className="mt-8 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <a
                href="#"
                className="group inline-flex items-center gap-3 transition-colors"
              >
                <div className="w-8 h-8 rounded-full border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 group-hover:scale-105 transition-all">
                  <Play size={12} className="ml-0.5 fill-current" />
                </div>
                <span className="font-mono text-xs tracking-wider text-zinc-300 group-hover:text-white transition-colors">
                  Watch 2-Min System Architecture Walkthrough →
                </span>
              </a>
              <span className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
                Interactive Loom Walkthrough
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          03. VALUE STACK (Core Capabilities)
      ══════════════════════════════════════════ */}
      <section id="services" className="py-28 md:py-36 border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-zinc-500 block">
              02 / VALUE STACK
            </span>
            <h2 className="text-3xl md:text-5xl font-sans font-medium tracking-tight text-white mt-3">
              Core Capabilities
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Capability 1 */}
            <div className="border border-white/[0.06] bg-zinc-900/20 backdrop-blur-md rounded-xl p-8 md:p-10 relative overflow-hidden flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-zinc-500 block mb-6">
                  02.1 / CLIENT APPLICATION STACK
                </span>
                <h3 className="text-2xl font-sans font-medium tracking-tight text-white mb-4">
                  Custom AI Web Implementations
                </h3>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8">
                  Focus on rapid MVP deployment, automated user flows, and secure cloud setups.
                </p>
              </div>

              <div className="pt-6 border-t border-white/[0.06] flex flex-wrap gap-2">
                {["Next.js", "React", "Tailwind", "Supabase"].map((tech) => (
                  <span
                    key={tech}
                    className="border border-white/[0.08] bg-white/[0.02] text-zinc-400 px-3 py-1 rounded text-[11px] font-mono tracking-wide"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Capability 2 */}
            <div className="border border-white/[0.06] bg-zinc-900/20 backdrop-blur-md rounded-xl p-8 md:p-10 relative overflow-hidden flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-zinc-500 block mb-6">
                  02.2 / ENTERPRISE DATA SYSTEMS
                </span>
                <h3 className="text-2xl font-sans font-medium tracking-tight text-white mb-4">
                  Data Storytelling & Infrastructure
                </h3>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8">
                  Focus on cleaning messy enterprise databases, building live analytics dashboards, and custom business report automation.
                </p>
              </div>

              <div className="pt-6 border-t border-white/[0.06] flex flex-wrap gap-2">
                {["Python", "SQL", "PowerBI", "Redis"].map((tech) => (
                  <span
                    key={tech}
                    className="border border-white/[0.08] bg-white/[0.02] text-zinc-400 px-3 py-1 rounded text-[11px] font-mono tracking-wide"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          04. CONSULTING ENGAGEMENT & CONTACT
      ══════════════════════════════════════════ */}
      <section id="contact" className="py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="border border-white/[0.06] bg-zinc-900/20 backdrop-blur-md rounded-xl p-8 md:p-12 relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column: Direct Calendly & Telemetry */}
              <div>
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-zinc-500 block mb-4">
                  03 / INITIATION
                </span>
                <h2 className="text-3xl md:text-4xl font-sans font-medium tracking-tight text-white mb-4">
                  Start your technical consultation.
                </h2>
                <p className="text-zinc-400 text-base leading-relaxed mb-8 max-w-md">
                  Discuss your pipeline architecture or schedule an immediate 15-minute briefing session.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-sm text-zinc-300">
                    <Phone size={14} className="text-emerald-400" />
                    <span>+91-{brand.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-300">
                    <Mail size={14} className="text-emerald-400" />
                    <span>{brand.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-300">
                    <MapPin size={14} className="text-emerald-400" />
                    <span>Lucknow, Uttar Pradesh, India</span>
                  </div>
                </div>

                <a
                  href="https://calendly.com/neurodyn-info"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-black font-medium text-sm rounded-md transition-all duration-300 hover:bg-zinc-200 inline-flex items-center gap-2"
                >
                  Book a Free 15-Min Strategy Call
                  <ArrowRight size={14} />
                </a>
              </div>

              {/* Right Column: Clean Form */}
              <div className="border-t lg:border-t-0 lg:border-l border-white/[0.06] pt-8 lg:pt-0 lg:pl-12">
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-zinc-500 block mb-6">
                  DIRECT PROJECT DISPATCH
                </span>

                <form onSubmit={handleContact} className="space-y-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      required
                      className="bg-white/[0.02] border-white/[0.08] text-white placeholder:text-zinc-600 rounded-md focus:border-emerald-500/40 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm h-11"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Work Email"
                      required
                      className="bg-white/[0.02] border-white/[0.08] text-white placeholder:text-zinc-600 rounded-md focus:border-emerald-500/40 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm h-11"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Describe your AI or data architecture scope..."
                      rows={4}
                      required
                      className="bg-white/[0.02] border-white/[0.08] text-white placeholder:text-zinc-600 rounded-md focus:border-emerald-500/40 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 border border-white/10 hover:border-white/20 bg-white/[0.04] hover:bg-white/[0.08] text-white font-medium text-sm rounded-md transition-all duration-300"
                  >
                    Transmit Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════ */}
      <footer className="border-t border-white/[0.06] py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-center gap-4">
              <Logo showTagline={true} />
            </div>

            <div className="flex flex-wrap gap-8 text-xs font-mono text-zinc-500">
              <a href="/services" className="hover:text-zinc-300 transition-colors">
                Capabilities
              </a>
              <a href="#case-studies" className="hover:text-zinc-300 transition-colors">
                Proof of Concept
              </a>
              <a href="/contact" className="hover:text-zinc-300 transition-colors">
                Contact
              </a>
              <a href="https://calendly.com/neurodyn-info" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                Calendly
              </a>
            </div>

            <div className="text-xs font-mono text-zinc-600">
              © {new Date().getFullYear()} {brand.name}.
            </div>
          </div>
        </div>
      </footer>

      {/* Subtle Floating WhatsApp Connector */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={`https://wa.me/91${brand.phone}?text=Hi,%20I%27m%20interested%20in%20your%20services`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 bg-zinc-900/90 border border-white/10 hover:border-emerald-500/40 text-emerald-400 rounded-full flex items-center justify-center shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105"
          aria-label="Direct WhatsApp Transmission"
        >
          <MessageCircle size={16} />
        </a>
      </div>
    </div>
  );
}
