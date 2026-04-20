import { z } from 'zod';

export const orderSchema = z.object({
  customerName: z.string().min(3, 'El nombre debe tener al menos 3 caracteres'),
  customerPhone: z.string().min(8, 'El teléfono no es válido'),
  message: z.string().min(5, 'Por favor, detalla tu pedido'),
  products: z.array(z.string()).optional(), // IDs de productos seleccionados
});

export type OrderInput = z.infer<typeof orderSchema>;
