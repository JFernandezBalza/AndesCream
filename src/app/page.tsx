import Navbar from '@/components/Navbar';
import CategoryMenuBlock from '@/components/CategoryMenuBlock';
import Footer from '@/components/Footer'; 
import Image from 'next/image';

const HeroSection = () => (
  <section
    className='w-full min-h-screen flex flex-col bg-cover bg-left bg-no-repeat relative md:bg-center'
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
      <div className='flex-grow flex items-center justify-center'>
        <div className='w-full max-w-lg pt-17 mx-auto'>
          <div className='relative h-80 mx-auto'>
            {' '}
            <Image
              src='/images/logocream.png' // <-- RUTA DE TU IMAGEN (¡Cámbiala!)
              alt='Helado artesanal sabor único'
              fill // La imagen llenará el contenedor padre
              style={{ objectFit: 'contain' }}
              quality={90}
              priority
            />
          </div>
        </div>
      </div>
      {/* 3. SECCIÓN INFERIOR: MENÚ*/}
      <div className='w-full'>
        <div className='mb-8'>
          {/* Bloque de Menú de Categorías (Debe ser un overlay con gradiente para la transición visual) */}
          <CategoryMenuBlock isOverlay={true} />
        </div>
        <div>
          {/* 4. SECCIÒN Footer (Debe tener un fondo sólido oscuro para asegurar legibilidad sobre la imagen) */}
          <Footer isOverlay={true} />
        </div>
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
