import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PROJECTS, CaseStudy } from '@/data/projects';
import { GithubIcon } from '@/components/GithubIcon';
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  ShieldCheck,
  Server,
  Layers,
  Database,
  Cpu,
  Calendar,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import type { Metadata } from 'next';

interface CaseStudyProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const params = PROJECTS.map((project) => ({
    slug: project.slug
  }));
  // Legacy alias support so previous URLs resolve seamlessly
  params.push({ slug: 'halalcert-hcpt' });
  return params;
}

export async function generateMetadata({ params }: CaseStudyProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug || (slug === 'halalcert-hcpt' && p.slug === 'hcpt'));
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} — Case Study`,
    description: project.tagline,
    openGraph: {
      title: `${project.title} | devAltec Engineering Case Study`,
      description: project.tagline,
      type: 'article'
    }
  };
}

export default async function CaseStudyPage({ params }: CaseStudyProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug || (slug === 'halalcert-hcpt' && p.slug === 'hcpt'));

  if (!project) {
    notFound();
    return null;
  }

  const relatedProjects = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <article className="py-12 sm:py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-400 hover:text-cyan-400 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Case Study Header */}
        <header className="mb-12 pb-10 border-b border-white/[0.08]">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3.5 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 border border-blue-500/25 text-cyan-300">
              {project.categoryLabel}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              {project.status}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mb-8">
            {project.tagline}
          </p>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] font-mono text-xs">
            <div>
              <span className="text-slate-400 block mb-1">CLIENT / SYSTEM</span>
              <span className="text-white font-medium">{project.client}</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-1">VERIFIED ROLE</span>
              <span className="text-cyan-300 font-medium">{project.verifiedRole}</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-1">TIMELINE</span>
              <span className="text-slate-200">{project.timeline}</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-1">DEPLOYMENT</span>
              <span className="text-emerald-400">{project.status}</span>
            </div>
          </div>

          {/* Quick Actions (Live URL & GitHub Repositories) */}
          <div className="flex flex-wrap items-center gap-4 mt-8">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] active:scale-95"
              >
                <span>Launch Live System</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Frontend Repository</span>
              </a>
            )}

            {project.backendGithubUrl && (
              <a
                href={project.backendGithubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] transition-all"
              >
                <GithubIcon className="w-4 h-4 text-cyan-400" />
                <span>Backend API Repository</span>
              </a>
            )}
          </div>
        </header>

        {/* Narrative Sections */}
        <div className="space-y-16">
          {/* Section 1: Overview */}
          <section>
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 font-semibold mb-3">
              01 / Executive Overview
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {project.summary}
            </p>
          </section>

          {/* Section 2: Problem & Challenge */}
          <section className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 font-semibold mb-3">
              02 / The Operational Problem
            </h2>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Addressing Bottlenecks & Real-World Friction
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.challenge}
            </p>
          </section>

          {/* Section 3: The Engineered Solution */}
          <section>
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 font-semibold mb-3">
              03 / The Engineered Solution
            </h2>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Technical Execution & System Architecture
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              {project.solution}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.architecture.map((item, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-white/[0.015] border border-white/[0.05] flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-blue-500/10 border border-blue-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-mono">
                    {idx + 1}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: Implemented Features */}
          <section className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 font-semibold mb-4">
              04 / Implemented Capabilities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: Technology Stack Breakdown */}
          <section>
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 font-semibold mb-4">
              05 / Technology Architecture Breakdown
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono mb-3">
                  <Layers className="w-4 h-4" />
                  <span>FRONTEND</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.frontend.map((t, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="flex items-center gap-2 text-blue-400 text-xs font-mono mb-3">
                  <Server className="w-4 h-4" />
                  <span>BACKEND & APIS</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.backend.map((t, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono mb-3">
                  <Database className="w-4 h-4" />
                  <span>DATABASES</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.database.map((t, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="flex items-center gap-2 text-purple-400 text-xs font-mono mb-3">
                  <Cpu className="w-4 h-4" />
                  <span>DEVOPS & CLOUD</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.devops.map((t, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Specific Project Metrics / Results */}
          {project.metrics && (
            <section className="p-8 rounded-2xl bg-gradient-to-r from-blue-950/20 via-cyan-950/20 to-transparent border border-blue-500/20">
              <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 font-semibold mb-6">
                06 / Verified Verification Notes
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {project.metrics.map((m, idx) => (
                  <div key={idx}>
                    <span className="text-xs font-mono text-slate-400 block mb-1">{m.label}</span>
                    <span className="text-base sm:text-lg font-bold text-white block">{m.value}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Client CTA Callout */}
          <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-white/[0.06] to-transparent border border-white/[0.1] text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Need a similar solution for your organization?
            </h3>
            <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6">
              Let&apos;s discuss your technical requirements, architectural options, and timelines. devAltec builds production-grade software engineered for reliability.
            </p>
            <Link
              href={`/contact?project=${encodeURIComponent(project.title)}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            >
              <Sparkles className="w-4 h-4 text-cyan-200" />
              <span>Discuss Similar Project Requirements</span>
            </Link>
          </section>

          {/* Related Case Studies */}
          <section className="pt-8 border-t border-white/[0.08]">
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400 font-semibold mb-6">
              Other Selected Case Studies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedProjects.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/work/${rel.slug}`}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/30 transition-all group block"
                >
                  <span className="text-xs font-mono text-cyan-400 block mb-1">
                    {rel.categoryLabel}
                  </span>
                  <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2">
                    {rel.tagline}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
