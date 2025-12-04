import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  // Asegúrate de que tu array de usuarios tenga la propiedad 'role'
  private users: User[] = [
    {
      id: 1,
      email: 'admin@andescream.com',
      password: '...',
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      email: 'user@test.com',
      password: '...',
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    // ... otros usuarios
  ];

  // (MÉTODO EXISTENTE) Usado por la autenticación, incluye la contraseña
  findOneByEmail(email: string): User | undefined {
    return this.users.find((u) => u.email === email);
  }

  // 1. NUEVO: Listar todos los usuarios (sin contraseña)
  findAll(): Omit<User, 'password'>[] {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return this.users.map(({ password: _password, ...user }) => user);
  }

  // 2. NUEVO: Encontrar por ID (sin contraseña)
  findOne(id: number): Omit<User, 'password'> {
    const user = this.users.find((u) => u.id === id);
    if (!user) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado.`);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _password, ...safeUser } = user;
    return safeUser;
  }

  create(
    userData: Omit<User, 'id' | 'createdAt' | 'updatedAt'>,
  ): Omit<User, 'password'> {
    const newUser: User = {
      id: this.users.length + 1, // Simulación de ID
      ...userData,
      createdAt: new Date(),
      updatedAt: new Date(),
      role: 'user', // Aseguramos el rol por defecto aquí si no viene en userData
    };

    this.users.push(newUser);

    // Retorna el usuario seguro (sin password)
    const { password: _password, ...safeUser } = newUser;
    return safeUser;
  }

  // 3. NUEVO: Actualizar (solo el rol)
  update(id: number, updateUserDto: UpdateUserDto): Omit<User, 'password'> {
    const userIndex = this.users.findIndex((u) => u.id === id);
    if (userIndex < 0) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado.`);
    }

    this.users[userIndex] = {
      ...this.users[userIndex],
      ...updateUserDto, // Solo actualizará 'role'
      updatedAt: new Date(),
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _password, ...safeUser } = this.users[userIndex];
    return safeUser;
  }
}
