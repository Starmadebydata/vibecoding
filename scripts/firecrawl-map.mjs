import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

const RAW = path.resolve(process.cwd(), 'src/data/resources.raw.json');
const OUT = path.resolve(process.cwd(), 'src/data/resources.json');

function idFromUrl(url) {
  return crypto.createHash('sha1').update(url).digest('hex').slice(0, 12);
}

function guessPriceTier(text) {
  const t = (text || '').toLowerCase();
  if (t.includes('free') || t.includes('open source') || t.includes('opensource')) return 'free';
  if (t.includes('freemium')) return 'freemium';
  return 'paid';
}

function firstImage(doc) {
  return doc?.meta?.ogImage || doc?.meta?.image || (doc?.images && doc.images[0]) || null;
}

function domainOf(urlStr) {
  try { return new URL(urlStr).hostname.replace(/^www\./, ''); } catch { return undefined; }
}

function normalizeItem(item) {
  const url = item.url || item.link || item.sourceUrl;
  if (!url) return null;

  const title = item.title || item.meta?.title || domainOf(url) || 'Untitled';
  const description = item.description || item.excerpt || item.meta?.description || '';
  const image = firstImage(item);
  const tags = Array.from(new Set([...(item.keywords || []), ...(item.tags || [])])).slice(0, 8);
  const priceTier = guessPriceTier(`${title} ${description}`);
  const releasedAt = item.publishedAt || item.date || null;
  const score = Number(item.score ?? item.rank ?? 50);

  return {
    id: idFromUrl(url),
    title,
    description,
    url,
    image: image || undefined,
    tags,
    priceTier,
    source: 'firecrawl',
    sourceDomain: domainOf(url),
    releasedAt: releasedAt ? new Date(releasedAt).toISOString() : undefined,
    score: Number.isFinite(score) ? score : 50
  };
}

const raw = JSON.parse(await fs.readFile(RAW, 'utf-8'));
const items = Array.isArray(raw) ? raw : raw.items || [];
const normalized = items.map(normalizeItem).filter(Boolean);

const byId = new Map(normalized.map((r) => [r.id, r]));
const out = Array.from(byId.values());

await fs.writeFile(OUT, JSON.stringify(out, null, 2), 'utf-8');
console.log(`Wrote ${out.length} resources to ${OUT}`);
