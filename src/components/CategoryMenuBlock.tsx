import Link from 'next/link';
import Image from 'next/image';
import { CATEGORIAS, Categoria } from '@/data/categorias';


export default function CategoryMenuBlock() {
  // 2. Definimos las clases de fondo directamente con el estilo de overlay.
  const sectionBgClass = 'py-10 bg-gradient-to-t from-black/10 to-transparent';

  return (
    <div className={`w-full ${sectionBgClass}`}>
      <div className='max-w-7xl mx-auto px-4'>
        <div
          className='
              flex justify-center /* MÓVIL: Centra el grupo de logos */
              md:justify-end md:mr-10 /* ESCRITORIO: Alinea el grupo a la derecha */
            '
        >
          <div
            className='
            grid 
            grid-cols-2 /* MÓVIL: 2 columnas */
            md:grid-cols-4 /* ESCRITORIO: 4 columnas */
            gap-4 md:gap-8 /* Espaciado entre elementos */
            max-w-sm mx-auto /* Limita el ancho en móvil y lo centra */
            md:max-w-full md:mx-0 md:justify-end md:mr-2 /* Restaura el diseño de escritorio */
            '
          >
            {CATEGORIAS.map((categoria: Categoria) => (
              <Link
                key={categoria.slug}
                href={`/menu/${categoria.slug}`}
                className={`group flex flex-col items-center justify-center 
                  p-2 sm:p-3 
                  transition-all duration-300 transform hover:scale-105 hover:shadow-2xl 
                  shadow-xl rounded-lg h-32 w-full
                  bg-white/20 
                `}
              >

                <div className='w-10 sm:w-12 h-10 sm:h-12 relative'>
                  <Image
                    src={categoria.logoPath}
                    alt={categoria.nombre}
                    fill
                    className='object-contain'
                  />
                </div>

                {/* Nombre de la Categoría */}
                <span
                  // 5. Aplicamos las clases de texto de overlay (text-gray-900) directamente
                  className={`text-base sm:text-lg font-serif mt-2 text-gray-900`}
                >
                  {categoria.nombre}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
