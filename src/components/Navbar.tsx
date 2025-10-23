// components/Navbar.tsx

'use client';

import Link from 'next/link';
import { useState } from 'react';
import { CATEGORIAS } from '@/data/categorias';
import { Menu, X, ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

interface NavbarProps {
  isOverlay?: boolean;
}

export default function Navbar({ isOverlay = false }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false); // Controla el menú móvil (hamburguesa)
  // ⭐ NUEVO ESTADO: Controla el dropdown de categorías en escritorio
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const shouldBeOverlayStyle = true;

  const navItems = [
    { name: '¿Quienes somos?', href: '/historia' },
    { name: 'Contacto/Sugerencias', href: '/contacto' },
  ];

  // --- Lógica de Estilos ---

  // 1. Fondo de la barra completa: Transparente si es overlay, blanco con sombra si no.
  const bgClass = shouldBeOverlayStyle
    ? 'bg-transparent absolute top-0 left-0 right-0' // Navbar transparente (Sin efectos)
    : 'bg-gray-800 shadow-2xl sticky top-0';

  // Función simplificada para determinar las clases del botón, incluyendo el estado ACTIVO
  const getLinkClasses = (href: string) => {
    const isActive = pathname === href;

    // Estilos para la PORTADA (Botones llamativos sobre fondo claro)
    if (shouldBeOverlayStyle) {
      // Fondo semitransparente
      const baseClass = 'rounded-lg bg-black/20 text-gray-200';
      // Activo/Hover usa borde y aumenta opacidad del fondo
      const activeOverlayClass = isActive
        ? 'border-b-2 border-white/80 font-bold'
        : 'hover:border-b-2 hover:border-white/50 hover:bg-black/40';
      // Ajustamos el padding para el estilo de botón
      return `font-medium transition duration-300 px-3 py-2 ${baseClass} ${activeOverlayClass}`;
    } else {
      const baseClass = 'rounded-lg text-gray-100 bg-white/10';

      const activeDefaultClass = isActive
        ? 'border-b-2 border-pink-400 font-bold text-pink-300'
        : 'hover:border-b-2 hover:border-pink-300 hover:bg-white/20';

      return `text-base transition duration-300 px-3 py-2 ${baseClass} ${activeDefaultClass}`;
    }
  };

  // Estilos para los enlaces dentro del Dropdown de Categorías
  const getDropdownLinkClasses = (slug: string) => {
    const href = `/menu/${slug}`;
    const isActive = pathname === href;

    return `text-gray-700 hover:bg-pink-50 block px-4 py-2 text-sm transition ${
      isActive ? 'bg-pink-100 font-semibold text-pink-700' : ''
    }`;
  };

  // Estilos del botón principal "Menú"
  const getMenuButtonClasses = () => {
    // En la portada usa el estilo overlay normal
    if (isOverlay) {
      const baseClass = 'rounded-lg bg-black/20 text-gray-200';
      return `font-medium transition duration-300 px-3 py-2 ${baseClass} hover:bg-black/30`;
    } else {
      const baseClass = 'rounded-lg text-gray-100 bg-black/30';
      return `font-medium transition duration-300 px-3 py-2 ${baseClass} hover:bg-black/20 flex items-center`;
    }
  };

  // --- Componente ---

  return (
    <nav className={`w-full z-50 ${bgClass} transition-all duration-300`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-20'>
          {/* LOGO */}
          <div
            className={isHomePage && shouldBeOverlayStyle ? 'flex-grow' : ''}
          >
            {(!shouldBeOverlayStyle || !isHomePage) && (
              <Link
                href='/' // CAMBIOS AQUÍ: Se añade 'transform' y el efecto 'hover:scale-105' al Link.
                className={`flex transition duration-300 transform hover:scale-95 w-65`}
              >
                                                               {' '}
                <Image
                  src='/images/logocream.png'
                  alt='AndesCream Logo'
                  width={150}
                  height={40} // Se ha corregido h-15 a h-10 ya que height es 40px (h-10 = 40px en Tailwind)
                  className='block h-20 w-auto'
                />
                                                           {' '}
              </Link>
            )}
          </div>

          {/* ITEMS DE NAVEGACIÓN (Pantallas Grandes) */}
          <div
            className={`hidden md:flex space-x-4 items-center ${
              isHomePage && shouldBeOverlayStyle ? 'ml-auto' : '' // Empuja los botones a la derecha si el logo está oculto
            }`}
          >
            {/* Enlaces Historia y Contacto */}
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={getLinkClasses(item.href)}
              >
                {item.name}
              </Link>
            ))}

            {/* ⭐ IMPLEMENTACIÓN DEL DROPDOWN DE CATEGORÍAS (Escritorio) */}
            {(!isHomePage || !shouldBeOverlayStyle) && (
              <div
                className='relative'
                onMouseEnter={() => setIsMenuOpen(true)}
                onMouseLeave={() => setIsMenuOpen(false)}
              >
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`${getMenuButtonClasses()} focus:outline-none`}
                >
                  Menú
                  <ChevronDown
                    size={18}
                    className={`ml-1 transition-transform duration-200 ${
                      isMenuOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>

                {/* Contenedor del Dropdown */}
                {isMenuOpen && (
                  <div
                    className='absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 z-50'
                    onMouseLeave={() => setIsMenuOpen(false)} // Ocultar al salir
                  >
                    {CATEGORIAS.map((cat) => (
                      <Link
                        key={cat.slug}
                        href={`/menu/${cat.slug}`}
                        onClick={() => setIsMenuOpen(false)}
                        className={getDropdownLinkClasses(cat.slug)}
                      >
                        {cat.nombre}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* BOTÓN HAMBURGUESA (Móvil) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100'
            aria-label='Abrir menú de categorías'
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MENÚ MÓVIL/HAMBURGUESA (Pantallas pequeñas) */}
      {isOpen && (
        <div className='md:hidden bg-white shadow-lg pb-4 transition-all duration-300'>
          <div
            className={`
            md:hidden 
            absolute top-20 left-0 w-full 
            shadow-lg pb-4 transition-all duration-300
            ${
              shouldBeOverlayStyle
                ? 'bg-gray-900/95 text-white'
                : 'bg-white text-gray-800'
            }
          `}
          >
            <div className='flex flex-col space-y-2 px-4 pt-2'>
              {/* Enlaces principales */}
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`p-3 rounded-md ${
                    shouldBeOverlayStyle
                      ? `text-white hover:bg-white/10 ${
                          pathname === item.href
                            ? 'bg-white/20 font-semibold'
                            : ''
                        }`
                      : `text-gray-700 hover:bg-pink-50 ${
                          pathname === item.href
                            ? 'bg-pink-100 font-semibold'
                            : ''
                        }`
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* ⭐ LÓGICA CLAVE: Mostrar Categorías SOLO si NO es la Home Page */}
              {!isHomePage && (
                <>
                  <h4
                    className={`font-bold pt-4 pb-1 border-t mt-4 ${
                      shouldBeOverlayStyle
                        ? 'text-white/80 border-gray-700'
                        : 'text-gray-800 border-gray-200'
                    }`}
                  >
                    Categorías
                  </h4>

                  {/* Enlaces de Categorías */}
                  {CATEGORIAS.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/menu/${cat.slug}`}
                      onClick={() => setIsOpen(false)}
                      className={`text-sm p-3 rounded-md transition duration-150 ${
                        shouldBeOverlayStyle
                          ? 'text-gray-200 hover:bg-white/10'
                          : 'text-gray-600 hover:bg-pink-50'
                      }`}
                    >
                      {cat.nombre}
                    </Link>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}