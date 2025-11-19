// layouts/MenuLayout.tsx

import Navbar from '@/components/Navbar';
import { ReactNode } from 'react';

interface MenuLayoutProps {
  children: ReactNode;
  backgroundImage: string; // Parámetro específico para cada página
}

export default function MenuLayout({
  children,
  backgroundImage,
}: MenuLayoutProps) {
  return (
    <div className='min-h-screen'>
      <Navbar />

      <section
        id='category-menu'
        className='w-full h-auto py-16 flex flex-col bg-cover bg-[position:35%_center] bg-no-repeat relative md:bg-center'
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        <div className='flex-grow flex items-center justify-center py-16 pb-16 bg-black/15 z-0 min-h-screen'>
          <div className='w-full max-w-4xl lg:max-w-6xl'>
            <div className='px-4 sm:px-6 py-8 text-gray-700 bg-white/70 shadow-2xl rounded-lg mx-4 z-0'>
              {/* Aquí se inyecta el contenido específico (título, descripción, lista) */}
              {children}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
