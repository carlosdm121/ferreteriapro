import { Product } from '@/types/entities';
import { ProductRepository } from '@/application/repositories';

// Simulación de base de datos volátil para desarrollo
let products: Product[] = [];

export class InMemoryProductRepository implements ProductRepository {
  async findById(id: string): Promise<Product | null> {
    return products.find(p => p.id === id) || null;
  }

  async findAll(): Promise<Product[]> {
    return [...products];
  }

  async findByCategoryId(categoryId: string): Promise<Product[]> {
    return products.filter(p => p.categoryId === categoryId);
  }

  async create(data: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Promise<Product> {
    const newProduct: Product = {
      ...data,
      id: crypto.randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    products.push(newProduct);
    return newProduct;
  }

  async update(id: string, data: Partial<Omit<Product, 'id' | 'createdAt' | 'updatedAt'>>): Promise<Product | null> {
    const index = products.findIndex(p => p.id === id);
    if (index === -1) return null;

    products[index] = {
      ...products[index],
      ...data,
      updatedAt: new Date(),
    };
    return products[index];
  }

  async delete(id: string): Promise<boolean> {
    const index = products.findIndex(p => p.id === id);
    if (index === -1) return false;

    products.splice(index, 1);
    return true;
  }
}
