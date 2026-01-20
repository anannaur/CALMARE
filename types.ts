
export enum BottleSize {
  SMALL = '500ml',
  LARGE = '750ml'
}

export enum BottleColor {
  PEARL = 'Pearl White',
  OBSIDIAN = 'Obsidian Black',
  SAGE = 'Sage Green',
  DUSK = 'Dusk Purple'
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  sizes: BottleSize[];
  colors: BottleColor[];
  image: string;
  features: string[];
  specs: Record<string, string>;
}

export interface CartItem {
  productId: string;
  size: BottleSize;
  color: BottleColor;
  quantity: number;
  price: number;
}

export enum StressLevel {
  RELAXED = 'Relaxed',
  BALANCED = 'Balanced',
  STRESSED = 'High Physiological Load'
}
