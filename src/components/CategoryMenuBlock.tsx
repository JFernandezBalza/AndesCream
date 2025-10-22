// components/CategoryMenuBlock.tsx
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
      <div className='max-w-7xl mx-auto text-center px-4'>
        {/* Título solo si NO es un overlay, o dale estilo para el overlay */}
        {!isOverlay && (
          <h2 className='text-3xl font-extrabold text-gray-900 sm:text-4xl mb-12'>
            Descubre Nuestros Sabores
          </h2>
        )}

        {/* Grid para los logos/categorías */}
        <div className='flex flex-wrap justify-end mr-10 gap-15'>
          {CATEGORIAS.map((categoria: Categoria) => (
            <Link
              key={categoria.slug}
              href={`/menu/${categoria.slug}`}
              // El fondo del link (card) será semi-transparente si es overlay
              className={`group flex flex-col items-center justify-center p-2 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl w-35 h-32 shadow-xl rounded-lg ${
                isOverlay ? 'bg-white/20' : 'bg-white'
              }`}
            >
              {/* Logo de la Categoría */}
              <Image
                src={categoria.logoPath}
                alt={categoria.nombre}
                width={50}
                height={50}
              />

              {/* Nombre de la Categoría */}
              <span
                className={`text-lg font-semibold ${
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
  );
}
