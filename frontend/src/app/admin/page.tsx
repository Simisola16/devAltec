'use client';

import { useState, useEffect, useCallback, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  ShieldCheck,
  Lock,
  Globe,
  MapPin,
  Users,
  Eye,
  Activity,
  RefreshCw,
  Smartphone,
  Monitor,
  Tablet,
  Clock,
  ExternalLink,
  Trash2,
  Search,
  Filter,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  LogOut,
  AlertCircle,
  Wifi,
} from 'lucide-react';

interface StatsData {
  totalVisits: number;
  uniqueVisitors: number;
  visits24h: number;
  visits7d: number;
  topCountries: Array<{ country: string; countryCode: string; count: number }>;
  topCities: Array<{ city: string; country: string; region: string; count: number }>;
  topPages: Array<{ page: string; count: number }>;
  devices: Array<{ device: string; count: number }>;
  browsers: Array<{ browser: string; count: number }>;
  osList: Array<{ os: string; count: number }>;
  recentActivity: Array<{ date: string; count: number }>;
}

interface VisitRecord {
  _id: string;
  visitorId: string;
  sessionId: string;
  ip: string;
  country: string;
  countryCode: string;
  region: string;
  city: string;
  postalCode?: string;
  latitude?: number;
  longitude?: number;
  timezone?: string;
  isp?: string;
  org?: string;
  page: string;
  fullUrl?: string;
  referrer?: string;
  browser?: string;
  os?: string;
  deviceType?: string;
  screenResolution?: string;
  language?: string;
  durationSeconds?: number;
  isFirstVisit?: boolean;
  createdAt: string;
}

