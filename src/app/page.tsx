"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
} from "lucide-react";
export default function NeuroDynSite() {
  const brand = useMemo(
    () => ({
      name: "NeuroDyn",
      tagline: "Smart IT Solutions for Growing Businesses",
      primary: "#0B3C5D",
      accent: "#3B82F6",
      secondary: "#8B5CF6",
      muted: "#64748B",
    }),
    []
  );

  const services = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Custom Software Development",
      desc: "Tailored software solutions built to your specific business needs with modern technologies and scalable architecture.",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Web & Mobile App Development",
      desc: "Responsive web applications and native mobile apps that deliver exceptional user experiences across all devices.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Travel & Booking Solutions",
      desc: "Specialized booking platforms and travel management systems, including our flagship BusADDA solution for transportation businesses.",
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud & DevOps",
      desc: "Cloud infrastructure setup, CI/CD pipelines, and DevOps automation to streamline your development and deployment processes.",
    },
    {
      icon: <Cog className="h-6 w-6" />,
      title: "Automation Solutions",
      desc: "Business process automation, workflow optimization, and custom bot development to increase operational efficiency.",
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "IT Consulting",
      desc: "Strategic technology consulting, digital transformation roadmap, and IT infrastructure planning for sustainable growth.",
    },
  ];

  const industries = [
    "Startups",
    "E-commerce",
    "Travel & Hospitality",
    "Healthcare",
    "Education",
    "Financial Services",
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
      icon: <Zap className="h-6 w-6" />,
      title: "Fast Delivery",
      description: "Rapid development cycles with agile methodology for quick time-to-market"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Scalable Architecture",
      description: "Built to grow with your business from startup to enterprise scale"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Dedicated Support",
      description: "24/7 technical support and maintenance for peace of mind"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Industry Expertise",
      description: "Deep domain knowledge across multiple industries and technologies"
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
    window.open("https://wa.me/919935232167?text=Hi! I'm interested in your IT services", "_blank");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Background Pattern */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-200/30 to-purple-200/30 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-tr from-blue-300/30 to-indigo-200/30 blur-3xl"></div>
      </div>
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/50">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="h-10 w-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Rocket className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900">
                {brand.name}
              </div>
              <div className="text-sm text-gray-600 -mt-1">{brand.tagline}</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-gray-700">
            <a href="#services" className="hover:text-blue-600 transition font-medium">Services</a>
            <a href="#why-us" className="hover:text-blue-600 transition font-medium">Why Us</a>
            <a href="#case-studies" className="hover:text-blue-600 transition font-medium">Case Studies</a>
            <a href="#testimonials" className="hover:text-blue-600 transition font-medium">Testimonials</a>
            <a href="#contact" className="hover:text-blue-600 transition font-medium">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl px-6" asChild>
              <a href="#contact">Get Free Consultation</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-blue-700">Available for Projects</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Build, Scale & Grow Your Business with{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Smart IT Solutions</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We help startups and enterprises with software development, automation, and scalable digital systems that drive real business growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl px-8 py-4 text-lg font-medium shadow-lg" asChild>
                  <a href="#contact">Get Free Consultation</a>
                </Button>
                <Button variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-xl px-8 py-4 text-lg font-medium" asChild>
                  <a href="#case-studies">View Our Work</a>
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">15+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">5+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
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
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-3xl"></div>
                <div className="relative bg-white/80 backdrop-blur-lg border border-gray-200/50 rounded-3xl p-8 shadow-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4 border border-blue-200/50">
                      <Code className="h-8 w-8 text-blue-600 mb-2" />
                      <div className="font-semibold text-gray-900">Custom Development</div>
                      <div className="text-sm text-gray-600">Tailored solutions</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-4 border border-purple-200/50">
                      <Cloud className="h-8 w-8 text-purple-600 mb-2" />
                      <div className="font-semibold text-gray-900">Cloud Solutions</div>
                      <div className="text-sm text-gray-600">Scalable infrastructure</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-4 border border-green-200/50">
                      <Smartphone className="h-8 w-8 text-green-600 mb-2" />
                      <div className="font-semibold text-gray-900">Mobile Apps</div>
                      <div className="text-sm text-gray-600">Cross-platform</div>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-4 border border-orange-200/50">
                      <Globe className="h-8 w-8 text-orange-600 mb-2" />
                      <div className="font-semibold text-gray-900">BusADDA</div>
                      <div className="text-sm text-gray-600">Travel solutions</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                <Card className="h-full bg-white/80 backdrop-blur-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-4">
                      <div className="text-blue-600">{service.icon}</div>
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{service.desc}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose NeuroDyn</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with business understanding to deliver solutions that drive real results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                <Card className="bg-white/80 backdrop-blur-lg border border-gray-200/50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <div className="text-blue-600 text-4xl">
                      <Layout className="h-16 w-16" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900">{study.title}</CardTitle>
                    <p className="text-gray-600">{study.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4">
                      {study.metrics.map((metric) => (
                        <div key={metric.label} className="text-center">
                          <div className="text-2xl font-bold text-blue-600">{metric.value}</div>
                          <div className="text-sm text-gray-600">{metric.label}</div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technology Stack</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use modern, proven technologies to build scalable and maintainable solutions
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech) => (
              <div key={tech} className="bg-white/80 backdrop-blur-lg border border-gray-200/50 rounded-full px-6 py-3 text-gray-700 font-medium hover:bg-blue-50 hover:border-blue-200 transition-all duration-300">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                <Card className="bg-white/80 backdrop-blur-lg border border-gray-200/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.company}</div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to build your next project?</h2>
            <p className="text-xl mb-8 opacity-90">Let's discuss how we can help transform your business with smart IT solutions</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 rounded-xl px-8 py-4 text-lg font-medium" asChild>
                <a href="#contact">Book a Call</a>
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
      <section id="contact" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Let's discuss your project requirements and how we can help you achieve your business goals
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Phone</div>
                    <div className="text-gray-600">+91-9935232167</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">info@neurodyn.in</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Location</div>
                    <div className="text-gray-600">Lucknow, Uttar Pradesh, India</div>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-white/80 backdrop-blur-lg border border-gray-200/50 rounded-2xl p-8">
              <form onSubmit={handleContact} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    required
                    className="bg-white/50 border-gray-300 placeholder:text-gray-500 rounded-xl px-4 py-3"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    required
                    className="bg-white/50 border-gray-300 placeholder:text-gray-500 rounded-xl px-4 py-3"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your project"
                    rows={5}
                    required
                    className="bg-white/50 border-gray-300 placeholder:text-gray-500 rounded-xl px-4 py-3"
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
      <footer className="bg-gray-900 text-white py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold">{brand.name}</div>
                  <div className="text-sm text-gray-400">{brand.tagline}</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Building innovative IT solutions that drive business growth and digital transformation.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#services" className="hover:text-white transition">Custom Software Development</a></li>
                <li><a href="#services" className="hover:text-white transition">Web & Mobile Apps</a></li>
                <li><a href="#services" className="hover:text-white transition">Cloud Solutions</a></li>
                <li><a href="#services" className="hover:text-white transition">IT Consulting</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#why-us" className="hover:text-white transition">Why Choose Us</a></li>
                <li><a href="#case-studies" className="hover:text-white transition">Case Studies</a></li>
                <li><a href="#testimonials" className="hover:text-white transition">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>+91-9935232167</li>
                <li>info@neurodyn.in</li>
                <li>Lucknow, UP, India</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
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
