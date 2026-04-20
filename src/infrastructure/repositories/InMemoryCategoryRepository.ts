import { Category } from '@/types/entities';
import { CategoryRepository } from '@/application/repositories';

// Simulación de base de datos volátil para categorías
let categories: Category[] = [
  { id: '1', name: 'Herramientas Eléctricas', description: 'Taladros, amoladoras, etc.' },
  { id: '2', name: 'Herramientas Manuales', description: 'Martillos, destornilladores, etc.' },
  { id: '3', name: 'Plomería', description: 'Tubos, válvulas, etc.' },
];

export class InMemoryCategoryRepository implements CategoryRepository {
  async findById(id: string): Promise<Category | null> {
    return categories.find(c => c.id === id) || null;
  }

  async findAll(): Promise<Category[]> {
    return [...categories];
  }

  async create(data: Omit<Category, 'id'>): Promise<Category> {
    const newCategory: Category = {
      ...data,
      id: crypto.randomUUID(),
    };
    categories.push(newCategory);
    return newCategory;
  }

  async update(id: string, data: Partial<Omit<Category, 'id'>>): Promise<Category | null> {
    const index = categories.findIndex(c => c.id === id);
    if (index === -1) return null;

    categories[index] = { ...categories[index], ...data };
    return categories[index];
  }

  async delete(id: string): Promise<boolean> {
    const index = categories.findIndex(c => c.id === id);
    if (index === -1) return false;

    categories.splice(index, 1);
    return true;
  }
}
