import React from "react";



interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export default function Logo({ className = "", showTagline = true }: LogoProps) {
  return (
    <a href="/" className={`flex items-center gap-3 group ${className}`}>
      {/* Logo Image - Add your logo.png to the public folder */}
      <div className="relative w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform overflow-hidden">
        <img
          src="/logo.png"
          alt="NeuroDyn IT Solutions Logo"
          width={48}
          height={48}
          className="object-contain p-1"
          // Remove the line below once you have the logo file
          onError={(e) => {
            // Fallback to text if image not found
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent) {
              parent.innerHTML = '<span class="text-white font-bold text-xl">N</span>';
            }
          }}
        />
      </div>

      {showTagline && (
        <div>
          <div className="text-xl font-bold text-gray-900 dark:text-white">
            NeuroDyn
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400 -mt-1">
            IT Solutions
          </div>
        </div>
      )}
    </a>
  );
}
