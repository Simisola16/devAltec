'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function VisitorTracker() {
  const pathname = usePathname();
  const lastTrackedPath = useRef<string | null>(null);
  const currentVisitId = useRef<string | null>(null);
  const startTime = useRef<number>(0);

  useEffect(() => {
    // Never track the secret admin dashboard visits
    if (!pathname || pathname.startsWith('/admin')) {
      return;
    }

    // Avoid duplicate tracking on exact same path re-render
    if (lastTrackedPath.current === pathname) {
      return;
    }
    lastTrackedPath.current = pathname;
    startTime.current = Date.now();

    // Generate or retrieve persistent visitor ID
    let visitorId = '';
    try {
      visitorId = localStorage.getItem('devaltec_vid') || '';
      if (!visitorId) {
        visitorId = `v_${Math.random().toString(36).substring(2, 11)}_${Date.now()}`;
        localStorage.setItem('devaltec_vid', visitorId);
      }
    } catch {
      visitorId = `v_${Math.random().toString(36).substring(2, 11)}`;
    }

    // Session ID (persists across tab navigation within same session)
    let sessionId = '';
    try {
      sessionId = sessionStorage.getItem('devaltec_sid') || '';
      if (!sessionId) {
        sessionId = `s_${Math.random().toString(36).substring(2, 11)}_${Date.now()}`;
        sessionStorage.setItem('devaltec_sid', sessionId);
      }
    } catch {
      sessionId = `s_${Math.random().toString(36).substring(2, 11)}`;
    }

    const payload = {
      visitorId,
      sessionId,
      page: pathname,
      fullUrl: typeof window !== 'undefined' ? window.location.href : '',
      referrer: typeof document !== 'undefined' && document.referrer ? document.referrer : 'Direct',
      screenResolution: typeof window !== 'undefined' ? `${window.screen.width}x${window.screen.height}` : 'Unknown',
      language: typeof navigator !== 'undefined' ? navigator.language : 'en',
      isFirstVisit: !Boolean(localStorage.getItem('devaltec_has_visited')),
    };

    try {
      localStorage.setItem('devaltec_has_visited', 'true');
    } catch {
      // ignore
    }

    // Non-blocking track request
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://devaltecbackend.onrender.com';
    
    // Try Next rewrite proxy first, fallback to direct backend URL
    fetch('/api/backend/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (!res.ok) {
          // Fallback to direct backend
          return fetch(`${backendUrl}/api/track`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          });
        }
        return res;
      })
      .then((res) => res.json())
      .then((data) => {
        if (data?.visitId) {
          currentVisitId.current = data.visitId;
        }
      })
      .catch(() => {
        // Silent fail so user portfolio experience is never affected
      });

    // Record time spent when leaving or switching page
    const handleUnloadOrHide = () => {
      if (!currentVisitId.current) return;
      const durationSeconds = Math.round((Date.now() - startTime.current) / 1000);
      if (durationSeconds > 1) {
        const body = JSON.stringify({
          visitId: currentVisitId.current,
          durationSeconds,
        });
        if (navigator.sendBeacon) {
          navigator.sendBeacon('/api/backend/track/duration', body);
        }
      }
    };

    window.addEventListener('beforeunload', handleUnloadOrHide);
    return () => {
      window.removeEventListener('beforeunload', handleUnloadOrHide);
      handleUnloadOrHide();
    };
  }, [pathname]);

  return null;
}
