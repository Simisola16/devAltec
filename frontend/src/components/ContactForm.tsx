'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, Sparkles, Mail } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'Full-Stack Web Application',
    budget: '$3,000 - $7,000',
    timeline: '1-3 months',
    description: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [receipt, setReceipt] = useState<{ inquiryId: string; receivedAt: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    if (!formData.name.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your name.');
      return;
    }

    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!formData.description.trim() || formData.description.trim().length < 15) {
      setStatus('error');
      setErrorMessage('Please provide a brief description of your project (at least 15 characters).');
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit inquiry.');
      }

      setReceipt({
        inquiryId: data.inquiryId,
        receivedAt: data.receivedAt
      });
      setStatus('success');
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Network error occurred while submitting.');
    }
  };

  if (status === 'success' && receipt) {
    return (
      <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-blue-950/40 via-emerald-950/20 to-transparent border border-emerald-500/40 text-center animate-in fade-in duration-300 shadow-[0_0_40px_rgba(16,185,129,0.15)]">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto mb-6 text-emerald-400">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <h3 className="text-2xl font-bold text-white mb-2">Inquiry Confirmed</h3>
        <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
          Thank you, <strong className="text-white">{formData.name}</strong>. Your project inquiry has been received by <strong className="text-cyan-400">devAltec</strong>.
        </p>

        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] max-w-sm mx-auto text-left text-xs font-mono text-slate-300 mb-8 space-y-1.5">
          <div className="flex justify-between">
            <span className="text-slate-500">Inquiry Ref:</span>
            <span className="text-cyan-400 font-semibold">{receipt.inquiryId}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Service:</span>
            <span>{formData.projectType}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Target Timeline:</span>
            <span>{formData.timeline}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Status:</span>
            <span className="text-emerald-400">Queued for Review</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => {
              setStatus('idle');
              setReceipt(null);
              setFormData({
                name: '',
                email: '',
                company: '',
                projectType: 'Full-Stack Web Application',
                budget: '$3,000 - $7,000',
                timeline: '1-3 months',
                description: ''
              });
            }}
            className="px-6 py-2.5 rounded-xl text-sm font-medium text-slate-300 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] transition-all"
          >
            Submit Another Project
          </button>

          <a
            href={`mailto:olamilekanmuhayad@yahoo.com?subject=Project Inquiry: ${encodeURIComponent(formData.projectType)} (${receipt.inquiryId})&body=Hi Olamilekan,%0D%0A%0D%0ARegarding inquiry ${receipt.inquiryId}:%0D%0A${encodeURIComponent(formData.description)}`}
            className="px-6 py-2.5 rounded-xl text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 transition-all flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            <span>Open Email Draft</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 sm:p-10 rounded-2xl bg-white/[0.02] border border-white/[0.08] relative">
      {status === 'error' && (
        <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-start gap-3 text-rose-300 text-sm">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-rose-400" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2 font-medium">
            Your Name <span className="text-cyan-400">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Alex Johnson"
            className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] focus:border-cyan-400 focus:bg-white/[0.06] text-white text-sm placeholder-slate-500 outline-none transition-all"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2 font-medium">
            Email Address <span className="text-cyan-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="alex@company.com"
            className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] focus:border-cyan-400 focus:bg-white/[0.06] text-white text-sm placeholder-slate-500 outline-none transition-all"
          />
        </div>

        {/* Company (Optional) */}
        <div>
          <label htmlFor="company" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-medium">
            Company / Organization <span className="text-slate-600 font-normal">(Optional)</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="e.g. Acme Innovations Ltd."
            className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] focus:border-cyan-400 focus:bg-white/[0.06] text-white text-sm placeholder-slate-500 outline-none transition-all"
          />
        </div>

        {/* Project Type */}
        <div>
          <label htmlFor="projectType" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2 font-medium">
            Project Type <span className="text-cyan-400">*</span>
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[#090d16] border border-white/[0.1] focus:border-cyan-400 text-white text-sm outline-none transition-all"
          >
            <option value="Full-Stack Web Application">Full-Stack Web Application</option>
            <option value="Institutional & Compliance Portal">Institutional & Compliance Portal</option>
            <option value="Sports & Tournament System">Sports & Tournament System</option>
            <option value="3D Marketplace & Showcase">3D Marketplace & Showcase</option>
            <option value="Document Automation & PDF Engine">Document Automation & PDF Engine</option>
            <option value="RESTful API & Database Architecture">RESTful API & Database Architecture</option>
            <option value="Consulting / Full-Time Contract">Consulting / Full-Time Contract</option>
          </select>
        </div>

        {/* Budget Range */}
        <div>
          <label htmlFor="budget" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-medium">
            Budget Range <span className="text-slate-600 font-normal">(Optional)</span>
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[#090d16] border border-white/[0.1] focus:border-cyan-400 text-white text-sm outline-none transition-all"
          >
            <option value="$1,000 - $3,000">$1,000 - $3,000 (MVP / Prototype)</option>
            <option value="$3,000 - $7,000">$3,000 - $7,000 (Complete Platform)</option>
            <option value="$7,000 - $15,000">$7,000 - $15,000 (Enterprise Solution)</option>
            <option value="$15,000+">$15,000+ (Multi-Phase Ecosystem)</option>
            <option value="Flexible / Hourly Contract">Flexible / Contract / Monthly Retainer</option>
          </select>
        </div>

        {/* Timeline */}
        <div>
          <label htmlFor="timeline" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-medium">
            Target Timeline <span className="text-slate-600 font-normal">(Optional)</span>
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[#090d16] border border-white/[0.1] focus:border-cyan-400 text-white text-sm outline-none transition-all"
          >
            <option value="Urgent / < 2 weeks">Urgent (Less than 2 weeks)</option>
            <option value="2-4 weeks">2 to 4 weeks</option>
            <option value="1-3 months">1 to 3 months</option>
            <option value="3+ months">3+ months</option>
            <option value="Flexible">Flexible / Ongoing</option>
          </select>
        </div>
      </div>

      {/* Description */}
      <div className="mb-8">
        <label htmlFor="description" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2 font-medium">
          Project Requirements & Goals <span className="text-cyan-400">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={5}
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe what you want to build, key features needed, current technical stack (if any), and your target deadline..."
          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] focus:border-cyan-400 focus:bg-white/[0.06] text-white text-sm placeholder-slate-500 outline-none transition-all resize-none"
        ></textarea>
        <p className="text-[11px] text-slate-500 mt-2 font-mono">
          We treat all project specifications and proprietary ideas with strict confidentiality.
        </p>
      </div>

      {/* Submit Button */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-slate-400 font-mono">
          Direct response typically within 24 hours.
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-cyan-200" />
              <span>Transmitting Inquiry...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 text-cyan-200" />
              <span>Let&apos;s Discuss Your Project</span>
              <Send className="w-4 h-4 text-cyan-100" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
