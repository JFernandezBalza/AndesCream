// app/admin/design/page.tsx (CORREGIDO - Aliniado con RootLayout)

'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
// ❌ ELIMINAMOS: import Navbar from '@/components/Navbar';
import {
  Palette,
  Image as ImageIcon,
  PaintBucket,
  LayoutDashboard,
} from 'lucide-react';
import Link from 'next/link'; // Usamos next/link para navegación

// Componente para seleccionar color/tema
const ColorPicker: React.FC<{ title: string; color: string }> = ({
  title,
  color,
}) => (
  <div className='flex items-center space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-200'>
    <div
      // Utilizamos una clase compuesta para asegurar que Tailwind detecte los colores
      className={`w-8 h-8 rounded-full shadow-md ${color} ring-4 ring-white border-2 border-gray-300`}
    ></div>
    <p className='text-gray-700 font-medium flex-grow'>{title}</p>
    <button className='text-sm bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-600 transition'>
      Seleccionar
    </button>
  </div>
);

export default function DesignPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Lógica de protección de ruta (Guardia)
  useEffect(() => {
    const adminFlag = localStorage.getItem('is_admin_authenticated');
    if (adminFlag === 'true') {
      setIsAuthenticated(true);
    } else {
      router.push('/login');
    }
    setIsLoading(false);
  }, [router]);

  // 1. Pantalla de carga/verificación
  if (isLoading || !isAuthenticated) {
    return (
      <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8'>
        <div className='animate-spin rounded-full h-12 w-12 border-b-4 border-pink-500 mb-4'></div>
        <p className='text-xl text-gray-700 font-serif flex items-center'>
          <LayoutDashboard className='w-5 h-5 mr-2' />
          Verificando acceso...
        </p>
      </div>
    );
  }

  // 2. Contenido de la página de Diseño (APLICAMOS EL ENVOLTORIO UNIFICADO)
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center py-20 z-0'>
      <div className='w-full max-w-4xl lg:max-w-6xl'>
        {/* Usamos bg-white/90 para la consistencia con el dashboard */}
        <div className='px-4 sm:px-6 py-8 text-gray-700 bg-white/90 shadow-2xl rounded-lg mx-4 z-0'>
          {/* Contenido de la página de Diseño */}
          <h1 className='text-4xl font-serif text-yellow-600 mb-8 border-b pb-3 flex items-center'>
            <Palette size={32} className='mr-3' />
            Apariencia y Fondos del Sitio
          </h1>

          <p className='text-gray-600 mb-8'>
            Administra el estilo visual de la aplicación. Esto incluye el tema
            de color principal y los fondos de las secciones clave.
          </p>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
            {/* SECCIÓN DE TEMAS Y COLORES */}
            <div className='space-y-6'>
              <h2 className='text-2xl font-bold text-gray-800 flex items-center border-b pb-2'>
                <PaintBucket className='mr-2' size={24} /> Tema de Color
                Principal
              </h2>
              <ColorPicker
                title='Tema Actual: Andes Pink'
                color='bg-pink-500'
              />
              <ColorPicker
                title='Opción 1: Caribbean Blue'
                color='bg-blue-500'
              />
              <ColorPicker
                title='Opción 2: Forest Green'
                color='bg-green-500'
              />

              <button className='mt-4 w-full py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition font-bold'>
                Guardar Cambios de Tema
              </button>
            </div>

            {/* SECCIÓN DE FONDOS */}
            <div className='space-y-6'>
              <h2 className='text-2xl font-bold text-gray-800 flex items-center border-b pb-2'>
                <ImageIcon className='mr-2' size={24} /> Gestión de Fondos
                (Banners)
              </h2>
              <div className='bg-gray-100 p-4 rounded-lg space-y-3 border border-gray-200'>
                <p className='font-semibold text-gray-700'>
                  Fondo Actual (Home): /images/fondo5.jpg
                </p>

                <div className='flex items-center space-x-3'>
                  <input
                    type='file'
                    className='text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-pink-50 file:text-pink-700 hover:file:bg-pink-100 transition'
                  />
                  <button className='text-sm bg-yellow-600 text-white px-3 py-1 rounded hover:bg-yellow-700 transition'>
                    Subir Nuevo
                  </button>
                </div>
                <p className='text-xs text-gray-500'>
                  Sube una nueva imagen para reemplazar el fondo principal.
                </p>
              </div>

              <div className='p-4 bg-yellow-50 rounded-lg text-yellow-800 border-l-4 border-yellow-500'>
                <p className='font-semibold'>Nota:</p>
                <p className='text-sm'>
                  La implementación real requeriría conexión a un servicio de
                  almacenamiento (Firebase Storage) y manipulación del DOM para
                  aplicar los cambios.
                </p>
              </div>
              <Link
                href='/admin'
                className='mt-8 inline-flex items-center px-4 py-2 border border-transparent rounded-lg text-sm font-medium text-white bg-gray-500 hover:bg-gray-600 transition duration-150'
              >
                <LayoutDashboard size={20} className='mr-2' />
                Volver al Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}