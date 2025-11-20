// app/admin/page.tsx (CORREGIDO - Aliniado con RootLayout)

'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
// IMPORTAMOS EL COMPONENTE DE MOTIVACIÓN
import DailyMotivationCard from '@/components/DailyMotivationCard';

// Importamos los iconos de lucide-react para las tarjetas y la carga
import {
  Settings,
  Package,
  LogOut,
  Briefcase,
  BarChart2,
  Palette,
  LucideIcon,
  LayoutDashboard,
} from 'lucide-react';

// --- DEFINICIÓN DE TIPOS ---
type ActionCardColor =
  | 'pink'
  | 'blue'
  | 'green'
  | 'gray'
  | 'yellow'
  | 'red'
  | 'indigo';

interface ActionCardProps {
  icon: LucideIcon;
  title: string;
  href?: string;
  onClick?: () => void;
  color: ActionCardColor;
}

// Definiciones de clases reutilizables de Tailwind
const adminClasses = {
  // Clase base para todas las tarjetas con efecto hover y borde de color
  cardClass: (color: ActionCardColor) =>
    `bg-white/90 p-6 rounded-lg shadow-xl text-center transform hover:scale-[1.03] transition duration-300 border-b-4 border-${color}-500`,
  // Clase para el icono en la tarjeta
  iconClass: (color: ActionCardColor) =>
    `w-10 h-10 mx-auto mb-3 text-${color}-600`,
};

// Componente de Tarjeta de Acción tipado (funciona como Link o Button)
const ActionCard: React.FC<ActionCardProps> = ({
  icon: Icon,
  title,
  href,
  onClick,
  color,
}) => {
  const content = (
    <>
      <Icon className={adminClasses.iconClass(color)} />
      <h3 className='text-xl font-bold text-gray-800'>{title}</h3>
    </>
  );

  const cardClasses = adminClasses.cardClass(color);

  // Si tiene href, renderiza como Link
  if (href) {
    return (
      <Link href={href} className={cardClasses}>
        {content}
      </Link>
    );
  }

  // Si tiene onClick, renderiza como Button (para el logout)
  if (onClick) {
    return (
      <button onClick={onClick} className={cardClasses + ' w-full'}>
        {content}
      </button>
    );
  }

  return <div className={cardClasses}>{content}</div>;
};

export default function AdminPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // --- LÓGICA DE CIERRE DE SESIÓN ---
  const handleLogout = useCallback(() => {
    // 1. Limpia el indicador de sesión de localStorage
    localStorage.removeItem('is_admin_authenticated');
    console.log('Sesión de administrador cerrada. Redirigiendo...');
    // 2. Redirige al login.
    setTimeout(() => {
      router.push('/login');
    }, 100);
  }, [router]);

  // --- LÓGICA DE PROTECCIÓN DE RUTA (GUARDIA) ---
  useEffect(() => {
    // Lee el indicador de autenticación.
    const adminFlag = localStorage.getItem('is_admin_authenticated');

    if (adminFlag === 'true') {
      setIsAuthenticated(true);
    } else {
      // Redirigimos si no está autenticado
      console.warn('Acceso denegado. Redirigiendo a /login.');
      setTimeout(() => {
        router.push('/login');
      }, 50);
    }
    // Finalizamos la carga
    setIsLoading(false);
  }, [router]);

  // 1. Mostrar pantalla de carga/verificación (Este estado debe permanecer igual)
  if (isLoading || !isAuthenticated) {
    return (
      <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8'>
        <div className='animate-spin rounded-full h-12 w-12 border-b-4 border-pink-500 mb-4'></div>
        <p className='text-xl text-gray-700 font-serif flex items-center'>
          <LayoutDashboard className='w-5 h-5 mr-2' />
          Verificando acceso al panel...
        </p>
      </div>
    );
  }

  // 2. Mostrar Dashboard si está autenticado (APLICAMOS EL ENVOLTORIO UNIFICADO)
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center py-20 z-0'>
      <div className='w-full max-w-4xl lg:max-w-6xl'>
        <div className='px-4 sm:px-6 py-8 text-gray-700 bg-white/90 shadow-2xl rounded-lg mx-4 z-0'>
          {/* Contenido del Dashboard */}
          <h1 className='text-4xl md:text-5xl font-serif text-gray-600 mb-4 border-b-2 border-pink-500 pb-2'>
            Dashboard de Administración
          </h1>

          <p className='text-lg text-justify font-sans text-gray-700 max-w-4xl mb-10 mt-4'>
            Bienvenido al centro de gestión de AndesCream. Selecciona una tarea
            para comenzar.
          </p>

          {/* Cita Motivacional Diaria (NUEVA CARACTERÍSTICA) */}
          <DailyMotivationCard />

          {/* Grid de Herramientas del Administrador (7 Módulos) */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4'>
            {/* 1. Gestión de Menús */}
            <ActionCard
              icon={Settings}
              title='Gestión de Menús (Precios y Fotos)'
              href='/admin/menus'
              color='pink'
            />

            {/* 2. Análisis y Estadísticas */}
            <ActionCard
              icon={BarChart2}
              title='Análisis y Estadísticas'
              href='/admin/analytics'
              color='indigo'
            />

            {/* 3. Apariencia y Fondos */}
            <ActionCard
              icon={Palette}
              title='Apariencia y Fondos'
              href='/admin/design'
              color='yellow'
            />

            {/* 4. Tareas Administrativas */}
            <ActionCard
              icon={Briefcase}
              title='Tareas Administrativas'
              href='/admin/tasks'
              color='blue'
            />

            {/* 5. Inventario y Stock */}
            <ActionCard
              icon={Package}
              title='Inventario y Stock'
              href='/admin/inventory'
              color='green'
            />

            {/* 6. Cerrar Sesión (Usa onClick para la función de logout) */}
            <ActionCard
              icon={LogOut}
              title='Cerrar Sesión'
              onClick={handleLogout}
              color='red'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
