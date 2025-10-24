import Link from 'next/link';
import Image from 'next/image';
import { CATEGORIAS, Categoria } from '@/data/categorias';

interface CategoryMenuBlockProps {
  isOverlay?: boolean;
}

export default function CategoryMenuBlock({
  isOverlay = false,
}: CategoryMenuBlockProps) {
  // Determina la clase de fondo de toda la sección
  const sectionBgClass = isOverlay
    ? 'py-10 bg-gradient-to-t from-black/10 to-transparent'
    : 'py-16 bg-gray-50';

  return (
    <div className={`w-full ${sectionBgClass}`}>
      <div className='max-w-7xl mx-auto px-4'>
        {/* Título solo si NO es un overlay, o dale estilo para el overlay */}
        {!isOverlay && (
          <h2 className='text-3xl font-serif text-gray-900 sm:text-4xl mb-12'>
            Descubre Nuestros Sabores
          </h2>
        )}
        <div
          className='
                flex justify-center /* MÓVIL: Centra el grupo de logos */
                md:justify-end md:mr-10 /* ESCRITORIO: Alinea el grupo a la derecha */
            '
        >
          {/* Grid para los logos/categorías */}
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
                href={`/menu/${categoria.slug}`} // Simplificamos y centramos el Link, eliminando las clases de ancho w-XX y h-XX
                className={`group flex flex-col items-center justify-center 
                p-2 sm:p-3 
                transition-all duration-300 transform hover:scale-105 hover:shadow-2xl 
                shadow-xl rounded-lg h-32 w-full
                ${isOverlay ? 'bg-white/20' : 'bg-white'}
              `}
              >
                {/* Logo de la Categoría */}
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
                  className={`text-base sm:text-lg font-serif mt-2 ${
                    isOverlay
                      ? 'text-gray-900'
                      : 'text-gray-700 group-hover:text-pink-600'
                  }`}
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