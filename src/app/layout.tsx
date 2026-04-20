import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ferretería Pro | Gestión de Inventario',
  description: 'Sistema profesional para la gestión de inventario de ferreterías localizadas.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="antialiased scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-white text-gray-900 selection:bg-blue-100 selection:text-blue-900`}>
        {children}
      </body>
    </html>
  );
}
