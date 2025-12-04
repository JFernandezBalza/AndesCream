import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { JwtAuthGuard } from '../auth/auth.guard';
import { GetUser } from '../auth/get-user.decorator'; // <-- Necesitas este decorador
import { Order } from './entities/order.entity';

@Controller('orders')
@UseGuards(JwtAuthGuard) // Protegemos todas las rutas con JWT
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  // POST /orders - Crear un pedido
  @Post()
  create(
    // <--- REMOVER 'async'
    @GetUser('userId') userId: number,
    @Body() createOrderDto: CreateOrderDto,
  ): Order {
    // <--- CAMBIAR el tipo de retorno de Promise<Order> a Order
    return this.ordersService.create(userId, createOrderDto);
  }

  // GET /orders - Listar mis pedidos
  @Get()
  findAll(@GetUser('userId') userId: number): Order[] {
    return this.ordersService.findAllByUserId(userId);
  }

  // Las rutas de gestión (admin) como PATCH para cambiar el estado a 'shipped'
  // deben ser protegidas con RolesGuard, similar a Productos.
}
