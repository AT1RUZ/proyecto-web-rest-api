import { Transform } from 'class-transformer';
import {
  IsAlphanumeric,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  lastname: string;

  @IsNotEmpty()
  @IsAlphanumeric()
  username: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsInt()
  @IsNotEmpty()
  age: number;

  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  permiso: string;
}
