import { Controller, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity'; // Asegúrate de que esta entidad/clase exista

@Injectable()
@Controller('products')
export class ProductsController {
  // Simulación de base de datos
  private products: Product[] = [];
  private currentId = 1;

  // AÑADIR/CORREGIR: CREAR (C de CRUD)
  create(createProductDto: CreateProductDto): Product {
    const newProduct: Product = {
      ...createProductDto,
      id: this.currentId++,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.products.push(newProduct);
    return newProduct;
  }

  // AÑADIR/CORREGIR: LEER TODOS (R de CRUD)
  findAll(): Product[] {
    return this.products;
  }

  // LEER UNO (R de CRUD)
  findOne(id: number): Product {
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado.`);
    }
    return product;
  }

  // ACTUALIZAR (U de CRUD)
  update(id: number, updateProductDto: UpdateProductDto): Product {
    const productIndex = this.products.findIndex((p) => p.id === id);
    if (productIndex < 0) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado.`);
    }

    this.products[productIndex] = {
      ...this.products[productIndex],
      ...updateProductDto,
      updatedAt: new Date(),
    };

    return this.products[productIndex];
  }

  // BORRAR (D de CRUD)
  remove(id: number): void {
    const productIndex = this.products.findIndex((p) => p.id === id);
    if (productIndex < 0) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado.`);
    }
    this.products.splice(productIndex, 1);
  }
}
