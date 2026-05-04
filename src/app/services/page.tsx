"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Chatbot from "@/components/Chatbot";
import Logo from "@/components/Logo";
import { Rocket, MessageCircle, ArrowRight, CheckCircle } from "lucide-react";
import {
  Code,
  Server as ServerIcon,
  Smartphone,
  Bot,
  BarChart3,
  Cog,
  Briefcase,
} from "lucide-react";

export default function ServicesPage() {
  const brand = {
    name: "NeuroDyn IT Solutions",
    tagline: "Innovate. Integrate. Elevate.",
    phone: "9935232167",
    email: "info@neurodyn.in",
  };

  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Website Development",
      description: "Modern, responsive websites built with cutting-edge technologies. From simple landing pages to complex web applications, we deliver solutions that engage users and drive conversions.",
      features: [
        "Responsive Design for all devices",
        "SEO Optimized for better visibility",
        "Fast Loading with optimized performance",
        "Cross-browser compatibility",
        "CMS Integration (WordPress, Strapi, etc.)",
        "E-commerce solutions",
      ],
    },
    {
      icon: <ServerIcon className="h-8 w-8" />,
      title: "Web Hosting",
      description: "Reliable and secure web hosting solutions with 99.9% uptime guarantee. We offer shared, VPS, and dedicated hosting to meet your specific needs and budget.",
      features: [
        "99.9% Uptime Guarantee",
        "Free SSL Certificates",
        "Daily Automated Backups",
        "24/7 Technical Support",
        "DDoS Protection",
        "Scalable Resources",
      ],
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for Android and iOS. We build apps that users love with intuitive interfaces and seamless performance.",
      features: [
        "Android & iOS Native Development",
        "Cross-platform (React Native, Flutter)",
        "User-friendly UI/UX Design",
        "App Store Optimization",
        "Push Notifications",
        "Offline Functionality",
      ],
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "AI Chatbot Development",
      description: "Intelligent chatbots powered by AI to automate customer support and enhance user engagement. Our chatbots understand natural language and provide personalized responses.",
      features: [
        "Natural Language Processing",
        "24/7 Automated Support",
        "Multi-language Support",
        "Custom Training on Your Data",
        "Integration with Existing Systems",
        "Analytics & Insights",
      ],
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Data Analytics Services",
      description: "Transform your data into actionable insights. Our advanced analytics solutions help you make informed decisions and identify growth opportunities.",
      features: [
        "Data Visualization Dashboards",
        "Predictive Analytics",
        "Real-time Monitoring",
        "Custom Report Generation",
        "Data Integration from Multiple Sources",
        "Business Intelligence Solutions",
      ],
    },
    {
      icon: <Cog className="h-8 w-8" />,
      title: "Custom Software Development",
      description: "Tailored software solutions designed to meet your unique business requirements and scale with your growth. We build robust, secure, and maintainable applications.",
      features: [
        "Scalable Architecture",
        "Modern Tech Stack (React, Node.js, Python)",
        "Security First Approach",
        "Ongoing Maintenance Support",
        "API Development & Integration",
        "Cloud Deployment",
      ],
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "IT Consulting & Support",
      description: "Expert IT consulting and ongoing support to optimize your technology infrastructure and operations. We help you make strategic technology decisions.",
      features: [
        "Strategic Technology Planning",
        "Infrastructure Audit & Optimization",
        "Cloud Migration Services",
        "24/7 Technical Support",
        "Security Assessments",
        "Digital Transformation Roadmap",
      ],
    },
  ];

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
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Comprehensive IT solutions designed to accelerate your digital transformation and business growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 h-full">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl flex items-center justify-center mb-4">
                      <div className="text-blue-600 dark:text-blue-400">{service.icon}</div>
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">{service.description}</p>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                          <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl" asChild>
                      <Link href="/contact">
                        Get Started <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-xl mb-8 opacity-90">Let's discuss your specific requirements and how we can help</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 rounded-xl px-8 py-4 text-lg font-medium" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button className="bg-green-500 hover:bg-green-600 text-white rounded-xl px-8 py-4 text-lg font-medium" onClick={handleWhatsAppClick}>
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp Us
              </Button>
            </div>
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
                <li><Link href="/services" className="hover:text-white transition">AI Chatbots</Link></li>
                <li><Link href="/services" className="hover:text-white transition">IT Consulting</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                <li><Link href="/" className="hover:text-white transition">Why Choose Us</Link></li>
                <li><Link href="/" className="hover:text-white transition">Testimonials</Link></li>
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
            <div>© {new Date().getFullYear()} {brand.name}. All rights reserved.</div>
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

      {/* AI Chatbot */}
      <Chatbot />
    </div>
  );
}
