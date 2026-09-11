'use client';

import { useEffect, useRef, useState } from 'react';
import { FishLoadingAnimation } from './FishLoadingAnimation';
import { FishZoomAnimation } from './FishZoomAnimation';

export function MagicLoader() {
  const [ready, setReady] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  useEffect(() => { const timer = window.setTimeout(() => setReady(true), 3300); return () => window.clearTimeout(timer); }, []);
  useEffect(() => { const updateParallax = () => { if (stageRef.current) stageRef.current.style.setProperty('--parallax-y', `${Math.min(window.scrollY * 0.08, 42)}px`); }; window.addEventListener('scroll', updateParallax, { passive: true }); updateParallax(); return () => window.removeEventListener('scroll', updateParallax); }, []);
  return <div className={`magic-loader ${ready ? 'is-ready' : ''}`} aria-live="polite"><div className="magic-loader-status">{ready ? 'Ready to connect ✦' : 'Loading brighter ideas…'}</div><div ref={stageRef} className="magic-loader-stage"><div className="loading-layer"><FishLoadingAnimation /></div><div className="reveal-layer"><FishZoomAnimation /></div></div></div>;
}
