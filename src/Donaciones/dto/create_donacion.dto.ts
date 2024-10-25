import { IsNotEmpty, IsNumber, IsString, Min } from "class-validator"

export class CreateDonacion{
    @IsNotEmpty()
    @IsString()
    ID_Donacion:string
    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    Monto:number
    @IsNotEmpty()
    Fecha:Date
    @IsNotEmpty()
    @IsString()
    Nombre_Donante:string
    @IsNotEmpty()
    @IsString()
    Email_Donante:string
    @IsNotEmpty()
    @IsString()
    Telefono_Donante:string
    @IsNotEmpty()
    @IsString()
    ID_Animal:string
}