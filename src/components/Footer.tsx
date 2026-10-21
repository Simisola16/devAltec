'use client';

import React from 'react';
import Link from 'next/link';
import { DevAltecLogo } from './DevAltecLogo';
import { GithubIcon } from './GithubIcon';
import { ArrowUpRight, ShieldCheck, Mail, MapPin, GraduationCap, Phone, MessageSquare } from 'lucide-react';

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="relative bg-[#05070b] border-t border-white/[0.08] pt-16 pb-12 overflow-hidden">
      {/* Subtle background ambient radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-blue-600/[0.07] via-cyan-500/[0.03] to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/[0.08]">
          {/* Brand & Persona column */}
          <div className="lg:col-span-2 flex flex-col items-start gap-4">
            <DevAltecLogo variant="horizontal" size="lg" />
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mt-1">
              devAltec is the bespoke engineering brand of <strong className="text-white font-medium">Olamilekan Muhayad Olasunkanmi</strong> (known as Altec / Simisola16) — Full-Stack Software Engineer & Digital Solutions Architect.
            </p>

            <div className="flex flex-col gap-2 pt-2 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Osun / Lagos, Nigeria • Operating Worldwide</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <GraduationCap className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Aptech Computer Education (ADSE Graduate)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>56 Verified Public GitHub Repositories</span>
              </div>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-slate-300 font-semibold mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Featured Case Studies
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Capabilities & Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Professional Biography
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Start a Project
                </Link>
              </li>
            </ul>
          </div>

          {/* Selected Work Column */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-slate-300 font-semibold mb-4">
              Verified Work
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/work/hcpt" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1 group">
                  <span>HCPT Compliance Suite</span>
                  <ArrowUpRight className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/work/skouted-youth-league" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1 group">
                  <span>Skouted Youth League</span>
                  <ArrowUpRight className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/work/atlasautos" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1 group">
                  <span>AtlasAutos 3D</span>
                  <ArrowUpRight className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/work/smartcity-portal" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1 group">
                  <span>SmartCity AI Portal</span>
                  <ArrowUpRight className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/work/vcinvoice-document-suite" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1 group">
                  <span>VC Invoice Suite</span>
                  <ArrowUpRight className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-slate-300 font-semibold mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:olamilekanmuhayad@yahoo.com"
                  className="text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-2 group text-xs"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="truncate">olamilekanmuhayad@yahoo.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/2348085742261"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-2 group text-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>WhatsApp: 08085742261</span>
                  <ArrowUpRight className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a
                  href="tel:+2348085742261"
                  className="text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-2 group text-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Call: +234 808 574 2261</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Simisola16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2 group text-xs"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400 shrink-0" />
                  <span>GitHub @Simisola16</span>
                  <ArrowUpRight className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                </a>
              </li>
              <li className="pt-1">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-xs font-mono text-cyan-300 hover:text-white transition-colors"
                >
                  <span>Open Intake Form</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © {currentYear} devAltec. Engineered by Olamilekan Muhayad Olasunkanmi. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Build • Innovate • Scale</span>
            <span className="text-slate-600">|</span>
            <span className="text-cyan-400">TypeScript / Next.js / React</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
