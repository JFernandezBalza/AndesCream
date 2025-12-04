import { IsNumber, IsInt, Min } from 'class-validator';

export class OrderItemDto {
  @IsInt()
  @IsNumber()
  productId: number;

  @IsInt()
  @IsNumber()
  @Min(1)
  quantity: number;
}
