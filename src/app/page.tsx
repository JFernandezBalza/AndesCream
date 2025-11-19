import CategoryMenuBlock from '@/components/CategoryMenuBlock';
import Image from 'next/image';

const HeroSection = () => (
  <section
    className='w-full min-h-screen flex flex-col bg-cover bg-[position:45%_center] bg-no-repeat relative md:bg-center'
  >
    <div className='absolute inset-0 bg-black/15 z-0'></div>

    <div className='relative flex flex-col h-full w-full z-10'>

      {/* 2. SECCIÓN CENTRAL: TÍTULO PRINCIPAL (Utiliza flex-grow para ocupar el espacio restante) */}
      <div className='flex-grow flex items-center justify-center'>
        <div className='w-full max-w-lg pt-17 mx-auto lg:mr-32 xl:mr-64'>
          <div className='relative h-80 mx-auto'>
            {' '}
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
      {/* 3. SECCIÓN INFERIOR: MENÚ*/}
        <div className=''>
          <CategoryMenuBlock isOverlay={true} />
        </div>
      </div>
  </section>
);

export default HeroSection;