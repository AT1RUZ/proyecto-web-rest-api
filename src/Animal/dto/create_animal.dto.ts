import { IsNotEmpty, IsNumber, IsString, Max, Min } from "class-validator";

export class CreateAnimal{
    @IsNotEmpty()
    @IsString()
    ID_Animal: String;

    @IsNotEmpty()
    @IsString()
    Nombre:String;

    @IsNotEmpty()
    @IsString()
    Especie:String;

    @IsNotEmpty()
    @IsString()
    Raza:String;

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    @Max(100)
    Edad: number;

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    @Max(100)
    Peso: number;
    
    @IsNumber()
    @IsNotEmpty()
    @Min(0)
    Dias_Refugio: number;

    @IsNumber()
    @IsNotEmpty()
    @Min(0)    
    Precio_Mantenimiento: number;

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    Precio_Adopción: number;
}
