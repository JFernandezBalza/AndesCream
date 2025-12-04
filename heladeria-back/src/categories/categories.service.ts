import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  private categories: Category[] = [];
  private currentId = 1;

  create(createCategoryDto: CreateCategoryDto): Category {
    const newCategory: Category = {
      ...createCategoryDto,
      id: this.currentId++,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  findAll(): Category[] {
    return this.categories;
  }

  findOne(id: number): Category {
    const category = this.categories.find((c) => c.id === id);
    if (!category) {
      throw new NotFoundException(`Categoría con ID ${id} no encontrada.`);
    }
    return category;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto): Category {
    const categoryIndex = this.categories.findIndex((c) => c.id === id);
    if (categoryIndex < 0) {
      throw new NotFoundException(`Categoría con ID ${id} no encontrada.`);
    }

    this.categories[categoryIndex] = {
      ...this.categories[categoryIndex],
      ...updateCategoryDto,
      updatedAt: new Date(),
    };

    return this.categories[categoryIndex];
  }

  remove(id: number): void {
    const categoryIndex = this.categories.findIndex((c) => c.id === id);
    if (categoryIndex < 0) {
      throw new NotFoundException(`Categoría con ID ${id} no encontrada.`);
    }
    this.categories.splice(categoryIndex, 1);
  }
}
