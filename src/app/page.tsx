import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PROJECTS } from '@/data/projects';
import { SKILL_CATEGORIES, PHILOSOPHY_PRINCIPLES } from '@/data/skills';
import { SERVICES, PROCESS_STEPS } from '@/data/services';
import { ProjectCard } from '@/components/ProjectCard';
import { DevAltecMonogram } from '@/components/DevAltecLogo';
import { GithubIcon } from '@/components/GithubIcon';
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Terminal,
  ShieldCheck,
  CheckCircle2,
  Code2,
  Cpu,
  Layers,
  GraduationCap,
  MapPin,
  ExternalLink,
  Mail,
  MessageSquare,
  Phone
} from 'lucide-react';

export default function HomePage() {
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="relative">
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-8 pb-20 overflow-hidden">
        {/* Ambient Top Glow Gradients */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-blue-600/20 via-cyan-500/10 to-transparent blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-cyan-400/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headline, Copy, CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Identity Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono text-cyan-300 mb-6 backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <span>Olamilekan Muhayad Olasunkanmi (Altec)</span>
                <span className="text-slate-600">/</span>
                <span className="text-slate-400">devAltec</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] mb-6">
                I engineer digital products that turn <span className="text-gradient-cyan">complex problems</span> into <span className="text-gradient-blue">real-world solutions</span>.
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
                I&apos;m <strong className="text-white font-medium">Olamilekan Muhayad Olasunkanmi</strong>, a Full-Stack Software Engineer and Digital Solutions Architect behind <strong className="text-cyan-400 font-medium">devAltec</strong>. I build robust web platforms, secure backend systems, intelligent workflows, and scalable digital experiences for businesses and communities.
              </p>

              {/* CTAs & GitHub */}
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] active:scale-95"
                >
                  <Sparkles className="w-4 h-4 text-cyan-200" />
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/work"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] transition-all"
                >
                  <span>Explore My Work</span>
                </Link>

                <a
                  href="https://github.com/Simisola16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-slate-300 hover:text-white transition-all hover:scale-105"
                  aria-label="GitHub Profile"
                  title="56 Verified Public Repositories on GitHub"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
              </div>

              {/* Verified Trust Badges */}
              <div className="mt-10 pt-6 border-t border-white/[0.06] flex flex-wrap items-center gap-y-3 gap-x-6 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>56 Public Repositories Audited</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <GraduationCap className="w-4 h-4 text-blue-400" />
                  <span>Aptech ADSE Software Engineer</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>Osun / Lagos • Remote Worldwide</span>
                </div>
              </div>
            </div>

            {/* Right Column: High-Tech Visual Composition */}
            <div className="lg:col-span-5 relative">
              {/* Glass Terminal / Brand Card */}
              <div className="relative rounded-2xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/[0.1] p-6 shadow-2xl backdrop-blur-xl">
                {/* Window Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                    <span className="ml-2 text-xs font-mono text-slate-400">devaltec-system-v1.0.sh</span>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/50 border border-cyan-800/40">
                    LIVE
                  </span>
                </div>

                {/* Brand Visual Inset */}
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-5 border border-white/[0.08] bg-[#07090e]">
                  <Image
                    src="/devaltec-logo.png"
                    alt="devAltec — Build. Innovate. Scale."
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    priority
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-300">
                    <span className="text-cyan-300 font-bold">devAltec Architecture</span>
                    <span className="text-slate-400">Production Node</span>
                  </div>
                </div>

                {/* Terminal Code Snapshot */}
                <div className="p-4 rounded-xl bg-black/50 border border-white/[0.05] font-mono text-xs text-slate-300 space-y-2">
                  <div className="flex items-center justify-between text-slate-400 text-[11px] pb-1 border-b border-white/[0.05]">
                    <span>STACK MATRIX</span>
                    <span className="text-emerald-400">✓ ALL SYSTEMS OPERATIONAL</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400">const</span>
                    <span className="text-white">architect</span>
                    <span className="text-slate-400">=</span>
                    <span className="text-emerald-300">&quot;Olamilekan Muhayad&quot;</span>;
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400">const</span>
                    <span className="text-white">capabilities</span>
                    <span className="text-slate-400">=</span>
                    <span className="text-sky-300">[&apos;Next.js&apos;, &apos;TypeScript&apos;, &apos;Socket.io&apos;, &apos;pdf-lib&apos;]</span>;
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <span className="text-blue-400">➜</span>
                    <span>Ready for enterprise contracts & product MVPs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          VERIFIED ENGINEERING METRICS BAR
          ========================================================================= */}
      <section className="py-8 bg-white/[0.015] border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <span className="block text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                56
              </span>
              <span className="text-xs sm:text-sm font-mono text-slate-400 mt-1 block">
                Public GitHub Repos Audited
              </span>
            </div>
            <div className="p-4">
              <span className="block text-3xl sm:text-4xl font-extrabold text-cyan-400 tracking-tight">
                Real-Time
              </span>
              <span className="text-xs sm:text-sm font-mono text-slate-400 mt-1 block">
                Socket.io Match Center & Alerts
              </span>
            </div>
            <div className="p-4">
              <span className="block text-3xl sm:text-4xl font-extrabold text-blue-400 tracking-tight">
                Dynamic PDF
              </span>
              <span className="text-xs sm:text-sm font-mono text-slate-400 mt-1 block">
                pdf-lib Certificate & Invoicing
              </span>
            </div>
            <div className="p-4">
              <span className="block text-3xl sm:text-4xl font-extrabold text-emerald-400 tracking-tight">
                ADSE
              </span>
              <span className="text-xs sm:text-sm font-mono text-slate-400 mt-1 block">
                Aptech Diploma in Software Eng.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ABOUT ME — PROFESSIONAL BIOGRAPHY SUMMARY
          ========================================================================= */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl p-8 bg-gradient-to-b from-blue-950/30 to-white/[0.02] border border-blue-500/20 backdrop-blur-md">
                <div className="w-16 h-16 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center mb-6">
                  <DevAltecMonogram size={48} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  The Engineer Behind the Brand
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  devAltec is not an anonymous agency. It is the direct expression of my craft, discipline, and full-stack engineering standards.
                </p>

                <div className="space-y-3 border-t border-white/[0.08] pt-6 text-xs font-mono text-slate-300">
                  <div className="flex justify-between py-1 border-b border-white/[0.04]">
                    <span className="text-slate-400">Full Name</span>
                    <span className="text-white font-medium">Olamilekan Muhayad Olasunkanmi</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/[0.04]">
                    <span className="text-slate-400">Professional Alias</span>
                    <span className="text-cyan-400">Altec / Muhayad</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/[0.04]">
                    <span className="text-slate-400">GitHub</span>
                    <a href="https://github.com/Simisola16" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                      @Simisola16
                    </a>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/[0.04]">
                    <span className="text-slate-400">Education</span>
                    <span className="text-white">Aptech ADSE Software Engineering</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-400">Base</span>
                    <span>Osun / Lagos, Nigeria</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 font-semibold mb-3">
                Professional Biography
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-6">
                Bridging intuitive interfaces with reliable backend architecture.
              </h2>

              <p className="text-slate-300 text-base leading-relaxed mb-4">
                Hi, I&apos;m <strong className="text-white">Olamilekan Muhayad Olasunkanmi</strong>, a software engineer known as <strong className="text-cyan-300">Altec</strong> and <strong className="text-cyan-300">Simisola16</strong>. I build useful, durable software that connects intuitive user experiences with dependable backend architecture.
              </p>

              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                My background combines formal software engineering education through Aptech Computer Education&apos;s Advanced Diploma in Software Engineering (ADSE) with hands-on development across web platforms, institutional compliance portals, sports tournament systems, automotive marketplaces, and business workflow tools.
              </p>

              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Through devAltec, I approach software as a complete product: it should solve a meaningful problem, perform reliably, remain maintainable, and deliver an exceptional experience to its users.
              </p>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 group"
              >
                <span>Read Full Professional Story & Philosophy</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FEATURED CASE STUDIES
          ========================================================================= */}
      <section className="py-20 relative bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 font-semibold mb-2 block">
                Verified Work
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Featured Engineering Case Studies
              </h2>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              <span>View All Projects & Systems</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} featured={false} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-medium text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] transition-all hover:scale-105"
            >
              <span>Explore All Verified Repositories & Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ENGINEERING PHILOSOPHY
          ========================================================================= */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 font-semibold mb-2 block">
              Core Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Engineering Philosophy
            </h2>
            <p className="text-slate-400 text-sm mt-3">
              The foundational standards that govern every line of code, database query, and interface interaction we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PHILOSOPHY_PRINCIPLES.map((principle) => (
              <div
                key={principle.number}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/30 transition-all hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-cyan-400 font-bold block mb-4">
                    {principle.number}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          TECHNICAL SKILLS MATRIX
          ========================================================================= */}
      <section className="py-20 relative bg-white/[0.015] border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 font-semibold mb-2 block">
              Technical Competencies
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Supplied & Verified Skill Set
            </h2>
            <p className="text-slate-400 text-sm mt-3">
              Demonstrated through production repositories, verifiable commit histories, and live deployed systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                    <span>{cat.title}</span>
                  </h3>
                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                          skill.highlight
                            ? 'bg-blue-600/20 text-cyan-300 border border-blue-500/30'
                            : 'bg-white/[0.04] text-slate-300 border border-white/[0.06]'
                        }`}
                        title={skill.context || skill.name}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SERVICES & CAPABILITIES
          ========================================================================= */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 font-semibold mb-2 block">
                What We Offer
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Software Engineering Services
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300"
            >
              <span>Explore Detailed Service Catalogue</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map((service) => (
              <div
                key={service.id}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-blue-500/30 transition-all hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-300 mb-4">
                    {service.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.deliverables.slice(0, 3).map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">
                    {service.verifiedReference}
                  </span>
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="text-xs font-medium text-cyan-400 hover:underline inline-flex items-center gap-1"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          WORKING PROCESS
          ========================================================================= */}
      <section className="py-20 bg-white/[0.015] border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 font-semibold mb-2 block">
              Execution Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Our 5-Stage Engineering Process
            </h2>
            <p className="text-slate-400 text-sm mt-3">
              A transparent, disciplined workflow from requirements gathering to cloud deployment and ongoing maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.number}
                className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-cyan-400 font-bold block mb-2">
                    {step.number}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                    {step.phase}
                  </span>
                  <h3 className="text-sm font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          HIGH-CONVERSION CONTACT CTA
          ========================================================================= */}
      <section className="py-24 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-600/20 via-cyan-500/10 to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-white/[0.05] via-white/[0.02] to-transparent border border-white/[0.1] backdrop-blur-xl shadow-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Open for Contracts & Engagements</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-6">
              Have a project in mind or looking to hire a reliable Full-Stack Engineer?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Whether you need an institutional web application, an MVP, a modern high-performance website, or automated digital workflows, I&apos;m open to suitable freelance contracts, full-time positions, and consulting engagements.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-medium text-base text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 shadow-[0_0_30px_rgba(37,99,235,0.4)] active:scale-95"
              >
                <Sparkles className="w-5 h-5 text-cyan-200" />
                <span>Start a Project</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <a
                href="https://wa.me/2348085742261"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-medium text-base text-emerald-300 hover:text-emerald-200 bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/30 transition-all"
              >
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                <span>WhatsApp: 08085742261</span>
              </a>

              <a
                href="mailto:olamilekanmuhayad@yahoo.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-medium text-base text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] transition-all"
              >
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>olamilekanmuhayad@yahoo.com</span>
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 text-xs font-mono text-slate-400">
              <a
                href="tel:+2348085742261"
                className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>Direct Call: +234 808 574 2261</span>
              </a>
              <span>•</span>
              <a
                href="https://github.com/Simisola16"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
              >
                <GithubIcon className="w-3.5 h-3.5 text-slate-400" />
                <span>GitHub @Simisola16</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
