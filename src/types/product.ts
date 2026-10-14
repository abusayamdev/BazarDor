export type PriceDirection = "up" | "down" | "flat";

export interface Product {
  id: number;
  slug: string;
  nameBn: string;
  image?: string;
  categoryIcon?: string;
  unit: string;
  today: number;

  change: {
    dir: PriceDirection;
    pct: number;
  };
}
