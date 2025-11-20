'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
// ❌ ELIMINAMOS: import Navbar from '@/components/Navbar';
import Link from 'next/link'; // Importamos next/link
import {
  Briefcase,
  ListTodo,
  Calendar,
  Clock,
  LayoutDashboard,
  CheckCircle,
  AlertTriangle,
} from 'lucide-react';

// Componente para una tarea individual
const TaskItem: React.FC<{
  title: string;
  status: 'Pendiente' | 'Completada' | 'Vencida';
  due: string;
}> = ({ title, status, due }) => {
  let statusClasses = '';
  let icon: React.ElementType = Clock;

  switch (status) {
    case 'Completada':
      // Corregimos las clases para que Tailwind pueda procesarlas completamente
      statusClasses = 'bg-green-100 text-green-700 border-green-400';
      icon = CheckCircle;
      break;
    case 'Vencida':
      statusClasses = 'bg-red-100 text-red-700 border-red-400';
      icon = AlertTriangle;
      break;
    case 'Pendiente':
    default:
      statusClasses = 'bg-yellow-100 text-yellow-700 border-yellow-400';
      icon = Clock;
      break;
  }

  const Icon = icon;

  return (
    <div
      className={`flex justify-between items-center p-4 rounded-lg shadow-sm border-l-4 ${statusClasses} transition duration-150 hover:shadow-md`}
    >
      <div className='flex items-center space-x-3'>
        <Icon
          size={20}
          // Las clases deben ser literales completas para que Tailwind las detecte
          className={`w-5 h-5 ${
            status === 'Completada'
              ? 'text-green-600'
              : status === 'Vencida'
              ? 'text-red-600'
              : 'text-yellow-600'
          }`}
        />
        <div>
          <p className='font-semibold text-gray-800'>{title}</p>
          <p className='text-xs text-gray-500 flex items-center'>
            <Calendar size={12} className='mr-1' /> Vence: {due}
          </p>
        </div>
      </div>
      <span
        className={`px-2 py-0.5 text-xs font-medium rounded-full ${statusClasses}`}
      >
        {status}
      </span>
    </div>
  );
};

export default function TasksPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Lógica de protección de ruta (Guardia)
  useEffect(() => {
    const adminFlag = localStorage.getItem('is_admin_authenticated');
    if (adminFlag === 'true') {
      setIsAuthenticated(true);
    } else {
      // Redirección con setTimeout para asegurar la ejecución en el contexto de Next.js
      setTimeout(() => router.push('/login'), 50);
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

  // Contenido de la página de Tareas (APLICAMOS EL ENVOLTORIO UNIFICADO)
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center py-20 z-0'>
      <div className='w-full max-w-4xl lg:max-w-6xl'>
        {/* Usamos bg-white/90 para la consistencia con el dashboard */}
        <div className='px-4 sm:px-6 py-8 text-gray-700 bg-white/90 shadow-2xl rounded-lg mx-4 z-0'>
          {/* Contenido de la página de Tareas */}
          <h1 className='text-4xl font-serif text-blue-600 mb-8 border-b pb-3 flex items-center'>
            <Briefcase size={32} className='mr-3' />
            Tareas Administrativas Pendientes
          </h1>

          <p className='text-gray-600 mb-8'>
            Listado de tareas operativas y recordatorios importantes para el
            equipo de administración.
          </p>

          <div className='flex justify-between items-center mb-6 border-b pb-4'>
            <h2 className='text-2xl font-bold text-gray-800 flex items-center'>
              <ListTodo className='mr-2' size={24} /> Mi Lista de Tareas
            </h2>
            <button className='bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition font-medium'>
              + Añadir Nueva Tarea
            </button>
          </div>

          {/* LISTA DE TAREAS SIMULADA */}
          <div className='space-y-4'>
            <TaskItem
              title='Revisar y aprobar órdenes pendientes'
              status='Vencida'
              due='01/11/2025'
            />
            <TaskItem
              title='Solicitar cotización de envases'
              status='Pendiente'
              due='15/11/2025'
            />
            <TaskItem
              title="Actualizar precios de la categoría 'Premium'"
              status='Pendiente'
              due='10/11/2025'
            />
            <TaskItem
              title='Revisar informe de ventas del mes pasado'
              status='Completada'
              due='25/10/2025'
            />
          </div>

          <div className='mt-8 p-4 bg-blue-50 rounded-lg text-blue-800 border-l-4 border-blue-500'>
            <p className='font-semibold text-sm'>Próximos Pasos:</p>
            <p className='text-sm'>
              Una implementación completa de tareas permitiría la asignación a
              diferentes roles y el almacenamiento en una base de datos (como
              Firestore).
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