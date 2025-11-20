// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// ⚠️ NOTA IMPORTANTE: Estas funciones son simuladas y DEBEN ser reemplazadas
// por tu lógica REAL de autenticación (ej. usando NextAuth.js o JWTs)
// para obtener el estado de sesión y el rol del usuario a partir de las cookies/headers.

function checkAuthToken(request: NextRequest): boolean {
  // Lógica real: verifica si existe la cookie de sesión
  return !!request.cookies.get('auth_token');
}

function getUserRole(request: NextRequest): string {
  // Lógica real: decodifica el token de la cookie para obtener el rol
  // Por simplicidad en este ejemplo, devolvemos 'ADMIN' solo si hay token
  if (checkAuthToken(request)) {
    return 'ADMIN';
  }
  return 'GUEST';
}

export function middleware(request: NextRequest) {
  // Ahora la variable 'request' es utilizada al llamar a las funciones
  const isUserLoggedIn = checkAuthToken(request);
  const userRole = getUserRole(request);

  if (request.nextUrl.pathname.startsWith('/admin')) {
    // ⚠️ ¡COMENTAMOS TEMPORALMENTE LA VERIFICACIÓN DE SEGURIDAD!
    // Esto es solo para que el router.push en /login funcione y puedas diseñar /admin.
    // **DEBES** restaurar esto ANTES de salir a producción.
    
    if (!isUserLoggedIn || userRole !== 'ADMIN') {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    // Permitimos el acceso para la prueba:
    return NextResponse.next();
  }

  // Permite la solicitud si pasa la verificación o si no es una ruta protegida
  return NextResponse.next();
}

// Mantenemos la configuración, pero la lógica interna está puenteada
export const config = {
  matcher: [
    '/admin/:path*', // Sigue interceptando, pero la lógica superior lo ignora
  ],
};