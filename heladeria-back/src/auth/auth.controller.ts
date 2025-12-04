import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '../users/entities/user.entity';

// DTOs (Data Transfer Objects) simples para este ejemplo
// En un proyecto real, crearías archivos auth/dto/
class SignInDto {
  email: string;
  pass: string;
}
class SignUpDto extends User {}

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // POST /auth/login
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: SignInDto) {
    // Llama al servicio de login con email y password
    return this.authService.signIn(signInDto.email, signInDto.pass);
  }

  // POST /auth/register
  @Post('register')
  signUp(@Body() signUpDto: SignUpDto) {
    // Llama al servicio de registro
    return this.authService.signUp(signUpDto);
  }
}
