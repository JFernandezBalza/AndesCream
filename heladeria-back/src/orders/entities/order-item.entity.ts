export class OrderItem {
  id: number;
  orderId: number; // Enlace al pedido principal
  productId: number; // El ID del producto comprado
  name: string; // Nombre del producto (para registrar el nombre al momento de la compra)
  price: number; // Precio del producto al momento de la compra
  quantity: number;
}
