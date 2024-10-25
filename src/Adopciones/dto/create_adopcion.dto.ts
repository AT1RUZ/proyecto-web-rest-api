import { IsDate, IsNotEmpty, IsNumber, IsString, Min } from "class-validator"


export class CreateAdopcion{

    @IsNotEmpty()
    @IsString()
    ID_Adopcion:String

    @IsNotEmpty()
    @IsString()
    ID_Animal:String

    @IsNotEmpty()
    @IsDate()
    Fecha:Date
    
    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    Costo_Adopcion:number

    @IsNotEmpty()
    @IsString()
    Nombre_Adoptante:String

    @IsNotEmpty()
    @IsString()
    Email_Adoptante:String

    @IsNotEmpty()
    @IsString()
    Telefono_Adoptante:String
}