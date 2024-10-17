import { IsAlphanumeric, IsString, IsNotEmpty, IsNumber, IS_NUMBER } from "class-validator";

export class CreateTransporteDto {
    @IsAlphanumeric()
    @IsNotEmpty()
    ID_Transporte: string;

    @IsNotEmpty()
    @IsString()
    Vehículo: string;

    @IsNotEmpty()
    @IsString()
    Modalidad: string;

    @IsNotEmpty()
    @IsNumber()
    Precio: number;
}