import CategoryMenuBlock from '@/components/CategoryMenuBlock';
import Image from 'next/image';

const HeroSection = () => (
  <section className='w-full flex flex-col items-center justify-center bg-cover bg-[position:45%_center] bg-no-repeat relative md:bg-center'>
    <div className='w-full max-w-lg mx-auto lg:mr-32 xl:mr-64 relative h-100'>
      <Image
        src='/images/logocream.png'
        alt='Helado artesanal sabor único'
        fill
        style={{ objectFit: 'contain' }}
        quality={90}
        priority
      />
    </div>
    <div className='mt-4 w-full'>
      <CategoryMenuBlock />
    </div>
  </section>
);

export default HeroSection;
