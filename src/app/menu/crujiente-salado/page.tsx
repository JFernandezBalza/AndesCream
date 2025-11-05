// app/crujientes/page.tsx

'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';

// --- SIMULACIÓN DE DATOS DE CRUJIENTE Y SALADO (Croissants Rellenos) ---
const dummySavories = [
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
  const backgroundImage = '/images/fondo5.jpg'; // Fondo consistente

  return (
    <div className='min-h-screen'>
      {/* 1. Navbar con estilo para página interna */}
      <Navbar isOverlay={false} />

      {/* 2. Sección principal con Fondo adaptativo y min-h-screen */}
      <section
        id='crujientes-menu' // Identificador de Crujiente y Salado
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
                Crujiente y Salado: Sandwiches de Croissant
              </h1>

              {/* Descripción */}
              <p className='text-lg text-justify font-sans text-gray-700 max-w-4xl mb-10 mt-4'>
                El contrapunto perfecto para el dulce. Nuestros croissants
                salados son horneados frescos y rellenos con ingredientes
                premium. Ideales para el almuerzo o como snack salado.
              </p>

              {/* Contenedor del listado de productos: Responsivo (1 col en móvil, 2 en tablet, 3 en desktop) */}
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4'>
                {/* Mapeo de datos */}
                {dummySavories.map((item) => (
                  <div
                    key={item.id}
                    className='bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-[1.02] transition duration-300'
                  >
                    <div className='relative w-full h-48'>
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                      />
                    </div>

                    <div className='p-6'>
                      <h3 className='text-xl font-bold text-gray-900 mb-2'>
                        {item.name}
                      </h3>
                      <p className='text-gray-600 text-sm mb-4'>
                        {item.description}
                      </p>
                      <p className='text-2xl font-extrabold text-pink-600'>
                        ${(item.price / 100).toFixed(2)}
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
