import React from "react";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export default function Logo({ className = "", showTagline = true }: LogoProps) {
  return (
    <a href="/" className={`flex items-center gap-3 group ${className}`}>
      <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-[#2a170e] to-[#170c07] border border-[#d4af37]/40 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-[#d4af37] group-hover:shadow-[0_0_16px_rgba(212,175,55,0.35)]">
        <span className="font-serif font-bold text-sm tracking-wider text-transparent bg-clip-text bg-gradient-to-tr from-[#fae8b2] via-[#d4af37] to-[#e6bf55]">
          N
        </span>
        <div className="absolute inset-0 bg-gradient-to-tr from-[#d4af37]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {showTagline && (
        <div className="flex flex-col">
          <span className="text-[15px] font-semibold tracking-tight text-[#fcf8ee] group-hover:text-[#fae8b2] transition-colors">
            NeuroDyn
          </span>
          <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-[#d4af37]/80 -mt-0.5">
            Travel Tech & AI Systems
          </span>
        </div>
      )}
    </a>
  );
}
