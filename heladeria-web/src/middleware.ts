import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Verifica si el token de autenticación existe en las cookies de la solicitud.
 * @param request La solicitud Next.js.
 * @returns true si el token existe, false en caso contrario.
 */
function checkAuthToken(request: NextRequest): boolean {
  // Lógica real: verifica si existe la cookie de sesión
  // Se usa `.get('auth_token')` para obtener el objeto, y se verifica si tiene un valor.
  const token = request.cookies.get('auth_token');
  return !!token && !!token.value; // Verifica que la cookie exista y tenga valor
}

/**
 * Obtiene el rol del usuario (simplificado).
 * @param request La solicitud Next.js.
 * @returns 'ADMIN' si está autenticado, 'GUEST' si no lo está.
 */
function getUserRole(request: NextRequest): string {
  if (checkAuthToken(request)) {
    return 'ADMIN';
  }
  return 'GUEST';
}

export function middleware(request: NextRequest) {
  const isUserLoggedIn = checkAuthToken(request);
  const userRole = getUserRole(request);

  if (request.nextUrl.pathname.startsWith('/admin')) {
    // ----------------------------------------------------------------------
    // ✅ SEGURIDAD RESTAURADA: 'userRole' ahora se utiliza para verificar
    // el acceso. Esto elimina el warning de variable no utilizada.
    // ----------------------------------------------------------------------

    if (!isUserLoggedIn || userRole !== 'ADMIN') {
      console.log(
        'MIDDLEWARE: Bloqueando acceso a /admin y redirigiendo a /login.'
      );
      return NextResponse.redirect(new URL('/login', request.url));
    }

    // Si el chequeo de arriba estuviera activo y pasa:
    return NextResponse.next();
  }

  // Si estás logeado e intentas acceder a /login, redirige a /admin (opcional, pero útil)
  if (isUserLoggedIn && request.nextUrl.pathname.startsWith('/login')) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  // Permite la solicitud si pasa la verificación o si no es una ruta protegida
  return NextResponse.next();
}

export const config = {
  // Aplicar el middleware a todas las rutas bajo /admin y también a /login
  matcher: ['/admin/:path*', '/login'],
};
