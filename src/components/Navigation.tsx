"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
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
    { href: "/services", label: "Services & Solutions" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#140b07]/92 backdrop-blur-xl border-b border-[#d4af37]/20 shadow-[0_4px_30px_rgba(0,0,0,0.7)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between h-[76px]">

          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[13px] font-medium tracking-wide transition-all duration-200 relative py-1 ${
                  pathname === link.href
                    ? "text-[#f5d77f] font-semibold"
                    : "text-[#d1c2a5] hover:text-[#fae8b2]"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://calendly.com/neurodyn-info"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#d4af37] via-[#f5d77f] to-[#c59b27] text-[#120a06] hover:brightness-110 text-[13px] font-bold px-5 py-2.5 rounded-lg shadow-[0_2px_14px_rgba(212,175,55,0.35)] hover:shadow-[0_4px_22px_rgba(212,175,55,0.5)] transition-all duration-300"
            >
              <Sparkles size={14} className="text-[#120a06]" />
              Book a Strategy Call
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-lg text-[#fae8b2] hover:bg-[#25150d] border border-[#d4af37]/20 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#180e08]/98 backdrop-blur-2xl border-b border-[#d4af37]/25 shadow-2xl">
          <nav className="px-6 py-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`block text-[14px] font-medium py-3 px-3 rounded-md tracking-wide transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-[#fae8b2] bg-[#2d180f] font-semibold border-l-2 border-[#d4af37]"
                    : "text-[#d1c2a5] hover:text-[#fae8b2] hover:bg-[#22130d]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="https://calendly.com/neurodyn-info"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-center bg-gradient-to-r from-[#d4af37] via-[#f5d77f] to-[#c59b27] text-[#120a06] text-[13px] font-bold px-5 py-3 rounded-lg shadow-lg shadow-amber-950/60"
                onClick={() => setIsOpen(false)}
              >
                <Sparkles size={15} />
                Book a Strategy Call
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
