import { z } from 'zod';

export const productSchema = z.object({
  name: z.string().min(3, 'El nombre debe tener al menos 3 caracteres'),
  description: z.string().optional(),
  price: z.number().positive('El precio debe ser mayor a 0'),
  stock: z.number().int().nonnegative('El stock no puede ser negativo'),
  categoryId: z.string().uuid('Categoría inválida'),
  sku: z.string().min(3, 'El SKU es requerido'),
  isActive: z.boolean().default(true),
});

export type ProductInput = z.infer<typeof productSchema>;
