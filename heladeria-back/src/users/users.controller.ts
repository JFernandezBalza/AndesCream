import {
  Controller,
  Get,
  Param,
  Patch,
  Body,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
// 🚨 PASO 1: IMPORTAR la Entidad o Interfaz User
import { User } from './entities/user.entity';

// 🚨 PASO 2: Definir el tipo de respuesta seguro (sin contraseña)
type SafeUser = Omit<User, 'password'>;

// Aplicar protección a todo el controlador
@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('admin')
export class UsersController {
  constructor(private readonly usersService: UsersService) {} // NUEVO: Listar todos los usuarios

  @Get() // 🚨 PASO 3: Tipar la respuesta como un array de SafeUser
  findAll(): SafeUser[] {
    return this.usersService.findAll();
  } // NUEVO: Ver un usuario específico

  @Get(':id') // 🚨 PASO 3: Tipar la respuesta como SafeUser
  findOne(@Param('id', ParseIntPipe) id: number): SafeUser {
    return this.usersService.findOne(id);
  } // NUEVO: Actualizar (generalmente solo el rol)

  @Patch(':id') // 🚨 PASO 3: Tipar la respuesta como SafeUser
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ): SafeUser {
    return this.usersService.update(id, updateUserDto);
  }
}
