// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... otras configuraciones si las tienes

  images: {
    // Añade el dominio 'placehold.co' a la lista de dominios permitidos
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**', // Permite cualquier ruta dentro de ese dominio
      },
    ],
  },
};

module.exports = nextConfig;
