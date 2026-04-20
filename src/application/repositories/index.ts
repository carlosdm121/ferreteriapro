import { Product, Category } from '@/types/entities';

export interface ProductRepository {
  findById(id: string): Promise<Product | null>;
  findAll(): Promise<Product[]>;
  findByCategoryId(categoryId: string): Promise<Product[]>;
  create(product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Promise<Product>;
  update(id: string, data: Partial<Omit<Product, 'id' | 'createdAt' | 'updatedAt'>>): Promise<Product | null>;
  delete(id: string): Promise<boolean>;
}

export interface CategoryRepository {
  findById(id: string): Promise<Category | null>;
  findAll(): Promise<Category[]>;
  create(category: Omit<Category, 'id'>): Promise<Category>;
  update(id: string, data: Partial<Omit<Category, 'id'>>): Promise<Category | null>;
  delete(id: string): Promise<boolean>;
}
