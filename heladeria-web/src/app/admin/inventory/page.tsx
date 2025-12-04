'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Package,
  Warehouse,
  Zap,
  LayoutDashboard,
  AlertTriangle,
} from 'lucide-react';
import Link from 'next/link';

// Componente para la fila de un ítem de inventario
const InventoryItemRow: React.FC<{
  name: string;
  stock: number;
  unit: string;
}> = ({ name, stock, unit }) => {
  const lowStock = stock < 10;
  // Usamos clases dinámicas de Tailwind, que deben estar completas
  const statusColor = lowStock ? 'text-red-600' : 'text-green-600';
  const statusBg = lowStock ? 'bg-red-50' : 'bg-green-50';

  return (
    <tr className='border-b hover:bg-gray-50'>
      <td className='px-6 py-4 font-medium text-gray-900'>{name}</td>
      <td className='px-6 py-4'>
        <span
          className={`px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full ${statusBg} ${statusColor}`}
        >
          {stock} {unit}
        </span>
      </td>
      <td className='px-6 py-4'>
        {lowStock ? (
          <span className='text-xs text-red-500 flex items-center'>
            <AlertTriangle size={14} className='mr-1' /> ¡Poco Stock!
          </span>
        ) : (
          <span className='text-xs text-gray-400'>Normal</span>
        )}
      </td>
      <td className='px-6 py-4 text-right'>
        <button className='text-blue-600 hover:text-blue-800 text-sm'>
          Ajustar
        </button>
      </td>
    </tr>
  );
};

export default function InventoryPage() {
  const router = useRouter();
  // NOTA IMPORTANTE: Para producción real, usa Firestore en lugar de localStorage para autenticación.
  // El uso de localStorage aquí es solo para simulación de un entorno Canvas.
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Lógica de protección de ruta (Guardia)
  useEffect(() => {
    // En un entorno real, usarías la autenticación de Firebase aquí
    const adminFlag = localStorage.getItem('is_admin_authenticated');
    if (adminFlag === 'true') {
      setIsAuthenticated(true);
    } else {
      router.push('/login');
    }
    setIsLoading(false);
  }, [router]);

  // 1. Pantalla de carga/verificación
  if (isLoading || !isAuthenticated) {
    return (
      <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8'>
        <div className='animate-spin rounded-full h-12 w-12 border-b-4 border-pink-500 mb-4'></div>
        <p className='text-xl text-gray-700 font-serif flex items-center'>
          <LayoutDashboard className='w-5 h-5 mr-2' />
          Verificando acceso...
        </p>
      </div>
    );
  }

  // 2. Contenido de la página de Inventario (APLICAMOS EL ENVOLTORIO UNIFICADO)
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center py-20 z-0'>
      <div className='w-full max-w-4xl lg:max-w-6xl'>
        {/* Usamos bg-white/90 para la consistencia con el dashboard */}
        <div className='px-4 sm:px-6 py-8 text-gray-700 bg-white/90 shadow-2xl rounded-lg mx-4 z-0'>
          {/* Contenido de la página de Inventario */}
          <h1 className='text-4xl font-serif text-green-600 mb-8 border-b pb-3 flex items-center'>
            <Warehouse size={32} className='mr-3' />
            Inventario y Control de Stock
          </h1>

          <p className='text-gray-600 mb-8'>
            Vista detallada del stock de materias primas e ingredientes para la
            producción de helados.
          </p>

          <div className='flex justify-between items-center mb-6 border-b pb-4'>
            <h2 className='text-2xl font-bold text-gray-800 flex items-center'>
              <Package className='mr-2' size={24} /> Materias Primas Críticas
            </h2>
            <button className='bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition flex items-center'>
              <Zap size={18} className='mr-2' />
              Generar Informe Rápido
            </button>
          </div>

          {/* TABLA DE INVENTARIO SIMULADA */}
          <div className='overflow-x-auto bg-white border border-gray-200 rounded-lg shadow-sm'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-50'>
                <tr>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Materia Prima
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Stock Actual
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Estado
                  </th>
                  <th className='px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                <InventoryItemRow
                  name='Leche Fresca (LTS)'
                  stock={150}
                  unit='LTS'
                />
                <InventoryItemRow name='Azúcar (KG)' stock={8} unit='KG' />
                <InventoryItemRow
                  name='Vainas de Vainilla'
                  stock={3}
                  unit='Unidades'
                />
                <InventoryItemRow
                  name='Concentrado de Fresa'
                  stock={65}
                  unit='LTS'
                />
                <InventoryItemRow
                  name='Cacao en Polvo Premium'
                  stock={12}
                  unit='KG'
                />
              </tbody>
            </table>
          </div>

          <div className='mt-8 p-4 bg-pink-50 rounded-lg text-pink-800 border-l-4 border-pink-500'>
            <p className='text-sm'>
              **Nota Importante:** El sistema de inventario real debería
              interactuar con una base de datos para actualizar los valores de
              stock tras cada producción y venta.
            </p>
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
