import { isNotEmpty, IsNotEmpty, IsNumber, isString, IsString, Max, Min } from "class-validator";





export class CreateProveedoresAlimentoDto {

    @IsNotEmpty()
    @IsString()
    ID_Contratado: String;

    @IsNotEmpty()
    @IsString()
    Nombre_Proveedor: String;

    @IsNotEmpty()
    @IsString()
    Dirección: String;

    @IsNotEmpty()
    @IsNumber()
    Telefono: number;

    @IsNumber()
    @IsString() 
    Email: String;
    
    @IsNumber()
    @IsString()
    ID_Alimento: String;

}
