'use client';

import { Product } from '@/types/entities';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const whatsappUrl = `https://wa.me/5493815555555?text=Hola! Me interesa el producto: ${product.name} (SKU: ${product.sku})`;

  // Sistema de fallback dinámico para imágenes locales
  const getProductImage = () => {
    // Si el producto tiene una imagen local asignada (ej: /img/taladro.webp)
    if ((product as any).imageUrl) return (product as any).imageUrl;

    // Respaldos profesionales de Pexels según categoría
    const fallbacks: Record<string, string> = {
      '1': 'https://images.pexels.com/photos/4792489/pexels-photo-4792489.jpeg?auto=compress&cs=tinysrgb&w=800', // Eléctricas
      '2': 'https://images.pexels.com/photos/50608/screwdriver-tool-fix-close-up-50608.jpeg?auto=compress&cs=tinysrgb&w=800', // Manuales
      '3': 'https://images.pexels.com/photos/5850920/pexels-photo-5850920.jpeg?auto=compress&cs=tinysrgb&w=800', // Plomería
      'default': 'https://images.pexels.com/photos/1029243/pexels-photo-1029243.jpeg?auto=compress&cs=tinysrgb&w=800'
    };
    return fallbacks[product.categoryId] || fallbacks.default;
  };

  const productImage = getProductImage();

  return (
    <div className="bg-white rounded-3xl border border-gray-100 p-4 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full group overflow-hidden">
      {/* Contenedor de imagen con proporción fija 1:1 */}
      <div className="relative aspect-square rounded-2xl mb-5 overflow-hidden bg-gray-50 flex items-center justify-center">
        <img 
          src={productImage} 
          alt={product.name} 
          className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700"
          onError={(e) => {
            // Si la imagen falla (local o externa), cargamos el respaldo definitivo
            const target = e.target as HTMLImageElement;
            target.src = 'https://images.pexels.com/photos/1029243/pexels-photo-1029243.jpeg?auto=compress&cs=tinysrgb&w=800';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <span className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-[10px] font-black text-gray-900 uppercase tracking-widest border border-gray-100 shadow-sm">
          {product.sku}
        </span>
      </div>

      <div className="flex-grow px-2">
        <h3 className="text-lg font-black text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-gray-500 font-medium line-clamp-2 mb-4 h-8 leading-relaxed">
          {product.description || 'Calidad profesional garantizada para tus obras y reparaciones.'}
        </p>
      </div>

      <div className="mt-auto pt-4 px-2 border-t border-gray-50 flex items-center justify-between gap-4">
        <div className="flex flex-col">
          <span className="text-2xl font-black text-gray-900">
            {product.price.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}
          </span>
          <span className="text-[10px] font-bold text-green-600 uppercase tracking-tighter">
            En Stock • Envío Inmediato
          </span>
        </div>
        
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 p-3 rounded-xl shadow-lg shadow-green-500/20 text-white transition-all hover:scale-110 active:scale-90"
          aria-label="Pedir por WhatsApp"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>
      </div>
    </div>
  );
}
