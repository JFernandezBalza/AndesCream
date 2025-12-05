import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Este middleware se encarga de proteger la ruta /admin/ y de
 * manejar las redirecciones relacionadas con la autenticación.
 */

/**
 * Verifica si el token de autenticación existe en las cookies de la solicitud.
 * @param request La solicitud Next.js.
 * @returns true si el token existe, false en caso contrario.
 */
function checkAuthToken(request: NextRequest): boolean {
  // Lógica real: verifica si existe la cookie de sesión
  const token = request.cookies.get('auth_token'); // <-- 'request' es usado aquí
  return !!token && !!token.value; // Verifica que la cookie exista y tenga valor
}

/**
 * Obtiene el rol del usuario (simplificado).
 * @param request La solicitud Next.js.
 * @returns 'ADMIN' si está autenticado, 'GUEST' si no lo está.
 */
function getUserRole(request: NextRequest): string {
  if (checkAuthToken(request)) {
    // <-- 'request' es usado aquí
    return 'ADMIN';
  }
  return 'GUEST';
}

export function middleware(request: NextRequest) {
  // 'checkAuthToken' y 'getUserRole' son usadas aquí, eliminando las advertencias.
  const isUserLoggedIn = checkAuthToken(request);
  const userRole = getUserRole(request);

  // ----------------------------------------------------------------------
  // ✅ LÓGICA DE SEGURIDAD RESTAURADA
  // ----------------------------------------------------------------------

  if (request.nextUrl.pathname.startsWith('/admin')) {
    // 1. Protección de ruta /admin
    if (!isUserLoggedIn || userRole !== 'ADMIN') {
      console.log(
        'MIDDLEWARE: Bloqueando acceso a /admin y redirigiendo a /login.'
      );
      return NextResponse.redirect(new URL('/login', request.url));
    }

    // Permitir acceso a /admin si está autenticado y es ADMIN
    return NextResponse.next();
  }

  // 2. Redirección de usuario logeado en /login
  if (isUserLoggedIn && request.nextUrl.pathname.startsWith('/login')) {
    console.log(
      'MIDDLEWARE: Usuario autenticado intentó ir a /login, redirigiendo a /admin.'
    );
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  // Permite la solicitud si no es una ruta protegida
  return NextResponse.next();
}

export const config = {
  // Aplicar el middleware a todas las rutas bajo /admin y también a /login
  matcher: ['/admin/:path*', '/login'],
};
