export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 11-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <span className="font-black text-xl tracking-tighter">Ferretería<span className="text-blue-600">Pro</span></span>
            </div>
            <p className="text-gray-500 text-sm font-medium leading-relaxed">
              Tu aliado estratégico en construcción y reparaciones. Calidad garantizada en cada herramienta.
            </p>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-xs text-gray-900 mb-6">Navegación</h4>
            <ul className="space-y-4">
              {['Inicio', 'Productos', 'Nosotros', 'Contacto'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-sm text-gray-500 hover:text-blue-600 font-bold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-xs text-gray-900 mb-6">Contacto</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li className="flex items-center gap-3">
                <span className="text-blue-600">📍</span> Av. Perón 1500, Tucumán
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-600">📞</span> +54 381 555-5555
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-600">📧</span> ventas@ferreteriapro.com
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-xs text-gray-900 mb-6">Horarios</h4>
            <ul className="space-y-2 text-sm text-gray-500 font-medium">
              <li>Lunes a Viernes: 08:00 - 19:00</li>
              <li>Sábados: 09:00 - 13:00</li>
              <li className="text-blue-600 font-bold mt-4">Atención 24hs vía Web</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">
            © 2024 Ferretería Pro. Todos los derechos reservados.
          </p>
          <p className="text-xs text-gray-400 font-bold uppercase tracking-widest flex items-center gap-2">
            Desarrollado por <span className="text-blue-600">DyC Studio</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
