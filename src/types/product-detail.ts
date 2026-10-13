
import type { Product } from "./product";

export interface MarketPrice {
  market: string;
  division: string;
  min: number;
  max: number;
}

export interface ProductDetail extends Product {
  category: string;
  categoryNameBn: string;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  markets: MarketPrice[];
}
