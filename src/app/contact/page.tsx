import React from 'react';
import { ContactForm } from '@/components/ContactForm';
import { GithubIcon } from '@/components/GithubIcon';
import { Mail, MapPin, ShieldCheck, Sparkles, Clock, Calendar, Phone, MessageSquare } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Start a Project — Contact & Hiring',
  description:
    'Inquire about custom software engineering, full-stack web applications, contract opportunities, or consulting engagements with devAltec and Olamilekan Muhayad Olasunkanmi.'
};

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & Direct Details */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Accepting New Inquiries</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-6">
              Let&apos;s build something exceptional together.
            </h1>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              <p>
                Have a project in mind or looking to hire a reliable <strong className="text-white">Full-Stack Engineer</strong>?
              </p>
              <p>
                Whether you need an institutional web application, a product MVP, a modern high-performance website, or automated digital workflows, I&apos;m open to suitable freelance contracts, full-time opportunities, and consulting engagements.
              </p>
            </div>

            {/* Instant Reach-Out Buttons */}
            <div className="w-full flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href="https://wa.me/2348085742261"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/30 text-emerald-300 hover:text-emerald-200 text-xs font-mono transition-all"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: 08085742261</span>
              </a>

              <a
                href="mailto:olamilekanmuhayad@yahoo.com"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-cyan-600/20 hover:bg-cyan-600/30 border border-cyan-500/30 text-cyan-300 hover:text-cyan-200 text-xs font-mono transition-all"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Email Directly</span>
              </a>
            </div>

            {/* Direct Connect Grid */}
            <div className="w-full space-y-3 pt-6 border-t border-white/[0.08] text-xs font-mono">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-3 text-slate-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>Email</span>
                </div>
                <a
                  href="mailto:olamilekanmuhayad@yahoo.com"
                  className="text-cyan-400 hover:underline"
                >
                  olamilekanmuhayad@yahoo.com
                </a>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-3 text-slate-300">
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp</span>
                </div>
                <a
                  href="https://wa.me/2348085742261"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline"
                >
                  08085742261
                </a>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-3 text-slate-300">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span>Phone</span>
                </div>
                <a
                  href="tel:+2348085742261"
                  className="text-blue-400 hover:underline"
                >
                  +234 808 574 2261
                </a>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-3 text-slate-300">
                  <GithubIcon className="w-4 h-4 text-slate-400" />
                  <span>GitHub</span>
                </div>
                <a
                  href="https://github.com/Simisola16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  github.com/Simisola16
                </a>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-3 text-slate-300">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>Location</span>
                </div>
                <span className="text-slate-300">Osun / Lagos, Nigeria</span>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-3 text-slate-300">
                  <Clock className="w-4 h-4 text-purple-400" />
                  <span>Response Time</span>
                </div>
                <span className="text-slate-300">Typically within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="mb-4">
              <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 font-semibold mb-1">
                Project Intake Workflow
              </h2>
              <p className="text-xs text-slate-400">
                Fill out the specifications below to request a consultation, technical proposal, or engineering quote.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
