import { IsEmail, IsString, MinLength } from 'class-validator';

export class User {
  id: number;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password?: string;

  role: 'admin' | 'user';
  createdAt: Date;
  updatedAt: Date;
}
