import { IsAlphanumeric, IsNotEmpty, IsString } from "class-validator";

export class CreateProvinciaDto {
    @IsAlphanumeric()
    @IsNotEmpty()
    ID_Provincia: string;

    @IsString()
    @IsNotEmpty()
    Nombre_Provincia: string;
}
