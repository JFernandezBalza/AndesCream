// app/helados/page.tsx

'use client';

import Image from 'next/image';
// Asumo que Navbar se importa de forma correcta
import Navbar from '@/components/Navbar'; 

// --- SIMULACIÓN DE DATOS DE HELADOS ---
const dummyHelados = [
  {
    id: 'h1',
    name: 'Vainilla Artesanal',
    description: 'Cremoso helado de vainilla de Madagascar, suave y aromático.',
    price: 9500,
    imageUrl: 'https://placehold.co/600x400/FFFACD/964B00?text=Vanilla',
  },
  {
    id: 'h2',
    name: 'Sorbet de Maracuyá',
    description: 'Refrescante y ácido sorbete vegano de fruta de la pasión.',
    price: 8900,
    imageUrl: 'https://placehold.co/600x400/FFD700/000000?text=Passion+Fruit',
  },
  {
    id: 'h3',
    name: 'Chocolate Intenso',
    description:
      'Helado profundo de cacao negro, para los amantes del sabor fuerte.',
    price: 10500,
    imageUrl: 'https://placehold.co/600x400/5C4033/FFFFFF?text=Dark+Chocolate',
  },
  {
    id: 'h4',
    name: 'Pistacho y Miel',
    description:
      'Helado gourmet con pistachos tostados y un toque de miel pura.',
    price: 12000,
    imageUrl: 'https://placehold.co/600x400/9ACD32/000000?text=Pistachio',
  },
];
// --- FIN SIMULACIÓN DE DATOS ---

export default function HeladosPage() {
  const backgroundImage = '/images/fondo5.jpg'; 

  return (
    <div className='min-h-screen'>
      {/* 1. Navbar con estilo para página interna */}
      <Navbar isOverlay={false} />

      {/* 2. Sección principal con Fondo adaptativo y min-h-screen */}
      <section
        id='helados-menu' 
        className='w-full h-auto py-16 flex flex-col bg-cover bg-[position:35%_center] bg-no-repeat relative md:bg-center'
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        {/* 3. Capa Oscura Semitransparente que se adapta al min-h-screen */}
        <div className='flex-grow flex items-center justify-center py-16 pb-16 bg-black/15 z-0 min-h-screen'>
          
          {/* 4. Contenedor de Contenido: Ancho fluido hasta max-w-6xl */}
          <div className='w-full max-w-4xl lg:max-w-6xl'>
            
            {/* 5. Caja de Contenido: Padding responsivo (px-4 sm:px-6) y margen automático (mx-4) */}
            <div className='px-4 sm:px-6 py-8 text-gray-700 bg-white/70 shadow-2xl rounded-lg mx-4 z-0'>
              
              <h1 className='text-4xl md:text-5xl font-serif text-gray-500 mb-4 border-b-2 border-pink-300 pb-2'>
                Sabores Artesanales de Helado
              </h1>

              <p className='text-lg text-justify font-sans text-gray-700 max-w-4xl mb-10 mt-4'>
                Descubre nuestra variedad de helados cremosos y sorbetes de
                fruta fresca. Hechos con ingredientes locales y la máxima
                calidad.
              </p>

              {/* Contenedor del listado de productos: Se convierte en 1 columna en móvil (grid-cols-1), 2 en tablet (md:grid-cols-2) y 3 en desktop (lg:grid-cols-3) */}
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4'>
                {/* Mapeo de datos */}
                {dummyHelados.map((helado) => (
                  <div
                    key={helado.id}
                    className='bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-[1.02] transition duration-300'
                  >
                    <div className='relative w-full h-48'>
                      {/* Image usa 'sizes' y 'fill' para una mejor adaptabilidad y rendimiento */}
                      <Image
                        src={helado.imageUrl}
                        alt={helado.name}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                      />
                    </div>

                    <div className='p-6'>
                      <h3 className='text-xl font-bold text-gray-900 mb-2'>
                        {helado.name}
                      </h3>
                      <p className='text-gray-600 text-sm mb-4'>
                        {helado.description}
                      </p>
                      <p className='text-2xl font-extrabold text-pink-600'>
                        {/* Formato de moneda */}
                        ${(helado.price / 100).toFixed(2)}
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
