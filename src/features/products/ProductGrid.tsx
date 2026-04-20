'use client';

import { Product } from '@/types/entities';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  // Productos oficiales con rutas locales VERIFICADAS
  const officialProducts: Product[] = [
    {
      id: 'f1',
      name: 'Taladro Percutor Bosch GSB 13 RE 650W',
      description: 'Potencia y confiabilidad para perforar mampostería, madera y metal. El estándar de la industria.',
      price: 135900,
      stock: 24,
      categoryId: '1',
      sku: 'BOS-GSB-13',
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      // @ts-ignore - Propiedad dinámica para la vista
      imageUrl: '/img/Taladro Percutor Bosch GSB 13 RE 650W.webp'
    },
    {
      id: 'f2',
      name: 'Amoladora Angular DeWalt DWE4010 730W',
      description: 'Diseño ergonómico y potente motor para cortes precisos en hierro y cerámica.',
      price: 98500,
      stock: 15,
      categoryId: '1',
      sku: 'DEW-DWE-40',
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      // @ts-ignore
      imageUrl: '/img/Amoladora Angular DeWalt DWE4010 730W.webp'
    },
    {
      id: 'f3',
      name: 'Set de Destornilladores Stanley 10 Piezas',
      description: 'Mangos antideslizantes y puntas magnéticas de acero cromo vanadio. Calidad profesional.',
      price: 32400,
      stock: 50,
      categoryId: '2',
      sku: 'STA-SET-10',
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      // @ts-ignore
      imageUrl: '/img/Set de Destornilladores Stanley 10 Piezas.webp'
    },
    {
      id: 'f4',
      name: 'Soldadora Inverter Lusqtoff Iron-100',
      description: 'Compacta, ligera y potente. Ideal para reparaciones domésticas y trabajos de herrería ligera.',
      price: 165000,
      stock: 8,
      categoryId: '1',
      sku: 'LUQ-INV-100',
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      // @ts-ignore
      imageUrl: '/img/Soldadora Inverter Lusqtoff Iron-100.webp'
    }
  ];

  const displayProducts = products && products.length > 0 ? products : officialProducts;

  return (
    <section id="productos" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-black uppercase tracking-[0.2em] text-xs mb-4 block">
              Equipamiento Profesional
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tighter mb-6 leading-tight">
              Los Más <span className="text-blue-600">Vendidos</span>
            </h2>
            <p className="text-gray-500 font-medium text-lg">
              Equipate con las mejores marcas del mercado. Calidad certificada y garantía oficial en todos nuestros productos.
            </p>
          </div>
          <div className="flex items-center gap-3 bg-blue-50 px-6 py-3 rounded-2xl border border-blue-100 shadow-sm">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-black text-blue-900 uppercase tracking-widest">
              Stock actualizado hoy
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-20 p-10 bg-gray-900 rounded-[3rem] text-center relative overflow-hidden group">
          <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700">
             <img 
               src="https://images.pexels.com/photos/1029243/pexels-photo-1029243.jpeg?auto=compress&cs=tinysrgb&w=2000" 
               className="w-full h-full object-cover"
               alt="Background Tools"
             />
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl font-black text-white mb-4 tracking-tight">¿No encontrás lo que buscás?</h3>
            <p className="text-gray-400 font-medium mb-8 max-w-lg mx-auto italic">
              "Trabajamos con más de 5.000 artículos bajo pedido. Si existe, lo tenemos."
            </p>
            <a 
              href="#pedido" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-black text-lg shadow-2xl transition-all hover:scale-105 active:scale-95"
            >
              Consultar por otros productos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
