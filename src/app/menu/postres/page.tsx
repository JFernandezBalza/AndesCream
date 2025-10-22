import Link from 'next/link';
import { Metadata } from 'next';
// Asegúrate de que esta ruta sea correcta si ProductCard está en components/

export const metadata: Metadata = {
  title: 'Postres Especiales AndesCream',
  description:
    'Nuestra selección de postres elaborados: tortas, tartas, y creaciones que combinan lo mejor de la repostería con nuestros helados.',
};

// --- SIMULACIÓN DE DATOS (REEMPLAZAR CON LA API DE NESTJS) ---
const dummyDesserts = [
  {
    id: 'p1',
    name: 'Volcán de Chocolate',
    description:
      'Bizcocho de chocolate caliente con centro líquido, servido con helado de vainilla.',
    price: 16000,
    imageUrl: 'https://placehold.co/600x400/8B4513/FFFFFF?text=Lava+Cake',
  },
  {
    id: 'p2',
    name: 'Cheesecake de Frutos Rojos',
    description:
      'Base de galleta crujiente, crema de queso suave y cubierta de salsa artesanal de frutos rojos.',
    price: 17500,
    imageUrl: 'https://placehold.co/600x400/DDA0DD/FFFFFF?text=Cheesecake',
  },
  {
    id: 'p3',
    name: 'Tarta Helada de Brownie',
    description:
      'Cremosa tarta con base de brownie de chocolate, ideal para compartir.',
    price: 14000,
    imageUrl: 'https://placehold.co/600x400/A0522D/FFFFFF?text=Brownie+Cake',
  },
  {
    id: 'p4',
    name: 'Affogato Clásico',
    description:
      'Una bola de helado de vainilla ahogada en un shot doble de espresso caliente.',
    price: 9500,
    imageUrl: 'https://placehold.co/600x400/603601/FFFFFF?text=Affogato',
  },
];
// --- FIN SIMULACIÓN DE DATOS ---

export default function PostresPage() {
  return (
    <div className='p-8 min-h-screen bg-gray-50'>
      <Link
        href='/'
        className='text-pink-600 hover:text-pink-800 transition duration-150 hover:underline mb-8 inline-block'
      >
        ← Volver a la Portada
      </Link>

      <h1 className='text-4xl font-extrabold text-gray-900 mb-4 border-b-2 border-pink-300 pb-2'>
        Postres Especiales de la Casa
      </h1>

      <p className='text-lg text-gray-700 max-w-4xl mb-10'>
        Nuestras creaciones más elaboradas, perfectas para un final dulce. Desde
        postres calientes hasta tortas heladas, aplicando técnicas de repostería
        para resultados espectaculares.
      </p>

      {/* Uso de ProductCard en un grid para el catálogo */}
    </div>
  );
}
