import React from 'react';
import Link from 'next/link';

interface DevAltecLogoProps {
  variant?: 'full' | 'horizontal' | 'monogram';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  className?: string;
  asLink?: boolean;
}

export function DevAltecMonogram({ size = 38, className = '' }: { size?: number; className?: string }) {
  const uniqueId = React.useId().replace(/:/g, '');
  return (
    <svg
      width={size}
      height={(size * 28) / 32}
      viewBox="0 0 160 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-transform duration-300 hover:scale-105 ${className}`}
      aria-label="devAltec AD Monogram"
    >
      <defs>
        {/* Electric Cyan to Vibrant Cobalt Gradient */}
        <linearGradient id={`blueGrad-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00f0ff" />
          <stop offset="45%" stopColor="#0066ff" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        {/* Vibrant Blue Accent Gradient */}
        <linearGradient id={`innerGrad-${uniqueId}`} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0055ff" />
          <stop offset="100%" stopColor="#00e5ff" />
        </linearGradient>
        {/* Subtle drop shadow for depth */}
        <filter id={`glow-${uniqueId}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#0066ff" floodOpacity="0.35" />
        </filter>
      </defs>

      <g filter={`url(#glow-${uniqueId})`}>
        {/* Left 'A' Chevron Leg (Crisp White with sleek bevel) */}
        <path
          d="M 50 18 L 8 116 L 26 116 L 50 60 L 74 116 L 94 116 L 50 18 Z"
          fill="#FFFFFF"
        />

        {/* Inner triangular crossbar (Electric Blue) */}
        <polygon
          points="36,92 50,60 64,92"
          fill={`url(#innerGrad-${uniqueId})`}
        />

        {/* The 'D' Loop interlocking with the right leg of A (Electric Cyan to Cobalt Gradient) */}
        <path
          d="M 58 18 L 102 18 C 132 18 152 40 152 70 C 152 100 132 122 102 122 L 76 122 L 67 102 L 98 102 C 117 102 130 89 130 70 C 130 51 117 38 98 38 L 68 38 Z"
          fill={`url(#blueGrad-${uniqueId})`}
        />
      </g>
    </svg>
  );
}

export function DevAltecLogo({
  variant = 'horizontal',
  size = 'md',
  showTagline = true,
  className = '',
  asLink = true
}: DevAltecLogoProps) {
  const monogramSizes = {
    sm: 28,
    md: 36,
    lg: 48,
    xl: 64
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl'
  };

  const currentMonogramSize = monogramSizes[size];

  const content = (
    <div
      className={`inline-flex items-center select-none group ${
        variant === 'full' ? 'flex-col items-center text-center' : 'flex-row gap-3'
      } ${className}`}
    >
      <DevAltecMonogram size={currentMonogramSize} />

      {variant !== 'monogram' && (
        <div className={`flex flex-col ${variant === 'full' ? 'mt-2 items-center' : 'items-start'}`}>
          <div className={`font-bold tracking-tight leading-none ${textSizes[size]}`}>
            <span className="text-white font-black tracking-normal">dev</span>
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-sky-300 bg-clip-text text-transparent font-black tracking-normal">
              Altec
            </span>
          </div>
          {showTagline && (
            <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] uppercase font-mono tracking-[0.25em] text-slate-400 mt-1">
              <span>Build</span>
              <span className="text-cyan-400 text-[6px]">•</span>
              <span>Innovate</span>
              <span className="text-blue-500 text-[6px]">•</span>
              <span>Scale</span>
            </div>
          )}
        </div>
      )}
    </div>
  );

  if (asLink) {
    return (
      <Link href="/" className="inline-block transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-0.5" aria-label="devAltec Home">
        {content}
      </Link>
    );
  }

  return content;
}
