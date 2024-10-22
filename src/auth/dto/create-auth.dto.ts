import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateAuthDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    eamil: string;

    @IsString()
    @MinLength(6)
    @Transform(({value})=> value.trim())
    password: string;
}
