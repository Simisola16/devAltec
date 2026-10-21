import React from 'react';
import Link from 'next/link';
import { CaseStudy } from '@/data/projects';
import { GithubIcon } from './GithubIcon';
import { ExternalLink, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface ProjectCardProps {
  project: CaseStudy;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <div
      className={`group relative rounded-2xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/[0.08] hover:border-cyan-500/40 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,180,255,0.15)] hover:-translate-y-1 ${
        featured ? 'lg:col-span-2' : ''
      }`}
    >
      {/* Background ambient hover spotlight */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/[0.04] to-cyan-500/[0.04] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      <div className="relative z-10 flex flex-col">
        {/* Top Badges Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 border border-blue-500/25 text-cyan-300">
              {project.categoryLabel}
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              {project.status}
            </span>
          </div>

          <div className="text-xs text-slate-400 font-mono flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>{project.verifiedRole}</span>
          </div>
        </div>

        {/* Project Title & Client */}
        <div className="mb-3">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
            {project.client}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>
        </div>

        {/* Tagline & Summary */}
        <p className="text-sm font-medium text-slate-300 mb-3">
          {project.tagline}
        </p>
        <p className="text-xs sm:text-sm text-slate-400 line-clamp-3 leading-relaxed mb-6">
          {project.summary}
        </p>

        {/* Key Implemented Architecture Highlights */}
        {featured && project.architecture && (
          <div className="mb-6 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2 font-semibold">
              Verified Implementation Highlights
            </span>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {project.architecture.slice(0, 2).map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-8">
          {[...project.technologies.frontend.slice(0, 3), ...project.technologies.backend.slice(0, 3)].map((tech, i) => (
            <span
              key={i}
              className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] border border-white/[0.06] text-slate-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.database && project.technologies.database[0] && (
            <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-cyan-950/30 border border-cyan-800/40 text-cyan-300">
              {project.technologies.database[0]}
            </span>
          )}
        </div>
      </div>

      {/* Action Footer */}
      <div className="relative z-10 pt-4 border-t border-white/[0.06] flex items-center justify-between gap-4">
        <Link
          href={`/work/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-white group-hover:text-cyan-300 transition-colors"
        >
          <span>Deep-Dive Case Study</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>

        <div className="flex items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white transition-colors"
              aria-label={`View ${project.title} on GitHub`}
              title="View Repository on GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600/40 text-cyan-300 border border-blue-500/30 text-xs font-medium transition-all"
              title="Open Verified Live Platform"
            >
              <span>Live Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
