import { isNotEmpty, IsNotEmpty, IsNumber, isString, IsString, Max, Min } from "class-validator";



export class CreateProveedorServiciosComplementarioDto {


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
    Teléfono: number;

    @IsNumber()
    @IsString() 
    Email: String;
    
    @IsNumber()
    @IsString()
    ID_Servicio: String;
}
