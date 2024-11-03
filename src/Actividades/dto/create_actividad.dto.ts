import { IsDate, IsNotEmpty, IsNumber, IsString, IsTimeZone, Min } from "class-validator";

export class CreateActividad {
    @IsNotEmpty()
    @IsString()
    ID_Actividad: string;

    @IsNotEmpty()
    @IsString()
    Descripción_Actividad: string;

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    Precio: number;

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    Precio_Transporte: number;

    @IsNotEmpty()
    @IsString()
    ID_Animal: string;

    @IsNotEmpty()
    @IsString()
    ID_Contratado_Veterinario: string;

    @IsNotEmpty()
    @IsString()
    ID_Contratado_Proveedor_Alimentos: string;

    @IsNotEmpty()
    @IsString()
    ID_Contratado_Proveedor_Servicios_Complementarios: string;

    @IsNotEmpty()
    @IsString()
    ID_Transporte: string;

    @IsNotEmpty()
    @IsDate()
    Dia: Date;

    @IsNotEmpty()
    @IsTimeZone()
    Hora: number;
}
