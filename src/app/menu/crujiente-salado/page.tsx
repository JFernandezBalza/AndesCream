// app/menu/crujiente-salado/page.tsx (o la ruta correspondiente)

'use client';

// 1. Importa los componentes reutilizables (MenuLayout y ProductCard)
import MenuLayout from '@/layouts/MenuLayout';
import ProductCard, { Producto } from '@/components/ProductCard';
// Navbar ya no es necesario importarlo aquí porque está dentro de MenuLayout

// --- SIMULACIÓN DE DATOS DE CRUJIENTE Y SALADO (Asegurando el tipo Producto) ---
const dummySavories: Producto[] = [
  {
    id: 'c1',
    name: 'Croissant Jamón y Queso',
    description:
      'Croissant horneado al momento, relleno con jamón ahumado y queso fundido, perfecto para el desayuno o brunch.',
    price: 13000,
    imageUrl:
      'https://placehold.co/600x400/FFD700/000?text=Ham+Cheese+Croissant',
  },
  {
    id: 'c2',
    name: 'Croissant Pollo César',
    description:
      'Relleno de pollo desmenuzado, lechuga romana fresca y aderezo César cremoso, un clásico reconfortante.',
    price: 15500,
    imageUrl: 'https://placehold.co/600x400/D2B48C/000?text=Chicken+Croissant',
  },
  {
    id: 'c3',
    name: 'Croissant Mediterráneo',
    description:
      'Croissant vegetariano con tomate seco, queso feta, espinacas y un toque de pesto.',
    price: 14500,
    imageUrl:
      'https://placehold.co/600x400/FFA07A/000?text=Mediterranean+Croissant',
  },
  {
    id: 'c4',
    name: 'Croissant Aguacate y Huevo',
    description:
      'Croissant abierto con aguacate machacado, huevo revuelto suave y especias.',
    price: 16000,
    imageUrl: 'https://placehold.co/600x400/98FB98/000?text=Avocado+Croissant',
  },
];
// --- FIN SIMULACIÓN DE DATOS ---

export default function CrujientesPage() {
  // 2. Define la imagen de fondo (puedes cambiarla por una específica de salados)
    const backgroundImage = '/images/fondo5.jpg';

  return (
    // 3. USAR MenuLayout para la estructura externa
    <MenuLayout backgroundImage={backgroundImage}>
      {/* 4. Contenido específico: Título y Descripción */}
      <h1 className='text-4xl md:text-5xl font-serif text-gray-500 mb-4 border-b-2 border-pink-300 pb-2'>
        Crujiente & Salado
      </h1>

      <p className='text-lg text-justify font-sans text-gray-700 max-w-4xl mb-10 mt-4'>
        El contrapunto perfecto para el dulce. Nuestros croissants salados son
        horneados frescos y rellenos con ingredientes premium. Ideales para el
        almuerzo o como snack salado.
      </p>

      {/* 5. Listado de Productos usando ProductCard */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4'>
        {dummySavories.map((item) => (
          // USAR ProductCard para cada elemento (NO HAY REPETICIÓN DE JSX GRANDE)
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </MenuLayout>
  );
}
