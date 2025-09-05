import 'server-only';
import fs from 'node:fs/promises';
import path from 'node:path';
import type {Resource} from './resources.schema';

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
