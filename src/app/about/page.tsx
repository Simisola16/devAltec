import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { DevAltecMonogram } from '@/components/DevAltecLogo';
import { PHILOSOPHY_PRINCIPLES } from '@/data/skills';
import { GithubIcon } from '@/components/GithubIcon';
import {
  GraduationCap,
  MapPin,
  ShieldCheck,
  Mail,
  ArrowRight,
  Code2,
  Terminal,
  Award,
  Sparkles,
  Phone,
  MessageSquare
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About the Engineer — Olamilekan Muhayad Olasunkanmi',
  description:
    'Professional biography, Aptech ADSE software engineering education, engineering principles, and the story behind devAltec.'
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-cyan-300 mb-4">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span>Professional Identity & Background</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Olamilekan Muhayad Olasunkanmi
          </h1>

          <p className="text-lg sm:text-xl font-mono text-cyan-300">
            Full-Stack Software Engineer & Digital Solutions Architect • Founder, devAltec
          </p>
        </div>

        {/* Brand vs Persona Distinction Alert */}
        <div className="mb-14 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex items-start gap-4">
          <div className="p-3 rounded-xl bg-blue-600/20 text-cyan-400 shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white mb-1">
              Brand & Engineering Identity
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              <strong>devAltec</strong> is the commercial software engineering brand; <strong>Olamilekan Muhayad Olasunkanmi</strong> (known across developer communities as <strong>Altec</strong>, <strong>Muhayad</strong>, and on GitHub as <a href="https://github.com/Simisola16" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline font-mono">@Simisola16</a>) is the engineer behind every architecture, database schema, and interface.
            </p>
          </div>
        </div>

        {/* Narrative & Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Main Biography Column */}
          <div className="lg:col-span-8 space-y-6 text-slate-300 text-base leading-relaxed">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Professional Biography
            </h2>

            <p className="text-slate-200 text-lg leading-relaxed font-normal">
              Hi, I&apos;m <strong className="text-white">Olamilekan Muhayad Olasunkanmi</strong>, a software engineer known as <strong className="text-cyan-300">Altec</strong> and <strong className="text-cyan-300">Simisola16</strong>. I build useful, durable software that connects intuitive user experiences with reliable backend architecture.
            </p>

            <p>
              My background combines formal software engineering education through Aptech Computer Education&apos;s <strong className="text-white">Advanced Diploma in Software Engineering (ADSE)</strong> with extensive hands-on development across web platforms, institutional certification and compliance portals, sports tournament management systems, automotive marketplaces, and business workflow tools.
            </p>

            <p>
              My work focuses on full-stack engineering, database design, API development, document automation, responsive interfaces, and deployment-aware application architecture. I approach software as a complete product: it should solve a meaningful problem, perform reliably, remain maintainable, and deliver a useful experience to its users.
            </p>

            <p>
              Through devAltec, I aim to help businesses transform ambitious ideas and operational challenges into dependable digital solutions.
            </p>

            <div className="pt-6 border-t border-white/[0.08] flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]"
              >
                <Sparkles className="w-4 h-4 text-cyan-200" />
                <span>Discuss a Project</span>
              </Link>

              <a
                href="https://github.com/Simisola16"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Inspect GitHub Repositories</span>
              </a>
            </div>
          </div>

          {/* Sidebar Credentials Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-cyan-400 mb-4">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">
                Formal Education
              </h3>
              <p className="text-xs text-cyan-300 font-mono mb-2">
                Aptech Computer Education
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Advanced Diploma in Software Engineering (ADSE). Comprehensive curriculum covering object-oriented architecture, database management, software development lifecycles, and modern web application development.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
              <div className="w-12 h-12 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">
                Location & Availability
              </h3>
              <p className="text-xs text-emerald-400 font-mono mb-2">
                Osun / Lagos, Nigeria
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Operating worldwide across multiple time zones. Open for remote contracts, hybrid opportunities, freelance MVP builds, full-time engineering roles, and enterprise consulting.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
              <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">
                Verified Codebase
              </h3>
              <p className="text-xs text-purple-300 font-mono mb-2">
                56 Public GitHub Repos
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Full-stack repositories across TypeScript, React, Node.js, Express, Socket.io, MongoDB, and PostgreSQL.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
              <div className="w-12 h-12 rounded-xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">
                Direct Contact
              </h3>
              <p className="text-xs text-cyan-300 font-mono mb-3">
                Inquiries & Engagements
              </p>
              <div className="space-y-2 text-xs font-mono">
                <a
                  href="mailto:olamilekanmuhayad@yahoo.com"
                  className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="truncate">olamilekanmuhayad@yahoo.com</span>
                </a>
                <a
                  href="https://wa.me/2348085742261"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>WhatsApp: 08085742261</span>
                </a>
                <a
                  href="tel:+2348085742261"
                  className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>+234 808 574 2261</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Engineering Philosophy Section */}
        <section className="pt-12 border-t border-white/[0.08] mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 font-semibold mb-3">
            Core Beliefs
          </h2>
          <h3 className="text-3xl font-bold text-white tracking-tight mb-8">
            The Principles Guiding devAltec
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PHILOSOPHY_PRINCIPLES.map((principle) => (
              <div
                key={principle.number}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-cyan-400 font-bold block mb-2">
                    {principle.number}
                  </span>
                  <h4 className="text-lg font-bold text-white mb-2">
                    {principle.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Visual Brand Monogram Spotlight */}
        <div className="p-10 rounded-3xl bg-gradient-to-r from-blue-950/20 via-cyan-950/10 to-transparent border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <DevAltecMonogram size={64} />
            <div>
              <span className="text-xl font-bold text-white block">
                devAltec — Build. Innovate. Scale.
              </span>
              <span className="text-xs font-mono text-slate-400 block mt-1">
                Architectural discipline • Production reliability • Bespoke engineering
              </span>
            </div>
          </div>

          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl font-medium text-sm text-white bg-blue-600 hover:bg-blue-500 transition-all shrink-0"
          >
            Work Together
          </Link>
        </div>
      </div>
    </div>
  );
}
