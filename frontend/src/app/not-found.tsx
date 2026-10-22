import React from 'react';
import Link from 'next/link';
import { DevAltecMonogram } from '@/components/DevAltecLogo';
import { ArrowLeft, Home, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full text-center p-8 sm:p-12 rounded-3xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl relative">
        <div className="w-16 h-16 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center mx-auto mb-6">
          <DevAltecMonogram size={40} />
        </div>

        <span className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400 font-bold block mb-2">
          404 / Destination Unreachable
        </span>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
          Route Not Found
        </h1>

        <p className="text-slate-400 text-sm leading-relaxed mb-8">
          The requested endpoint does not exist or has been refactored in the current release. Navigate back to explore verified work.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]"
          >
            <Home className="w-4 h-4" />
            <span>Return to Overview</span>
          </Link>

          <Link
            href="/work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-slate-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] transition-all"
          >
            <Compass className="w-4 h-4" />
            <span>Browse Work</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
