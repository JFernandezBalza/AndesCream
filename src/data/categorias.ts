// Define la estructura de una categoría
export interface Categoria {
  slug: string; // Para usar en la URL, ej: /menu/helados
  nombre: string;
  logoPath: string; // RUTA MODIFICADA: Ahora apunta a /images/
  descripcion: string; // Descripción detallada para SEO o la página de menú
}

// Datos estáticos de las categorías del menú (LISTA DEFINITIVA)
export const CATEGORIAS: Categoria[] = [
  {
    slug: 'helados',
    nombre: 'Helados',
    // RUTA ACTUALIZADA para apuntar a la carpeta images/
    logoPath: '/images/ice-cream_4442973.png',
    descripcion:
      'Nuestros helados artesanales y cremosos, hechos con la mejor leche y fruta fresca.',
  },
  {
    slug: 'bebidas',
    nombre: 'Bebidas',
    // RUTA ACTUALIZADA
    logoPath: '/images/coffee-cup_5098902.png',
    descripcion: 'Refrescantes limonadas, cafés especiales y batidos.',
  },
  {
    slug: 'crujiente-salado',
    nombre: 'Crujiente & Salado',
    // RUTA ACTUALIZADA
    logoPath: '/images/croissant_2558711.png',
    descripcion:
      'Opciones saladas y aperitivos crujientes perfectos para acompañar.',
  },
  {
    slug: 'postres',
    nombre: 'Postres',
    // RUTA ACTUALIZADA
    logoPath: '/images/cake_11539405.png',
    descripcion:
      'Dulces tentaciones, incluyendo pasteles, brownies y creaciones especiales.',
  },
];
