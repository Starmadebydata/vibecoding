import React from 'react';

const cats = ['Agents','AI Tools','Frameworks','Starters','Prompts','Tutorials','Libraries','Showcases'] as const;

export default function CategoryStrip() {
  return (
    <section className="mt-12">
      <h2 className="text-white/90 text-lg font-medium">Explore categories</h2>
      <div className="mt-3 flex flex-wrap gap-2">
        {cats.map((c) => (
          <button key={c} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10">
            {c}
          </button>
        ))}
      </div>
    </section>
  );
}
