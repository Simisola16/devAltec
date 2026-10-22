'use client';

import React, { useState } from 'react';
import { PROJECTS, CaseStudy } from '@/data/projects';
import { ProjectCard } from '@/components/ProjectCard';
import { GithubIcon } from '@/components/GithubIcon';
import { Filter, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'enterprise', label: 'Enterprise & Compliance' },
  { id: 'sports', label: 'Sports & Scouting' },
  { id: 'marketplace', label: 'Marketplaces & 3D' },
  { id: 'civic', label: 'Civic & AI Systems' },
  { id: 'fintech', label: 'Document & FinTech' }
];

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects =
    selectedCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="py-12 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-cyan-300 mb-4">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Verified Engineering Work</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Software Systems, Portals & Digital Solutions.
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Every project below represents real engineering work audited from my GitHub repositories (<a href="https://github.com/Simisola16" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline font-mono">@Simisola16</a>). We present only verified implementation details, real architecture, and genuine live deployments.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 pb-8 mb-8 border-b border-white/[0.08]">
          <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5 mr-2">
            <Filter className="w-3.5 h-3.5 text-cyan-400" />
            <span>Filter:</span>
          </span>

          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                  : 'bg-white/[0.03] text-slate-300 hover:text-white hover:bg-white/[0.07] border border-white/[0.06]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} featured={false} />
          ))}
        </div>

        {/* Audit Verification Note */}
        <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>GitHub Verification Protocol</span>
            </h3>
            <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
              We do not invent client numbers, awards, or arbitrary performance percentages. Explore all 56 public repositories on GitHub to review commit histories, branch structures, and code architecture.
            </p>
          </div>

          <a
            href="https://github.com/Simisola16"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl text-xs sm:text-sm font-mono text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] transition-all flex items-center gap-2 shrink-0"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Audit GitHub @Simisola16</span>
          </a>
        </div>
      </div>
    </div>
  );
}
