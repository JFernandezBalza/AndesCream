import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { AuthUser } from './roles.guard';

// Interface para el Request de Express, tipado con el usuario decodificado
interface RequestWithUser extends Request {
  user: AuthUser;
}

export const GetUser = createParamDecorator(
  (data: keyof AuthUser | undefined, ctx: ExecutionContext) => {
    // Usamos 'any' en la aserción si la interfaz AuthUser no es exportable,
    // pero idealmente deberíamos usar RequestWithUser:
    const request: RequestWithUser = ctx.switchToHttp().getRequest();

    if (data) {
      // Retorna una propiedad específica: request.user.userId
      return request.user[data];
    }
    // Retorna el objeto de usuario completo
    return request.user;
  },
);
