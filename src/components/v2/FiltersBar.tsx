'use client';

import React from 'react';
import type {PriceTier} from '@/data/resources.schema';

export type Filters = {
  q?: string;
  priceTier?: PriceTier;
  category?: string;
};

type Props = {
  filters: Filters;
  onChange: (next: Filters) => void;
};

const CATEGORIES = ['Agents','AI Tools','Frameworks','Starters','Prompts','Tutorials','Libraries','Showcases'] as const;

export default function FiltersBar({filters, onChange}: Props) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const setPrice = (tier?: PriceTier) => onChange({...filters, priceTier: filters.priceTier === tier ? undefined : tier});
  const setQuery = (q: string) => onChange({...filters, q});
  const setCategory = (c?: string) => onChange({...filters, category: c});

  return (
    <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <div className="relative flex items-center gap-2">
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10"
        >
          {filters.category ? `Category: ${filters.category}` : 'Category'}
        </button>
        {menuOpen && (
          <div className="absolute left-0 top-11 z-10 w-[220px] rounded-2xl border border-white/10 bg-[rgba(20,20,25,0.9)] backdrop-blur-xl p-2 shadow-glass">
            <button
              onClick={() => { setCategory(undefined); setMenuOpen(false); }}
              className="w-full text-left rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/10"
            >
              All
            </button>
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => { setCategory(c); setMenuOpen(false); }}
                className={`w-full text-left rounded-lg px-3 py-2 text-sm hover:bg-white/10 ${filters.category === c ? 'text-cyan-300' : 'text-white/80'}`}
              >
                {c}
              </button>
            ))}
          </div>
        )}
        <div className="flex items-center gap-1">
          <button
            onClick={() => setPrice('free')}
            className={`rounded-full px-3 py-1.5 text-xs border ${filters.priceTier === 'free' ? 'border-cyan-400 bg-cyan-500/20 text-cyan-200' : 'border-white/10 bg-white/5 text-white/80 hover:bg-white/10'}`}
          >
            Free
          </button>
          <button
            onClick={() => setPrice('freemium')}
            className={`rounded-full px-3 py-1.5 text-xs border ${filters.priceTier === 'freemium' ? 'border-cyan-400 bg-cyan-500/20 text-cyan-200' : 'border-white/10 bg-white/5 text-white/80 hover:bg-white/10'}`}
          >
            Freemium
          </button>
          <button
            onClick={() => setPrice('paid')}
            className={`rounded-full px-3 py-1.5 text-xs border ${filters.priceTier === 'paid' ? 'border-cyan-400 bg-cyan-500/20 text-cyan-200' : 'border-white/10 bg-white/5 text-white/80 hover:bg-white/10'}`}
          >
            Paid
          </button>
        </div>
      </div>
      <div className="relative">
        <input
          value={filters.q || ''}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search tools, agents, frameworks…"
          placeholder="Search tools, agents, frameworks…"
          className="w-full md:w-80 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
        />
        <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/40">⌘K</div>
      </div>
    </div>
  );
}
