"use client";
import React, { useMemo } from "react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Logo from "@/components/Logo";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Sparkles,
  Plane,
  Smartphone,
  Cpu,
  BarChart3,
  Globe,
  CheckCircle2,
  Layers,
  ChevronRight,
  Shield,
  Zap,
  Network,
  Server,
  Database,
  Workflow,
  Building2,
  BadgeCheck,
  Lock,
  RefreshCw,
  FileCode2,
} from "lucide-react";

export default function NeuroDynSite() {
  const brand = useMemo(
    () => ({
      name: "NeuroDyn Tech Solutions",
      phone: "8004339331",
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
    const subject = encodeURIComponent(`New Project Enquiry - ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
    window.location.href = `mailto:info@neurodyn.in?subject=${subject}&body=${body}`;
  }

  return (
    <div className="min-h-screen bg-[#120a06] text-[#fcf8ee] selection:bg-[#d4af37]/30 selection:text-[#fae8b2] overflow-x-hidden">
      {/* Ambient Warm Golden Lights & Dark Chocolate Depth */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] bg-gradient-to-br from-[#d4af37]/10 via-[#b8860b]/05 to-transparent rounded-full blur-[140px]" />
        <div className="absolute top-[35%] left-[-10%] w-[650px] h-[650px] bg-gradient-to-tr from-[#996515]/10 via-[#422210]/15 to-transparent rounded-full blur-[160px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-gradient-to-tl from-[#d4af37]/08 via-[#2a170e]/20 to-transparent rounded-full blur-[150px]" />
        {/* Subtle Warm Grid Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/10 via-[#120a06]/80 to-[#120a06]" />
      </div>

      <Navigation />

      {/* ══════════════════════════════════════════
          01. HERO SECTION (Gold & Dark Chocolate Luxury)
      ══════════════════════════════════════════ */}
      <section id="home" className="relative pt-36 pb-28 md:pt-44 md:pb-36 border-b border-[#d4af37]/15">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Hero Text */}
            <div className="lg:col-span-7 space-y-6">
              {/* Luxury Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#24140c] border border-[#d4af37]/30 shadow-[0_2px_12px_rgba(212,175,55,0.15)]">
                <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
                <span className="font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-[#fae8b2]">
                  B2B Travel Tech Aggregator • Unified Supply APIs • SaaS Platforms
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-serif font-normal tracking-tight text-[#fdfbf7] leading-[1.1]">
                Next-Gen <span className="italic font-normal text-gradient-gold">B2B Travel Aggregator</span> &amp; Enterprise Distribution.
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-[#d4c3b0] leading-relaxed max-w-2xl font-light">
                We engineer mission-critical travel aggregation infrastructure—normalizing wholesale inventory feeds across NDC airlines, global hotels, and transfers into unified, ultra-low latency APIs and turnkey distribution platforms for OTAs, sub-agents, and corporate travel desks.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <a
                  href="https://calendly.com/neurodyn-info"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 bg-gradient-to-r from-[#d4af37] via-[#f5d77f] to-[#c59b27] text-[#120a06] font-bold text-sm rounded-lg transition-all duration-300 hover:brightness-110 shadow-[0_4px_20px_rgba(212,175,55,0.35)] hover:shadow-[0_6px_28px_rgba(212,175,55,0.5)] inline-flex items-center justify-center gap-2.5"
                >
                  <Sparkles size={16} />
                  Book Partnership / Strategy Call
                  <ArrowRight size={15} />
                </a>
                <a
                  href="#aggregator"
                  className="px-7 py-3.5 border border-[#d4af37]/30 bg-[#22130b]/60 hover:bg-[#2c180e] hover:border-[#d4af37]/60 text-[#f5efe6] font-medium text-sm rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-sm"
                >
                  Explore Aggregator Architecture
                  <ChevronRight size={15} className="text-[#d4af37]" />
                </a>
              </div>

              {/* Trust Indicators / Fast Metrics */}
              <div className="pt-8 border-t border-[#d4af37]/15 grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div>
                  <div className="text-2xl sm:text-3xl font-serif text-[#fae8b2] font-semibold">&lt; 120:1</div>
                  <div className="text-[11px] font-mono tracking-wider uppercase text-[#a99583] mt-0.5">Look-to-Book Target</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-serif text-[#fae8b2] font-semibold">&lt; 280ms</div>
                  <div className="text-[11px] font-mono tracking-wider uppercase text-[#a99583] mt-0.5">Normalized API Latency</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-serif text-[#fae8b2] font-semibold">NDC &amp; Wholesale</div>
                  <div className="text-[11px] font-mono tracking-wider uppercase text-[#a99583] mt-0.5">Multi-Supplier Feeds</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-serif text-[#fae8b2] font-semibold">99.95%</div>
                  <div className="text-[11px] font-mono tracking-wider uppercase text-[#a99583] mt-0.5">High-Availability SLA</div>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Mockup Showcase with Curated Stock Photo */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl p-2.5 bg-gradient-to-b from-[#d4af37]/35 via-[#54301d]/30 to-[#22130b]/60 border border-[#d4af37]/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl group">
                
                {/* Main Hero Stock Image: Flight & Travel Engine Horizon */}
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] border border-[#d4af37]/20">
                  <img
                    src="/images/travel-engine.jpg"
                    alt="B2B Travel Technology Aggregator and Unified API Normalization Engine"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120a06] via-[#120a06]/40 to-transparent" />
                  
                  {/* Floating Tag */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#180e08]/90 border border-[#d4af37]/40 backdrop-blur-md">
                    <Network size={13} className="text-[#f5d77f]" />
                    <span className="font-mono text-[10px] tracking-wider uppercase text-[#fcf8ee]">
                      B2B AGGREGATION &amp; NORMALIZATION
                    </span>
                  </div>

                  {/* Bottom Image Overlay Details */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-lg bg-[#180e08]/90 border border-[#d4af37]/30 backdrop-blur-md">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-serif text-[#fae8b2] font-semibold">Multi-Supplier Supply Engine</span>
                      <span className="text-[#d4af37] font-mono text-[10px]">LIVE NORMALIZATION</span>
                    </div>
                    <p className="text-[11px] text-[#bda692] leading-tight">
                      Aggregating Verteil NDC airline content, TBO global wholesale inventory, and GDS feeds into unified RESTful APIs.
                    </p>
                  </div>
                </div>

                {/* Floating Telemetry Badge Bottom Right */}
                <div className="absolute -bottom-6 -right-4 sm:-right-6 p-4 rounded-xl bg-[#20120b] border border-[#d4af37]/40 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#331c11] border border-[#d4af37]/30 flex items-center justify-center text-[#f5d77f]">
                    <RefreshCw size={20} className="animate-spin-slow" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#fcf8ee]">Smart L2B Cache Guard</div>
                    <div className="text-[10px] font-mono text-[#d4af37]">Redis In-Memory • Zero Rate Penalties</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          02. CORE PILLARS MATRIX
      ══════════════════════════════════════════ */}
      <section className="py-16 border-b border-[#d4af37]/15 bg-[#170d08]/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-6 rounded-xl bg-[#1d100a]/80 border border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-[#2e190e] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] mb-4">
                <Network size={20} />
              </div>
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#d4af37] block mb-1">
                PILLAR 01
              </span>
              <h3 className="text-lg font-serif font-semibold text-[#fdfbf7] mb-2">B2B Aggregator &amp; Normalization</h3>
              <p className="text-xs text-[#bda692] leading-relaxed">
                Ingesting and normalizing wholesale feeds—from direct Verteil NDC airline connections to TBO global hotels, flights, and transfers—into a unified, low-latency RESTful API.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#1d100a]/80 border border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-[#2e190e] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] mb-4">
                <Building2 size={20} />
              </div>
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#d4af37] block mb-1">
                PILLAR 02
              </span>
              <h3 className="text-lg font-serif font-semibold text-[#fdfbf7] mb-2">Sub-Agent &amp; Corporate Desks</h3>
              <p className="text-xs text-[#bda692] leading-relaxed">
                Multi-tenant distribution portals for independent OTAs, retail sub-agents, and corporate desks featuring hierarchical markups, deposit ledgers, and automated invoicing.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#1d100a]/80 border border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-[#2e190e] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] mb-4">
                <RefreshCw size={20} />
              </div>
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#d4af37] block mb-1">
                PILLAR 03
              </span>
              <h3 className="text-lg font-serif font-semibold text-[#fdfbf7] mb-2">L2B Cache &amp; Concurrency Engine</h3>
              <p className="text-xs text-[#bda692] leading-relaxed">
                Proprietary Redis multi-tiered caching specifically tuned to minimize Look-to-Book (L2B) ratios, protect upstream supplier quotas, and lock inventory states in real time.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          02A. STRATEGIC SUPPLY FRAMEWORK (VERTEIL NDC, TBO, GDS)
      ══════════════════════════════════════════ */}
      <section id="partnerships" className="py-24 border-b border-[#d4af37]/15 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="mb-14">
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#d4af37] block">
              SUPPLY ARCHITECTURE &amp; PARTNERSHIP FRAMEWORK
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-normal text-[#fdfbf7] mt-3">
              Multi-Supplier Ingestion &amp; Normalization Ecosystem
            </h2>
            <p className="text-[#c5b29c] text-base md:text-lg max-w-3xl mt-3 font-light">
              We aggregate and normalize world-class inventory feeds across direct airline NDC aggregators and global wholesale portals into unified, developer-friendly endpoints for downstream travel sellers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Feed 1: Verteil NDC Air Connect */}
            <div className="rounded-2xl border border-[#d4af37]/25 bg-gradient-to-b from-[#1f110b] to-[#140b07] p-6 hover:border-[#d4af37]/60 transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-[#301a0f] border border-[#d4af37]/30 flex items-center justify-center text-[#f5d77f]">
                    <Plane size={20} />
                  </div>
                  <span className="px-2.5 py-0.5 rounded bg-[#2e190e] border border-[#d4af37]/30 text-[#f5d77f] font-mono text-[10px] uppercase font-semibold">
                    NDC Direct
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-serif font-semibold text-[#fdfbf7]">Verteil NDC Airline Aggregation</h3>
                  <p className="text-xs text-[#d4af37] font-mono mt-0.5">IATA NDC 17.2 / 21.3 Schemas</p>
                </div>

                <p className="text-xs text-[#bda692] leading-relaxed font-light">
                  Direct airline connectivity delivering dynamic carrier offers, continuous pricing, rich ancillaries, preferred seats, and brand fares from tier-1 airlines without legacy GDS distribution surcharges.
                </p>

                <ul className="space-y-2 pt-2 border-t border-[#d4af37]/15 text-[11px] text-[#ebdcc7]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-[#d4af37] flex-shrink-0" />
                    <span>Real-time OfferPrice &amp; OrderCreate</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-[#d4af37] flex-shrink-0" />
                    <span>Rich seat maps &amp; baggage ancillaries</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-[#d4af37] flex-shrink-0" />
                    <span>Instant direct airline PNR ticketing</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-[#d4af37]/15">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#a99583]">Target Integration: Verteil NDC</span>
              </div>
            </div>

            {/* Feed 2: TBO Global Wholesale Inventory */}
            <div className="rounded-2xl border border-[#d4af37]/25 bg-gradient-to-b from-[#1f110b] to-[#140b07] p-6 hover:border-[#d4af37]/60 transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-[#301a0f] border border-[#d4af37]/30 flex items-center justify-center text-[#f5d77f]">
                    <Building2 size={20} />
                  </div>
                  <span className="px-2.5 py-0.5 rounded bg-[#2e190e] border border-[#d4af37]/30 text-[#f5d77f] font-mono text-[10px] uppercase font-semibold">
                    Global Supply
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-serif font-semibold text-[#fdfbf7]">TBO Wholesale Inventory Feed</h3>
                  <p className="text-xs text-[#d4af37] font-mono mt-0.5">Hotels, Flights &amp; Transfers</p>
                </div>

                <p className="text-xs text-[#bda692] leading-relaxed font-light">
                  Foundational wholesale supply pillar integrating TBO's global inventory of 1,000,000+ hotels, global flight combinations, airport transfers, and sightseeing with instant voucher confirmation.
                </p>

                <ul className="space-y-2 pt-2 border-t border-[#d4af37]/15 text-[11px] text-[#ebdcc7]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-[#d4af37] flex-shrink-0" />
                    <span>1M+ worldwide hotels with live rates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-[#d4af37] flex-shrink-0" />
                    <span>Direct XML/JSON booking &amp; cancellations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-[#d4af37] flex-shrink-0" />
                    <span>Multi-currency dynamic rate margins</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-[#d4af37]/15">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#a99583]">Target Integration: TBO Global</span>
              </div>
            </div>

            {/* Feed 3: Unified Normalization Layer */}
            <div className="rounded-2xl border border-[#d4af37]/25 bg-gradient-to-b from-[#1f110b] to-[#140b07] p-6 hover:border-[#d4af37]/60 transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-[#301a0f] border border-[#d4af37]/30 flex items-center justify-center text-[#f5d77f]">
                    <Workflow size={20} />
                  </div>
                  <span className="px-2.5 py-0.5 rounded bg-[#2e190e] border border-[#d4af37]/30 text-[#f5d77f] font-mono text-[10px] uppercase font-semibold">
                    Core Schema
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-serif font-semibold text-[#fdfbf7]">Unified Normalization Engine</h3>
                  <p className="text-xs text-[#d4af37] font-mono mt-0.5">Canonical REST / JSON Layer</p>
                </div>

                <p className="text-xs text-[#bda692] leading-relaxed font-light">
                  Standardizes disparate SOAP/XML and REST/JSON schemas into a uniform, high-speed API payload, eliminating integration friction and multi-supplier mapping headaches for downstream developers.
                </p>

                <ul className="space-y-2 pt-2 border-t border-[#d4af37]/15 text-[11px] text-[#ebdcc7]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-[#d4af37] flex-shrink-0" />
                    <span>Canonical search, price &amp; book schemas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-[#d4af37] flex-shrink-0" />
                    <span>Automated hotel room deduplication</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-[#d4af37] flex-shrink-0" />
                    <span>Cross-supplier best fare comparison</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-[#d4af37]/15">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#a99583]">Output: Standardized REST Endpoints</span>
              </div>
            </div>

            {/* Feed 4: L2B Look-to-Book Protection Engine */}
            <div className="rounded-2xl border border-[#d4af37]/25 bg-gradient-to-b from-[#1f110b] to-[#140b07] p-6 hover:border-[#d4af37]/60 transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-[#301a0f] border border-[#d4af37]/30 flex items-center justify-center text-[#f5d77f]">
                    <Shield size={20} />
                  </div>
                  <span className="px-2.5 py-0.5 rounded bg-[#2e190e] border border-[#d4af37]/30 text-[#f5d77f] font-mono text-[10px] uppercase font-semibold">
                    SLA Guard
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-serif font-semibold text-[#fdfbf7]">Look-to-Book Optimization</h3>
                  <p className="text-xs text-[#d4af37] font-mono mt-0.5">Supplier Quota Protection</p>
                </div>

                <p className="text-xs text-[#bda692] leading-relaxed font-light">
                  Engineered with intelligent Redis caching and query pruning to protect upstream partner servers, avoid lookup throttling, and strictly comply with supplier look-to-book ratio thresholds.
                </p>

                <ul className="space-y-2 pt-2 border-t border-[#d4af37]/15 text-[11px] text-[#ebdcc7]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-[#d4af37] flex-shrink-0" />
                    <span>Target L2B ratio maintained below 120:1</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-[#d4af37] flex-shrink-0" />
                    <span>Dynamic TTL cache warming for top routes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-[#d4af37] flex-shrink-0" />
                    <span>Zero redundant lookups to supplier APIs</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-[#d4af37]/15">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#a99583]">Compliance: Strict Supplier SLAs</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          02B. B2B AGGREGATOR TECHNICAL ARCHITECTURE (VETTING FOCUS)
      ══════════════════════════════════════════ */}
      <section id="aggregator" className="py-24 md:py-32 border-b border-[#d4af37]/15 bg-[#160d08]/50 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="mb-14">
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#d4af37] block">
              TECHNICAL FRAMEWORK &amp; SUPPLIER VETTING
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-normal text-[#fdfbf7] mt-3">
              Engineered for High-Volume B2B Distribution &amp; Supplier Integrity
            </h2>
            <p className="text-[#c5b29c] text-base md:text-lg max-w-3xl mt-3 font-light">
              Our in-house engineering team manages direct XML/JSON integrations, optimizes lookup loads, handles complex multi-tiered caching, and scales cloud server infrastructure to guarantee high look-to-book conversion efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <div className="p-7 rounded-xl bg-[#1c100a] border border-[#d4af37]/25 hover:border-[#d4af37]/60 transition-all duration-300">
              <div className="w-11 h-11 rounded-lg bg-[#2e190e] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] mb-5">
                <FileCode2 size={22} />
              </div>
              <h3 className="text-xl font-serif font-semibold text-[#fdfbf7] mb-2">Direct XML &amp; JSON Engine</h3>
              <p className="text-xs text-[#bda692] leading-relaxed mb-4 font-light">
                Proficient in parsing heavy XML/SOAP structures (OTA and IATA NDC) and high-throughput RESTful JSON endpoints. We implement connection keep-alive, session pooling, and async streaming for maximum throughput.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#d4af37]/15">
                {["SOAP / XML", "REST / JSON", "Connection Pooling", "Session Keep-Alive"].map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded bg-[#24140c] text-[#f5d77f] font-mono text-[10px]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Feature 2 */}
            <div className="p-7 rounded-xl bg-[#1c100a] border border-[#d4af37]/25 hover:border-[#d4af37]/60 transition-all duration-300">
              <div className="w-11 h-11 rounded-lg bg-[#2e190e] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] mb-5">
                <RefreshCw size={22} />
              </div>
              <h3 className="text-xl font-serif font-semibold text-[#fdfbf7] mb-2">Look-to-Book (L2B) Optimization</h3>
              <p className="text-xs text-[#bda692] leading-relaxed mb-4 font-light">
                Sub-second multi-level Redis caching stores high-frequency route searches and availability states with dynamic TTL invalidation, preventing upstream API spam and keeping look-to-book ratios well within contract thresholds.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#d4af37]/15">
                {["Redis In-Memory", "Dynamic TTL", "Query Pruning", "L2B Throttling"].map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded bg-[#24140c] text-[#f5d77f] font-mono text-[10px]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Feature 3 */}
            <div className="p-7 rounded-xl bg-[#1c100a] border border-[#d4af37]/25 hover:border-[#d4af37]/60 transition-all duration-300">
              <div className="w-11 h-11 rounded-lg bg-[#2e190e] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] mb-5">
                <Lock size={22} />
              </div>
              <h3 className="text-xl font-serif font-semibold text-[#fdfbf7] mb-2">Distributed Concurrency Locks</h3>
              <p className="text-xs text-[#bda692] leading-relaxed mb-4 font-light">
                Enterprise locking mechanisms safeguard live seats and hotel rooms during the critical OrderCreate and payment transition window, preventing inventory race conditions and price slippage.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#d4af37]/15">
                {["Atomic Locks", "Rate Guardrails", "OrderCreate Sync", "Zero Race Conditions"].map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded bg-[#24140c] text-[#f5d77f] font-mono text-[10px]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Feature 4 */}
            <div className="p-7 rounded-xl bg-[#1c100a] border border-[#d4af37]/25 hover:border-[#d4af37]/60 transition-all duration-300">
              <div className="w-11 h-11 rounded-lg bg-[#2e190e] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] mb-5">
                <Building2 size={22} />
              </div>
              <h3 className="text-xl font-serif font-semibold text-[#fdfbf7] mb-2">B2B Sub-Agent Distribution</h3>
              <p className="text-xs text-[#bda692] leading-relaxed mb-4 font-light">
                Empower your network of independent travel agents, sub-agents, and corporate booking desks with multi-tier markups, floating credit ledgers, automated top-up wallets, and tax-compliant e-invoicing.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#d4af37]/15">
                {["Credit Ledgers", "Sub-Agent Tiers", "Markup Engine", "Automated GST/Invoicing"].map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded bg-[#24140c] text-[#f5d77f] font-mono text-[10px]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Feature 5 */}
            <div className="p-7 rounded-xl bg-[#1c100a] border border-[#d4af37]/25 hover:border-[#d4af37]/60 transition-all duration-300">
              <div className="w-11 h-11 rounded-lg bg-[#2e190e] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] mb-5">
                <BadgeCheck size={22} />
              </div>
              <h3 className="text-xl font-serif font-semibold text-[#fdfbf7] mb-2">Automated Ticket &amp; Voucher Flow</h3>
              <p className="text-xs text-[#bda692] leading-relaxed mb-4 font-light">
                Full-lifecycle booking automation: PNR creation, ticket issuance, cancellation penalties, date change requests, and instant branded PDF/WhatsApp voucher generation delivered in milliseconds.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#d4af37]/15">
                {["Instant PNR Sync", "Automated Issuance", "WhatsApp Vouchers", "Refund Lifecycle"].map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded bg-[#24140c] text-[#f5d77f] font-mono text-[10px]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Feature 6 */}
            <div className="p-7 rounded-xl bg-[#1c100a] border border-[#d4af37]/25 hover:border-[#d4af37]/60 transition-all duration-300">
              <div className="w-11 h-11 rounded-lg bg-[#2e190e] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] mb-5">
                <Server size={22} />
              </div>
              <h3 className="text-xl font-serif font-semibold text-[#fdfbf7] mb-2">Cloud Infrastructure &amp; 99.95% SLA</h3>
              <p className="text-xs text-[#bda692] leading-relaxed mb-4 font-light">
                Containerized microservices running on enterprise cloud clusters with auto-scaling, automated health probes, database replication, and zero-downtime rolling updates built for enterprise partner vetting.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#d4af37]/15">
                {["Docker / K8s", "Auto-Scaling", "TLS 1.3 / mTLS", "24/7 Monitoring"].map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded bg-[#24140c] text-[#f5d77f] font-mono text-[10px]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Vetting Assurance Banner */}
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-[#29170e] via-[#1f110a] to-[#170c07] border border-[#d4af37]/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#f5d77f] uppercase tracking-wider">
                <BadgeCheck size={15} className="text-[#d4af37]" />
                Ready for Supplier Certification &amp; Sandbox Testing
              </div>
              <h4 className="text-xl font-serif font-semibold text-[#fdfbf7]">
                Are you a technical partnership lead at TBO, Verteil, or an airline?
              </h4>
              <p className="text-xs text-[#bda692] max-w-2xl font-light">
                We have dedicated sandbox environments prepared for commercial certification, XML/JSON validation, and look-to-book testing. Contact our technical team for immediate NDA and developer credentials.
              </p>
            </div>
            <a
              href="https://calendly.com/neurodyn-info"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-[#d4af37] via-[#f5d77f] to-[#c59b27] text-[#120a06] font-bold text-xs uppercase tracking-wider rounded-lg hover:brightness-110 shadow-lg whitespace-nowrap transition-all duration-300"
            >
              Initiate Supplier Vetting →
            </a>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          03. FLAGSHIP SHOWCASE 1: TRAVEL ENGINE
      ══════════════════════════════════════════ */}
      <section id="travel-engine" className="py-24 md:py-32 border-b border-[#d4af37]/15 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="mb-14">
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#d4af37] block">
              FLAGSHIP ARCHITECTURE 01 / TRAVEL TECH
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-normal text-[#fdfbf7] mt-3">
              Custom Travel Engines for Growing Travel Enterprises
            </h2>
            <p className="text-[#c5b29c] text-base md:text-lg max-w-3xl mt-3 font-light">
              We engineer turn-key, high-speed travel reservation engines tailored for tour operators, travel management companies (TMCs), and online travel agencies (OTAs).
            </p>
          </div>

          <div className="rounded-2xl border border-[#d4af37]/25 bg-gradient-to-br from-[#1c100a] via-[#170d08] to-[#120a06] p-8 md:p-12 relative overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.7)]">
            
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Visual with Stock Photo */}
              <div className="lg:col-span-6 space-y-4">
                <div className="rounded-xl overflow-hidden border border-[#d4af37]/25 relative aspect-[16/10] shadow-2xl group">
                  <img
                    src="/images/luxury-destination.jpg"
                    alt="Travel Engine Interface & Destination Planning"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120a06] via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded bg-[#180e08]/90 border border-[#d4af37]/40 text-[#fae8b2] font-mono text-[10px] uppercase">
                      B2B &amp; B2C Booking Flow
                    </span>
                    <span className="px-3 py-1 rounded bg-[#d4af37] text-[#120a06] font-bold font-mono text-[10px] uppercase">
                      Sub-second Results
                    </span>
                  </div>
                </div>

                {/* Sub Features Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-lg bg-[#24140c]/70 border border-[#d4af37]/15">
                    <div className="font-serif text-[#fae8b2] text-sm font-semibold">Multi-Supplier Core</div>
                    <div className="text-[11px] text-[#a99583] mt-0.5">Verteil NDC, TBO Global, Amadeus, Sabre</div>
                  </div>
                  <div className="p-3.5 rounded-lg bg-[#24140c]/70 border border-[#d4af37]/15">
                    <div className="font-serif text-[#fae8b2] text-sm font-semibold">Dynamic Markup &amp; L2B</div>
                    <div className="text-[11px] text-[#a99583] mt-0.5">Rule-based markups &amp; smart caching</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Engine Specs */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#2d180f] border border-[#d4af37]/30 text-[#f5d77f] font-mono text-xs">
                  <Globe size={13} />
                  Complete Online Booking Ecosystem
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif text-[#fdfbf7]">
                  Everything your travel agency needs to automate bookings and scale margins.
                </h3>

                <p className="text-sm sm:text-base text-[#c5b29c] leading-relaxed font-light">
                  Stop depending on legacy, clunky third-party white-labels with high royalty fees. We build proprietary, enterprise-grade travel search engines that you own outright—complete with custom payment gateways, agent credit accounts, and live ticketing APIs.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    "Multi-Inventory Search: Flight combinations, hotel rooms, curated holiday packages, and cab transfers.",
                    "Sub-second Redis In-Memory Search Caching to eliminate provider API rate penalties.",
                    "Automated PNR Generation, E-Ticket issuance, and instant WhatsApp booking confirmation.",
                    "Corporate Travel Desk (B2B): Company approval workflows, corporate credit limits, and invoicing.",
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-[#d4af37] flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#ebdcc7]">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap gap-2">
                  <span className="font-mono text-[10px] uppercase text-[#a99583] py-1 mr-2">Core Tech:</span>
                  {["Next.js", "FastAPI / Node", "PostgreSQL", "Redis Cache", "Amadeus API", "Stripe / Razorpay"].map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-[#26150d] border border-[#d4af37]/25 text-[#f5d77f] font-mono text-[11px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href="https://calendly.com/neurodyn-info"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#fae8b2] hover:text-[#fdfbf7] group"
                  >
                    <span>Request Travel Engine Architecture Demo</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-[#d4af37]" />
                  </a>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          04. FLAGSHIP SHOWCASE 2: TRAVEL MOBILE APP
      ══════════════════════════════════════════ */}
      <section id="travel-mobile" className="py-24 md:py-32 border-b border-[#d4af37]/15 bg-[#160d08]/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="mb-14">
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#d4af37] block">
              FLAGSHIP ARCHITECTURE 02 / MOBILE APPS
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-normal text-[#fdfbf7] mt-3">
              Custom Mobile Apps for Modern Travel Businesses
            </h2>
            <p className="text-[#c5b29c] text-base md:text-lg max-w-3xl mt-3 font-light">
              Transform one-time tourists into loyal lifelong clients with a luxury branded iOS and Android mobile app crafted specifically for your travel agency.
            </p>
          </div>

          <div className="rounded-2xl border border-[#d4af37]/25 bg-gradient-to-br from-[#1c100a] via-[#170d08] to-[#120a06] p-8 md:p-12 relative overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.7)]">
            
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Mobile App Specs */}
              <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#2d180f] border border-[#d4af37]/30 text-[#f5d77f] font-mono text-xs">
                  <Smartphone size={13} />
                  Native iOS &amp; Android Experience
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif text-[#fdfbf7]">
                  Your travel brand directly in your customer's pocket—24/7.
                </h3>

                <p className="text-sm sm:text-base text-[#c5b29c] leading-relaxed font-light">
                  Give your travelers a premium five-star digital concierge experience. From viewing real-time gate changes to downloading offline boarding passes and chatting with your agents, our custom mobile apps boost repeat booking frequency by over 40%.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-[#24140c]/80 border border-[#d4af37]/20">
                    <div className="text-sm font-serif font-semibold text-[#fae8b2] mb-1">Live Flight Tracking</div>
                    <p className="text-xs text-[#a99583]">Automatic gate updates, baggage claim alerts, and departure countdowns via push alerts.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#24140c]/80 border border-[#d4af37]/20">
                    <div className="text-sm font-serif font-semibold text-[#fae8b2] mb-1">Offline Itinerary Wallet</div>
                    <p className="text-xs text-[#a99583]">Vouchers, hotel reservations, and emergency helpline access without international data roaming.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#24140c]/80 border border-[#d4af37]/20">
                    <div className="text-sm font-serif font-semibold text-[#fae8b2] mb-1">1-Click Booking &amp; Pay</div>
                    <p className="text-xs text-[#a99583]">Frictionless Apple Pay, Google Pay, and saved traveler passports for instantaneous booking.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#24140c]/80 border border-[#d4af37]/20">
                    <div className="text-sm font-serif font-semibold text-[#fae8b2] mb-1">In-App Concierge Chat</div>
                    <p className="text-xs text-[#a99583]">Direct WhatsApp or in-app live chat connecting VIP travelers to your concierge team.</p>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-2">
                  <span className="font-mono text-[10px] uppercase text-[#a99583] py-1 mr-2">Built With:</span>
                  {["React Native", "Flutter", "iOS Swift / Kotlin", "Push Notification Service", "Encrypted Vault"].map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-[#26150d] border border-[#d4af37]/25 text-[#f5d77f] font-mono text-[11px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href="https://calendly.com/neurodyn-info"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#fae8b2] hover:text-[#fdfbf7] group"
                  >
                    <span>Discuss Your Travel App Project</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-[#d4af37]" />
                  </a>
                </div>

              </div>

              {/* Right Column: Mobile App Stock Photo */}
              <div className="lg:col-span-5 order-1 lg:order-2">
                <div className="rounded-xl overflow-hidden border border-[#d4af37]/30 relative aspect-[4/5] shadow-2xl group">
                  <img
                    src="/images/travel-mobile.jpg"
                    alt="Travel Business Mobile App in Hand"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120a06] via-[#120a06]/30 to-transparent" />
                  
                  <div className="absolute top-4 right-4 px-3 py-1 rounded bg-[#180e08]/90 border border-[#d4af37]/40 text-[#fae8b2] font-mono text-[10px] uppercase">
                    iOS &amp; Android Ready
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#180e08]/95 border border-[#d4af37]/35 backdrop-blur-md">
                    <div className="flex items-center gap-2.5 text-xs text-[#fae8b2] font-semibold mb-1">
                      <Sparkles size={14} className="text-[#d4af37]" />
                      Custom White-Label Branding
                    </div>
                    <p className="text-[11px] text-[#bda692] leading-relaxed">
                      Deployed directly under your agency's Apple App Store and Google Play Developer accounts.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          05. SHOWCASE 3 & 4: AI CRM & DATA PIPELINES
      ══════════════════════════════════════════ */}
      <section id="ai-systems" className="py-24 md:py-32 border-b border-[#d4af37]/15">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="mb-14">
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#d4af37] block">
              ENGINEERED CASE STUDIES / AI &amp; DATA
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-normal text-[#fdfbf7] mt-3">
              Proven Enterprise AI Implementations
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Case Study 1: Salon Booking & CRM */}
            <div className="rounded-2xl border border-[#d4af37]/25 bg-gradient-to-br from-[#1c100a] to-[#120a06] p-8 relative overflow-hidden flex flex-col justify-between shadow-xl group">
              <div className="space-y-6">
                <div className="rounded-xl overflow-hidden aspect-[16/9] border border-[#d4af37]/20 relative">
                  <img
                    src="/images/salon-crm.jpg"
                    alt="AI Salon Booking and CRM System"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120a06] via-[#120a06]/30 to-transparent" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#180e08]/90 border border-[#d4af37]/30 text-[#fae8b2] font-mono text-[10px]">
                    CONCURRENCY LOCKING
                  </div>
                </div>

                <div className="flex items-baseline gap-3">
                  <span className="text-4xl sm:text-5xl font-serif font-light text-[#fae8b2]">15%</span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#d4af37]">
                    Daily Revenue Leakage Prevented
                  </span>
                </div>

                <h3 className="text-xl font-serif font-semibold text-[#fdfbf7]">
                  AI-Driven Salon Booking &amp; CRM Engine
                </h3>

                <p className="text-xs sm:text-sm text-[#bda692] leading-relaxed font-light">
                  Appointment businesses suffer heavy revenue loss from double bookings and manual phone scheduling. We engineered an isolated booking engine with sub-second Redis slot locking, automated WhatsApp reminders, and real-time staff scheduling.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {["Next.js", "Supabase PostgreSQL", "Redis Live Locks", "WhatsApp API"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-[#24140c] border border-[#d4af37]/20 text-[#f5d77f] font-mono text-[11px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#d4af37]/15">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#d4af37] hover:text-[#fae8b2]"
                >
                  Request System Architecture Blueprint →
                </a>
              </div>
            </div>

            {/* Case Study 2: Enterprise Data Pipelines */}
            <div className="rounded-2xl border border-[#d4af37]/25 bg-gradient-to-br from-[#1c100a] to-[#120a06] p-8 relative overflow-hidden flex flex-col justify-between shadow-xl group">
              <div className="space-y-6">
                <div className="rounded-xl overflow-hidden aspect-[16/9] border border-[#d4af37]/20 relative">
                  <img
                    src="/images/analytics-dashboard.jpg"
                    alt="Enterprise Analytics and Automated Data Pipelines"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120a06] via-[#120a06]/30 to-transparent" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#180e08]/90 border border-[#d4af37]/30 text-[#fae8b2] font-mono text-[10px]">
                    AUTOMATED ETL
                  </div>
                </div>

                <div className="flex items-baseline gap-3">
                  <span className="text-4xl sm:text-5xl font-serif font-light text-[#fae8b2]">100%</span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#d4af37]">
                    Manual Spreadsheet Elimination
                  </span>
                </div>

                <h3 className="text-xl font-serif font-semibold text-[#fdfbf7]">
                  Data Storytelling &amp; Real-Time Pipelines
                </h3>

                <p className="text-xs sm:text-sm text-[#bda692] leading-relaxed font-light">
                  Transform disparate business databases into crystal-clear executive decision cockpits. We automate data ingestion, cleanse corrupted data sets, and deliver instantaneous live revenue dashboards that empower leadership.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {["Python Pipelines", "SQL ETL", "PowerBI & Looker", "Postgres"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-[#24140c] border border-[#d4af37]/20 text-[#f5d77f] font-mono text-[11px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#d4af37]/15">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#d4af37] hover:text-[#fae8b2]"
                >
                  Schedule Data Consultation →
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section id="products" className="py-24 md:py-32 border-b border-[#d4af37]/15">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14">
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#d4af37] block">
              OUR PRODUCTS &amp; PLATFORMS
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-normal text-[#fdfbf7] mt-3">
              Purpose-Built Platforms for Modern Travel &amp; Commerce
            </h2>
            <p className="text-[#c5b29c] text-base md:text-lg max-w-3xl mt-3 font-light">
              From enterprise B2B aggregation infrastructure to consumer mobile applications and high-concurrency CRM engines.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <article className="rounded-2xl border border-[#d4af37]/25 bg-gradient-to-br from-[#1c100a] to-[#120a06] p-7 md:p-8 shadow-xl group flex flex-col justify-between">
              <div>
                <div className="rounded-xl overflow-hidden aspect-[16/9] border border-[#d4af37]/20 mb-6">
                  <img
                    src="/images/travel-engine.jpg"
                    alt="NeuroDyn Nexus B2B travel aggregator platform"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#d4af37]">
                    B2B Travel Aggregator SaaS
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#2c180e] text-[#f5d77f] font-mono text-[9px] uppercase">
                    Flagship Platform
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-semibold text-[#fdfbf7]">
                  NeuroDyn Nexus
                </h3>
                <p className="text-sm text-[#bda692] leading-relaxed mt-3">
                  Enterprise B2B travel technology aggregator normalizing wholesale feeds from TBO, Verteil NDC, and GDS into unified APIs, sub-agent credit portals, and corporate travel booking engines.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#d4af37]/15">
                <a
                  href="#aggregator"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-[#d4af37] hover:text-[#fae8b2]"
                >
                  View Nexus Architecture →
                </a>
              </div>
            </article>

            <article className="rounded-2xl border border-[#d4af37]/25 bg-gradient-to-br from-[#1c100a] to-[#120a06] p-7 md:p-8 shadow-xl group flex flex-col justify-between">
              <div>
                <div className="rounded-xl overflow-hidden aspect-[16/9] border border-[#d4af37]/20 mb-6">
                  <img
                    src="/images/travel-mobile.jpg"
                    alt="Toorbook travel booking app"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#d4af37]">
                  Travel Technology &amp; Apps
                </span>
                <h3 className="text-2xl font-serif font-semibold text-[#fdfbf7] mt-2">
                  Toorbook - Travel App
                </h3>
                <p className="text-sm text-[#bda692] leading-relaxed mt-3">
                  Give travelers and sub-agents a streamlined way to discover, book, and manage flights, hotels, and tours with branded web and native mobile apps featuring offline vouchers.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#d4af37]/15">
                <a
                  href="#travel-mobile"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-[#d4af37] hover:text-[#fae8b2]"
                >
                  Explore Mobile Features →
                </a>
              </div>
            </article>

            <article className="rounded-2xl border border-[#d4af37]/25 bg-gradient-to-br from-[#1c100a] to-[#120a06] p-7 md:p-8 shadow-xl group flex flex-col justify-between">
              <div>
                <div className="rounded-xl overflow-hidden aspect-[16/9] border border-[#d4af37]/20 mb-6">
                  <img
                    src="/images/salon-crm.jpg"
                    alt="GrooMe salon CRM and booking product"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#d4af37]">
                  Appointment &amp; CRM Engine
                </span>
                <h3 className="text-2xl font-serif font-semibold text-[#fdfbf7] mt-2">
                  GrooMe - Salon CRM
                </h3>
                <p className="text-sm text-[#bda692] leading-relaxed mt-3">
                  Manage salon appointments, staff schedules, and customer relationships with sub-second Redis slot locking and automated WhatsApp engagement.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#d4af37]/15">
                <a
                  href="#ai-systems"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-[#d4af37] hover:text-[#fae8b2]"
                >
                  Inspect CRM Concurrency →
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          06. CONSULTING ENGAGEMENT & CONTACT
      ══════════════════════════════════════════ */}
      <section id="contact" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-2xl border border-[#d4af37]/30 bg-gradient-to-br from-[#20120b] via-[#190d08] to-[#120a06] p-8 md:p-14 relative overflow-hidden shadow-2xl">
            
            {/* Ambient Gold Glow Behind Form */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#d4af37]/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="grid lg:grid-cols-2 gap-12 items-start relative z-10">
              
              {/* Left Column: Direct Calendly & Coordinates */}
              <div>
                <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#d4af37] block mb-3">
                  INITIATE A CONVERSATION &amp; PARTNERSHIPS
                </span>
                <h2 className="text-3xl md:text-4xl font-serif text-[#fdfbf7] mb-4">
                  Partner with our engineering team.
                </h2>
                <p className="text-[#c5b29c] text-sm md:text-base leading-relaxed mb-8 max-w-md font-light">
                  Whether you are an API supply partner (TBO, Verteil, GDS) discussing aggregator certification, or a travel business seeking a high-performance B2B aggregation platform, we are ready to connect.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-sm text-[#ebdcc7]">
                    <div className="w-8 h-8 rounded-md bg-[#2d180f] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                      <Phone size={14} />
                    </div>
                    <span>+91-{brand.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#ebdcc7]">
                    <div className="w-8 h-8 rounded-md bg-[#2d180f] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                      <Mail size={14} />
                    </div>
                    <span>{brand.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#ebdcc7]">
                    <div className="w-8 h-8 rounded-md bg-[#2d180f] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                      <MapPin size={14} />
                    </div>
                    <span>Lucknow, Uttar Pradesh, India</span>
                  </div>
                </div>

                <a
                  href="https://calendly.com/neurodyn-info"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 bg-gradient-to-r from-[#d4af37] via-[#f5d77f] to-[#c59b27] text-[#120a06] font-bold text-sm rounded-lg transition-all duration-300 hover:brightness-110 shadow-[0_4px_18px_rgba(212,175,55,0.35)] inline-flex items-center gap-2"
                >
                  <Sparkles size={16} />
                  Book Free 15-Min Strategy Call
                  <ArrowRight size={14} />
                </a>
              </div>

              {/* Right Column: Direct Dispatch Form */}
              <div className="border-t lg:border-t-0 lg:border-l border-[#d4af37]/20 pt-8 lg:pt-0 lg:pl-12">
                <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#d4af37] block mb-6">
                  PROJECT SPECIFICATION FORM
                </span>

                <form onSubmit={handleContact} className="space-y-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name / Company"
                      required
                      className="bg-[#180e08]/80 border-[#d4af37]/25 text-[#fcf8ee] placeholder:text-[#8e7a68] rounded-lg focus:border-[#d4af37] focus:ring-0 focus-visible:ring-0 text-sm h-12"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Work Email Address"
                      required
                      className="bg-[#180e08]/80 border-[#d4af37]/25 text-[#fcf8ee] placeholder:text-[#8e7a68] rounded-lg focus:border-[#d4af37] focus:ring-0 focus-visible:ring-0 text-sm h-12"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Tell us about your requirements (e.g. B2B aggregator integration, API supply partnership, custom booking engine, or look-to-book caching)..."
                      rows={4}
                      required
                      className="bg-[#180e08]/80 border-[#d4af37]/25 text-[#fcf8ee] placeholder:text-[#8e7a68] rounded-lg focus:border-[#d4af37] focus:ring-0 focus-visible:ring-0 text-sm resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-[#381e11] to-[#27140b] hover:from-[#4a2816] hover:to-[#381e11] border border-[#d4af37]/40 hover:border-[#d4af37] text-[#fae8b2] font-semibold text-sm rounded-lg transition-all duration-300 shadow-md hover:shadow-[0_0_15px_rgba(212,175,55,0.25)]"
                  >
                    Transmit Project Inquiry →
                  </button>
                </form>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FOOTER (Gold & Dark Chocolate)
      ══════════════════════════════════════════ */}
      <footer className="border-t border-[#d4af37]/15 py-14 bg-[#0e0704]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-center gap-4">
              <Logo showTagline={true} />
            </div>

            <div className="flex flex-wrap gap-8 text-xs font-mono text-[#bda692]">
              <a href="#aggregator" className="hover:text-[#fae8b2] transition-colors">
                B2B Aggregator
              </a>
              <a href="#partnerships" className="hover:text-[#fae8b2] transition-colors">
                Supply Network
              </a>
              <a href="#travel-engine" className="hover:text-[#fae8b2] transition-colors">
                Travel Engines
              </a>
              <a href="#travel-mobile" className="hover:text-[#fae8b2] transition-colors">
                Travel Apps
              </a>
              <a href="/services" className="hover:text-[#fae8b2] transition-colors">
                Services
              </a>
              <a href="/about" className="hover:text-[#fae8b2] transition-colors">
                About
              </a>
              <a href="/contact" className="hover:text-[#fae8b2] transition-colors">
                Contact
              </a>
              <a
                href="https://calendly.com/neurodyn-info"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#d4af37] transition-colors font-semibold"
              >
                Calendly
              </a>
            </div>

            <div className="text-xs font-mono text-[#8c7866]">
              © {new Date().getFullYear()} {brand.name}. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Connector with Gold Styling */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={`https://wa.me/91${brand.phone}?text=Hi%20NeuroDyn,%20I'm%20interested%20in%20a%20custom%20travel%20engine%20or%20software%20solution`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-gradient-to-br from-[#2a170e] to-[#170c07] border border-[#d4af37]/60 hover:border-[#d4af37] text-[#fae8b2] hover:text-[#fdfbf7] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.8)] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
          aria-label="Direct WhatsApp Consultation"
        >
          <MessageCircle size={20} className="text-[#d4af37]" />
        </a>
      </div>
    </div>
  );
}
