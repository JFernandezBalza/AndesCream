import { SetMetadata } from '@nestjs/common';

// Definimos el decorador que usaremos en los controladores: @Roles('admin')
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
