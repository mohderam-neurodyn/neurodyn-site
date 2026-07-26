"use client";

import React from "react";


import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Logo from "@/components/Logo";
import { Rocket, Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";

export default function ContactPage() {
  const brand = {
    name: "NeuroDyn IT Solutions",
    tagline: "Innovate. Integrate. Elevate.",
    phone: "8004339331",
    email: "info@neurodyn.in",
  };

  function handleContact(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const data = new FormData(form);
    const name = (data.get("name") as string) || "";
    const email = (data.get("email") as string) || "";
    const phone = (data.get("phone") as string) || "";
    const message = (data.get("message") as string) || "";
    const subject = encodeURIComponent(`New enquiry - ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`);
    window.location.href = `mailto:${brand.email}?subject=${subject}&body=${body}`;
  }

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
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Have a project in mind? Let's discuss how we can help you achieve your business goals with our IT solutions
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="scroll-reveal"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Contact Information</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-lg mb-1">Phone</h3>
                    <a href={`tel:+91${brand.phone}`} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                      +91-{brand.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-lg mb-1">Email</h3>
                    <a href={`mailto:${brand.email}`} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                      {brand.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-lg mb-1">Location</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Lucknow, Uttar Pradesh, India
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Card */}
              <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-700/50 rounded-2xl p-6 mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">WhatsApp</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Quick response guaranteed</p>
                  </div>
                </div>
                <Button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-500 hover:bg-green-600 text-white rounded-xl"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Chat on WhatsApp
                </Button>
              </Card>

              {/* Google Maps Embed */}
              <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.7650000000002!2d80.9462000!3d26.8467000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsNTAnNDguMSJOIDgwwCc1Ni41Ilc!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                ></iframe>
              </div>

              {/* QR Code */}
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4 text-center">Scan to Connect</h3>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-4 flex items-center justify-center">
                  <div className="w-40 h-40 bg-gray-100 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">📱</div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">QR Code</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-4">
                  Scan to contact us on WhatsApp
                </p>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="scroll-reveal"
            >
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Send us a Message</h2>
                <form onSubmit={handleContact} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                      className="bg-white/50 dark:bg-gray-700/50 border-gray-300 dark:border-gray-600 placeholder:text-gray-500 dark:placeholder:text-gray-400 rounded-xl px-4 py-3 text-gray-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="bg-white/50 dark:bg-gray-700/50 border-gray-300 dark:border-gray-600 placeholder:text-gray-500 dark:placeholder:text-gray-400 rounded-xl px-4 py-3 text-gray-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="bg-white/50 dark:bg-gray-700/50 border-gray-300 dark:border-gray-600 placeholder:text-gray-500 dark:placeholder:text-gray-400 rounded-xl px-4 py-3 text-gray-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project requirements..."
                      rows={6}
                      required
                      className="bg-white/50 dark:bg-gray-700/50 border-gray-300 dark:border-gray-600 placeholder:text-gray-500 dark:placeholder:text-gray-400 rounded-xl px-4 py-3 text-gray-900 dark:text-white resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl px-6 py-4 font-medium text-lg"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
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
