'use client';

import { FormEvent, useState } from 'react';
import { LogIn } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

// ¡No usar en producción! Credenciales hardcodeadas para simulación
const ADMIN_EMAIL = 'andescream';
const ADMIN_PASSWORD = 'valen123';

export default function LoginPage() {
  const router = useRouter();
  const backgroundImage = '/images/fondo5.jpg';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setError('');

    console.log('Intento de Login detectado.');

    // 1. Verificación de credenciales simulada
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      // 2. SIMULACIÓN DE ÉXITO:
      Cookies.set('auth_token', 'simulated_admin_token', {
        expires: 1 / 24, // Expira en 1/24 de día, es decir, 1 hora
        path: '/', // Disponible en toda la aplicación
      });

      console.log(
        '✅ ÉXITO: Cookie de autenticación establecida. Iniciando redirección a /admin...'
      );

      // 3. Redirige.
      // ⭐ SOLUCIÓN: Usamos router.push() en lugar de window.location.href
      router.push('/admin');
    } else {
      // 4. Si las credenciales fallan:
      console.error('❌ FALLO: Credenciales incorrectas.');
      setError(
        'Credenciales incorrectas. Intenta de nuevo.'
      );
    }
  };

  return (
    <div>
      <section
        id='login-section'
        className='w-full min-h-screen pt-16 flex flex-col bg-cover bg-[position:35%_center] bg-no-repeat relative md:bg-center'
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        <div className='flex-grow flex items-center justify-center py-16 pb-16 bg-black/40 z-0'>
          <div className='w-full max-w-sm sm:max-w-md'>
            <div className='px-4 sm:px-6 py-8 text-gray-700 bg-white/95 shadow-2xl rounded-xl mx-4 z-0 border border-gray-200'>
              <h1
                className='text-3xl md:text-4xl font-serif text-gray-800 mb-6 flex items-center justify-center
                                 border-b-2 border-pink-500 pb-3'
              >
                <LogIn className='w-7 h-7 mr-3 text-pink-600' />
                Inicio de Sesión
              </h1>

              {error && (
                <div className='mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm'>
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className='space-y-6 pt-2'>
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 
                    focus:outline-none focus:ring-pink-500 focus:border-pink-500 transition duration-150'
                    placeholder='andescream'
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 
                                 focus:outline-none focus:ring-pink-500 focus:border-pink-500 transition duration-150'
                    placeholder='***********'
                  />
                </div>

                <div>
                  <button
                    type='submit'
                    className='w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-lg 
                                 text-base font-semibold text-white bg-pink-600 hover:bg-pink-700 
                                 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 
                                 transition duration-150 transform hover:scale-[1.01]'
                  >
                    Acceder
                  </button>
                </div>
              </form>

              <div className='mt-6 text-center pt-4 border-t border-gray-100'>
                <Link
                  href='/'
                  className='text-sm text-gray-600 hover:text-pink-600 hover:underline transition duration-150'
                >
                  ← Volver a la página principal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}