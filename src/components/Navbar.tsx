'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';
import { CATEGORIAS } from '@/data/categorias';
import { Menu, X, ChevronDown, LogOut, LayoutDashboard } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

interface NavbarProps {
  // Prop para determinar si el usuario es administrador
  isAdmin?: boolean;
  // Función de callback para el cierre de sesión
  onLogoutClick?: () => void;
}

export default function Navbar({
  isAdmin = false,
  onLogoutClick,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const pathname = usePathname();
  const isHomePage = pathname === '/';
  
  // Condición para mostrar el botón de Dashboard: Eres Admin Y NO estás en la ruta /admin o /admin/...
  const isDashboardRoute = pathname.startsWith('/admin');
  const showDashboardButton = isAdmin && !isDashboardRoute;


  // Enlaces de navegación estándar
  const navItems = [
    { name: '¿Quienes somos?', href: '/historia' },
    { name: 'Contacto/Sugerencias', href: '/contacto' },
  ];

  // Enlaces de administración.
  const adminNavItems = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Productos (ABM)', href: '/admin/productos', icon: null },
    { name: 'Órdenes (ABM)', href: '/admin/ordenes', icon: null },
  ];

  // --- Funciones de manejo del mouse para el Dropdown ---

  const handleMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setIsMenuOpen(false);
    }, 200);
  };

  const bgClass = 'bg-transparent absolute top-0 left-0 right-0';

  const getLinkClasses = (href: string) => {
    const isActive = pathname === href;

    const baseClass = 'rounded-lg bg-black/20 text-gray-200';
    // Activo/Hover usa borde y aumenta opacidad del fondo
    const activeOverlayClass = isActive
      ? 'border-b-2 border-white/80 font-bold'
      : 'hover:border-b-2 hover:border-white/50 hover:bg-black/40';

    return `font-medium transition duration-300 px-3 py-2 ${baseClass} ${activeOverlayClass}`;
  };

  // Estilos para los enlaces dentro del Dropdown de Categorías (se mantienen, ya que están en fondo blanco)
  const getDropdownLinkClasses = (slug: string) => {
    const href = `/menu/${slug}`;
    const isActive = pathname === href;

    return `text-gray-700 hover:bg-pink-50 block px-4 py-2 text-sm transition ${
      isActive ? 'bg-pink-100 font-semibold text-pink-700' : ''
    }`;
  };

  const getMenuButtonClasses = () => {
    const baseClass = 'rounded-lg bg-black/20 text-gray-200';
    return `font-medium transition duration-300 px-3 py-2 ${baseClass} hover:bg-black/30 flex items-center`;
  };

  // --- Componente ---

  return (
    <nav className={`w-full z-50 ${bgClass} transition-all duration-300`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-20'>
          <div className={isHomePage ? 'flex-grow' : ''}>
            {/* Logo solo si NO estamos en la Home */}
            {!isHomePage && (
              <Link
                href='/'
                className={`flex transition duration-300 transform hover:scale-95 w-65`}
              >
                <Image
                  src='/images/logocream.png'
                  alt='AndesCream Logo'
                  width={150}
                  height={40}
                  className='block h-20 w-auto'
                />
              </Link>
            )}
            {/* Logo en Home si no es admin y no está en admin route - para evitar que el logo ocupe todo el espacio */}
            {isHomePage && !isAdmin && (
                <div className='block h-20 w-auto'></div>
            )}
          </div>

          {/* ITEMS DE NAVEGACIÓN (Pantallas Grandes) */}
          <div
            className={`hidden md:flex space-x-4 items-center ${
              isHomePage ? 'ml-auto' : ''
            }`}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={getLinkClasses(item.href)}
              >
                {item.name}
              </Link>
            ))}

            {/* BOTÓN IR AL DASHBOARD (ESCRITORIO) - Se muestra si eres admin y NO estás ya en /admin/... */}
            {showDashboardButton && (
              <Link
                href='/admin'
                className={`${getLinkClasses(
                  '/admin'
                )} flex items-center bg-green-600/70 hover:bg-green-700/80 text-white`}
                title='Ir al Dashboard'
              >
                <LayoutDashboard size={20} className='mr-1' />
                Dashboard
              </Link>
            )}
            
            {/* BOTÓN CERRAR SESIÓN (ESCRITORIO) - Se muestra si eres admin */}
            {isAdmin && onLogoutClick && (
              <button
                onClick={onLogoutClick}
                className={`${getLinkClasses(
                  '/logout'
                )} flex items-center bg-red-600/70 hover:bg-red-700/80 text-white`}
                title='Cerrar Sesión'
              >
                <LogOut size={20} className='mr-1' />
                Salir
              </button>
            )}

            {/* Menú Dropdown de Categorías */}
            {!isHomePage && (
              <div
                className='relative'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
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

                {isMenuOpen && (
                  <div className='absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 z-50'>
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
            className={`md:hidden p-2 rounded-md ${
              'text-white hover:bg-white/10'
            }`}
            aria-label='Abrir menú'
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MENÚ MÓVIL */}
      {isOpen && (
        <div className='md:hidden'>
          <div
            className={`
              absolute top-20 left-0 w-full 
              shadow-lg pb-4 transition-all duration-300
              
              // FIJADO: Fondo oscuro semi-transparente para overlay móvil
              bg-gray-900/95 text-white
            `}
          >
            <div className='flex flex-col space-y-2 px-4 pt-2'>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`p-3 rounded-md 
                    // FIJADO: Estilos de overlay móvil
                    text-white hover:bg-white/10 ${
                      pathname === item.href ? 'bg-white/20 font-semibold' : ''
                    }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* ENLACES Y BOTONES DE ADMINISTRACIÓN EN MÓVIL */}
              {isAdmin && (
                <>
                  <h4
                    className={`font-bold pt-4 pb-1 border-t mt-4 
                      // FIJADO: Estilos de overlay móvil
                      text-pink-300 border-gray-700
                    `}
                  >
                    Administración
                  </h4>
                  
                  {/* Botón Ir al Dashboard (Móvil) - Se muestra si eres admin y NO estás ya en /admin/... */}
                  {showDashboardButton && (
                    <Link
                      href='/admin'
                      onClick={() => setIsOpen(false)}
                      className={`p-3 rounded-md transition duration-150 flex items-center bg-green-600/70 hover:bg-green-500/80 text-white font-bold`}
                    >
                      <LayoutDashboard size={20} className='mr-2' />
                      Ir al Dashboard
                    </Link>
                  )}

                  {/* Links de navegación del admin (visibles aunque ya esté en el dashboard) */}
                  {adminNavItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`p-3 rounded-md transition duration-150 flex items-center 
                        // FIJADO: Estilos de overlay móvil
                        text-white hover:bg-white/10 ${
                          pathname === item.href
                            ? 'bg-white/20 font-semibold'
                            : ''
                        }`}
                    >
                      {item.icon && <item.icon size={20} className='mr-2' />}
                      {item.name}
                    </Link>
                  ))}
                </>
              )}

              {/* BOTÓN CERRAR SESIÓN (Móvil) - Se muestra si eres admin */}
              {isAdmin && onLogoutClick && (
                <button
                  onClick={() => {
                    onLogoutClick();
                    setIsOpen(false);
                  }}
                  className={`
                      p-3 rounded-md mt-4 transition duration-150 
                      flex items-center justify-center space-x-2 
                      font-bold 
                      // FIJADO: Estilos de overlay móvil
                      bg-red-700 hover:bg-red-600 text-white
                    `}
                  title='Cerrar Sesión'
                >
                  <LogOut size={20} />
                  <span>Cerrar Sesión</span>
                </button>
              )}

              {/* Categorías (Menú) */}
              {(!isHomePage || isAdmin) && (
                <>
                  <h4
                    className={`font-bold pt-4 pb-1 border-t mt-4 
                      // FIJADO: Estilos de overlay móvil
                      text-white/80 border-gray-700
                    `}
                  >
                    Categorías
                  </h4>

                  {CATEGORIAS.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/menu/${cat.slug}`}
                      onClick={() => setIsOpen(false)}
                      className={`text-sm p-3 rounded-md transition duration-150 
                        // FIJADO: Estilos de overlay móvil
                        text-gray-200 hover:bg-white/10
                      `}
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