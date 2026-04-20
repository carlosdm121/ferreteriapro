import Link from 'next/link';

export function Hero() {
  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden bg-gray-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1572910358198-2731d7bed55f?q=80&w=2000&auto=format&fit=crop" 
          alt="Taller de Ferretería Profesional" 
          className="w-full h-full object-cover opacity-50 transition-opacity duration-1000"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/80 to-white" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6 shadow-lg shadow-blue-600/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            Envío gratis en compras mayores a $50.000
          </span>
          
          <h1 className="text-5xl md:text-8xl font-black text-white leading-[1] tracking-tighter mb-8 drop-shadow-sm">
            Herramientas que <br /><span className="text-blue-500">Construyen</span> tus Sueños
          </h1>
          
          <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
            Toda la variedad en herramientas eléctricas, manuales y materiales de construcción con los mejores precios de Tucumán.
          </p>
// ... rest unchanged

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="#productos" 
              className="w-full sm:w-auto bg-gray-900 hover:bg-black text-white px-10 py-4 rounded-full font-black text-lg shadow-2xl transition-all hover:scale-105 active:scale-95"
            >
              Ver Catálogo
            </Link>
            <Link 
              href="#pedido" 
              className="w-full sm:w-auto bg-white border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 text-gray-900 px-10 py-4 rounded-full font-black text-lg transition-all"
            >
              Pedir Presupuesto
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Marcas Líderes', icon: '🏆' },
              { label: 'Stock Permanente', icon: '📦' },
              { label: 'Atención Local', icon: '📍' },
              { label: 'Cuotas sin Interés', icon: '💳' },
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center gap-2 group">
                <span className="text-3xl transition-transform group-hover:scale-125">{feature.icon}</span>
                <span className="text-xs font-black text-gray-500 uppercase tracking-widest">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
