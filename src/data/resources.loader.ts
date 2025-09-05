import fs from 'node:fs/promises';
import path from 'node:path';
import type {Resource, FeedQuery} from './resources.schema';

const CRAWLED_PATH = path.resolve(process.cwd(), 'src/data/resources.json');
const SEED_PATH = path.resolve(process.cwd(), 'src/data/resources.example.json');

let cache: Resource[] | null = null;
async function readJson(file: string): Promise<Resource[]> {
  const buf = await fs.readFile(file, 'utf-8');
  return JSON.parse(buf) as Resource[];
}

export async function loadResources(): Promise<Resource[]> {
  if (cache) return cache;
  try {
    const data = await readJson(CRAWLED_PATH);
    cache = data;
    return data;
  } catch {
    const seed = await readJson(SEED_PATH);
    cache = seed;
    return seed;
  }
}

const byDateDesc = (a: Resource, b: Resource) =>
  new Date(b.releasedAt ?? 0).getTime() - new Date(a.releasedAt ?? 0).getTime();

const byScoreDesc = (a: Resource, b: Resource) => (b.score ?? 0) - (a.score ?? 0);

function scoreWithRecency(r: Resource) {
  const ageDays = r.releasedAt ? (Date.now() - new Date(r.releasedAt).getTime()) / 86400000 : 180;
  const recencyBoost = Math.max(0, 100 - ageDays);
  return (r.score ?? 40) * 0.7 + recencyBoost * 0.3;
}

export function sortForTab(tab: FeedQuery['tab'], resources: Resource[]): Resource[] {
  if (tab === 'latest') return [...resources].sort(byDateDesc);
  if (tab === 'trending') return [...resources].sort(byScoreDesc);
  if (tab === 'forYou') return [...resources].sort((a, b) => scoreWithRecency(b) - scoreWithRecency(a));
  return resources;
}

export function applyFilters(resources: Resource[], q?: FeedQuery['filters']): Resource[] {
  if (!q) return resources;
  return resources.filter((r) => {
    const okCat = q.category ? r.tags.includes(q.category) : true;
    const okPrice = q.priceTier ? r.priceTier === q.priceTier : true;
    const okSearch = q.q ? (r.title + ' ' + r.description).toLowerCase().includes(q.q.toLowerCase()) : true;
    return okCat && okPrice && okSearch;
  });
}

export function paginate<T>(items: T[], page = 1, pageSize = 12): {items: T[]; total: number; page: number; pageSize: number} {
  const start = (page - 1) * pageSize;
  return {items: items.slice(start, start + pageSize), total: items.length, page, pageSize};
}
