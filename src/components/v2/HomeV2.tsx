'use client';

import React from 'react';
import SpotlightHero from '@/components/v2/SpotlightHero';
import FiltersBar, {Filters} from '@/components/v2/FiltersBar';
import ContentTabs from '@/components/v2/ContentTabs';
import CategoryStrip from '@/components/v2/CategoryStrip';
import NewsletterCTA from '@/components/v2/NewsletterCTA';
import FooterV2 from '@/components/v2/FooterV2';
import type {Resource} from '@/data/resources.schema';

export default function HomeV2({resources}: {resources: Resource[]}) {
  const [filters, setFilters] = React.useState<Filters>({});

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      <SpotlightHero />
      <FiltersBar filters={filters} onChange={setFilters} />
      <ContentTabs resources={resources} filters={filters} />
      <CategoryStrip />
      <NewsletterCTA />
      <FooterV2 />
    </main>
  );
}
