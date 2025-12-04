import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

export interface AuthUser {
  userId: number;
  email: string;
  role: 'admin' | 'user';
}

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true;
    }

    // SOLUCIÓN FINAL: Usar el índice de la solicitud y tipar directamente el resultado
    // Esto resuelve el "Unsafe assignment of an any value." (Línea 29)
    const request: { user: AuthUser } = context.switchToHttp().getRequest();

    // El linter ahora sabe que la propiedad 'user' existe y tiene el tipo AuthUser.
    const user = request.user; // <-- Ahora user es de tipo AuthUser, no any.

    if (!user) {
      return false;
    }

    return requiredRoles.some((role) => user.role === role);
  }
}
