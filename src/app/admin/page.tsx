// app/admin/page.tsx

'use client';

import Navbar from '@/components/Navbar';
import Link from 'next/link';
// Importamos los nuevos iconos necesarios
import {
  Settings,
  Users,
  Package,
  LogOut,
  Briefcase,
  BarChart2,
  Palette,
  LucideIcon,
} from 'lucide-react';

// --- DEFINICIÓN DE TIPOS ---
interface ActionCardProps {
  icon: LucideIcon;
  title: string;
  href: string;
  // Aceptamos más colores para diferenciar los módulos
  color: 'pink' | 'blue' | 'green' | 'gray' | 'yellow' | 'red' | 'indigo';
}
// ----------------------------

export default function AdminPage() {
  const backgroundImage = '/images/fondo5.jpg';

  // Componente de Tarjeta de Acción tipado
  const ActionCard: React.FC<ActionCardProps> = ({
    icon: Icon,
    title,
    href,
    color,
  }) => (
    <Link
      href={href}
      className={`bg-white/90 p-6 rounded-lg shadow-xl text-center transform hover:scale-[1.03] transition duration-300 border-b-4 border-${color}-500`}
    >
      <Icon className={`w-10 h-10 mx-auto mb-3 text-${color}-600`} />
      <h3 className='text-xl font-bold text-gray-800'>{title}</h3>
    </Link>
  );

  return (
    <div className='min-h-screen'>
      <Navbar isOverlay={false} />

      <section
        id='admin-panel'
        className='w-full h-auto py-16 flex flex-col bg-cover bg-[position:35%_center] bg-no-repeat relative md:bg-center'
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        <div className='flex-grow flex items-center justify-center py-16 pb-16 bg-black/15 z-0 min-h-screen'>
          <div className='w-full max-w-4xl lg:max-w-6xl'>
            <div className='px-4 sm:px-6 py-8 text-gray-700 bg-white/90 shadow-2xl rounded-lg mx-4 z-0'>
              <h1 className='text-4xl md:text-5xl font-serif text-gray-600 mb-4 border-b-2 border-pink-500 pb-2'>
                Dashboard de Administración
              </h1>

              <p className='text-lg text-justify font-sans text-gray-700 max-w-4xl mb-10 mt-4'>
                Bienvenido al centro de gestión de AndesCream. Selecciona una
                tarea para comenzar.
              </p>

              {/* Grid de Herramientas del Administrador (5 Módulos + Usuarios + Salir) */}
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4'>
                {/* 1. Gestión de Menús (Requisito 1) */}
                <ActionCard
                  icon={Settings}
                  title='Gestión de Menús (Precios y Fotos)'
                  href='/admin/menus'
                  color='pink'
                />

                {/* 2. Análisis y Estadísticas (Requisito 2) */}
                <ActionCard
                  icon={BarChart2}
                  title='Análisis y Estadísticas'
                  href='/admin/analytics'
                  color='indigo'
                />

                {/* 3. Apariencia y Fondos (Requisito 3) */}
                <ActionCard
                  icon={Palette}
                  title='Apariencia y Fondos'
                  href='/admin/design'
                  color='yellow'
                />

                {/* 4. Tareas Administrativas (Requisito 4) */}
                <ActionCard
                  icon={Briefcase}
                  title='Tareas Administrativas'
                  href='/admin/tasks'
                  color='blue'
                />

                {/* 5. Inventario y Stock (Requisito 5) */}
                <ActionCard
                  icon={Package}
                  title='Inventario y Stock'
                  href='/admin/inventory'
                  color='green'
                />

                {/* 6. Gestión de Usuarios (Mantenido) */}
                <ActionCard
                  icon={Users}
                  title='Ver Usuarios'
                  href='/admin/users'
                  color='gray'
                />

                {/* 7. Cerrar Sesión (Mantenido) */}
                <ActionCard
                  icon={LogOut}
                  title='Cerrar Sesión'
                  href='/api/auth/logout'
                  color='red'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
