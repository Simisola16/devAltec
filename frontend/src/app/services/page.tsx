import React from 'react';
import Link from 'next/link';
import { SERVICES, PROCESS_STEPS } from '@/data/services';
import { CheckCircle2, ArrowRight, Sparkles, Layers, ShieldCheck, Terminal } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services & Capabilities',
  description:
    'Full-stack software engineering, institutional compliance portals, real-time tournament systems, dynamic PDF engines, and cloud architecture by devAltec.'
};

export default function ServicesPage() {
  return (
    <div className="py-12 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-cyan-300 mb-4">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>Core Capabilities & Offerings</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Full-Stack Engineering Built for Real Business Value.
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Every service below is backed by demonstrated project work. We eliminate the guesswork by connecting interface design, serverless backend microservices, database schemas, and cloud deployment into cohesive digital products.
          </p>
        </div>

        {/* Services Detailed Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="p-8 sm:p-10 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-cyan-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-cyan-400">
                    SERVICE 0{index + 1}
                  </span>
                  {service.verifiedReference && (
                    <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{service.verifiedReference}</span>
                    </span>
                  )}
                </div>

                <h2 className="text-2xl font-bold text-white mb-2">
                  {service.title}
                </h2>
                <p className="text-xs sm:text-sm font-mono text-cyan-300 mb-4">
                  {service.tagline}
                </p>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables */}
                <div className="mb-6">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                    Key Deliverables & Capabilities
                  </h3>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="mb-8">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                    Primary Technologies
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {service.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Inquire CTA */}
              <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">
                  Custom scope & milestones
                </span>
                <Link
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-white bg-blue-600/30 hover:bg-blue-600/50 border border-blue-500/40 text-cyan-200 transition-all"
                >
                  <span>Request Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Working Methodology Deep Dive */}
        <section className="mb-24 p-8 sm:p-14 rounded-3xl bg-white/[0.015] border border-white/[0.08]">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 font-semibold mb-2 block">
              Disciplined Delivery
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Our 5-Stage Engineering Workflow
            </h2>
            <p className="text-slate-400 text-sm mt-3">
              How devAltec transforms ambitious requirements into production-ready platforms on time and within scope.
            </p>
          </div>

          <div className="space-y-6">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.number}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 text-cyan-400 flex items-center justify-center font-mono font-bold text-base shrink-0">
                    {step.number}
                  </div>
                  <div>
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                      {step.phase}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 max-w-3xl leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="text-center max-w-3xl mx-auto p-10 rounded-2xl bg-gradient-to-b from-blue-950/30 to-transparent border border-blue-500/20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to scope your engineering requirements?
          </h2>
          <p className="text-slate-300 text-sm mb-6">
            Get in touch directly with Olamilekan Muhayad Olasunkanmi to discuss architecture, timeline feasibility, and project milestones.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]"
          >
            <Sparkles className="w-4 h-4 text-cyan-200" />
            <span>Start a Project Discussion</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
