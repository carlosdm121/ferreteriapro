'use server';

import { orderSchema } from '@/schemas/orderSchema';

export async function submitOrderAction(formData: FormData) {
  try {
    const rawData = {
      customerName: formData.get('customerName') as string,
      customerPhone: formData.get('customerPhone') as string,
      message: formData.get('message') as string,
    };

    // Validación estricta con Zod
    const validatedData = orderSchema.parse(rawData);

    // Simulación de guardado en DB o envío de correo
    console.log('Pedido Recibido:', validatedData);

    // Simular retraso de red
    await new Promise(resolve => setTimeout(resolve, 1500));

    return { success: true };
  } catch (error: any) {
    console.error('Error al procesar el pedido:', error);
    return { 
      success: false, 
      error: error?.errors?.[0]?.message || 'Error al enviar el pedido. Inténtalo de nuevo.' 
    };
  }
}
