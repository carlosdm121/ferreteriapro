'use client';

import { useState } from 'react';
import { submitOrderAction } from '@/app/actions/orderActions';

export function OrderForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const result = await submitOrderAction(formData);

    if (result.success) {
      setSuccess(true);
      event.currentTarget.reset();
    } else {
      setError(result.error || 'Ocurrió un error.');
    }
    setLoading(false);
  };

  return (
    <section id="pedido" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <span className="text-blue-500 font-black uppercase tracking-[0.2em] text-xs mb-4 block">
              Atención Personalizada
            </span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 leading-[1.1]">
              ¿Necesitás un <br /> <span className="text-blue-500">Presupuesto?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-md leading-relaxed">
              Completá el formulario y un asesor técnico se comunicará con vos en menos de 2 horas para coordinar tu pedido.
            </p>

            <div className="space-y-6">
              {[
                { label: 'Asesoramiento Técnico', icon: '🛠️' },
                { label: 'Envíos a Domicilio', icon: '🚚' },
                { label: 'Factura A y B', icon: '📄' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-bold text-gray-200 uppercase tracking-widest text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl text-gray-900 relative">
              {success ? (
                <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black mb-2">¡Pedido Enviado!</h3>
                  <p className="text-gray-500 font-medium mb-8">Un asesor te contactará a la brevedad.</p>
                  <button 
                    onClick={() => setSuccess(false)}
                    className="text-blue-600 font-black uppercase tracking-widest text-sm hover:underline"
                  >
                    Enviar otro pedido
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-bold border border-red-100">
                      {error}
                    </div>
                  )}

                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Nombre Completo</label>
                    <input 
                      name="customerName" 
                      required 
                      className="w-full bg-gray-50 border-2 border-gray-100 focus:border-blue-600 rounded-2xl px-6 py-4 outline-none transition-all font-medium"
                      placeholder="Ej: Juan Pérez"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">WhatsApp / Teléfono</label>
                    <input 
                      name="customerPhone" 
                      required 
                      className="w-full bg-gray-50 border-2 border-gray-100 focus:border-blue-600 rounded-2xl px-6 py-4 outline-none transition-all font-medium"
                      placeholder="Ej: 381 555-5555"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Detalle del Pedido</label>
                    <textarea 
                      name="message" 
                      required 
                      rows={4}
                      className="w-full bg-gray-50 border-2 border-gray-100 focus:border-blue-600 rounded-2xl px-6 py-4 outline-none transition-all font-medium resize-none"
                      placeholder="Ej: Necesito 2 taladros de 500W y 10 discos de corte..."
                    />
                  </div>

                  <button 
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-black py-5 rounded-2xl text-lg shadow-xl shadow-blue-500/30 transition-all hover:scale-[1.02] active:scale-[0.98] uppercase tracking-widest"
                  >
                    {loading ? 'Enviando...' : 'Solicitar Presupuesto'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
