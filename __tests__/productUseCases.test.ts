// __tests__/productUseCases.test.ts
import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  getProductById,
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from '@/application/useCases/productUseCases';
import { Product } from '@/types/entities';

// Mock repositories
const mockProductRepository = {
  findById: vi.fn(),
  findAll: vi.fn(),
  findByCategoryId: vi.fn(),
  create: vi.fn(),
  update: vi.fn(),
  delete: vi.fn(),
};

const mockCategoryRepository = {
  findById: vi.fn(),
  findAll: vi.fn(),
  create: vi.fn(),
  update: vi.fn(),
  delete: vi.fn(),
};

describe('Product Use Cases', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const sampleProduct: Omit<Product, 'id' | 'createdAt' | 'updatedAt'> = {
    name: 'Test Product',
    description: 'A test product',
    price: 10.99,
    stock: 100,
    categoryId: 'cat-1',
    sku: 'TEST-001',
    isActive: true,
  };

  const sampleProductWithId: Product = {
    id: 'prod-1',
    ...sampleProduct,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  describe('getProductById', () => {
    it('should return product when found', async () => {
      mockProductRepository.findById.mockResolvedValue(sampleProductWithId);

      const result = await getProductById('prod-1', mockProductRepository);

      expect(result).toEqual(sampleProductWithId);
      expect(mockProductRepository.findById).toHaveBeenCalledWith('prod-1');
    });

    it('should return null when not found', async () => {
      mockProductRepository.findById.mockResolvedValue(null);

      const result = await getProductById('non-existent', mockProductRepository);

      expect(result).toBeNull();
    });
  });

  describe('getAllProducts', () => {
    it('should return all products', async () => {
      const products = [sampleProductWithId];
      mockProductRepository.findAll.mockResolvedValue(products);

      const result = await getAllProducts(mockProductRepository);

      expect(result).toEqual(products);
      expect(mockProductRepository.findAll).toHaveBeenCalled();
    });
  });

  describe('createProduct', () => {
    it('should create a product when input is valid', async () => {
      mockCategoryRepository.findById.mockResolvedValue({} as any); // Mock category exists
      mockProductRepository.create.mockResolvedValue(sampleProductWithId);

      const result = await createProduct(sampleProduct, mockProductRepository, mockCategoryRepository);

      expect(result).toEqual(sampleProductWithId);
      expect(mockCategoryRepository.findById).toHaveBeenCalledWith('cat-1');
      expect(mockProductRepository.create).toHaveBeenCalledWith(sampleProduct);
    });

    it('should throw error when category does not exist', async () => {
      mockCategoryRepository.findById.mockResolvedValue(null);

      await expect(
        createProduct(sampleProduct, mockProductRepository, mockCategoryRepository)
      ).rejects.toThrow('Category not found');
    });
  });

  describe('updateProduct', () => {
    it('should update product when found', async () => {
      mockProductRepository.findById.mockResolvedValue(sampleProductWithId);
      mockCategoryRepository.findById.mockResolvedValue({} as any); // Mock category exists
      mockProductRepository.update.mockResolvedValue({
        ...sampleProductWithId,
        name: 'Updated Product',
        updatedAt: new Date(),
      });

      const result = await updateProduct(
        'prod-1',
        { name: 'Updated Product' },
        mockProductRepository,
        mockCategoryRepository
      );

      expect(result?.name).toBe('Updated Product');
      expect(mockProductRepository.findById).toHaveBeenCalledWith('prod-1');
      expect(mockProductRepository.update).toHaveBeenCalled();
    });

    it('should return null when product not found', async () => {
      mockProductRepository.findById.mockResolvedValue(null);

      const result = await updateProduct(
        'non-existent',
        { name: 'Updated Product' },
        mockProductRepository,
        mockCategoryRepository
      );

      expect(result).toBeNull();
    });
  });

  describe('deleteProduct', () => {
    it('should delete product when found', async () => {
      mockProductRepository.delete.mockResolvedValue(true);

      const result = await deleteProduct('prod-1', mockProductRepository);

      expect(result).toBe(true);
      expect(mockProductRepository.delete).toHaveBeenCalledWith('prod-1');
    });

    it('should return false when product not found', async () => {
      mockProductRepository.delete.mockResolvedValue(false);

      const result = await deleteProduct('non-existent', mockProductRepository);

      expect(result).toBe(false);
    });
  });
});