import { fetchProductsAction } from '@/app/actions/productActions';
import { ProductList } from '@/features/products/ProductList';
import { AddProductButton } from '@/features/products/AddProductButton';

export default async function ProductosPage() {
  const products = await fetchProductsAction();

  return (
    <div className="min-h-screen bg-gray-50/50">
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Gestión de Inventario</h1>
            <p className="text-gray-500 mt-1">Administra los productos y el stock de tu ferretería.</p>
          </div>
          <AddProductButton />
        </header>

        <section className="space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <div className="relative w-full md:max-w-md">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
              <input 
                type="text" 
                placeholder="Buscar por nombre o SKU..." 
                className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-sm"
              />
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className="font-semibold text-gray-900">{products.length}</span> productos encontrados
            </div>
          </div>

          <ProductList initialProducts={products} />
        </section>
      </main>
    </div>
  );
}
