'use client';

import { FormEvent, useState } from 'react'; 
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { LogIn } from 'lucide-react';
import { useRouter } from 'next/navigation';

// ¡No usar en producción! Credenciales hardcodeadas para simulación
const ADMIN_EMAIL = 'andescream';
const ADMIN_PASSWORD = 'valentina123'; 

export default function LoginPage() {
  const router = useRouter();
  const backgroundImage = '/images/fondo5.jpg';

  // Estados para capturar los valores del formulario
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(''); // Limpiamos errores previos

    // --- LOGS DE DEBUGGING PARA VERIFICAR LA ENTRADA ---
    console.log("Intento de Login detectado.");
    console.log(`Email ingresado: "${email}"`);
    console.log(`Password ingresada: "${password.replace(/./g, '*')}" (Solo caracteres)`);
    console.log(`Credenciales esperadas: ${ADMIN_EMAIL} / ${ADMIN_PASSWORD}`);

    // 1. Verificación de credenciales simulada
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      // 2. Si las credenciales son correctas (Simulación de éxito):
      
      // Esto simula la persistencia de la sesión de administrador.
      localStorage.setItem('is_admin_authenticated', 'true');
      
      console.log('✅ ÉXITO: Inicio de sesión correcto. Iniciando redirección a /admin...');

      // **La redirección clave:**
      router.push('/admin'); // Redirige al panel de administración
    } else {
      // 3. Si las credenciales fallan:
      console.error('❌ FALLO: Credenciales incorrectas. (Verifique mayúsculas/minúsculas o espacios)');
      setError('Credenciales incorrectas. Intenta de nuevo.');
    }
  };

  return (
    <div className='min-h-screen'>
      {/*  Navbar: Lo mantengo en false y sin overlay para un estilo limpio de página interior */}
      <Navbar isOverlay={false} />

      <section
        id='login-section'
        className='w-full h-auto py-16 flex flex-col bg-cover bg-[position:35%_center] bg-no-repeat relative md:bg-center'
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        <div className='flex-grow flex items-center justify-center py-16 pb-16 bg-black/15 z-0 min-h-screen'>
          <div className='w-full max-w-sm sm:max-w-md'>
            <div className='px-4 sm:px-6 py-8 text-gray-700 bg-white/90 shadow-2xl rounded-lg mx-4 z-0'>
              <h1 className='text-3xl md:text-4xl font-serif text-gray-600 mb-6 flex items-center justify-center'>
                <LogIn className='w-6 h-6 mr-2 text-pink-500' />
                Inicio de Sesión
              </h1>

              {/* Mensaje de Error */}
              {error && (
                <div className='mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded text-sm'>
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className='space-y-6'>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    Email o Usuario
                  </label>
                  <input
                    id='email'
                    name='email'
                    type='text'
                    required
                    // Conexión con el estado
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500'
                    placeholder='admin@andesscream.com'
                  />
                </div>

                <div>
                  <label
                    htmlFor='password'
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    Contraseña
                  </label>
                  <input
                    id='password'
                    name='password'
                    type='password'
                    required
                    // Conexión con el estado
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500'
                    placeholder='***********'
                  />
                </div>

                <div>
                  <button
                    type='submit'
                    className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition duration-150'
                  >
                    Acceder
                  </button>
                </div>
              </form>

              <div className='mt-6 text-center'>
                <Link
                  href='/'
                  className='text-sm text-gray-600 hover:text-pink-600 hover:underline transition duration-150'
                >
                  ← Volver
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}