"use client";
import React, { useMemo } from "react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Logo from "@/components/Logo";
import {
  Code,
  Phone,
  Mail,
  MapPin,
  Zap,
  ArrowRight,
  MessageCircle,
  Database,
  Server as ServerIcon,
  Play,
} from "lucide-react";

export default function NeuroDynSite() {
  const brand = useMemo(
    () => ({
      name: "NeuroDyn Tech Solutions",
      heroTagline: "We Build AI-Powered Applications & Data Dashboards That Automate Business Operations.",
      heroSubheading: "Accelerate your workflows with bespoke full-stack web applications, real-time analytics pipelines, and automated CRM systems built in days—not months.",
      phone: "9369479090",
      email: "info@neurodyn.in",
    }),
    []
  );

  const services = [
    {
      icon: <Code size={16} />,
      title: "Custom AI Web Implementations",
      desc: "Rapid MVP deployment, automated user flows, and secure cloud setups.",
      features: ["Next.js", "React", "Tailwind", "Supabase"],
    },
    {
      icon: <Database size={16} />,
      title: "Data Storytelling & Infrastructure",
      desc: "Clean messy enterprise databases, build live analytics dashboards, and automate custom business reports.",
      features: ["Python", "SQL", "PowerBI", "Redis"],
    },
  ];

  const caseStudies = [
    {
      title: "AI-Driven Salon Booking & CRM Engine",
      problem: "Local appointment-based businesses lose up to 15% of daily revenue due to double-booking errors and manual spreadsheet tracking.",
      solution: "An isolated, ultra-fast booking workflow built using Next.js for high-speed UI rendering, Supabase (PostgreSQL) for relational data persistence, and a dedicated Redis layer for live appointment slot locking.",
      videoPlaceholder: "Watch 2-Min System Architecture Walkthrough",
      videoLink: "#",
      stack: ["Next.js", "Supabase", "Redis"],
    },
  ];

  const heroCards = [
    { icon: <Code size={16} />, label: "Full-Stack Web", sub: "Next.js & React" },
    { icon: <ServerIcon size={16} />, label: "Automated CRM", sub: "Supabase & Redis" },
    { icon: <Zap size={16} />, label: "AI Integrations", sub: "Custom Workflows" },
    { icon: <Database size={16} />, label: "Data Analytics", sub: "PowerBI & Python" },
  ];

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
    <div className="min-h-screen bg-[#050508] text-white">

      {/* ── Ambient background glows ── */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] h-[600px] w-[600px] rounded-full bg-gradient-to-br from-emerald-500/8 to-transparent blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-indigo-500/6 to-transparent blur-3xl" />
      </div>

      <Navigation />

      {/* ══════════════════════════════
          HERO SECTION
      ══════════════════════════════ */}
      <section id="home" className="relative pt-36 pb-28 lg:pt-44 lg:pb-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — copy */}
            <div className="scroll-reveal">
              {/* Overline label */}
              <p className="label-mono text-emerald-500 mb-6">
                Available for Projects
              </p>

              <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight leading-[1.12] text-white mb-6">
                {brand.heroTagline}
              </h1>

              <p className="text-zinc-400 text-lg leading-relaxed max-w-xl mb-10">
                {brand.heroSubheading}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 mb-14">
                <a
                  href="https://calendly.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-zinc-900 hover:bg-zinc-200 text-sm font-semibold px-6 py-3 rounded-md transition-all duration-300"
                >
                  Book a Free 15-Min Strategy Call
                  <ArrowRight size={14} />
                </a>
                <a
                  href="#case-studies"
                  className="inline-flex items-center justify-center gap-2 border border-white/10 text-zinc-300 hover:border-white/20 hover:text-white text-sm font-medium px-6 py-3 rounded-md transition-all duration-300"
                >
                  View Live MVPs
                </a>
              </div>

              {/* Stats strip */}
              <div className="flex gap-10 border-t border-white/[0.06] pt-8">
                {[
                  { value: "Fast", label: "MVP Delivery" },
                  { value: "100%", label: "Data Driven" },
                  { value: "Automated", label: "Workflows" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-xl font-bold text-white tracking-tight">{stat.value}</div>
                    <div className="label-mono mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — capability grid */}
            <div className="scroll-reveal relative">
              {/* Ambient glow behind card */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-indigo-500/10 blur-3xl rounded-3xl" />
              <div className="relative glass rounded-2xl p-6">
                <div className="grid grid-cols-2 gap-3">
                  {heroCards.map((card) => (
                    <div
                      key={card.label}
                      className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 hover:border-emerald-500/20 hover:bg-white/[0.05] transition-all duration-300"
                    >
                      <div className="w-7 h-7 rounded-md bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3">
                        {card.icon}
                      </div>
                      <div className="text-sm font-semibold text-white mb-0.5">{card.label}</div>
                      <div className="text-[12px] text-zinc-500">{card.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          CORE CAPABILITIES
      ══════════════════════════════ */}
      <section id="services" className="py-28 lg:py-36 relative">
        {/* Section glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 max-w-xl">
            <p className="label-mono text-emerald-500 mb-4">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Core Capabilities
            </h2>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              Premium data-driven engineering that scales your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
            {services.map((service) => (
              <div className="scroll-reveal relative" key={service.title}>
                {/* Card ambient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 to-transparent blur-2xl rounded-2xl" />
                <div className="relative glass rounded-xl p-8 h-full hover:border-white/10 transition-all duration-300 group">
                  {/* Icon */}
                  <div className="w-8 h-8 rounded-md bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  {/* Stack tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feat) => (
                      <span
                        key={feat}
                        className="border border-white/[0.07] text-zinc-400 px-3 py-1 rounded-md text-[11px] font-mono tracking-wide bg-white/[0.02]"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          CASE STUDY
      ══════════════════════════════ */}
      <section id="case-studies" className="py-28 lg:py-36 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 max-w-xl">
            <p className="label-mono text-emerald-500 mb-4">Proof of Concept</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Featured Build
            </h2>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              Real-world implementations of our high-speed, data-driven architecture.
            </p>
          </div>

          <div className="max-w-4xl">
            {caseStudies.map((study) => (
              <div className="scroll-reveal" key={study.title}>
                <div className="relative glass rounded-2xl overflow-hidden">
                  {/* Ambient glow */}
                  <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-emerald-500/8 to-transparent blur-3xl pointer-events-none" />

                  {/* Video placeholder */}
                  <div className="h-64 bg-gradient-to-br from-zinc-900 to-[#050508] flex flex-col items-center justify-center relative overflow-hidden border-b border-white/[0.05]">
                    <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(ellipse_at_center,_white_1px,_transparent_1px)] bg-[size:24px_24px]" />
                    <a
                      href={study.videoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="z-10 flex flex-col items-center gap-5 group"
                    >
                      <div className="w-14 h-14 glow-emerald bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-400 hover:bg-emerald-500/20 transition-all duration-300">
                        <Play size={16} className="ml-0.5 fill-current" />
                      </div>
                      <span className="label-mono text-zinc-400 group-hover:text-zinc-200 transition-colors">
                        {study.videoPlaceholder}
                      </span>
                    </a>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12">
                    <h3 className="text-2xl font-bold tracking-tight text-white mb-8">
                      {study.title}
                    </h3>

                    <div className="space-y-5">
                      {/* Problem */}
                      <div className="border border-white/[0.05] bg-white/[0.02] rounded-xl p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                          <span className="label-mono text-rose-400">Problem</span>
                        </div>
                        <p className="text-zinc-400 text-sm leading-relaxed">{study.problem}</p>
                      </div>

                      {/* Solution */}
                      <div className="border border-emerald-500/10 bg-emerald-500/[0.03] rounded-xl p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          <span className="label-mono text-emerald-400">Engineered Solution</span>
                        </div>
                        <p className="text-zinc-400 text-sm leading-relaxed">{study.solution}</p>
                      </div>
                    </div>

                    {/* Stack */}
                    <div className="flex flex-wrap items-center gap-2 mt-8 pt-6 border-t border-white/[0.05]">
                      <span className="label-mono mr-2">Stack</span>
                      {study.stack.map((tech) => (
                        <span
                          key={tech}
                          className="border border-white/[0.07] text-zinc-400 px-3 py-1 rounded-md text-[11px] font-mono tracking-wide bg-white/[0.02]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          CTA BAND
      ══════════════════════════════ */}
      <section className="py-28 lg:py-36 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative glass rounded-2xl px-8 py-16 lg:px-16 text-center overflow-hidden">
            {/* Ambient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/8 via-transparent to-indigo-500/6 pointer-events-none" />

            <p className="label-mono text-emerald-500 mb-6">Ready to Start?</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-5 max-w-2xl mx-auto">
              Ready to Automate Your Business Operations?
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-10">
              Stop losing revenue to manual processes. Let's build a data-driven system that scales with your ambition.
            </p>
            <a
              href="https://calendly.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-zinc-900 hover:bg-zinc-200 text-sm font-semibold px-8 py-3.5 rounded-md transition-all duration-300"
            >
              Book a Free 15-Min Strategy Call
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          CONTACT
      ══════════════════════════════ */}
      <section id="contact" className="py-28 lg:py-36 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 max-w-xl">
            <p className="label-mono text-emerald-500 mb-4">Contact</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Get In Touch
            </h2>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              Let's discuss your project requirements and how we can help you achieve your business goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl">
            {/* Contact info */}
            <div className="space-y-5">
              {[
                { icon: <Phone size={16} />, label: "Phone", value: `+91-${brand.phone}` },
                { icon: <Mail size={16} />, label: "Email", value: brand.email },
                { icon: <MapPin size={16} />, label: "Location", value: "Lucknow, Uttar Pradesh, India" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-md bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <div className="label-mono mb-1">{item.label}</div>
                    <div className="text-sm text-zinc-300">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact form */}
            <div className="relative glass rounded-xl p-8">
              <form onSubmit={handleContact} className="space-y-4">
                <Input
                  name="name"
                  placeholder="Your Name"
                  required
                  className="bg-white/[0.03] border-white/[0.07] text-white placeholder:text-zinc-600 rounded-md focus:border-emerald-500/40 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  required
                  className="bg-white/[0.03] border-white/[0.07] text-white placeholder:text-zinc-600 rounded-md focus:border-emerald-500/40 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors"
                />
                <Textarea
                  name="message"
                  placeholder="Tell us about your project"
                  rows={5}
                  required
                  className="bg-white/[0.03] border-white/[0.07] text-white placeholder:text-zinc-600 rounded-md focus:border-emerald-500/40 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-zinc-900 hover:bg-zinc-200 text-sm font-semibold py-3 rounded-md transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          FOOTER
      ══════════════════════════════ */}
      <footer className="border-t border-white/[0.05] py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="mb-4">
                <Logo showTagline={false} />
              </div>
              <p className="text-zinc-500 text-[13px] leading-relaxed">
                AI & Data Analytics boutique. Building the systems that scale your business.
              </p>
            </div>

            <div>
              <p className="label-mono mb-5">Services</p>
              <ul className="space-y-3">
                {["AI Web Implementations", "Data Dashboards", "CRM Automation"].map((s) => (
                  <li key={s}>
                    <a href="/services" className="text-zinc-500 hover:text-zinc-200 text-[13px] transition-colors">{s}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="label-mono mb-5">Company</p>
              <ul className="space-y-3">
                {[
                  { label: "About Us", href: "/about" },
                  { label: "Core Capabilities", href: "/services" },
                  { label: "Case Studies", href: "#case-studies" },
                  { label: "Contact", href: "/contact" },
                ].map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-zinc-500 hover:text-zinc-200 text-[13px] transition-colors">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="label-mono mb-5">Contact</p>
              <ul className="space-y-3 text-zinc-500 text-[13px]">
                <li>+91-{brand.phone}</li>
                <li>{brand.email}</li>
                <li>Lucknow, UP, India</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/[0.05] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-zinc-600 text-[12px]">
              © {new Date().getFullYear()} {brand.name}. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-zinc-600 hover:text-zinc-300 text-[12px] transition-colors">Privacy Policy</a>
              <a href="#" className="text-zinc-600 hover:text-zinc-300 text-[12px] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ── WhatsApp FAB ── */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={`https://wa.me/91${brand.phone}?text=Hi,%20I%27m%20interested%20in%20your%20services`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/20 transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={18} />
        </a>
      </div>
    </div>
  );
}
