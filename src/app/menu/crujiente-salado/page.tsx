import Link from 'next/link';
import { Metadata } from 'next';
// Asegúrate de que esta ruta sea correcta si ProductCard está en components/

export const metadata: Metadata = {
  title: 'Crujiente y Salado AndesCream',
  description:
    'Explora nuestra gama de acompañamientos crujientes y opciones saladas para equilibrar el dulce.',
};

// --- SIMULACIÓN DE DATOS (REEMPLAZAR CON LA API DE NESTJS) ---
const dummySavories = [
  {
    id: 'c1',
    name: 'Waffle de Queso y Bacon',
    description:
      'Waffle crujiente recién hecho, cubierto con queso fundido y tocineta ahumada.',
    price: 13000,
    imageUrl: 'https://placehold.co/600x400/FFD700/000?text=Savory+Waffle',
  },
  {
    id: 'c2',
    name: 'Barquillo Artesanal',
    description:
      'Nuestro barquillo casero, perfecto para helados dobles. Extra crujiente y dulce.',
    price: 4000,
    imageUrl: 'https://placehold.co/600x400/D2B48C/000?text=Cone+Waffle',
  },
  {
    id: 'c3',
    name: 'Patacones con Dip',
    description:
      'Patacones crujientes (plátano verde frito) con un dip de aguacate y cilantro.',
    price: 15500,
    imageUrl: 'https://placehold.co/600x400/FFA07A/000?text=Patacones',
  },
];
// --- FIN SIMULACIÓN DE DATOS ---

export default function CrujientesPage() {
  return (
    <div className='p-8 min-h-screen bg-gray-50'>
      <Link
        href='/'
        className='text-pink-600 hover:text-pink-800 transition duration-150 hover:underline mb-8 inline-block'
      >
        ← Volver a la Portada
      </Link>

      <h1 className='text-4xl font-extrabold text-gray-900 mb-4 border-b-2 border-pink-300 pb-2'>
        Crujiente y Salado
      </h1>

      <p className='text-lg text-gray-700 max-w-4xl mb-10'>
        El contraste ideal para nuestros helados. Desde opciones dulces y
        crujientes (barquillos) hasta snacks salados y deliciosos. ¡La
        combinación perfecta!
      </p>

      {/* Uso de ProductCard en un grid para el catálogo */}
    </div>
  );
}
