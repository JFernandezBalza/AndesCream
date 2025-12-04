import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller'; // <--- ¡Asegúrate de tener esta importación!

@Module({
  imports: [],
  controllers: [AdminController],
  providers: [],
})
export class DashboardModule {}
