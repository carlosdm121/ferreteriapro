import { fetchProductsAction } from '@/app/actions/productActions';
import { Header } from '@/components/common/Header';
import { Hero } from '@/features/hero/Hero';
import { ProductGrid } from '@/features/products/ProductGrid';
import { OrderForm } from '@/features/orders/OrderForm';
import { Footer } from '@/components/common/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export default async function Home() {
  const products = await fetchProductsAction();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Sección de Marcas (Opcional, pero profesional) */}
        <section className="py-12 bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-30 grayscale">
              {['BOSCH', 'DEWALT', 'STANLEY', 'MAKITA', 'TRAMONTINA'].map((brand) => (
                <span key={brand} className="text-2xl font-black tracking-tighter">{brand}</span>
              ))}
            </div>
          </div>
        </section>

        <ProductGrid products={products} />
        
        <OrderForm />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
