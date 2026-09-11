'use client';

import { useEffect, useState } from 'react';

const fallbackKey = 'konnektoren-mediakit-visits';
const counterEndpoint = process.env.NEXT_PUBLIC_VISITOR_COUNTER_URL || 'https://api.counterapi.dev/v1/konnektoren-mediakit/visits/up';

export function VisitorCounter() {
  const [visits, setVisits] = useState<number | null>(null);
  const [increased, setIncreased] = useState(false);

  useEffect(() => {
    let active = true;
    const loadCounter = async () => {
      try {
        const response = await fetch(counterEndpoint, { cache: 'no-store' });
        if (!response.ok) throw new Error('Counter unavailable');
        const data = await response.json() as { count?: number; value?: number };
        const value = data.count ?? data.value;
        if (typeof value !== 'number') throw new Error('Invalid counter response');
        if (active) { setVisits(value); setIncreased(true); }
      } catch {
        const current = Number(window.localStorage.getItem(fallbackKey) || '0') + 1;
        window.localStorage.setItem(fallbackKey, String(current));
        if (active) { setVisits(current); setIncreased(true); }
      }
    };
    void loadCounter();
    return () => { active = false; };
  }, []);

  return <div className="visitor-counter" aria-live="polite"><span className="visitor-number">{visits ?? '—'}</span><span>people connected</span>{increased && <b className="plus-one">+1</b>}</div>;
}
