# 🛠️ Ferretería Pro

![Banner](https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=1200&h=400)

**Ferretería Pro** es una plataforma moderna de comercio electrónico diseñada para agilizar y simplificar las ventas de herramientas, materiales de construcción y artículos de ferretería. 

Con un enfoque en el rendimiento, la accesibilidad móvil y una integración directa con WhatsApp para la finalización de pedidos, ofrece a los usuarios una experiencia de compra directa y sin fricciones.

[![Ver Demo](https://img.shields.io/badge/Ver_Demo_en_Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://ferreteriapro-pn8m.vercel.app/)

---

## ✨ Características Principales

*   **🛒 Catálogo Dinámico:** Explora una amplia variedad de productos organizados por categorías.
*   **📱 Diseño "Mobile-First":** Interfaz de usuario adaptativa y amigable para cualquier tamaño de pantalla.
*   **⚡ Rendimiento Optimizado:** Desarrollado con Next.js para carga ultrarrápida y un excelente posicionamiento SEO (Core Web Vitals).
*   **💬 Integración con WhatsApp:** Envía los pedidos directamente a WhatsApp con mensajes pre-formateados, facilitando el cierre de la venta y atención al cliente.
*   **🛠️ Panel de Gestión (Simulado):** Arquitectura base lista para la integración con sistemas de gestión de inventario y bases de datos reales.

## 🚀 Tecnologías Utilizadas

Este proyecto fue construido utilizando un stack moderno y eficiente:

*   **Frontend:** [Next.js 14](https://nextjs.org/) (React), [Tailwind CSS](https://tailwindcss.com/)
*   **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
*   **Validación de Datos:** [Zod](https://zod.dev/)
*   **Despliegue:** [Vercel](https://vercel.com/)

## ⚙️ Estructura del Proyecto (Clean Architecture)

El proyecto sigue principios de "Clean Architecture" para garantizar que el código sea escalable, mantenible y testeable:

*   `src/app`: Rutas, páginas y Server Actions de Next.js.
*   `src/application/useCases`: Lógica de negocio (casos de uso).
*   `src/components`: Componentes reutilizables de UI.
*   `src/features`: Componentes agrupados por dominio o funcionalidad (ej. productos, hero).
*   `src/infrastructure`: Implementaciones concretas de repositorios e interacciones externas.
*   `src/types` & `src/schemas`: Definiciones de tipos e interfaces de TypeScript y validaciones con Zod.

## 🔧 Instalación Local

Para correr este proyecto en tu entorno local, sigue estos pasos:

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/carlosdm121/ferreteriapro.git
    cd ferreteriapro
    ```

2.  **Instala las dependencias:**
    ```bash
    npm install
    # o yarn install, pnpm install, bun install
    ```

3.  **Inicia el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

4.  Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto, por favor abre un issue o envía un Pull Request.

## 📝 Licencia

Este proyecto es de uso libre bajo la Licencia MIT.
