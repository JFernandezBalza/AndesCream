import React from 'react';
import {  MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface SocialIconProps {
  name: string; // El nombre del ícono o ruta de la imagen
}

// --- Configuración de Iconos ---
const SocialIcon = ({ name }: SocialIconProps) => {
  const isImagePath =
    name &&
    typeof name === 'string' &&
    name.startsWith('/') &&
    name.includes('.');

  if (isImagePath) {
    return (
      <Image
        src={name}
        alt='Icono Social'
        width={24}
        height={24}
        className='filter grayscale hover:filter-none w-5 h-5 sm:w-6 sm:h-6'
      />
    );
  }

  if (name === 'MapPin') return <MapPin size={24} className='text-current' />;
  if (name === 'Facebook')
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
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
        width='24'
        height='24'
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
  return <span>{name[0]}</span>;
};

// --- Enlaces Sociales ---
const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/AndesCream',
    lucideIcon: '/images/facebook.png',
    alt: 'Facebook de AndesCream',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/andes.heladeria?igsh=enJ4eGx4bG43OW9o',
    lucideIcon: '/images/instagram.png',
    alt: 'Instagram de AndesCream',
  },
  {
    name: 'Ubicación',
    url: 'https://maps.app.goo.gl/C7BNajmfpuixHnUm8',
    lucideIcon: '/images/location.png',
    alt: 'Ubicación de AndesCream en el mapa',
  },
];

interface FooterProps {
  isOverlay?: boolean;
}

const Footer = ({ isOverlay = false }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const baseClasses = 'w-full py-0 text-sm transition-colors duration-300';
  const overlayClasses = 'bg-transparent text-white drop-shadow-lg border-t-0';
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
      <div className='max-w-9xl mx-auto px-4 sm:px-6 bg-gradient-to-t from-black/60 to-transparent'>
        {/*
          CONTENEDOR MODIFICADO:
          Ahora tiene tres columnas en desktop: Legal | Copyright | Social
        */}
        <div className='flex flex-col md:flex-row justify-around items-center text-center md:text-left gap-6 sm:gap-8 border-b pb-2 sm:pb-0 mb-0 border-gray-300/50'>
          {/* Columna 1: Enlaces Legales */}
          <div className='flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4'>
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

          {/* Columna 2: Copyright */}
          <div className='flex flex-col items-center justify-center'>
            <p className='text-xs opacity-70 text-center'>
              © {currentYear} AndesCream. Todos los derechos reservados.
            </p>
          </div>

          {/* Columna 3: Redes Sociales e Ubicación */}
          <div className='flex flex-col items-center md:items-end space-y-2 sm:space-y-3'>
            <div className='flex space-x-4 sm:space-x-6'>
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`transition duration-200 transform hover:scale-110 ${linkTextColor}`}
                >
                  <SocialIcon name={link.lucideIcon} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Enlaces Legales o de Interés Adicionales (Opcional) */}
        <div className='flex justify-center md:justify-end space-x-6 pt-1'></div>
      </div>
    </footer>
  );
};

export default Footer;