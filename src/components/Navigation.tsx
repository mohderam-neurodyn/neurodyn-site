"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#050508]/90 backdrop-blur-xl border-b border-white/[0.05]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">

          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[13px] font-medium tracking-wide transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-emerald-400"
                    : "text-zinc-400 hover:text-zinc-100"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="https://calendly.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-zinc-900 hover:bg-zinc-200 text-[13px] font-semibold px-5 py-2.5 rounded-md transition-all duration-300"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0e] border-t border-white/[0.05]">
          <nav className="px-6 py-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`block text-[13px] font-medium py-2.5 tracking-wide transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-emerald-400"
                    : "text-zinc-400 hover:text-zinc-100"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="https://calendly.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-white text-zinc-900 hover:bg-zinc-200 text-[13px] font-semibold px-5 py-2.5 rounded-md transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Book a Call
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
