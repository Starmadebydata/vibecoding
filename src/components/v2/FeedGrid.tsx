import React from 'react';
import type {Resource} from '@/data/resources.schema';
import FeedCard from './FeedCard';

export default function FeedGrid({items}: {items: Resource[]}) {
  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {items.map((r) => <FeedCard key={r.id} item={r} />)}
    </div>
  );
}
