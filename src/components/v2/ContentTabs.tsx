'use client';

import React from 'react';
import type {Resource} from '@/data/resources.schema';
import {applyFilters, paginate} from '@/data/resources.utils';
import FeedGrid from './FeedGrid';
import type {Filters} from './FiltersBar';

type Props = { resources: Resource[]; filters?: Filters };

export default function ContentTabs({resources, filters}: Props) {
  const [tab, setTab] = React.useState<'latest' | 'forYou' | 'trending'>('latest');
  const [page, setPage] = React.useState(1);

  const filtered = React.useMemo(() => applyFilters(resources, filters), [resources, filters]);

  const sorted = React.useMemo(() => {
    const byDateDesc = (a: Resource, b: Resource) =>
      new Date(b.releasedAt ?? 0).getTime() - new Date(a.releasedAt ?? 0).getTime();
    const byScoreDesc = (a: Resource, b: Resource) => (b.score ?? 0) - (a.score ?? 0);
    const scoreWithRecency = (r: Resource) => {
      const ageDays = r.releasedAt ? (Date.now() - new Date(r.releasedAt).getTime()) / 86400000 : 180;
      const recencyBoost = Math.max(0, 100 - ageDays);
      return (r.score ?? 40) * 0.7 + recencyBoost * 0.3;
    };

    if (tab === 'latest') return [...filtered].sort(byDateDesc);
    if (tab === 'trending') return [...filtered].sort(byScoreDesc);
    return [...filtered].sort((a, b) => scoreWithRecency(b) - scoreWithRecency(a));
  }, [filtered, tab]);

  const {items, total, page: p} = paginate(sorted, page, 12);

  const tabLabels = {
    latest: 'Latest',
    forYou: 'For You',
    trending: 'Trending'
  };

  return (
    <section className="mt-8" id="feed">
      <div className="inline-flex rounded-full bg-white/5 p-1 border border-white/10">
        {(['latest', 'forYou', 'trending'] as const).map((key) => (
          <button
            key={key}
            onClick={() => { setTab(key); setPage(1); }}
            className={[
              'px-3 py-1.5 text-sm rounded-full',
              tab === key ? 'bg-cyan-500/90 text-slate-900' : 'text-white/80 hover:bg-white/10'
            ].join(' ')}
          >
            {tabLabels[key]}
          </button>
        ))}
      </div>
      <FeedGrid items={items} />
      <div className="mt-6 flex items-center justify-center gap-2">
        <button
          disabled={p === 1}
          onClick={() => setPage((x) => Math.max(1, x - 1))}
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 disabled:opacity-40"
        >
          Prev
        </button>
        <button
          disabled={p * 12 >= total}
          onClick={() => setPage((x) => x + 1)}
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </section>
  );
}