function AdminAnalyticsDashboard() {
  const searchParams = useSearchParams();
  const urlKey = searchParams.get('key');

  const [adminKey, setAdminKey] = useState<string>('');
  const [inputKey, setInputKey] = useState<string>('');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string>('');
  const [isVerifying, setIsVerifying] = useState<boolean>(true);

  // Analytics data state
  const [stats, setStats] = useState<StatsData | null>(null);
  const [visits, setVisits] = useState<VisitRecord[]>([]);
  const [pagination, setPagination] = useState({ total: 0, page: 1, limit: 25, totalPages: 1 });
  const [loading, setLoading] = useState<boolean>(false);
  const [autoRefresh, setAutoRefresh] = useState<boolean>(true);
  const [lastRefreshed, setLastRefreshed] = useState<Date>(new Date());

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedDevice, setSelectedDevice] = useState<string>('');

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';

  // Verify access key
  const verifyKey = useCallback(
    async (keyToTest: string) => {
      setIsVerifying(true);
      setAuthError('');
      try {
        const res = await fetch(`/api/backend/analytics/verify?key=${encodeURIComponent(keyToTest)}`)
          .catch(() => fetch(`${backendUrl}/api/analytics/verify?key=${encodeURIComponent(keyToTest)}`));

        if (res.ok) {
          const data = await res.json();
          if (data.success) {
            setAdminKey(keyToTest);
            setIsAuthenticated(true);
            try {
              sessionStorage.setItem('devaltec_admin_key', keyToTest);
            } catch {
              // ignore
            }
            return true;
          }
        }
        setAuthError('Invalid Admin Key. Access denied.');
        setIsAuthenticated(false);
        return false;
      } catch {
        setAuthError('Unable to connect to backend server. Make sure backend is running on port 5000.');
        setIsAuthenticated(false);
        return false;
      } finally {
        setIsVerifying(false);
      }
    },
    [backendUrl]
  );

  // Initial authentication check on load
  useEffect(() => {
    let keyToCheck = urlKey;
    if (!keyToCheck) {
      try {
        keyToCheck = sessionStorage.getItem('devaltec_admin_key');
      } catch {
        keyToCheck = null;
      }
    }
    if (keyToCheck) {
      verifyKey(keyToCheck);
    } else {
      setIsVerifying(false);
    }
  }, [urlKey, verifyKey]);

  // Fetch stats and visits
  const fetchData = useCallback(
    async (pageToLoad = 1) => {
      if (!adminKey) return;
      setLoading(true);
      try {
        const headers = { 'x-admin-key': adminKey };

        // Build visits query
        const queryParams = new URLSearchParams({
          page: pageToLoad.toString(),
          limit: '25',
          key: adminKey,
        });
        if (searchQuery.trim()) queryParams.set('search', searchQuery.trim());
        if (selectedCountry) queryParams.set('country', selectedCountry);
        if (selectedDevice) queryParams.set('device', selectedDevice);

        const [statsRes, visitsRes] = await Promise.all([
          fetch(`/api/backend/analytics/stats?key=${encodeURIComponent(adminKey)}`, { headers })
            .catch(() => fetch(`${backendUrl}/api/analytics/stats?key=${encodeURIComponent(adminKey)}`, { headers })),
          fetch(`/api/backend/analytics/visits?${queryParams.toString()}`, { headers })
            .catch(() => fetch(`${backendUrl}/api/analytics/visits?${queryParams.toString()}`, { headers })),
        ]);

        if (statsRes.ok) {
          const statsJson = await statsRes.json();
          if (statsJson.success) setStats(statsJson.data);
        }

        if (visitsRes.ok) {
          const visitsJson = await visitsRes.json();
          if (visitsJson.success) {
            setVisits(visitsJson.data.visits);
            setPagination(visitsJson.data.pagination);
          }
        }
        setLastRefreshed(new Date());
      } catch (err) {
        console.error('Failed to load analytics:', err);
      } finally {
        setLoading(false);
      }
    },
    [adminKey, backendUrl, searchQuery, selectedCountry, selectedDevice]
  );

  // Trigger data load when authenticated or filters change
  useEffect(() => {
    if (isAuthenticated && adminKey) {
      fetchData(1);
    }
  }, [isAuthenticated, adminKey, fetchData]);

  // Auto-refresh timer
  useEffect(() => {
    if (!isAuthenticated || !autoRefresh) return;
    const interval = setInterval(() => {
      fetchData(pagination.page);
    }, 15000);
    return () => clearInterval(interval);
  }, [isAuthenticated, autoRefresh, fetchData, pagination.page]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputKey.trim()) return;
    await verifyKey(inputKey.trim());
  };

  const handleLogout = () => {
    try {
      sessionStorage.removeItem('devaltec_admin_key');
    } catch {
      // ignore
    }
    setAdminKey('');
    setIsAuthenticated(false);
  };

  const handleDeleteVisit = async (visitId: string) => {
    if (!confirm('Are you sure you want to delete this record?')) return;
    try {
      await fetch(`/api/backend/analytics/visits/${visitId}?key=${encodeURIComponent(adminKey)}`, {
        method: 'DELETE',
        headers: { 'x-admin-key': adminKey },
      });
      setVisits((prev) => prev.filter((v) => v._id !== visitId));
      if (stats) {
        setStats({ ...stats, totalVisits: Math.max(0, stats.totalVisits - 1) });
      }
    } catch (err) {
      alert('Failed to delete visit record');
    }
  };

  // Helper for country flag emoji
  const getFlagEmoji = (countryCode: string) => {
    if (!countryCode || countryCode === 'XX' || countryCode.length !== 2) return '🌐';
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map((char) => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  };

  // Helper for device icon
  const getDeviceIcon = (deviceType?: string) => {
    const d = (deviceType || 'Desktop').toLowerCase();
    if (d.includes('mobile') || d.includes('phone')) {
      return <Smartphone className="w-4 h-4 text-emerald-400" />;
    }
    if (d.includes('tablet')) {
      return <Tablet className="w-4 h-4 text-amber-400" />;
    }
    return <Monitor className="w-4 h-4 text-cyan-400" />;
  };

  // 1. Password Protection Modal if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#07090e] text-slate-100 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md">
          {/* Glowing Card */}
          <div className="relative rounded-2xl bg-[#0d111a]/90 border border-slate-800/80 p-8 shadow-2xl backdrop-blur-xl">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-20 h-20 rounded-2xl bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 border border-cyan-400/30">
              <Lock className="w-10 h-10 text-white" />
            </div>

            <div className="pt-6 text-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 mb-3">
                <ShieldCheck className="w-3.5 h-3.5" /> SECURE GATEWAY
              </span>
              <h1 className="text-2xl font-bold tracking-tight text-white">devAltec Administrator</h1>
              <p className="text-sm text-slate-400 mt-2">
                This console is confidential and monitors live visitor telemetry, geographic coordinates, and server metrics.
              </p>
            </div>

            {authError && (
              <div className="mt-5 p-3 rounded-lg bg-rose-950/50 border border-rose-800/50 text-rose-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Admin Master Passkey
                </label>
                <div className="relative">
                  <input
                    type="password"
                    value={inputKey}
                    onChange={(e) => setInputKey(e.target.value)}
                    placeholder="Enter secret key..."
                    autoFocus
                    required
                    className="w-full bg-[#05070a] border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all font-mono"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isVerifying}
                className="w-full py-3 px-4 rounded-xl font-medium text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isVerifying ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" /> Verifying Credentials...
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4" /> Authenticate & Access Console
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-slate-800/60 text-center">
              <p className="text-xs text-slate-500 font-mono">
                Powered by devAltec Geolocation & MongoDB Engine
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 2. Full Admin Dashboard
  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 pb-24">
      {/* Top Banner Navigation */}
      <header className="sticky top-0 z-40 bg-[#07090e]/95 backdrop-blur-md border-b border-slate-800/80 px-4 sm:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-bold text-sm shadow-md shadow-cyan-500/20">
              dA
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base font-semibold text-white tracking-tight">devAltec Live Visitor Intelligence</h1>
                <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-mono bg-emerald-950/70 border border-emerald-800/60 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" /> LIVE TELEMETRY
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono">
                MongoDB Cluster • Accurate IP Geolocation & Session Tracking
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setAutoRefresh(!autoRefresh)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all border ${
                autoRefresh
                  ? 'bg-cyan-950/50 border-cyan-700/60 text-cyan-300'
                  : 'bg-slate-900 border-slate-800 text-slate-400'
              }`}
              title="Toggle automatic 15s updates"
            >
              <Activity className="w-3.5 h-3.5" />
              {autoRefresh ? 'Auto 15s ON' : 'Auto Paused'}
            </button>

            <button
              onClick={() => fetchData(pagination.page)}
              disabled={loading}
              className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700/70 flex items-center gap-1.5 transition-all disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </button>

            <button
              onClick={handleLogout}
              className="px-3 py-1.5 rounded-lg text-xs font-medium bg-rose-950/40 hover:bg-rose-900/60 text-rose-300 border border-rose-800/50 flex items-center gap-1.5 transition-all"
            >
              <LogOut className="w-3.5 h-3.5" /> Lock Console
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 space-y-8">
        {/* KPI Cards Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Total Visits */}
          <div className="p-5 rounded-2xl bg-[#0d111a]/80 border border-slate-800/90 shadow-lg relative overflow-hidden group hover:border-cyan-500/40 transition-all">
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-all" />
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Total Page Hits</span>
              <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-800/50 flex items-center justify-center text-cyan-400">
                <Eye className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-3">
              <div className="text-3xl font-extrabold text-white tracking-tight">
                {stats ? stats.totalVisits.toLocaleString() : '—'}
              </div>
              <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Logged in MongoDB Atlas
              </p>
            </div>
          </div>

          {/* Card 2: Unique Visitors */}
          <div className="p-5 rounded-2xl bg-[#0d111a]/80 border border-slate-800/90 shadow-lg relative overflow-hidden group hover:border-emerald-500/40 transition-all">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-all" />
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Unique Visitors</span>
              <div className="w-8 h-8 rounded-lg bg-emerald-950/60 border border-emerald-800/50 flex items-center justify-center text-emerald-400">
                <Users className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-3">
              <div className="text-3xl font-extrabold text-white tracking-tight">
                {stats ? stats.uniqueVisitors.toLocaleString() : '—'}
              </div>
              <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                <span className="text-emerald-400 font-medium">Distinct client fingerprints</span>
              </p>
            </div>
          </div>

          {/* Card 3: Last 24 Hours */}
          <div className="p-5 rounded-2xl bg-[#0d111a]/80 border border-slate-800/90 shadow-lg relative overflow-hidden group hover:border-violet-500/40 transition-all">
            <div className="absolute top-0 right-0 w-24 h-24 bg-violet-500/5 rounded-full blur-2xl group-hover:bg-violet-500/10 transition-all" />
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Active (Last 24h)</span>
              <div className="w-8 h-8 rounded-lg bg-violet-950/60 border border-violet-800/50 flex items-center justify-center text-violet-400">
                <Clock className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-3">
              <div className="text-3xl font-extrabold text-white tracking-tight">
                {stats ? stats.visits24h.toLocaleString() : '—'}
              </div>
              <p className="text-xs text-slate-400 mt-1">
                {stats ? `${stats.visits7d.toLocaleString()} visits in last 7 days` : 'Recent velocity'}
              </p>
            </div>
          </div>

          {/* Card 4: Geographic Reach */}
          <div className="p-5 rounded-2xl bg-[#0d111a]/80 border border-slate-800/90 shadow-lg relative overflow-hidden group hover:border-amber-500/40 transition-all">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-all" />
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Countries Reached</span>
              <div className="w-8 h-8 rounded-lg bg-amber-950/60 border border-amber-800/50 flex items-center justify-center text-amber-400">
                <Globe className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-3">
              <div className="text-3xl font-extrabold text-white tracking-tight">
                {stats ? stats.topCountries.length.toLocaleString() : '—'}
              </div>
              <p className="text-xs text-slate-400 mt-1">
                {stats && stats.topCities.length ? `${stats.topCities.length} distinct metropolitan areas` : 'Global coverage'}
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Breakdown Panels */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Panel 1: Top Countries & Cities */}
          <div className="p-6 rounded-2xl bg-[#0d111a]/80 border border-slate-800/90 shadow-lg lg:col-span-2">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800/60">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <h2 className="text-base font-semibold text-white">Top Geographic Origins</h2>
              </div>
              <span className="text-xs font-mono text-slate-400">Accurate IP Geolocation</span>
            </div>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Countries */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">Top Countries</h3>
                <div className="space-y-3">
                  {stats?.topCountries && stats.topCountries.length > 0 ? (
                    stats.topCountries.slice(0, 5).map((c, i) => (
                      <div key={i} className="flex items-center justify-between p-2.5 rounded-xl bg-[#080b11] border border-slate-800/60">
                        <div className="flex items-center gap-2.5">
                          <span className="text-lg leading-none">{getFlagEmoji(c.countryCode)}</span>
                          <div>
                            <span className="text-sm font-medium text-slate-200">{c.country}</span>
                            <span className="text-[10px] font-mono text-slate-500 ml-1.5 uppercase">({c.countryCode})</span>
                          </div>
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-cyan-950/60 text-cyan-300 border border-cyan-800/50">
                          {c.count} {c.count === 1 ? 'visit' : 'visits'}
                        </span>
                      </div>
                    ))
                  ) : (
                    <p className="text-xs text-slate-500 py-4 font-mono">No geographic data captured yet.</p>
                  )}
                </div>
              </div>

              {/* Cities */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">Top Metros / Cities</h3>
                <div className="space-y-3">
                  {stats?.topCities && stats.topCities.length > 0 ? (
                    stats.topCities.slice(0, 5).map((city, i) => (
                      <div key={i} className="flex items-center justify-between p-2.5 rounded-xl bg-[#080b11] border border-slate-800/60">
                        <div>
                          <div className="text-sm font-medium text-slate-200">{city.city}</div>
                          <div className="text-[11px] text-slate-500">
                            {city.region ? `${city.region}, ` : ''}{city.country}
                          </div>
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-emerald-950/60 text-emerald-300 border border-emerald-800/50">
                          {city.count} {city.count === 1 ? 'hit' : 'hits'}
                        </span>
                      </div>
                    ))
                  ) : (
                    <p className="text-xs text-slate-500 py-4 font-mono">No city data captured yet.</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Panel 2: Device & Browser Distribution */}
          <div className="p-6 rounded-2xl bg-[#0d111a]/80 border border-slate-800/90 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/60">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-violet-400" />
                  <h2 className="text-base font-semibold text-white">Device & OS Breakdown</h2>
                </div>
              </div>

              {/* Devices */}
              <div className="mt-5 space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">Device Distribution</h3>
                <div className="grid grid-cols-3 gap-2">
                  {['Desktop', 'Mobile', 'Tablet'].map((d) => {
                    const found = stats?.devices.find((item) => item.device.toLowerCase() === d.toLowerCase());
                    const count = found?.count || 0;
                    return (
                      <div key={d} className="p-3 rounded-xl bg-[#080b11] border border-slate-800/60 text-center">
                        <div className="flex justify-center mb-1">{getDeviceIcon(d)}</div>
                        <div className="text-xs font-medium text-slate-300">{d}</div>
                        <div className="text-sm font-mono font-bold text-white mt-1">{count}</div>
                      </div>
                    );
                  })}
                </div>

                {/* Operating Systems */}
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 pt-2">Operating Systems</h3>
                <div className="space-y-2">
                  {stats?.osList && stats.osList.length > 0 ? (
                    stats.osList.slice(0, 4).map((os, i) => (
                      <div key={i} className="flex items-center justify-between text-xs py-1 px-2 rounded-lg bg-[#080b11] text-slate-300">
                        <span>{os.os}</span>
                        <span className="font-mono text-slate-400">{os.count} visits</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-xs text-slate-500 font-mono">No OS data yet.</p>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/60 text-xs text-slate-400 flex items-center justify-between">
              <span>Telemetry sync:</span>
              <span className="font-mono text-cyan-400">{lastRefreshed.toLocaleTimeString()}</span>
            </div>
          </div>
        </section>

        {/* Live Visitor Feed Section */}
        <section className="p-6 rounded-2xl bg-[#0d111a]/80 border border-slate-800/90 shadow-lg space-y-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800/60">
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Activity className="w-5 h-5 text-cyan-400" /> Live Visitor Stream & Geolocation Logs
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Detailed record of each visitor, accurate geographic location, ISP network, and browsing journey.
              </p>
            </div>

            {/* Filter Toolbar */}
            <div className="flex flex-wrap items-center gap-2.5">
              {/* Search bar */}
              <div className="relative min-w-[200px]">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search IP, City, Page, ISP..."
                  className="w-full bg-[#080b11] border border-slate-700/80 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
              </div>

              {/* Country selector */}
              {stats?.topCountries && stats.topCountries.length > 0 && (
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="bg-[#080b11] border border-slate-700/80 rounded-xl px-2.5 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-cyan-500"
                >
                  <option value="">All Countries</option>
                  {stats.topCountries.map((c) => (
                    <option key={c.country} value={c.country}>
                      {c.country} ({c.count})
                    </option>
                  ))}
                </select>
              )}

              {/* Device selector */}
              <select
                value={selectedDevice}
                onChange={(e) => setSelectedDevice(e.target.value)}
                className="bg-[#080b11] border border-slate-700/80 rounded-xl px-2.5 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-cyan-500"
              >
                <option value="">All Devices</option>
                <option value="Desktop">Desktop</option>
                <option value="Mobile">Mobile</option>
                <option value="Tablet">Tablet</option>
              </select>
            </div>
          </div>

          {/* Visitors Table */}
          <div className="overflow-x-auto rounded-xl border border-slate-800/80">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#080b11] text-slate-400 font-mono uppercase tracking-wider text-[11px] border-b border-slate-800">
                <tr>
                  <th className="py-3 px-4">Visitor & Location</th>
                  <th className="py-3 px-4">Network / ISP</th>
                  <th className="py-3 px-4">Page Visited</th>
                  <th className="py-3 px-4">Device & OS</th>
                  <th className="py-3 px-4">Referrer</th>
                  <th className="py-3 px-4">Time</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-sans">
                {visits.length > 0 ? (
                  visits.map((visit) => {
                    const hasCoordinates = typeof visit.latitude === 'number' && typeof visit.longitude === 'number' && (visit.latitude !== 0 || visit.longitude !== 0);
                    const mapUrl = hasCoordinates
                      ? `https://www.google.com/maps?q=${visit.latitude},${visit.longitude}`
                      : null;

                    return (
                      <tr key={visit._id} className="hover:bg-slate-900/50 transition-colors">
                        {/* Location */}
                        <td className="py-3.5 px-4">
                          <div className="flex items-start gap-2.5">
                            <span className="text-xl leading-none mt-0.5" title={visit.country}>
                              {getFlagEmoji(visit.countryCode)}
                            </span>
                            <div>
                              <div className="font-semibold text-white flex items-center gap-1.5">
                                {visit.city && visit.city !== 'Unknown' ? visit.city : 'City Unknown'}, {visit.country}
                                {hasCoordinates && mapUrl && (
                                  <a
                                    href={mapUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={`View on Google Maps (${visit.latitude?.toFixed(4)}, ${visit.longitude?.toFixed(4)})`}
                                    className="text-cyan-400 hover:text-cyan-300"
                                  >
                                    <ExternalLink className="w-3 h-3" />
                                  </a>
                                )}
                              </div>
                              <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1 mt-0.5">
                                <span className="bg-slate-800/90 px-1.5 py-0.2 rounded text-slate-300">{visit.ip}</span>
                                {visit.region && visit.region !== 'Unknown' && <span>• {visit.region}</span>}
                              </div>
                            </div>
                          </div>
                        </td>

                        {/* Network / ISP */}
                        <td className="py-3.5 px-4 text-slate-300">
                          <div className="flex items-center gap-1.5">
                            <Wifi className="w-3.5 h-3.5 text-slate-500" />
                            <span className="truncate max-w-[180px] font-medium" title={visit.isp || visit.org || 'Unknown'}>
                              {visit.isp || visit.org || 'Unknown ISP'}
                            </span>
                          </div>
                          {visit.timezone && (
                            <div className="text-[10px] font-mono text-slate-500 mt-0.5">{visit.timezone}</div>
                          )}
                        </td>

                        {/* Page Visited */}
                        <td className="py-3.5 px-4">
                          <span className="px-2 py-0.5 rounded-md font-mono text-xs font-semibold bg-cyan-950/70 border border-cyan-800/50 text-cyan-300">
                            {visit.page}
                          </span>
                        </td>

                        {/* Device & OS */}
                        <td className="py-3.5 px-4">
                          <div className="flex items-center gap-1.5 text-slate-200">
                            {getDeviceIcon(visit.deviceType)}
                            <span className="font-medium">{visit.os}</span>
                          </div>
                          <div className="text-[11px] text-slate-500 mt-0.5">{visit.browser}</div>
                        </td>

                        {/* Referrer */}
                        <td className="py-3.5 px-4 text-slate-400 max-w-[150px] truncate" title={visit.referrer}>
                          {visit.referrer === 'Direct' ? (
                            <span className="text-slate-500 italic">Direct Visit</span>
                          ) : (
                            <span className="text-cyan-400/90 font-mono text-[11px]">{visit.referrer}</span>
                          )}
                        </td>

                        {/* Time */}
                        <td className="py-3.5 px-4 text-slate-400 font-mono text-[11px] whitespace-nowrap">
                          {new Date(visit.createdAt).toLocaleDateString([], {
                            month: 'short',
                            day: 'numeric',
                          })}{' '}
                          {new Date(visit.createdAt).toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                            second: '2-digit',
                          })}
                        </td>

                        {/* Actions */}
                        <td className="py-3.5 px-4 text-right">
                          <button
                            onClick={() => handleDeleteVisit(visit._id)}
                            className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-950/40 transition-colors"
                            title="Delete log record"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={7} className="text-center py-12 text-slate-500 font-mono">
                      No visits recorded matching your criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          {pagination.totalPages > 1 && (
            <div className="flex items-center justify-between pt-2">
              <span className="text-xs font-mono text-slate-400">
                Showing {visits.length} of {pagination.total} records (Page {pagination.page} of {pagination.totalPages})
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => fetchData(pagination.page - 1)}
                  disabled={pagination.page <= 1 || loading}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 disabled:opacity-40 flex items-center gap-1"
                >
                  <ChevronLeft className="w-3.5 h-3.5" /> Previous
                </button>
                <button
                  onClick={() => fetchData(pagination.page + 1)}
                  disabled={pagination.page >= pagination.totalPages || loading}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 disabled:opacity-40 flex items-center gap-1"
                >
                  Next <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default function AdminPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#07090e] text-slate-100 flex items-center justify-center font-mono text-xs text-slate-500">
          Loading Security Console...
        </div>
      }
    >
      <AdminAnalyticsDashboard />
    </Suspense>
  );
}
