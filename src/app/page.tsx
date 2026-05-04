"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Logo from "@/components/Logo";
import {
  Code,
  Smartphone,
  Globe,
  Cloud,
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
  Database,
  Server,
  GitBranch,
  Layout,
  BarChart3,
  Monitor,
  Server as ServerIcon,
} from "lucide-react";

export default function NeuroDynSite() {
  const brand = useMemo(
    () => ({
      name: "NeuroDyn IT Solutions",
      tagline: "Innovate. Integrate. Elevate.",
      heroTagline: "SMART SOLUTIONS. STRONGER FUTURE.",
      heroSubheading: "Empowering Businesses with Innovative IT Solutions & Cutting-Edge Technologies.",
      impactTagline: "From Idea to Impact - We Build, Host, Scale & Support Your Digital Success.",
      primary: "#0B3C5D",
      accent: "#3B82F6",
      secondary: "#8B5CF6",
      muted: "#64748B",
      phone: "9935232167",
      email: "info@neurodyn.in",
    }),
    []
  );

  const services = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Website Development",
      desc: "Modern, responsive websites built with cutting-edge technologies. From simple landing pages to complex web applications.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Cross-browser Compatible"],
    },
    {
      icon: <ServerIcon className="h-6 w-6" />,
      title: "Web Hosting",
      desc: "Reliable and secure web hosting solutions with 99.9% uptime guarantee. Shared, VPS, and dedicated hosting available.",
      features: ["99.9% Uptime", "SSL Certificates", "Daily Backups", "24/7 Support"],
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile App Development",
      desc: "Native and cross-platform mobile applications for Android and iOS. Build apps that users love.",
      features: ["Android & iOS", "Cross-platform", "User-friendly UI", "App Store Optimization"],
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Data Analytics Services",
      desc: "Transform your data into actionable insights. Advanced analytics to drive business decisions.",
      features: ["Data Visualization", "Predictive Analytics", "Real-time Dashboards", "Custom Reports"],
    },
    {
      icon: <Cog className="h-6 w-6" />,
      title: "Custom Software Development",
      desc: "Tailored software solutions designed to meet your unique business requirements and scale with your growth.",
      features: ["Scalable Architecture", "Modern Tech Stack", "Security First", "Maintenance Support"],
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "IT Consulting & Support",
      desc: "Expert IT consulting and ongoing support to optimize your technology infrastructure and operations.",
      features: ["Strategic Planning", "Infrastructure Audit", "Technical Support", "Cloud Migration"],
    },
  ];

  const caseStudies = [
    {
      title: "Bus Booking Platform",
      description: "Complete bus booking management system with real-time tracking and payment integration",
      metrics: [
        { label: "Booking Increase", value: "200%" },
        { label: "User Growth", value: "15K+" },
        { label: "Payment Success", value: "99.5%" },
      ],
      image: "/api/placeholder/400/250"
    },
    {
      title: "E-commerce Dashboard",
      description: "Analytics dashboard for inventory management and sales tracking",
      metrics: [
        { label: "Efficiency Gain", value: "40%" },
        { label: "Processing Time", value: "-60%" },
        { label: "Client Satisfaction", value: "95%" },
      ],
      image: "/api/placeholder/400/250"
    }
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      company: "TravelTech Solutions",
      content: "NeuroDyn transformed our bus booking system. The new platform increased our bookings by 200% and streamlined operations completely.",
      rating: 5
    },
    {
      name: "Priya Patel",
      company: "E-commerce Plus",
      content: "Exceptional development team. They delivered our custom software on time and exceeded all our expectations.",
      rating: 5
    },
    {
      name: "Amit Kumar",
      company: "StartUp Hub",
      content: "Their IT consulting helped us scale from 10 to 100 employees seamlessly. Highly recommended!",
      rating: 5
    }
  ];

  const whyChooseUs = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Quality Assured",
      description: "We deliver excellence with rigorous quality standards and best practices"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "On-Time Delivery",
      description: "We respect deadlines and deliver projects on schedule, every time"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure & Reliable",
      description: "Your data and systems are protected with enterprise-grade security"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Client Focused Approach",
      description: "Your success is our priority with personalized solutions and support"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Innovative Solutions",
      description: "Cutting-edge technology and creative approaches to solve your challenges"
    }
  ];

  const techStack = [
    "React", "Node.js", "Flutter", "AWS", "MongoDB", "PostgreSQL",
    "Docker", "Kubernetes", "TypeScript", "Next.js", "Python", "GraphQL"
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

  function handleWhatsAppClick() {
    window.open("https://wa.me/919935232167?text=Hi, I'm interested in your IT services", "_blank");
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Available for Projects</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
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
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button variant="outline" className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl px-8 py-4 text-lg font-medium" asChild>
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">15+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">5+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-blue-600/20 dark:to-purple-600/20 rounded-3xl blur-3xl"></div>
                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 rounded-3xl p-8 shadow-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-2xl p-4 border border-blue-200/50 dark:border-blue-700/50">
                      <Code className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-2" />
                      <div className="font-semibold text-gray-900 dark:text-white">Website Development</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Modern & responsive</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-2xl p-4 border border-purple-200/50 dark:border-purple-700/50">
                      <ServerIcon className="h-8 w-8 text-purple-600 dark:text-purple-400 mb-2" />
                      <div className="font-semibold text-gray-900 dark:text-white">Web Hosting</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">99.9% uptime</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 rounded-2xl p-4 border border-green-200/50 dark:border-green-700/50">
                      <Smartphone className="h-8 w-8 text-green-600 dark:text-green-400 mb-2" />
                      <div className="font-semibold text-gray-900 dark:text-white">Mobile Apps</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Android & iOS</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-2xl p-4 border border-blue-200/50 dark:border-blue-700/50">
                      <Database className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-2" />
                      <div className="font-semibold text-gray-900 dark:text-white">Data Analytics</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Data-driven decisions</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to accelerate your digital transformation and business growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl flex items-center justify-center mb-4">
                      <div className="text-blue-600 dark:text-blue-400">{service.icon}</div>
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{service.desc}</p>
                    <Link href="/services" className="text-blue-600 dark:text-blue-400 font-medium hover:underline inline-flex items-center gap-1">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Choose NeuroDyn</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We combine technical expertise with business understanding to deliver solutions that drive real results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <div className="text-white text-2xl">{item.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Real results from real projects that showcase our expertise and commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center">
                    <div className="text-blue-600 dark:text-blue-400 text-4xl">
                      <Layout className="h-16 w-16" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">{study.title}</CardTitle>
                    <p className="text-gray-600 dark:text-gray-300">{study.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4">
                      {study.metrics.map((metric) => (
                        <div key={metric.label} className="text-center">
                          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{metric.value}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Technology Stack</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We use modern, proven technologies to build scalable and maintainable solutions
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech) => (
              <div key={tech} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 rounded-full px-6 py-3 text-gray-700 dark:text-gray-300 font-medium hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:border-blue-200 dark:hover:border-blue-700 transition-all duration-300">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              What our clients say about working with us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.company}</div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">LET'S BUILD SOMETHING GREAT TOGETHER!</h2>
            <p className="text-xl mb-8 opacity-90">From Idea to Impact - We Build, Host, Scale & Support Your Digital Success</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 rounded-xl px-8 py-4 text-lg font-medium" asChild>
                <Link href="/contact">Book a Call</Link>
              </Button>
              <Button className="bg-green-500 hover:bg-green-600 text-white rounded-xl px-8 py-4 text-lg font-medium" onClick={handleWhatsAppClick}>
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
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

            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-8">
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
                Innovate. Integrate. Elevate. NeuroDyn IT Solution - Your Trusted Technology Partner.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/services" className="hover:text-white transition">Website Development</Link></li>
                <li><Link href="/services" className="hover:text-white transition">Mobile Apps</Link></li>
                <li><Link href="/services" className="hover:text-white transition">IT Consulting</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                <li><Link href="#why-us" className="hover:text-white transition">Why Choose Us</Link></li>
                <li><Link href="#testimonials" className="hover:text-white transition">Testimonials</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
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
        <Button
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}
