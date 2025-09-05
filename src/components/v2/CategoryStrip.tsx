import React from 'react';
import {useTranslations} from 'next-intl';

const cats = ['agents','tools','frameworks','starters','prompts','tutorials','libraries','showcases'] as const;

export default function CategoryStrip() {
  const t = useTranslations('pages.homeV2.categories');
  return (
    <section className="mt-12">
      <h2 className="text-white/90 text-lg font-medium">{t('title')}</h2>
      <div className="mt-3 flex flex-wrap gap-2">
        {cats.map((c) => (
          <button key={c} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10">
            {t(c)}
          </button>
        ))}
      </div>
    </section>
  );
}
