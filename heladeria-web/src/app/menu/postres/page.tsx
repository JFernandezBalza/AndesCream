// app/menu/postres/page.tsx (CORREGIDO - Sin MenuLayout)

'use client';

// 1. Importa solo el componente de UI (ProductCard) y el tipo 'Producto'
import ProductCard, { Producto } from '@/components/ProductCard';
// ❌ YA NO IMPORTAMOS MenuLayout

// 2. Definición de Datos (Asegurando que los datos tengan el tipo Producto)
const dummyDesserts: Producto[] = [
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
  // ❌ Ya no se necesita la variable backgroundImage.

  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center py-20 z-0'>
      <div className='w-full max-w-4xl lg:max-w-6xl'>
        <div className='px-4 sm:px-6 py-8 text-gray-700 bg-white/70 shadow-2xl rounded-lg mx-4 z-0'>
          {/* Contenido específico: Título y Descripción */}
          <h1 className='text-4xl md:text-5xl font-serif text-gray-500 mb-4 border-b-2 border-pink-300 pb-2'>
            Postres
          </h1>

          <p className='text-lg text-justify font-sans text-gray-700 max-w-4xl mb-10 mt-4'>
            Nuestras creaciones más elaboradas, perfectas para un final dulce.
            Desde postres calientes hasta tortas heladas, aplicando técnicas de
            repostería para resultados espectaculares.
          </p>

          {/* Listado de Productos usando ProductCard */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4'>
            {dummyDesserts.map((postre) => (
              <ProductCard key={postre.id} product={postre} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}