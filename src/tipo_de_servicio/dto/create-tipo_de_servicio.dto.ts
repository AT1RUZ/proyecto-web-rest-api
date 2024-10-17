import { IsAlphanumeric, IsNotEmpty, IsString } from 'class-validator';

export class CreateTipoDeServicioDto {
  @IsAlphanumeric()
  @IsNotEmpty()
  ID_Servicio: string;

  @IsString()
  @IsNotEmpty()
  Nombre_Servicio: string;
}
