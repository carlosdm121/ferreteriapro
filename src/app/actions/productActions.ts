'use server';

import { revalidatePath } from 'next/cache';
import { productSchema } from '@/schemas/productSchemas';
import { createProduct, getAllProducts } from '@/application/useCases/productUseCases';
import { InMemoryProductRepository } from '@/infrastructure/repositories/InMemoryProductRepository';
import { InMemoryCategoryRepository } from '@/infrastructure/repositories/InMemoryCategoryRepository';

// En un entorno real, estas instancias vendrían de un contenedor de dependencias
const productRepo = new InMemoryProductRepository();
const categoryRepo = new InMemoryCategoryRepository();

export async function fetchProductsAction() {
  try {
    return await getAllProducts(productRepo);
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export async function createProductAction(formData: FormData) {
  try {
    const rawData = {
      name: formData.get('name') as string,
      description: (formData.get('description') as string) || undefined,
      price: Number(formData.get('price')),
      stock: Number(formData.get('stock')),
      categoryId: formData.get('categoryId') as string,
      sku: formData.get('sku') as string,
      isActive: formData.get('isActive') === 'true',
    };

    // Validación con Zod
    const validatedData = productSchema.parse(rawData);

    await createProduct(validatedData, productRepo, categoryRepo);

    revalidatePath('/productos');
    return { success: true };
  } catch (error: any) {
    console.error('Error creating product:', error);
    return { 
      success: false, 
      error: error?.errors?.[0]?.message || 'Error de validación o guardado' 
    };
  }
}
