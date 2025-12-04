import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module'; // Importamos UsersModule
import { JwtModule } from '@nestjs/jwt'; // Importamos JwtModule
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    // 1. Necesitamos el servicio de usuarios para verificar credenciales
    UsersModule,
    // 2. Configuramos el módulo JWT
    ConfigModule.forRoot(), // Asegura que las variables de entorno se carguen
    JwtModule.register({
      // ¡IMPORTANTE! NUNCA USES UNA CLAVE SECRETA HARDCODEADA EN PRODUCCIÓN.
      // La clave secreta debe ser leída desde variables de entorno (.env).
      secret:
        process.env.JWT_SECRET || 'SECRETO_FACIL_DE_CAMBIAR_EN_PRODUCCION',
      signOptions: { expiresIn: '60m' }, // El token expira en 60 minutos
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
