import React from 'react';
// Simulamos Image y Link de next/router, y los iconos de Lucide
const Image = ({ src, alt, width, height, className }) => (
  <img
    src={src}
    alt={alt}
    style={{ width: width, height: height }}
    className={className}
  />
);
const Link = ({ href, className, children, target, rel }) => (
  <a href={href} className={className} target={target} rel={rel}>
    {children}
  </a>
);
// Usaremos iconos de Lucide (asumiendo que están disponibles o se pueden simular)
// Ya que estamos en un único archivo, los iconos Lucide se deben simular o usar inline SVG/Placeholder.
// Mantendremos los imports originales de Lucide, asumiendo que el ambiente los resuelve.
import { Mail, MapPin, Phone } from 'lucide-react';

// --- Configuración de Iconos (Asegúrate de que tus iconos existan o usa Placeholders) ---
const SocialIcon = ({ name }) => {
  // Verificamos si la entrada es una ruta de imagen (comienza con / y tiene extensión)
  const isImagePath =
    name &&
    typeof name === 'string' &&
    name.startsWith('/') &&
    name.includes('.');

  // Si es una ruta de imagen, renderizamos el componente Image
  if (isImagePath) {
    return (
      <Image
        src={name}
        alt='Icono Social' // Alt genérico, se recomienda pasar uno específico si es posible
        width={24} // AUMENTADO: de 18 a 24
        height={24} // AUMENTADO: de 18 a 24
        className='filter grayscale hover:filter-none' // Efecto visual para simular interacción
      />
    );
  }

  // De lo contrario, usamos la lógica de Lucide/SVG (con tamaño de 24px)
  if (name === 'MapPin') return <MapPin size={24} className='text-current' />; // AUMENTADO: de 18 a 24
  if (name === 'Facebook')
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24' // AUMENTADO: de 18 a 24
        height='24' // AUMENTADO: de 18 a 24
        viewBox='0 0 24 24'
        fill='currentColor'
        className='text-current'
      >
        <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
      </svg>
    );
  if (name === 'Instagram')
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24' // AUMENTADO: de 18 a 24
        height='24' // AUMENTADO: de 18 a 24
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='text-current'
      >
        <rect x='2' y='2' width='20' height='20' rx='5' ry='5'></rect>
        <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'></path>
        <line x1='17.5' y1='6.5' x2='17.51' y2='6.5'></line>
      </svg>
    );
  return <span>{name[0]}</span>; // Fallback simple
};
// ----------------------------------------------------------------------------------

// Estructura de enlaces sociales y ubicación
const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/AndesCream',
    // RUTA DE IMAGEN PROPORCIONADA POR EL USUARIO
    lucideIcon: '/images/facebook.png',
    alt: 'Facebook de AndesCream',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/AndesCream',
    // Se mantiene como 'Instagram' para usar el SVG/Lucide simulado
    lucideIcon: '/images/instagram.png',
    alt: 'Instagram de AndesCream',
  },
  {
    name: 'Ubicación',
    url: 'https://maps.app.goo.gl/AndesCreamLocation',
    // Se mantiene como 'MapPin' para usar el Lucide real
    lucideIcon: '/images/location.png',
    alt: 'Ubicación de AndesCream en el mapa',
  },
];

interface FooterProps {
  isOverlay?: boolean;
}

const Footer = ({ isOverlay = false }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  // CLASE MODIFICADA: py-0 para eliminar el padding vertical del footer
  const baseClasses = 'w-full py-0 text-sm transition-colors duration-300';

  // Clases condicionales para el overlay
  const overlayClasses = 'bg-transparent text-white drop-shadow-lg border-t-0';

  // Clases para el estado normal (no overlay)
  const defaultClasses =
    'bg-white border-t border-gray-200 text-gray-700 shadow-lg';

  const footerClasses = isOverlay
    ? `${baseClasses} ${overlayClasses}`
    : `${baseClasses} ${defaultClasses}`;
  const linkTextColor = isOverlay
    ? 'text-white hover:text-pink-300'
    : 'text-gray-600 hover:text-pink-500';

  return (
    <footer className={footerClasses}>
      {/* Añadimos un padding vertical mínimo al contenedor interno (py-4) para dar aire solo al contenido */}
      <div className='max-w-9xl mx-auto px-4 sm:px-6 bg-gradient-to-t from-black/40 to-transparent'>
        {/*
          CONTENEDOR MODIFICADO:
          Ahora tiene tres columnas en desktop: Legal | Copyright | Social
        */}
        <div className='flex flex-col md:flex-row justify-around items-center gap-8 border-b pb-0 mb-0 border-gray-300/50'>
          {/* Columna 1: Enlaces Legales (Anteriormente incluía Copyright) */}
          <div className='flex flex-row items-center pt-2 md:items-start space-y-2 space-x-4'>
            <Link
              href='/politica-privacidad'
              className={`text-xs ${linkTextColor}`}
            >
              Política de Privacidad
            </Link>
            <Link
              href='/terminos-servicio'
              className={`text-xs ${linkTextColor}`}
            >
              Términos de Servicio
            </Link>
          </div>

          {/* Columna 2: Copyright (NUEVO - Colocado en el centro) */}
          <div className='flex flex-col items-center justify-center'>
            <p className='text-xs opacity-70 text-center'>
              © {currentYear} AndesCream. Todos los derechos reservados.
            </p>
          </div>

          {/* Columna 3: Redes Sociales e Ubicación (Enlaces con Iconos) */}
          <div className='flex flex-col items-center md:items-end space-y-3'>
            <div className='flex space-x-6'>
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  // Efecto intuitivo de escala al pasar el cursor
                  className={`transition duration-200 transform hover:scale-110 ${linkTextColor}`}
                >
                  {/* El componente SocialIcon ahora gestiona si renderiza la imagen o el SVG */}
                  <SocialIcon name={link.lucideIcon} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Enlaces Legales o de Interés Adicionales (Opcional) */}
        {/* Este div queda vacío, se mantiene sin cambios */}
        <div className='flex justify-center md:justify-end space-x-6 pt-1'></div>
      </div>
    </footer>
  );
};

export default Footer;
