import { IsNotEmpty, IsNumber, IsString, Max, Min } from "class-validator";

export class CreateVeterinarioDto {

    @IsNotEmpty()
    @IsString()
    ID_Contratado: String;

    @IsNotEmpty()
    @IsString()
    Nombre_Veterinario:String;

    @IsNotEmpty()
    @IsString()
    Clínica_Veterinario:String;

    @IsNotEmpty()
    @IsString()
    Dirección_Veterinario:String;

    @IsNotEmpty()
    @IsNumber()
    Teléfono_Veterinario: number;

    @IsNotEmpty()
    @IsNumber()
    Fax_Veterinario: number;
    
    @IsNumber()
    @IsString() 
    Email_Veterinario: String;

    @IsNumber()
    @IsNotEmpty()
    @Min(0)    
    Distancia_Ciudad_Veterinario: number;

    @IsNotEmpty()
    @IsString()
    Modalidad_Servicio_Veterinario: String;



}
