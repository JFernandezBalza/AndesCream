import { Module } from '@nestjs/common';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService],
  // ¡Importante! Exportamos UsersService para que otros módulos lo usen
  exports: [UsersService],
})
export class UsersModule {}
