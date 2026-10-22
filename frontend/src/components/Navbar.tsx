'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DevAltecLogo } from './DevAltecLogo';
import { GithubIcon } from './GithubIcon';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#07090e]/85 backdrop-blur-md border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <div className="flex items-center gap-6">
            <DevAltecLogo variant="horizontal" size="md" />

            {/* Subtle Availability Beacon (Desktop) */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/[0.08] border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Remote & Contracts</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.08] p-1.5 rounded-full backdrop-blur-md">
            <Link
              href="/"
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                pathname === '/'
                  ? 'bg-blue-600/30 text-white border border-blue-500/40 shadow-[0_0_15px_rgba(37,99,235,0.3)]'
                  : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
              }`}
            >
              Overview
            </Link>
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-blue-600/30 text-white border border-blue-500/40 shadow-[0_0_15px_rgba(37,99,235,0.3)]'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/Simisola16"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.08] text-slate-300 hover:text-white transition-all hover:scale-105"
              aria-label="GitHub Profile (Simisola16)"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cyan-100 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="https://github.com/Simisola16"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/[0.05] border border-white/[0.08] text-slate-300"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08] text-slate-200 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#07090e]/95 backdrop-blur-xl border-b border-white/[0.1] px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              className={`px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between ${
                pathname === '/'
                  ? 'bg-blue-600/20 text-cyan-300 border border-blue-500/30'
                  : 'text-slate-200 hover:bg-white/[0.05]'
              }`}
            >
              <span>Overview</span>
            </Link>
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between ${
                    isActive
                      ? 'bg-blue-600/20 text-cyan-300 border border-blue-500/30'
                      : 'text-slate-200 hover:bg-white/[0.05]'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-500" />
                </Link>
              );
            })}

            <div className="mt-4 pt-4 border-t border-white/[0.08] flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 px-2 py-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Available Worldwide • Remote / Contracts</span>
              </div>
              <Link
                href="/contact"
                className="w-full text-center py-3 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
