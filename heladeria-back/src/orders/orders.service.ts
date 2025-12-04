import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entities/order.entity';
import { OrderItem } from './entities/order-item.entity';
import { ProductsService } from '../products/products.service';

@Injectable()
export class OrdersService {
  private orders: Order[] = [];
  private orderItems: OrderItem[] = [];
  private currentOrderId = 1;
  private currentOrderItemId = 1;

  constructor(private readonly productsService: ProductsService) {} // CAMBIO CLAVE: Se elimina 'async' y 'Promise'

  create(userId: number, createOrderDto: CreateOrderDto): Order {
    let totalAmount = 0;
    const newOrderItems: OrderItem[] = []; // 1. Procesar cada ítem del DTO

    for (const itemDto of createOrderDto.items) {
      // Usamos el servicio de productos para obtener la data (precio y nombre)
      const product = this.productsService.findOne(itemDto.productId); // Esto lanzará NotFoundException si falla
      // Cálculo:

      const itemTotal = product.price * itemDto.quantity;
      totalAmount += itemTotal; // Crear el ítem de la orden (almacenando el precio al momento de la compra)

      const newItem: OrderItem = {
        id: this.currentOrderItemId++,
        orderId: this.currentOrderId,
        productId: product.id,
        name: product.name,
        price: product.price,
        quantity: itemDto.quantity,
      };
      newOrderItems.push(newItem);
      this.orderItems.push(newItem); // Simulación de guardado de ítems
    } // 2. Crear el objeto de la orden principal

    const newOrder: Order = {
      id: this.currentOrderId++,
      userId,
      totalAmount,
      status: 'pending',
      orderItems: newOrderItems,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.orders.push(newOrder);
    return newOrder;
  } // Obtener pedidos por usuario

  findAllByUserId(userId: number): Order[] {
    return this.orders.filter((o) => o.userId === userId);
  }
}
