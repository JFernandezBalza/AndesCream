// app/admin/menus/page.tsx (CORREGIDO - Aliniado con RootLayout)

'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
// ❌ ELIMINAMOS: import Navbar from '@/components/Navbar';
import Link from 'next/link';

// Iconos necesarios para este módulo
import {
  Settings,
  LayoutDashboard,
  Image as ImageIcon,
  DollarSign,
  IceCream,
} from 'lucide-react';

// Datos de productos simulados
const mockProducts = [
  {
    id: 1,
    name: 'Copa Andes Clásica',
    price: 5.5,
    category: 'Postres',
    imagePath: '/images/andes-clasica.jpg',
  },
  {
    id: 2,
    name: 'Vaso de Vainilla y Chocolate',
    price: 3.0,
    category: 'Helados',
    imagePath: '/images/vainilla-choc.jpg',
  },
  {
    id: 3,
    name: 'Milkshake de Fresa',
    price: 4.8,
    category: 'Bebidas',
    imagePath: '/images/milkshake-fresa.jpg',
  },
  {
    id: 4,
    name: 'Torta Helada Familiar',
    price: 18.0,
    category: 'Pastelería',
    imagePath: '/images/torta-helada.jpg',
  },
];

// Componente para la Tarjeta de Edición de Producto
interface ProductCardProps {
  product: (typeof mockProducts)[0];
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Estado local para simular la edición
  const [currentPrice, setCurrentPrice] = useState(product.price);
  const [isEditing, setIsEditing] = useState(false);

  // Simulación de guardado
  const handleSave = () => {
    // Aquí iría la lógica de API call para actualizar el precio
    console.log(
      `Guardando nuevo precio para ${product.name}: $${currentPrice}`
    );
    setIsEditing(false);
  };

  return (
    <div className='bg-white border border-gray-200 rounded-lg shadow-md p-5 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 hover:shadow-lg transition duration-300'>
      {/* Columna de Imagen (Placeholder) */}
      <div
        className='flex-shrink-0 w-full sm:w-20 h-20 bg-gray-100 rounded-md overflow-hidden flex items-center justify-center'
        role='img'
        aria-label={`Placeholder de imagen para ${product.name}`}
      >
        <ImageIcon size={32} className='text-gray-400' aria-hidden='true' />
      </div>

      {/* Columna de Detalles */}
      <div className='flex-grow'>
        <h3 className='text-xl font-bold text-gray-800 flex items-center'>
          <IceCream size={20} className='mr-2 text-pink-500' />
          {product.name}
        </h3>
        <p className='text-sm text-gray-500'>Categoría: {product.category}</p>
      </div>

      {/* Columna de Precio y Edición */}
      <div className='flex flex-col space-y-2 w-full sm:w-auto sm:text-right'>
        {isEditing ? (
          <div className='flex items-center justify-end'>
            <DollarSign size={20} className='text-green-600 mr-1' />
            <input
              type='number'
              step='0.01'
              value={currentPrice}
              onChange={(e) => setCurrentPrice(parseFloat(e.target.value))}
              className='w-24 p-1 border rounded-md text-right font-semibold text-lg text-gray-800 focus:ring-pink-500 focus:border-pink-500'
            />
          </div>
        ) : (
          <p className='text-2xl font-extrabold text-green-600 flex items-center justify-end'>
            <DollarSign size={24} className='mr-1' />
            {product.price.toFixed(2)}
          </p>
        )}

        <div className='flex space-x-2 justify-end'>
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                className='bg-green-500 text-white px-3 py-1 text-sm rounded-md hover:bg-green-600 transition'
              >
                Guardar
              </button>
              <button
                onClick={() => {
                  setIsEditing(false);
                  setCurrentPrice(product.price);
                }}
                className='bg-gray-300 text-gray-800 px-3 py-1 text-sm rounded-md hover:bg-gray-400 transition'
              >
                Cancelar
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className='bg-pink-500 text-white px-3 py-1 text-sm rounded-md hover:bg-pink-600 transition'
            >
              Editar Precio
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// Componente principal de la página
export default function AdminMenusPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Lógica de protección de ruta (Guardia)
  useEffect(() => {
    const adminFlag = localStorage.getItem('is_admin_authenticated');
    if (adminFlag === 'true') {
      setIsAuthenticated(true);
    } else {
      console.warn('Acceso no autorizado a Menús. Redirigiendo a /login.');
      setTimeout(() => router.push('/login'), 50);
    }
    setIsLoading(false);
  }, [router]);

  // Pantalla de Carga/Verificación
  if (isLoading || !isAuthenticated) {
    return (
      <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8'>
        <div className='animate-spin rounded-full h-12 w-12 border-b-4 border-pink-500 mb-4'></div>
        <p className='text-xl text-gray-700 font-serif flex items-center'>
          <LayoutDashboard className='w-5 h-5 mr-2' />
          Verificando credenciales...
        </p>
      </div>
    );
  }

  // Contenido de la página (APLICAMOS EL ENVOLTORIO UNIFICADO)
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center py-20 z-0'>
      <div className='w-full max-w-4xl lg:max-w-6xl'>
        {/* Usamos bg-white/90 para la consistencia con el dashboard */}
        <div className='px-4 sm:px-6 py-8 text-gray-700 bg-white/90 shadow-2xl rounded-lg mx-4 z-0'>
          {/* Contenido de la página */}
          <h1 className='text-4xl font-serif text-pink-600 mb-8 border-b pb-3 flex items-center'>
            <Settings size={32} className='mr-3' />
            Gestión de Menús (Precios y Fotos)
          </h1>

          <p className='text-gray-600 mb-8'>
            Administra los precios de los productos, la disponibilidad y las
            imágenes asociadas que se muestran en la carta digital.
          </p>

          <div className='flex justify-end mb-6'>
            <button className='bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition font-medium flex items-center'>
              <IceCream size={20} className='mr-2' />
              Añadir Nuevo Producto
            </button>
          </div>

          <div className='space-y-5'>
            {mockProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <Link
            href='/admin'
            className='mt-8 inline-flex items-center px-4 py-2 border border-transparent rounded-lg text-sm font-medium text-white bg-gray-500 hover:bg-gray-600 transition duration-150'
          >
            <LayoutDashboard size={20} className='mr-2' />
            Volver al Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}