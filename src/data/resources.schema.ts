export type PriceTier = 'free' | 'paid' | 'freemium';

export interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  image?: string;
  tags: string[];
  priceTier: PriceTier;
  source: 'firecrawl' | 'manual';
  sourceDomain?: string;
  releasedAt?: string; // ISO string
  score?: number; // 0-100
}

export interface FeedQuery {
  tab: 'latest' | 'forYou' | 'trending';
  page?: number;
  pageSize?: number;
  filters?: {
    category?: string;
    priceTier?: PriceTier;
    q?: string;
  };
}
