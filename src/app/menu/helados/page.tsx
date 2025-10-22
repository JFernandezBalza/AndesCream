import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Helados Artesanales AndesCream',
  description:
    'Descubre nuestra variedad de helados: clásicos, de frutas exóticas y creaciones especiales.',
};

export default function HeladosPage() {
  return (
    <div className='p-8 min-h-screen bg-pink-50'>
      <Link
        href='/'
        className='text-pink-600 hover:text-pink-800 transition duration-150 hover:underline mb-8 inline-block'
      >
        ← Volver a la Portada
      </Link>

      <h1 className='text-4xl font-extrabold text-pink-700 mb-4 border-b-2 border-pink-300 pb-2'>
        Sabores Artesanales de Helado
      </h1>

      <p className='text-lg text-gray-700 max-w-2xl'>
        Nuestra especialidad. Helados cremosos y *sorbetes* de fruta fresca,
        hechos día a día con ingredientes locales y la pasión que aprendiste en
        cocina. ¡Una delicia garantizada!
      </p>

      {/* A futuro, aquí se listarán los productos con mapeo de datos */}
      <div className='mt-10 p-6 bg-white rounded-xl shadow-lg border border-pink-200'>
        <h2 className='text-2xl font-semibold text-pink-500 mb-4'>
          Categorías:
        </h2>
        <ul className='list-disc list-inside text-gray-600 space-y-2'>
          <li>**Clásicos:** Vainilla, Chocolate, Fresa.</li>
          <li>**Gourmet:** Pistacho, Sal Marina con Caramelo, Café.</li>
          <li>**Sorbetes:** Mango, Maracuyá, Limón.</li>
        </ul>
      </div>
    </div>
  );
}
