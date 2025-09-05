'use client';

import React from 'react';
import Link from 'next/link';

export default function SpotlightHero() {
  return (
    <section className="relative isolate overflow-hidden rounded-3xl bg-[rgba(20,20,25,0.6)] backdrop-blur-xl ring-1 ring-white/10 shadow-glass">
      <div className="absolute -inset-16 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(0,200,255,0.12),transparent_60%)] blur-2xl" />
      <div className="px-6 py-16 md:px-10 md:py-24">
        <p className="text-xs uppercase tracking-widest text-cyan-300/80">Build faster with coding agents</p>
        <h1 className="mt-4 text-4xl md:text-6xl font-semibold text-white">
          Vibe Coding: your AI-powered dev portal
        </h1>
        <p className="mt-4 max-w-2xl text-base md:text-lg text-white/70">
          Discover coding agents, AI tools, and modern workflows to ship faster. Curated and refreshed daily.
        </p>
        <div className="mt-8 flex items-center gap-3">
          <Link href="#feed" className="inline-flex items-center rounded-full bg-cyan-500/90 text-slate-950 px-5 py-2.5 text-sm font-medium hover:bg-cyan-400 transition-colors">
            Explore the latest
          </Link>
          <Link href="#how" className="inline-flex items-center rounded-full border border-white/15 bg-white/5 text-white px-5 py-2.5 text-sm hover:bg-white/10">
            How it works
          </Link>
        </div>
      </div>
    </section>
  );
}
