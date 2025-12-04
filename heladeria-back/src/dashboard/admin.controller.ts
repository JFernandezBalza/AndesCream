import { Controller, Get, Request } from '@nestjs/common';
import { Roles } from 'src/auth/roles.decorator';

// Definimos la interfaz que tendrá el objeto req.user DESPUÉS de pasar el JWT Guard
interface AuthUser {
  userId: number;
  email: string;
  role: 'admin' | 'user';
}

// Interfaz para la solicitud que incluye al usuario
interface RequestWithUser extends Request {
  user: AuthUser;
}

@Controller('admin')
export class AdminController {
  // GET /admin/dashboard
  @Get('dashboard')
  @Roles('admin')
  // Aplicamos el nuevo tipado a @Request()
  getAdminDashboard(@Request() req: RequestWithUser) {
    // <--- CORRECCIÓN DE TIPADO
    // Ya no deberías tener errores de 'unsafe member access' en req.user
    return {
      message: `Bienvenido, Administrador ${req.user.email}. Estos son los datos del Dashboard.`,
      user: req.user,
    };
  }

  // GET /admin/public-data
  @Get('public-data')
  getPublicData(@Request() req: RequestWithUser) {
    // <--- CORRECCIÓN DE TIPADO
    return {
      message: `Hola, ${req.user.email}. Esta es data accesible para cualquier usuario (admin o user).`,
      data: ['Item 1', 'Item 2'],
    };
  }
}
