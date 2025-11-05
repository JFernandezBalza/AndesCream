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
    // 1. Si no está logeado O no es ADMIN, redirige a /login
    if (!isUserLoggedIn || userRole !== 'ADMIN') {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // 2. Permite la solicitud si es una ruta pública o si el usuario es ADMIN
  return NextResponse.next();
}

// Configuración para indicar qué rutas debe interceptar el middleware
export const config = {
  matcher: [
    '/admin/:path*', // Protege /admin y todas sus subrutas
  ],
};
