"use client";
import React, { useMemo } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Logo from "@/components/Logo";
import {
  Code,
  Smartphone,
  Cog,
  Users,
  Rocket,
  Phone,
  Mail,
  MapPin,
  Zap,
  Shield,
  TrendingUp,
  Clock,
  Award,
  CheckCircle,
  Star,
  ArrowRight,
  MessageCircle,
  Briefcase,
  BarChart3,
  Server as ServerIcon,
  Database,
  Layout,
  Play
} from "lucide-react";

export default function NeuroDynSite() {
  const brand = useMemo(
    () => ({
      name: "NeuroDyn Tech Solutions",
      tagline: "High-Conversion AI & Data Analytics",
      heroTagline: "We Build AI-Powered Applications & Data Dashboards That Automate Business Operations.",
      heroSubheading: "Accelerate your workflows with bespoke full-stack web applications, real-time analytics pipelines, and automated CRM systems built in days—not months.",
      impactTagline: "Premium AI Engineering & Data-Driven Solutions",
      primary: "#0B3C5D",
      accent: "#3B82F6",
      secondary: "#8B5CF6",
      muted: "#64748B",
      phone: "9369479090",
      email: "info@neurodyn.in",
    }),
    []
  );

  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Custom AI Web Implementations",
      desc: "Focus on rapid MVP deployment, automated user flows, and secure cloud setups.",
      features: ["Next.js", "React", "Tailwind", "Supabase"],
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Storytelling & Infrastructure",
      desc: "Focus on cleaning messy enterprise databases, building live analytics dashboards, and custom business report automation.",
      features: ["Python", "SQL", "PowerBI", "Redis"],
    }
  ];

  const caseStudies = [
    {
      title: "AI-Driven Salon Booking & CRM Engine",
      problem: "Local appointment-based businesses lose up to 15% of daily revenue due to double-booking errors and manual spreadsheet tracking.",
      solution: "An isolated, ultra-fast booking workflow built using Next.js for high-speed UI rendering, Supabase (PostgreSQL) for relational data persistence, and a dedicated Redis layer for live appointment slot locking.",
      videoPlaceholder: "Watch 2-Min System Architecture Walkthrough",
      videoLink: "#"
    }
  ];

  function handleContact(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const data = new FormData(form);
    const name = (data.get("name") as string) || "";
    const email = (data.get("email") as string) || "";
    const message = (data.get("message") as string) || "";
    const subject = encodeURIComponent(`New enquiry - ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
    window.location.href = `mailto:info@neurodyn.in?subject=${subject}&body=${body}`;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950">
      {/* Background Pattern */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-200/30 to-purple-200/30 dark:from-blue-900/20 dark:to-purple-900/20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-tr from-blue-300/30 to-indigo-200/30 dark:from-blue-800/20 dark:to-indigo-900/20 blur-3xl"></div>
      </div>

      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-reveal">
              <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Available for Projects</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700 dark:from-blue-400 dark:to-purple-500 leading-tight mb-6">
                {brand.heroTagline}
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {brand.heroSubheading}
              </p>

              <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-full px-4 py-2 mb-8">
                <span className="text-sm font-medium text-blue-700 dark:text-blue-300">{brand.impactTagline}</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl px-8 py-4 text-lg font-medium shadow-lg" asChild>
                  <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer">Book a Free 15-Min Strategy Call</a>
                </Button>
                <Button variant="outline" className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl px-8 py-4 text-lg font-medium" asChild>
                  <a href="#case-studies">View Live MVPs</a>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">Fast</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">MVP Delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">100%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Data Driven</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">Automated</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Workflows</div>
                </div>
              </div>
            </div>

            <div className="scroll-reveal relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-blue-600/20 dark:to-purple-600/20 rounded-3xl blur-3xl"></div>
                <div className="relative glass rounded-3xl p-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-2xl p-4 border border-blue-200/50 dark:border-blue-700/50">
                      <Code className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-2" />
                      <div className="font-semibold text-gray-900 dark:text-white">Full-Stack Web</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Next.js & React</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-2xl p-4 border border-purple-200/50 dark:border-purple-700/50">
                      <ServerIcon className="h-8 w-8 text-purple-600 dark:text-purple-400 mb-2" />
                      <div className="font-semibold text-gray-900 dark:text-white">Automated CRM</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Supabase & Redis</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 rounded-2xl p-4 border border-green-200/50 dark:border-green-700/50">
                      <Zap className="h-8 w-8 text-green-600 dark:text-green-400 mb-2" />
                      <div className="font-semibold text-gray-900 dark:text-white">AI Integrations</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Custom Workflows</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-2xl p-4 border border-blue-200/50 dark:border-blue-700/50">
                      <Database className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-2" />
                      <div className="font-semibold text-gray-900 dark:text-white">Data Analytics</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">PowerBI & Python</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Stack Section */}
      <section id="services" className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Core Capabilities</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Premium data-driven engineering that scales your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {services.map((service) => (
              <div className="scroll-reveal" key={service.title}>
                <Card className="h-full glass hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 rounded-2xl overflow-hidden group">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl flex items-center justify-center mb-6">
                      <div className="text-blue-600 dark:text-blue-400">{service.icon}</div>
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white leading-tight">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 text-lg">{service.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feat) => (
                        <span key={feat} className="bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 px-4 py-1.5 rounded-full text-sm font-semibold border border-blue-100 dark:border-blue-800">
                          {feat}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Proof of Concept Section */}
      <section id="case-studies" className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Proof of Concept</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Real-world implementations of our high-speed, data-driven architecture.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {caseStudies.map((study) => (
              <div className="scroll-reveal" key={study.title}>
                <Card className="glass rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group border-2 border-blue-100/50 dark:border-blue-900/50">
                  <div className="h-72 bg-gradient-to-br from-slate-900 to-blue-900 flex flex-col items-center justify-center relative overflow-hidden">
                    {/* Abstract tech background */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                    </div>
                    <a href={study.videoLink} target="_blank" rel="noopener noreferrer" className="z-10 flex flex-col items-center group-hover:scale-105 transition-transform duration-300 cursor-pointer">
                      <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl mb-6 text-white border border-white/20 hover:bg-white/20 transition-colors">
                         <Play className="w-10 h-10 ml-2 fill-current" />
                      </div>
                      <span className="font-semibold text-lg text-white bg-black/40 px-6 py-3 rounded-full backdrop-blur-md shadow-lg border border-white/10">
                        {study.videoPlaceholder}
                      </span>
                    </a>
                  </div>
                  <CardHeader className="pt-10 px-8 lg:px-12">
                    <CardTitle className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">{study.title}</CardTitle>
                    <div className="space-y-8">
                      <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-2xl border border-red-100 dark:border-red-900/30">
                        <h4 className="text-xl font-bold text-red-600 dark:text-red-400 mb-3 flex items-center gap-3">
                           <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span> Problem Statement
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">{study.problem}</p>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/10 p-6 rounded-2xl border border-green-100 dark:border-green-900/30">
                        <h4 className="text-xl font-bold text-green-600 dark:text-green-400 mb-3 flex items-center gap-3">
                           <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span> Engineered Solution
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">{study.solution}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="px-8 lg:px-12 pb-10 pt-4 text-center">
                    <div className="flex flex-wrap justify-center gap-3">
                       <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mr-2 self-center">Powered by:</span>
                       {["Next.js", "Supabase", "Redis"].map(tech => (
                         <span key={tech} className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-md text-sm font-semibold border border-gray-200 dark:border-gray-700">
                           {tech}
                         </span>
                       ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Ready to Automate Your Business Operations?</h2>
            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">Stop losing revenue to manual processes. Let's build a data-driven system that scales with your ambition.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-700 hover:bg-gray-100 rounded-xl px-10 py-6 text-xl font-bold shadow-lg transition-transform hover:scale-105" asChild>
                <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer">Book a Free 15-Min Strategy Call</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Let's discuss your project requirements and how we can help you achieve your business goals
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                    <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Phone</div>
                    <div className="text-gray-600 dark:text-gray-400">+91-{brand.phone}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Email</div>
                    <div className="text-gray-600 dark:text-gray-400">{brand.email}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Location</div>
                    <div className="text-gray-600 dark:text-gray-400">Lucknow, Uttar Pradesh, India</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="glass rounded-2xl p-8">
              <form onSubmit={handleContact} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    required
                    className="bg-white/50 dark:bg-gray-700/50 border-gray-300 dark:border-gray-600 placeholder:text-gray-500 dark:placeholder:text-gray-400 rounded-xl px-4 py-3 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    required
                    className="bg-white/50 dark:bg-gray-700/50 border-gray-300 dark:border-gray-600 placeholder:text-gray-500 dark:placeholder:text-gray-400 rounded-xl px-4 py-3 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your project"
                    rows={5}
                    required
                    className="bg-white/50 dark:bg-gray-700/50 border-gray-300 dark:border-gray-600 placeholder:text-gray-500 dark:placeholder:text-gray-400 rounded-xl px-4 py-3 text-gray-900 dark:text-white"
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl px-6 py-3 font-medium">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="mb-4">
                <Logo showTagline={false} />
              </div>
              <p className="text-gray-400 text-sm">
                High-Conversion AI & Data Analytics. Your Trusted Technology Partner.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/services" className="hover:text-white transition">AI Web Implementations</a></li>
                <li><a href="/services" className="hover:text-white transition">Data Dashboards</a></li>
                <li><a href="/services" className="hover:text-white transition">CRM Automation</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/about" className="hover:text-white transition">About Us</a></li>
                <li><a href="/services" className="hover:text-white transition">Core Capabilities</a></li>
                <li><a href="#case-studies" className="hover:text-white transition">Case Studies</a></li>
                <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>+91-{brand.phone}</li>
                <li>{brand.email}</li>
                <li>Lucknow, UP, India</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <div> {new Date().getFullYear()} {brand.name}. All rights reserved.</div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a href="https://wa.me/919369479090?text=Hi,%20I%27m%20interested%20in%20your%20IT%20services" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white rounded-xl px-8 py-4 text-lg font-medium inline-flex items-center justify-center">
          <MessageCircle className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
}
