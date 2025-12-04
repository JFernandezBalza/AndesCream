import { IsIn, IsOptional } from 'class-validator';

export class UpdateUserDto {
  // Solo permitimos modificar el rol para el CRUD de administración
  @IsOptional()
  @IsIn(['admin', 'user'], { message: 'El rol debe ser "admin" o "user"' })
  role: 'admin' | 'user';
}
