import { Product } from '@/types/entities';
import { ProductRepository, CategoryRepository } from '@/application/repositories';

export const getProductById = async (
  id: string,
  productRepository: ProductRepository
): Promise<Product | null> => {
  return await productRepository.findById(id);
};

export const getAllProducts = async (
  productRepository: ProductRepository
): Promise<Product[]> => {
  return await productRepository.findAll();
};

export const createProduct = async (
  productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>,
  productRepository: ProductRepository,
  categoryRepository: CategoryRepository
): Promise<Product> => {
  const category = await categoryRepository.findById(productData.categoryId);
  if (!category) {
    throw new Error('Category not found');
  }
  return await productRepository.create(productData);
};

export const updateProduct = async (
  id: string,
  updateData: Partial<Omit<Product, 'id' | 'createdAt' | 'updatedAt'>>,
  productRepository: ProductRepository,
  categoryRepository: CategoryRepository
): Promise<Product | null> => {
  const product = await productRepository.findById(id);
  if (!product) {
    return null;
  }
  
  if (updateData.categoryId) {
    const category = await categoryRepository.findById(updateData.categoryId);
    if (!category) {
      throw new Error('Category not found');
    }
  }

  return await productRepository.update(id, updateData);
};

export const deleteProduct = async (
  id: string,
  productRepository: ProductRepository
): Promise<boolean> => {
  return await productRepository.delete(id);
};
