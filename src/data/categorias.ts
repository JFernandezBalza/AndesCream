export interface Categoria {
  slug: string;
  nombre: string;
  logoPath: string;
  descripcion: string;
}

// Datos estáticos de las categorías del menú (LISTA DEFINITIVA)
export const CATEGORIAS: Categoria[] = [
  {
    slug: 'helados',
    nombre: 'Helados',
    logoPath: '/images/ice-cream_4442973.png',
    descripcion:
      'Nuestros helados artesanales y cremosos, hechos con la mejor leche y fruta fresca.',
  },
  {
    slug: 'bebidas',
    nombre: 'Bebidas',
    logoPath: '/images/coffee-cup_5098902.png',
    descripcion: 'Refrescantes limonadas, cafés especiales y batidos.',
  },
  {
    slug: 'crujiente-salado',
    nombre: 'Crujiente & Salado',
    logoPath: '/images/croissant_2558711.png',
    descripcion:
      'Opciones saladas y aperitivos crujientes perfectos para acompañar.',
  },
  {
    slug: 'postres',
    nombre: 'Postres',
    logoPath: '/images/cake_11539405.png',
    descripcion:
      'Dulces tentaciones, incluyendo pasteles, brownies y creaciones especiales.',
  },
];
