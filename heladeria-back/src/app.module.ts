import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; // 1. Importar ConfigModule
import { TypeOrmModule } from '@nestjs/typeorm'; // 2. Importar TypeOrmModule
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // 2. Configurar TypeORM (Conexión a PostgreSQL)
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST ?? 'localhost',
      port: parseInt(process.env.DB_PORT!),
      username: process.env.DB_USERNAME ?? 'postgres',
      password: process.env.DB_PASSWORD ?? '',
      database: process.env.DB_DATABASE ?? 'andescream_db',

      // NOTA CRUCIAL: 'autoLoadEntities' y 'synchronize'
      autoLoadEntities: true, // Carga automáticamente las entidades definidas
      synchronize: true, // Usa solo en DESARROLLO. Sincroniza el esquema de la DB con las entidades.
    }),

    // Módulos de la aplicación
    UsersModule,
    AuthModule,
    ProductsModule,
    CategoriesModule,
    OrdersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
