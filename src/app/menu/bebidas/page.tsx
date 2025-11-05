// app/bebidas/page.tsx

'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';

// --- SIMULACIÓN DE DATOS DE BEBIDAS ---
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
  {
    id: 'b4',
    name: 'Té Chai Caliente',
    description: 'Té negro especiado con leche vaporizada y canela.',
    price: 6000,
    imageUrl: 'https://placehold.co/600x400/A0522D/FFFFFF?text=Chai+Tea',
  },
];
// --- FIN SIMULACIÓN DE DATOS ---

export default function BebidasPage() {
  const backgroundImage = '/images/fondo5.jpg'; // Fondo consistente

  return (
    <div className='min-h-screen'>
      {/* 1. Navbar con estilo para página interna */}
      <Navbar isOverlay={false} />

      {/* 2. Sección principal con Fondo adaptativo y min-h-screen */}
      <section
        id='bebidas-menu'
        className='w-full h-auto py-16 flex flex-col bg-cover bg-[position:35%_center] bg-no-repeat relative md:bg-center'
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        {/* 3. Capa Oscura Semitransparente que se adapta al min-h-screen */}
        <div className='flex-grow flex items-center justify-center py-16 pb-16 bg-black/15 z-0 min-h-screen'>
          {/* 4. Contenedor de Contenido: Ancho fluido hasta max-w-6xl */}
          <div className='w-full max-w-4xl lg:max-w-6xl'>
            {/* 5. Caja de Contenido: Padding responsivo y margen automático */}
            <div className='px-4 sm:px-6 py-8 text-gray-700 bg-white/70 shadow-2xl rounded-lg mx-4 z-0'>
              <h1 className='text-4xl md:text-5xl font-serif text-gray-500 mb-4 border-b-2 border-pink-300 pb-2'>
                Bebidas Frías y Calientes
              </h1>

              <p className='text-lg text-justify font-sans text-gray-700 max-w-4xl mb-10 mt-4'>
                Desde un espresso caliente y aromático hasta refrescantes
                frappés y sodas artesanales. El acompañamiento perfecto para tu
                dulce momento.
              </p>

              {/* Contenedor del listado de productos: Responsivo (1 col en móvil, 2 en tablet, 3 en desktop) */}
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4'>
                {/* Mapeo de datos */}
                {dummyDrinks.map((drink) => (
                  <div
                    key={drink.id}
                    className='bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-[1.02] transition duration-300'
                  >
                    <div className='relative w-full h-48'>
                      <Image
                        src={drink.imageUrl}
                        alt={drink.name}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                      />
                    </div>

                    <div className='p-6'>
                      <h3 className='text-xl font-bold text-gray-900 mb-2'>
                        {drink.name}
                      </h3>
                      <p className='text-gray-600 text-sm mb-4'>
                        {drink.description}
                      </p>
                      <p className='text-2xl font-extrabold text-pink-600'>
                        ${(drink.price / 100).toFixed(2)}
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
