export type ProductState = 'available' | 'hidden' | 'not available';

export type Product = {
  id: number;
  name: string;
  tags: string[];
  brand: string;
  provider_id: number;
  description: string;
  price: number;
  sku: string;
  stock: number;
  category_id: number;
  state: ProductState;
  companyId: number;
  insertedAt: string;
  updatedAt: string;  
};

