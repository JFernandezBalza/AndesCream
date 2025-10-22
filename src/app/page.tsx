import Navbar from '@/components/Navbar';
import CategoryMenuBlock from '@/components/CategoryMenuBlock';
import Footer from '@/components/Footer'; 
import Image from 'next/image';

// Componente HeroSection (Portada de pantalla completa)
const HeroSection = () => (
  // CLASES CLAVE: h-screen, flex flex-col, relative.
  <section
    className='h-screen flex flex-col bg-cover bg-center relative'
    style={{ backgroundImage: `url('/images/fondo5.jpg')` }}
  >
    {/* ⭐ 0. OVERLAY OSCURO: Añadimos una capa semitransparente sobre la imagen para mejorar la legibilidad del texto blanco */}
    <div className='absolute inset-0 bg-black/15 z-0'></div>

    {/* CONTENIDO (z-10 para que esté encima del overlay de la imagen) */}
    <div className='relative flex flex-col h-full w-full z-10'>
      {/* 1. SECCIÓN SUPERIOR: NAVBAR */}
      <div className='w-full'>
        <Navbar isOverlay={true} />
      </div>

      {/* 2. SECCIÓN CENTRAL: TÍTULO PRINCIPAL (Utiliza flex-grow para ocupar el espacio restante) */}
      <div className='flex-grow flex items-center justify-end'>
        <div className='flex-grow flex items-start justify-end mr-60'>
          {/* El div 'max-w-xl' ahora envuelve el contenedor de la imagen */}
          <div className='max-w-xl w-1/2'>
            {' '}
            {/* Añadimos w-full para que ocupe todo el ancho disponible dentro de max-w-xl */}
            <div className='relative h-60'>
              {' '}
              {/* Altura fija para la imagen, 'relative' para layout='fill' */}
              <Image
                src='/images/logocream.png' // <-- RUTA DE TU IMAGEN (¡Cámbiala!)
                alt='Helado artesanal sabor único'
                layout='fill' // La imagen llenará el contenedor padre
                objectFit='cover' // La imagen cubrirá el espacio sin distorsionarse
                quality={90}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3. SECCIÓN INFERIOR: MENÚ Y FOOTER (Se apilan en la parte inferior de la pantalla) */}
      <div className='w-full'>
        {/* Bloque de Menú de Categorías (Debe ser un overlay con gradiente para la transición visual) */}
        <CategoryMenuBlock isOverlay={true} />

        {/* Footer (Debe tener un fondo sólido oscuro para asegurar legibilidad sobre la imagen) */}
        <Footer isOverlay={true} />
      </div>
    </div>
  </section>
);

export default function Home() {
    return (
        // En un proyecto Next.js real, el resto de componentes irían aquí debajo si tuvieras scroll (e.g., sobre nosotros, galería).
        <div className='min-h-screen'> 
            <main>
                <HeroSection />
            </main>
        </div>
    );
}
