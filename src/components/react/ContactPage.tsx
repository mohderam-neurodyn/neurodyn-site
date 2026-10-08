"use client";

import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Logo from "@/components/Logo";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Sparkles,
  Plane,
  Smartphone,
  Cpu,
  Clock,
  ArrowRight,
} from "lucide-react";

export default function ContactPage() {
  const brand = {
    name: "NeuroDyn Tech Solutions",
    tagline: "Innovate. Integrate. Elevate.",
    phone: "9369479090",
    email: "info@neurodyn.in",
  };

  const [selectedService, setSelectedService] = useState("Travel Booking Engine");

  function handleContact(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string) || "";
    const email = (data.get("email") as string) || "";
    const phone = (data.get("phone") as string) || "";
    const service = selectedService;
    const message = (data.get("message") as string) || "";

    const subject = encodeURIComponent(`Project Inquiry: ${service} - ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nScope: ${service}\n\nProject Details:\n${message}`
    );
    window.location.href = `mailto:${brand.email}?subject=${subject}&body=${body}`;
  }

  function handleWhatsAppClick() {
    window.open(
      `https://wa.me/91${brand.phone}?text=Hi%20NeuroDyn,%20I'm%20interested%20in%20a%20project%20consultation`,
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
              Direct Engineering Dispatch
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-[#fdfbf7] leading-tight">
              Initiate Your <span className="text-gradient-gold">Project</span>
            </h1>
            <p className="text-lg md:text-xl text-[#c5b29c] font-light leading-relaxed">
              Have a custom travel engine, travel mobile app, or AI data requirement? Let's architect a solution that drives measurable enterprise outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-24 border-b border-[#d4af37]/15">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Left Column: Direct Coordinates & Calendly */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#d4af37] block mb-2">
                  DIRECT CONTACT CHANNELS
                </span>
                <h2 className="text-2xl md:text-3xl font-serif text-[#fdfbf7] mb-3">
                  Reach Our Technical Leads
                </h2>
                <p className="text-sm text-[#c5b29c] font-light leading-relaxed">
                  We respond to all verified project specifications within 24 hours. For immediate strategy reviews, schedule a live briefing via Calendly.
                </p>
              </div>

              {/* Coordinates List */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#1c100a] border border-[#d4af37]/20 flex items-center gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#2e190e] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] flex-shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase text-[#a99583]">Direct Line / WhatsApp</div>
                    <a
                      href={`tel:+91${brand.phone}`}
                      className="text-sm font-semibold text-[#fcf8ee] hover:text-[#fae8b2] transition-colors"
                    >
                      +91-{brand.phone}
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#1c100a] border border-[#d4af37]/20 flex items-center gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#2e190e] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase text-[#a99583]">Executive Email</div>
                    <a
                      href={`mailto:${brand.email}`}
                      className="text-sm font-semibold text-[#fcf8ee] hover:text-[#fae8b2] transition-colors"
                    >
                      {brand.email}
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#1c100a] border border-[#d4af37]/20 flex items-center gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#2e190e] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] flex-shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase text-[#a99583]">Engineering Headquarters</div>
                    <span className="text-sm text-[#fcf8ee]">Lucknow, Uttar Pradesh, India</span>
                  </div>
                </div>
              </div>

              {/* Calendly Booking Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#24140c] via-[#1c100a] to-[#120a06] border border-[#d4af37]/30 shadow-xl">
                <div className="flex items-center gap-2 text-[#d4af37] font-mono text-xs uppercase tracking-wider mb-2">
                  <Clock size={14} />
                  Fast Track Consultation
                </div>
                <h3 className="text-lg font-serif text-[#fdfbf7] mb-2">
                  Book a 15-Min System Architecture Call
                </h3>
                <p className="text-xs text-[#c5b29c] leading-relaxed mb-4 font-light">
                  Skip email ping-pong. Pick a time on our calendar to discuss technical feasibility and architectural design directly.
                </p>
                <a
                  href="https://calendly.com/neurodyn-info"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-gradient-to-r from-[#d4af37] via-[#f5d77f] to-[#c59b27] text-[#120a06] font-bold text-xs rounded-lg transition-all duration-300 hover:brightness-110 flex items-center justify-center gap-2"
                >
                  <Sparkles size={14} />
                  Select Time on Calendly
                  <ArrowRight size={13} />
                </a>
              </div>

              {/* WhatsApp Quick Chat */}
              <div className="p-4 rounded-xl bg-[#1c100a] border border-[#d4af37]/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#2a170e] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                    <MessageCircle size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#fcf8ee]">WhatsApp Messenger</div>
                    <div className="text-[10px] text-[#a99583]">Immediate team response</div>
                  </div>
                </div>
                <button
                  onClick={handleWhatsAppClick}
                  className="px-3.5 py-1.5 bg-[#2b170e] hover:bg-[#391f13] border border-[#d4af37]/30 text-[#fae8b2] text-xs font-semibold rounded-md transition-colors"
                >
                  Chat Now
                </button>
              </div>

            </div>

            {/* Right Column: Project Specification Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-[#d4af37]/30 bg-gradient-to-br from-[#1c100a] via-[#160d08] to-[#120a06] p-8 md:p-10 shadow-2xl">
                <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#d4af37] block mb-2">
                  PROJECT SPECIFICATION FORM
                </span>
                <h3 className="text-2xl font-serif text-[#fdfbf7] mb-2">
                  Transmit Project Requirements
                </h3>
                <p className="text-xs text-[#c5b29c] mb-6 font-light">
                  Select your core scope and outline your system needs.
                </p>

                <form onSubmit={handleContact} className="space-y-5">
                  {/* Scope Selector Buttons */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#a99583] mb-2">
                      Primary Project Scope *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {[
                        "Travel Booking Engine",
                        "Travel Mobile App",
                        "AI & Custom CRM",
                        "Data Pipelines / ETL",
                        "Custom Web Platform",
                        "General Inquiry",
                      ].map((item) => (
                        <button
                          type="button"
                          key={item}
                          onClick={() => setSelectedService(item)}
                          className={`px-3 py-2 text-xs rounded-lg border transition-all text-left ${
                            selectedService === item
                              ? "bg-[#2d180f] border-[#d4af37] text-[#fae8b2] font-semibold shadow-sm"
                              : "bg-[#180e08] border-[#d4af37]/15 text-[#a99583] hover:border-[#d4af37]/40"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#a99583] mb-1.5">
                      Your Name / Organization *
                    </label>
                    <Input
                      name="name"
                      placeholder="e.g. Alexander Vance (Vance Luxury Travel)"
                      required
                      className="bg-[#180e08]/90 border-[#d4af37]/25 text-[#fcf8ee] placeholder:text-[#786656] rounded-lg focus:border-[#d4af37] focus:ring-0 focus-visible:ring-0 text-sm h-11"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#a99583] mb-1.5">
                        Work Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="alexander@vancetravel.com"
                        required
                        className="bg-[#180e08]/90 border-[#d4af37]/25 text-[#fcf8ee] placeholder:text-[#786656] rounded-lg focus:border-[#d4af37] focus:ring-0 focus-visible:ring-0 text-sm h-11"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#a99583] mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        placeholder="+1 555-0192 / +91 98765 43210"
                        className="bg-[#180e08]/90 border-[#d4af37]/25 text-[#fcf8ee] placeholder:text-[#786656] rounded-lg focus:border-[#d4af37] focus:ring-0 focus-visible:ring-0 text-sm h-11"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#a99583] mb-1.5">
                      Project Architecture Scope &amp; Deliverables *
                    </label>
                    <Textarea
                      name="message"
                      placeholder="Please share details: What suppliers or GDS do you need (Amadeus, Sabre, Hotelbeds)? Do you require iOS/Android mobile apps? Target timeline and milestones..."
                      rows={5}
                      required
                      className="bg-[#180e08]/90 border-[#d4af37]/25 text-[#fcf8ee] placeholder:text-[#786656] rounded-lg focus:border-[#d4af37] focus:ring-0 focus-visible:ring-0 text-sm resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-[#d4af37] via-[#f5d77f] to-[#c59b27] text-[#120a06] font-bold text-sm rounded-lg transition-all duration-300 hover:brightness-110 shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send size={15} />
                    Dispatch Technical Inquiry
                  </button>
                </form>
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
