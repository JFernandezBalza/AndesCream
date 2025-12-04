import { IsString, IsNumber, IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNumber()
  stock: number;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsBoolean()
  isAvailable: boolean;
}
