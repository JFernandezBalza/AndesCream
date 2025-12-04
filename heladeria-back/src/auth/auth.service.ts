import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from '../users/entities/user.entity';
import { SignUpDto } from './dto/sign-up.dto';

@Injectable()
export class AuthService {
  // Inyectamos el servicio de Usuarios y el servicio JWT de NestJS
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  // --- 1. Lógica de Login (signIn) ---
  async signIn(email: string, pass: string): Promise<any> {
    const user = this.usersService.findOneByEmail(email);

    // 1. Verificar si el usuario no existe O si existe pero NO tiene la contraseña (debe ser estricto)
    if (!user || !user.password) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    // 2. Corregir el error de la promesa (no-misused-promises) usando 'await'
    // 3. Corregir el error de tipado (TS2345) ya que aseguramos que user.password es string
    if (!(await bcrypt.compare(pass, user.password))) {
      throw new UnauthorizedException('Credenciales inválidas');
    }
  }

  // --- 2. Lógica de Registro (signUp) ---
  async signUp(signUpDto: SignUpDto): Promise<Omit<User, 'password'>> {
    const hashedPassword = await bcrypt.hash(signUpDto.password!, 10);

    const newUserInput: Omit<User, 'id'> = {
      email: signUpDto.email,
      password: hashedPassword,
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // 3. Llamar al método create
    return this.usersService.create(newUserInput);
  }
}
