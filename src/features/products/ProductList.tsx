'use client';

import { Product } from '@/types/entities';

interface ProductListProps {
  initialProducts: Product[];
}

export function ProductList({ initialProducts }: ProductListProps) {
  if (!initialProducts || initialProducts.length === 0) {
    return (
      <div className="text-center p-12 border-2 border-dashed border-gray-200 rounded-lg">
        <p className="text-gray-500 font-medium">No hay productos en el inventario.</p>
        <p className="text-sm text-gray-400 mt-1">Comienza agregando uno nuevo.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50/50 border-b border-gray-100">
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">SKU</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Producto</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Stock</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Precio</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Estado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {initialProducts.map((product) => (
              <tr 
                key={product.id} 
                className="hover:bg-blue-50/30 transition-colors group"
              >
                <td className="px-6 py-4 text-sm font-mono text-gray-500">{product.sku}</td>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </span>
                    {product.description && (
                      <span className="text-xs text-gray-500 truncate max-w-[200px]">
                        {product.description}
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    product.stock <= 5 
                      ? 'bg-red-100 text-red-700' 
                      : product.stock <= 15 
                        ? 'bg-yellow-100 text-yellow-700' 
                        : 'bg-green-100 text-green-700'
                  }`}>
                    {product.stock} unidades
                  </span>
                </td>
                <td className="px-6 py-4 text-sm font-bold text-gray-900">
                  ${product.price.toLocaleString('es-AR', { minimumFractionDigits: 2 })}
                </td>
                <td className="px-6 py-4">
                  <span className={`w-2 h-2 rounded-full inline-block ${product.isActive ? 'bg-green-500' : 'bg-gray-300'}`} />
                  <span className="ml-2 text-xs text-gray-500">{product.isActive ? 'Activo' : 'Inactivo'}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
