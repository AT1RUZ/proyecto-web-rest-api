import { isNotEmpty, IsNotEmpty, isString, IsString, Max, Min } from "class-validator";



export class CreateContratadoDto {

    @IsNotEmpty()
    @IsString()
    ID_Contratado: string;

    @IsNotEmpty()
    @IsString()
    Codigo_Contrato: string;
    
    @IsNotEmpty()
    @IsString()
    ID_Provincia: string;
}