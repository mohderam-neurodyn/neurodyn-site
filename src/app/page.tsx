"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Cpu,
  Brain,
  ShieldCheck,
  Cog,
  SunMedium,
  Boxes,
  Rocket,
  Phone,
  Mail,
  Globe2,
  Zap,
  Battery,
  Car,
  Wrench,
  Network,
  Cloud,
  Target,
  Eye,
  Award,
  CheckCircle,
} from "lucide-react";
import Chatbot from "@/components/Chatbot";
export default function NeuroDynSite() {
  const brand = useMemo(
    () => ({
      name: "NeuroDyn Tech Solution",
      tagline: "Powering Intelligent Mobility & Smart Technology Systems",
      primary: "#1B2B50",
      accent: "#3ECF8E",
      muted: "#A0A0A0",
    }),
    []
  );

  const services = [
    {
      icon: <Car className="h-6 w-6" />,
      title: "Hybrid & EV Engineering",
      desc: "Proprietary series hybrid architectures, sophisticated diesel-to-electric conversion systems, advanced powertrain integration, and next-generation battery technologies.",
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "EV Retrofit & Fleet Modernization",
      desc: "Strategic bus electrification programs, advanced drivetrain transformation, CAN communication protocols, and comprehensive diagnostic intelligence platforms.",
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI & Intelligent Systems",
      desc: "Machine learning-driven energy optimization algorithms, predictive analytics frameworks, autonomous mobility control systems, and smart transportation solutions.",
    },
    {
      icon: <Network className="h-6 w-6" />,
      title: "Embedded Systems & IoT",
      desc: "Enterprise-grade telematics platforms, real-time monitoring ecosystems, cloud-native connectivity solutions, and industrial IoT infrastructure.",
    },
    {
      icon: <SunMedium className="h-6 w-6" />,
      title: "Sustainable Energy Solutions",
      desc: "Solar-integrated power systems, intelligent charging networks, advanced energy efficiency algorithms, and renewable technology ecosystems.",
    },
    {
      icon: <Cog className="h-6 w-6" />,
      title: "R&D & Engineering Consultancy",
      desc: "Strategic technology roadmaps, proof-of-concept innovation labs, rigorous testing methodologies, and scalable manufacturing engineering support.",
    },
  ];

  const industries = [
    "Automotive & Mobility",
    "Fleet Operations",
    "Public Transportation",
    "Energy & Utilities",
    "Industrial IoT",
    "Smart Infrastructure",
  ];

  function handleContact(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const data = new FormData(form);
    const name = (data.get("name") as string) || "";
    const email = (data.get("email") as string) || "";
    const message = (data.get("message") as string) || "";
    const subject = encodeURIComponent(`New enquiry — ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
    window.location.href = `mailto:info@neurodyn.in?subject=${subject}&body=${body}`;
  }

  return (
    <div
      className="min-h-screen w-full text-white"
      style={{
        background: `radial-gradient(1200px 600px at 10% 0%, rgba(62,207,142,0.15), transparent 60%), 
                     radial-gradient(1000px 600px at 90% 10%, rgba(27,43,80,0.5), transparent 60%), 
                     linear-gradient(180deg, #0b1220 0%, #0b1220 100%)`,
      }}
    >
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/5 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div
              className="h-9 w-9 grid place-items-center rounded-2xl shadow-md"
              style={{ background: brand.accent }}
            >
              <Rocket className="h-5 w-5 text-black" />
            </div>
            <div>
              <div className="text-base font-semibold tracking-wide">
                {brand.name}
              </div>
              <div className="text-xs text-white/70 -mt-1">{brand.tagline}</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#services" className="hover:text-white transition">
              Solutions
            </a>
            <a href="#about" className="hover:text-white transition">
              Why Us
            </a>
            <a href="#collaboration" className="hover:text-white transition">
              Partnership
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <Button className="rounded-2xl" asChild>
              <a href="#contact">Get in touch</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-20 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Powering Intelligent Mobility &{" "}
              <span style={{ color: brand.accent }}>Smart Technology Systems</span>
            </h1>
            <p className="mt-4 text-white/80 text-lg">
              Pioneering next-generation mobility solutions through advanced hybrid architectures, 
              sophisticated EV retrofit technologies, and AI-driven energy optimization systems 
              that redefine sustainable transportation paradigms.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button className="rounded-2xl" asChild>
                <a href="#services">Explore Solutions</a>
              </Button>
              <Button
                variant="secondary"
                className="rounded-2xl bg-white/10 text-white hover:bg-white/20"
                asChild
              >
                <a href="#collaboration">Partner With Us</a>
              </Button>
            </div>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-white/60">
              {industries.map((i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-center"
                >
                  {i}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-400/20 to-blue-500/10 blur-2xl rounded-3xl" />
              <Card className="relative rounded-3xl bg-white/5 border-white/10 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-lg">What we do</CardTitle>
                </CardHeader>
                <CardContent className="grid sm:grid-cols-2 gap-4">
                  {services.slice(0, 4).map((s) => (
                    <div key={s.title} className="flex items-start gap-3">
                      <div className="rounded-xl bg-white/10 p-2">{s.icon}</div>
                      <div>
                        <div className="font-medium">{s.title}</div>
                        <div className="text-sm text-white/70">{s.desc}</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Engineering Excellence in Intelligent Mobility
          </h2>
          <p className="text-white/80 max-w-3xl mx-auto">
            NeuroDyn Technologies pioneers cutting-edge hybrid vehicle architectures, 
            revolutionary electric vehicle retrofit solutions, and AI-powered mobility ecosystems 
            that catalyze the evolution of sustainable transportation infrastructure.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="rounded-2xl bg-white/5 border-white/10 hover:bg-white/10 transition">
            <CardHeader className="text-center">
              <div className="mx-auto rounded-xl bg-white/10 p-3 w-fit mb-3">
                <Car className="h-6 w-6" />
              </div>
              <CardTitle className="text-lg">Hybrid Vehicle Architecture</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-white/70">
                Sophisticated series hybrid systems with intelligent power distribution architecture
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl bg-white/5 border-white/10 hover:bg-white/10 transition">
            <CardHeader className="text-center">
              <div className="mx-auto rounded-xl bg-white/10 p-3 w-fit mb-3">
                <Battery className="h-6 w-6" />
              </div>
              <CardTitle className="text-lg">EV Retrofit Engineering</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-white/70">
                Comprehensive drivetrain electrification and advanced battery integration solutions
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl bg-white/5 border-white/10 hover:bg-white/10 transition">
            <CardHeader className="text-center">
              <div className="mx-auto rounded-xl bg-white/10 p-3 w-fit mb-3">
                <Brain className="h-6 w-6" />
              </div>
              <CardTitle className="text-lg">Intelligent Mobility Systems</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-white/70">
                AI-driven optimization and autonomous mobility ecosystem solutions
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl bg-white/5 border-white/10 hover:bg-white/10 transition">
            <CardHeader className="text-center">
              <div className="mx-auto rounded-xl bg-white/10 p-3 w-fit mb-3">
                <Network className="h-6 w-6" />
              </div>
              <CardTitle className="text-lg">Software & IT Capabilities</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-white/70">
                Advanced embedded systems, telematics, and cloud analytics platforms
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-xl bg-white/10 p-2">
                <Eye className="h-6 w-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold">Our Vision</h2>
            </div>
            <p className="text-white/80 text-lg leading-relaxed">
              To spearhead the global mobility revolution through intelligent engineering excellence, 
              where every vehicle becomes a seamlessly integrated, sustainable, and autonomous system 
              powered by breakthrough AI and hybrid propulsion technologies.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-xl bg-white/10 p-2">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold">Our Mission</h2>
            </div>
            <ul className="space-y-3 text-white/80">
              <li className="flex gap-3">
                <CheckCircle className="mt-1 h-5 w-5 text-emerald-400 flex-shrink-0" />
                Engineer breakthrough hybrid and EV solutions that dramatically reduce emissions while optimizing total cost of ownership
              </li>
              <li className="flex gap-3">
                <CheckCircle className="mt-1 h-5 w-5 text-emerald-400 flex-shrink-0" />
                Seamlessly integrate cutting-edge AI and IoT technologies to create intelligent mobility ecosystems
              </li>
              <li className="flex gap-3">
                <CheckCircle className="mt-1 h-5 w-5 text-emerald-400 flex-shrink-0" />
                Deliver comprehensive engineering excellence from conceptual innovation through full-scale deployment
              </li>
              <li className="flex gap-3">
                <CheckCircle className="mt-1 h-5 w-5 text-emerald-400 flex-shrink-0" />
                Catalyze sustainable transportation transformation through innovative retrofit and modernization initiatives
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Core Business Domains */}
      <section id="services" className="mx-auto max-w-7xl px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Core Business Domains
          </h2>
          <p className="text-white/80 max-w-3xl mx-auto">
            Comprehensive engineering excellence spanning hybrid vehicle innovation, 
            EV modernization technologies, and intelligent mobility ecosystem solutions.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <Card
              key={s.title}
              className="rounded-2xl bg-white/5 border-white/10 hover:bg-white/10 transition"
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-white/10 p-2">{s.icon}</div>
                  <CardTitle className="text-lg">{s.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-white/70">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why NeuroDyn */}
      <section id="about" className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Why Choose NeuroDyn?
            </h2>
            <ul className="space-y-4 text-white/80">
              <li className="flex gap-3">
                <Award className="mt-1 h-5 w-5 text-emerald-400 flex-shrink-0" />
                <div>
                  <strong className="text-white">Proprietary Hybrid-Software Synergy:</strong> 
                  Revolutionary convergence of precision mechanical engineering and AI-driven software intelligence
                </div>
              </li>
              <li className="flex gap-3">
                <Zap className="mt-1 h-5 w-5 text-emerald-400 flex-shrink-0" />
                <div>
                  <strong className="text-white">Quantum Cost Optimization:</strong> 
                  AI-powered systems delivering up to 40% reduction in total cost of ownership through predictive intelligence
                </div>
              </li>
              <li className="flex gap-3">
                <Brain className="mt-1 h-5 w-5 text-emerald-400 flex-shrink-0" />
                <div>
                  <strong className="text-white">Cognitive Mobility Intelligence:</strong> 
                  Advanced predictive maintenance and autonomous energy management ecosystems
                </div>
              </li>
              <li className="flex gap-3">
                <SunMedium className="mt-1 h-5 w-5 text-emerald-400 flex-shrink-0" />
                <div>
                  <strong className="text-white">Sustainable Innovation Leadership:</strong> 
                  Carbon-neutral technology solutions driving the green mobility revolution
                </div>
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-400/20 to-blue-500/10 blur-2xl rounded-3xl" />
            <Card className="relative rounded-3xl bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-lg">Engineering Excellence</CardTitle>
              </CardHeader>
              <CardContent className="grid sm:grid-cols-2 gap-4 text-sm text-white/80">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  Full-spectrum hybrid vehicle innovation
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  AI-powered energy optimization frameworks
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  Enterprise fleet transformation expertise
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  Sustainable mobility ecosystem solutions
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Collaboration / Partnership */}
      <section id="collaboration" className="mx-auto max-w-7xl px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Partnership & Collaboration
          </h2>
          <p className="text-white/80 max-w-3xl mx-auto">
            Partner with us to accelerate the intelligent mobility revolution through strategic alliances 
            and collaborative engineering initiatives that shape the future of transportation.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="rounded-2xl bg-white/5 border-white/10 hover:bg-white/10 transition">
            <CardHeader className="text-center">
              <div className="mx-auto rounded-xl bg-white/10 p-3 w-fit mb-3">
                <Car className="h-6 w-6" />
              </div>
              <CardTitle className="text-base">Hybrid Architecture Development</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-white/70">
                Co-engineer breakthrough hybrid vehicle architectures
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl bg-white/5 border-white/10 hover:bg-white/10 transition">
            <CardHeader className="text-center">
              <div className="mx-auto rounded-xl bg-white/10 p-3 w-fit mb-3">
                <Wrench className="h-6 w-6" />
              </div>
              <CardTitle className="text-base">EV Retrofit Pilot Projects</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-white/70">
                Enterprise fleet electrification and modernization initiatives
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl bg-white/5 border-white/10 hover:bg-white/10 transition">
            <CardHeader className="text-center">
              <div className="mx-auto rounded-xl bg-white/10 p-3 w-fit mb-3">
                <Network className="h-6 w-6" />
              </div>
              <CardTitle className="text-base">Testing & Validation</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-white/70">
                Rigorous system validation and certification protocols
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl bg-white/5 border-white/10 hover:bg-white/10 transition">
            <CardHeader className="text-center">
              <div className="mx-auto rounded-xl bg-white/10 p-3 w-fit mb-3">
                <Cog className="h-6 w-6" />
              </div>
              <CardTitle className="text-base">Manufacturing Support</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-white/70">
                Advanced production engineering and quality excellence
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="text-center">
          <Button className="rounded-2xl" size="lg" asChild>
            <a href="#contact">Request Collaboration</a>
          </Button>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="mx-auto max-w-7xl px-4 pb-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-white/10 to-white/5 p-8 text-center">
          <h3 className="text-xl md:text-2xl font-semibold">
            Ready to Revolutionize Your Mobility Infrastructure?
          </h3>
          <p className="mt-2 text-white/80">
            Let&apos;s explore how our proprietary hybrid engineering and AI solutions can transform your operational paradigm.
          </p>
          <div className="mt-4 flex justify-center gap-3">
            <Button className="rounded-2xl" asChild>
              <a href="#contact">Start a Conversation</a>
            </Button>
            <Button
              variant="secondary"
              className="rounded-2xl bg-white/10 text-white hover:bg-white/20"
              asChild
            >
              <a href="#services">View Our Solutions</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Contact Us</h2>
            <p className="mt-2 text-white/80">
              Engage with our engineering leadership team to discuss your mobility transformation initiatives. 
              We provide expedited responses within 24 hours for strategic partnerships.
            </p>
            <div className="mt-6 space-y-3 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> +91-9935232167
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> mohd.eram@gmail.com
              </div>
              <div className="flex items-center gap-2">
                <Globe2 className="h-4 w-4" /> www.neurodyn.in
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4" /> Founded by Muhammad Eram
              </div>
              <div className="flex items-center gap-2">
                <Boxes className="h-4 w-4" /> Lucknow, Uttar Pradesh
              </div>
            </div>
          </div>
          <Card className="rounded-2xl bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-lg">Send a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleContact} className="space-y-4">
                <Input
                  name="name"
                  placeholder="Your name"
                  required
                  className="bg-white/10 border-white/20 placeholder:text-white/50"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  className="bg-white/10 border-white/20 placeholder:text-white/50"
                />
                <Textarea
                  name="message"
                  placeholder="Brief about your requirement"
                  rows={5}
                  required
                  className="bg-white/10 border-white/20 placeholder:text-white/50"
                />
                <Button type="submit" className="w-full rounded-2xl">
                  Send via Email
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8 mb-6">
            <div>
              <div className="text-lg font-semibold mb-2">{brand.name}</div>
              <div className="text-sm text-white/60 mb-4">{brand.tagline}</div>
              <div className="space-y-2 text-sm text-white/60">
                <div>Founded by Muhammad Eram</div>
                <div>Lucknow, Uttar Pradesh</div>
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold mb-3">Contact</div>
              <div className="space-y-2 text-sm text-white/60">
                <div>+91-9935232167</div>
                <div>mohd.eram@gmail.com</div>
                <div>www.neurodyn.in</div>
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold mb-3">Quick Links</div>
              <div className="flex flex-col gap-2 text-sm text-white/60">
                <a href="#services" className="hover:text-white transition">Core Solutions</a>
                <a href="#about" className="hover:text-white transition">Why NeuroDyn</a>
                <a href="#collaboration" className="hover:text-white transition">Partnership</a>
                <a href="#contact" className="hover:text-white transition">Contact</a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <div>© {new Date().getFullYear()} {brand.name}. All rights reserved.</div>
            <div>Powering the intelligent mobility revolution</div>
          </div>
        </div>
      </footer>

      {/* Floating Chatbot */}
      <div className="fixed bottom-6 right-6">
        <Chatbot />
      </div>
    </div>
  );
}
