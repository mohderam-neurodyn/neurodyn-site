"use client";

import React from "react";


import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Logo from "@/components/Logo";
import { Rocket, Target, Eye, Users, Award, Zap, CheckCircle, ArrowRight, MessageCircle } from "lucide-react";

export default function AboutPage() {
  const brand = {
    name: "NeuroDyn IT Solutions",
    tagline: "Innovate. Integrate. Elevate.",
    phone: "8004339331",
    email: "info@neurodyn.in",
  };

  const coreValues = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative solutions to stay ahead of the curve.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Collaboration",
      description: "We believe in working closely with our clients to understand their unique needs.",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Excellence",
      description: "We deliver quality work that exceeds expectations and drives real results.",
    },
  ];

  const coreStrengths = [
    "Expert team with diverse technical skills",
    "Proven track record of successful projects",
    "Agile methodology for rapid development",
    "Focus on scalable and maintainable solutions",
    "Strong emphasis on security and performance",
    "Ongoing support and maintenance",
  ];

  function handleWhatsAppClick() {
    window.open("https://wa.me/918004339331?text=Hi, I'm interested in your IT services", "_blank");
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
          <div className="scroll-reveal"
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              About {brand.name}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {brand.tagline} We are a team of passionate technologists dedicated to delivering innovative IT solutions that transform businesses and drive sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-reveal"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                NeuroDyn IT Solutions is a premier technology company specializing in custom software development, web and mobile applications, AI solutions, and IT consulting. Founded with a vision to bridge the gap between business needs and technology, we have grown into a trusted partner for businesses looking to digitalize and scale.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Our team consists of experienced developers, designers, and consultants who bring a wealth of knowledge across various industries. We believe in building long-term relationships with our clients by delivering exceptional value and consistently exceeding expectations.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">15+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">5+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years</div>
                </div>
              </div>
            </div>
            <div className="scroll-reveal"
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-blue-600/20 dark:to-purple-600/20 rounded-3xl blur-3xl"></div>
                <div className="relative glass rounded-3xl p-8">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Rocket className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  <p className="text-center text-gray-700 dark:text-gray-300 text-lg italic">
                    "Transforming ideas into reality through innovative technology solutions."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Mission & Vision</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Guided by clear principles, we strive to make a meaningful impact through technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="scroll-reveal"
            >
              <Card className="glass rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage. We are committed to delivering exceptional software and services that help our clients achieve their strategic objectives.
                </p>
              </Card>
            </div>

            <div className="scroll-reveal"
            >
              <Card className="glass rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  To be the leading technology partner for businesses worldwide, recognized for our innovation, reliability, and commitment to excellence. We envision a future where every business has access to world-class technology solutions.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Core Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div className="scroll-reveal"
                key={value.title}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <div className="text-white text-2xl">{value.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Strengths */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Core Strengths</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              What sets us apart from the competition
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreStrengths.map((strength, index) => (
              <div className="scroll-reveal"
                key={strength}
              >
                <Card className="glass rounded-xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{strength}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to work with us?</h2>
            <p className="text-xl mb-8 opacity-90">Let's discuss how we can help transform your business with smart IT solutions</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 rounded-xl px-8 py-4 text-lg font-medium" asChild>
                <a href="/contact">Get In Touch</a>
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
                <li><a href="/services" className="hover:text-white transition">Website Development</a></li>
                <li><a href="/services" className="hover:text-white transition">Mobile Apps</a></li>
                <li><a href="/services" className="hover:text-white transition">IT Consulting</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/about" className="hover:text-white transition">About Us</a></li>
                <li><a href="/" className="hover:text-white transition">Why Choose Us</a></li>
                <li><a href="/" className="hover:text-white transition">Testimonials</a></li>
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
    </div>
  );
}
