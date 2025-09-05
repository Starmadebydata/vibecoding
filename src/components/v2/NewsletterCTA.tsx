'use client';

import React from 'react';

export default function NewsletterCTA() {
  return (
    <section className="mt-16 rounded-2xl bg-white/[0.035] backdrop-blur-xl border border-white/10 p-6 shadow-glass">
      <h3 className="text-white text-xl font-semibold">Stay in the loop</h3>
      <p className="mt-1 text-white/70">Get occasional updates on new coding agents and tools.</p>
      <form className="mt-4 flex gap-2">
        <input className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="you@domain.com" />
        <button type="button" className="rounded-full bg-cyan-500/90 text-slate-900 px-4 py-2 text-sm font-medium hover:bg-cyan-400">Subscribe</button>
      </form>
    </section>
  );
}
