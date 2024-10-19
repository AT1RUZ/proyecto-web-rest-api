import { IsAlphanumeric, IsNotEmpty, IsString } from "class-validator";

export class CreateTipoDeAlimentoDto {
    @IsAlphanumeric()
    @IsNotEmpty()
    ID_Alimento: string;

    @IsString()
    @IsNotEmpty()
    Nombre_Alimento: string;
}
