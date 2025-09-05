'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type {Resource} from '@/data/resources.schema';

export default function FeedCard({item}: {item: Resource}) {
  const badge = (item.score ?? 0) > 75 ? 'Trending' : (item.releasedAt ? 'New' : null);

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] hover:bg-white/[0.06] transition-all shadow-glass hover:shadow-glow">
      <div className="aspect-[16/9] relative bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
        {item.image ? (
          <Image src={item.image} alt={item.title} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" unoptimized />
        ) : null}
        {badge ? (
          <span className="absolute left-3 top-3 rounded-full bg-cyan-500/90 text-slate-900 text-xs font-medium px-2 py-1">
            {badge}
          </span>
        ) : null}
      </div>
      <div className="p-4">
        <h3 className="text-base font-semibold text-white line-clamp-2">{item.title}</h3>
        <p className="mt-1 text-sm text-white/70 line-clamp-2">{item.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {item.tags.slice(0, 3).map((t) => (
              <span key={t} className="rounded-full bg-white/5 border border-white/10 text-[10px] px-2 py-0.5 text-white/70">
                {t}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
            <button className="text-xs text-white/80 hover:text-white">Save</button>
            <button className="text-xs text-white/80 hover:text-white">Share</button>
            <Link href={item.url} target="_blank" className="text-xs text-cyan-300 hover:text-cyan-200">
              Open
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
