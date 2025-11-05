'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import {
  BarChart2,
  TrendingUp,
  DollarSign,
  Users,
  LayoutDashboard,
} from 'lucide-react';

// Componente reutilizable para mostrar métricas clave
const MetricCard: React.FC<{
  title: string;
  value: string;
  icon: React.ElementType;
  color: string;
}> = ({ title, value, icon: Icon, color }) => (
  <div
    className={`p-6 bg-white rounded-xl shadow-lg border-l-4 border-${color}-500 transition duration-300 hover:shadow-xl`}
  >
    <div className='flex items-center justify-between'>
      <p className='text-sm font-medium text-gray-500 uppercase'>{title}</p>
      <Icon className={`w-6 h-6 text-${color}-600`} />
    </div>
    <p className='text-3xl font-bold text-gray-900 mt-1'>{value}</p>
  </div>
);

export default function AnalyticsPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Lógica de protección de ruta (Guardia)
  useEffect(() => {
    const adminFlag = localStorage.getItem('is_admin_authenticated');
    if (adminFlag === 'true') {
      setIsAuthenticated(true);
    } else {
      router.push('/login');
    }
    setIsLoading(false);
  }, [router]);

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

  // Contenido de la página de Análisis
  return (
    <div className='min-h-screen bg-gray-50'>
      <Navbar isAdmin={true} />
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
        <div className='bg-white shadow-2xl rounded-xl p-8'>
          <h1 className='text-4xl font-serif text-indigo-600 mb-8 border-b pb-3 flex items-center'>
            <BarChart2 size={32} className='mr-3' />
            Análisis y Estadísticas
          </h1>

          <p className='text-gray-600 mb-8'>
            Visualización de métricas clave sobre ventas, rendimiento de
            productos y actividad de usuarios en tiempo real (simulación).
          </p>

          {/* MÁTRICAS CLAVE */}
          <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mb-12'>
            <MetricCard
              title='Ingresos Mensuales'
              value='$12,345'
              icon={DollarSign}
              color='green'
            />
            <MetricCard
              title='Órdenes (últ. 30 días)'
              value='452'
              icon={TrendingUp}
              color='blue'
            />
            <MetricCard
              title='Nuevos Usuarios'
              value='89'
              icon={Users}
              color='pink'
            />
            <MetricCard
              title='Producto Más Vendido'
              value='Copa Fresa'
              icon={TrendingUp}
              color='yellow'
            />
          </div>

          {/* GRÁFICO SIMULADO */}
          <div className='bg-gray-100 p-6 rounded-lg border border-gray-200'>
            <h2 className='text-xl font-bold text-gray-800 mb-4'>
              Ventas por Semana (Simulación Gráfica)
            </h2>
            <div className='h-64 flex items-end justify-between space-x-2'>
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className='w-full bg-pink-400 rounded-t-md transition-all duration-500 hover:bg-pink-600 cursor-pointer'
                  style={{ height: `${Math.random() * 80 + 20}%` }}
                  title={`Semana ${i + 1}`}
                />
              ))}
            </div>
            <p className='text-center text-sm text-gray-500 mt-2'>
              Mes de Octubre 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
