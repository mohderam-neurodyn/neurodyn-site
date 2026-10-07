import React from "react";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export default function Logo({ className = "", showTagline = true }: LogoProps) {
  return (
    <a href="/" className={`flex items-center gap-3 group ${className}`}>
      <div className="relative w-8 h-8 rounded-md bg-white/[0.04] border border-white/[0.08] flex items-center justify-center overflow-hidden transition-colors group-hover:border-emerald-500/30">
        <span className="font-mono text-xs font-semibold tracking-wider text-white">N</span>
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {showTagline && (
        <div className="flex flex-col">
          <span className="text-sm font-semibold tracking-tight text-white group-hover:text-zinc-200 transition-colors">
            NeuroDyn
          </span>
          <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-zinc-500 -mt-0.5">
            Intelligent Systems
          </span>
        </div>
      )}
    </a>
  );
}
