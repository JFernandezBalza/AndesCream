import { OrderItem } from './order-item.entity';

export class Order {
  id: number;
  userId: number; // Quién hizo el pedido
  totalAmount: number; // Precio total final
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  orderItems: OrderItem[]; // Los productos dentro del pedido
  createdAt: Date;
  updatedAt: Date;
}
