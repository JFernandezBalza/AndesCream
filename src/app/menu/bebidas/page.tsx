import Link from 'next/link';
import { Metadata } from 'next';
// Asegúrate de que esta ruta sea correcta si ProductCard está en components/


export const metadata: Metadata = {
  title: 'Bebidas AndesCream - Frías y Calientes',
  description:
    'Descubre nuestra selección de cafés, tés, frappés y refrescos para acompañar tu helado.',
};

// --- SIMULACIÓN DE DATOS (REEMPLAZAR CON LA API DE NESTJS) ---
const dummyDrinks = [
  {
    id: 'b1',
    name: 'Capuchino Clásico',
    description: 'Espresso intenso con leche texturizada y un toque de cacao.',
    price: 6500,
    imageUrl: 'https://placehold.co/600x400/964B00/FFFFFF?text=Cappuccino',
  },
  {
    id: 'b2',
    name: 'Frappé de Oreo',
    description:
      'Helado de vainilla, galletas Oreo y un chorrito de sirope de chocolate.',
    price: 11500,
    imageUrl: 'https://placehold.co/600x400/000000/FFFFFF?text=Oreo+Frappe',
  },
  {
    id: 'b3',
    name: 'Limonada de Coco',
    description:
      'Refrescante limonada natural con crema de coco, ideal para el calor.',
    price: 7800,
    imageUrl: 'https://placehold.co/600x400/00CED1/FFFFFF?text=Coco+Lemonade',
  },
];
// --- FIN SIMULACIÓN DE DATOS ---

export default function BebidasPage() {
  return (
    <div className='p-8 min-h-screen bg-gray-50'>
      <Link
        href='/'
        className='text-pink-600 hover:text-pink-800 transition duration-150 hover:underline mb-8 inline-block'
      >
        ← Volver a la Portada
      </Link>

      <h1 className='text-4xl font-extrabold text-gray-900 mb-4 border-b-2 border-pink-300 pb-2'>
        Bebidas Frías y Calientes
      </h1>

      <p className='text-lg text-gray-700 max-w-4xl mb-10'>
        Desde un espresso caliente y aromático hasta refrescantes frappés y
        sodas artesanales. El acompañamiento perfecto para tu dulce momento.
      </p>

    </div>
  );
}
