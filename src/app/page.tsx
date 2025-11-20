import CategoryMenuBlock from '@/components/CategoryMenuBlock';
import Image from 'next/image';

const HeroSection = () => (
  // 1. La sección principal mantiene el fondo, el min-h-screen, y es el contexto 'relative'
  //    para el overlay absoluto.
  <section className='w-full min-h-screen flex flex-col bg-cover bg-[position:45%_center] bg-no-repeat relative md:bg-center'>
    {/* 2. CAPA DE OVERLAY: SÍ usa 'absolute inset-0' para cubrir el fondo. */}
    <div className='absolute inset-0 bg-black/15 z-0'>
      {/* 3. CONTENEDOR PRINCIPAL DE CONTENIDO: 
             Este es el contenedor clave. Quitamos 'absolute inset-0' de aquí.
             Ahora es un hermano de la capa de overlay, y es el que usa flex-col
             para distribuir el espacio.
        */}
      <div className='relative flex flex-col h-full w-full z-10'>
        {/* 2. SECCIÓN CENTRAL: TÍTULO PRINCIPAL 
                 Utiliza flex-grow para ocupar el espacio restante y empujar hacia abajo. 
            */}
        <div className='flex-grow flex items-center justify-center'>
          <div className='w-full max-w-lg pt-17 mx-auto lg:mr-32 xl:mr-64'>
            <div className='relative h-80 mx-auto'>
              <Image
                src='/images/logocream.png'
                alt='Helado artesanal sabor único'
                fill
                style={{ objectFit: 'contain' }}
                quality={90}
                priority
              />
            </div>
          </div>
        </div>

        {/* 3. SECCIÓN INFERIOR: MENÚ
                 El CategoryMenuBlock se coloca al final.
            */}
        <div>
          <CategoryMenuBlock />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
