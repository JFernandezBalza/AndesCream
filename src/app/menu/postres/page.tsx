// app/postres/page.tsx

'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';
// Importamos Link (aunque no se use directamente aquí, es buena práctica si navegamos a Home)

// --- SIMULACIÓN DE DATOS DE POSTRES ---
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
  const backgroundImage = '/images/fondo5.jpg'; // Fondo consistente

  return (
    <div className='min-h-screen'>
      {/* 1. Navbar con estilo para página interna */}
      <Navbar isOverlay={false} />

      {/* 2. Sección principal con Fondo adaptativo y min-h-screen */}
      <section
        id='postres-menu'
        className='w-full h-auto py-16 flex flex-col bg-cover bg-[position:35%_center] bg-no-repeat relative md:bg-center'
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        {/* 3. Capa Oscura Semitransparente que se adapta al min-h-screen */}
        <div className='flex-grow flex items-center justify-center py-16 pb-16 bg-black/15 z-0 min-h-screen'>
          {/* 4. Contenedor de Contenido: Ancho fluido hasta max-w-6xl */}
          <div className='w-full max-w-4xl lg:max-w-6xl'>
            {/* 5. Caja de Contenido: Padding responsivo y margen automático */}
            <div className='px-4 sm:px-6 py-8 text-gray-700 bg-white/70 shadow-2xl rounded-lg mx-4 z-0'>
              {/* Título */}
              <h1 className='text-4xl md:text-5xl font-serif text-gray-500 mb-4 border-b-2 border-pink-300 pb-2'>
                Postres Especiales de la Casa
              </h1>

              {/* Descripción */}
              <p className='text-lg text-justify font-sans text-gray-700 max-w-4xl mb-10 mt-4'>
                Nuestras creaciones más elaboradas, perfectas para un final
                dulce. Desde postres calientes hasta tortas heladas, aplicando
                técnicas de repostería para resultados espectaculares.
              </p>

              {/* Contenedor del listado de productos: Responsivo (1 col en móvil, 2 en tablet, 3 en desktop) */}
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4'>
                {/* Mapeo de datos */}
                {dummyDesserts.map((postre) => (
                  <div
                    key={postre.id}
                    className='bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-[1.02] transition duration-300'
                  >
                    <div className='relative w-full h-48'>
                      <Image
                        src={postre.imageUrl}
                        alt={postre.name}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                      />
                    </div>

                    <div className='p-6'>
                      <h3 className='text-xl font-bold text-gray-900 mb-2'>
                        {postre.name}
                      </h3>
                      <p className='text-gray-600 text-sm mb-4'>
                        {postre.description}
                      </p>
                      <p className='text-2xl font-extrabold text-pink-600'>
                        ${(postre.price / 100).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
