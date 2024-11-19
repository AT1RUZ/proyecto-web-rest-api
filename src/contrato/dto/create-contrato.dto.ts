import { IsNotEmpty, IsString, IsNumber, IsDate } from 'class-validator';

export class CreateContratoDto {
    
    @IsNotEmpty()
    @IsString()
    Código_Contrato: string;

  @IsNotEmpty()
  @IsString()
  Tipo_Servicio: string;

  @IsNotEmpty()
  @IsString()
  Direccion: string;

  @IsNotEmpty()
  @IsNumber()
  Telefono: number;

  @IsNotEmpty()
  @IsString()
  Email: string;

  @IsNotEmpty()
  @IsString()
  Nombre_Responsable: string;

  @IsNotEmpty()
  @IsDate()
  Fecha_Inicio: Date;

  @IsNotEmpty()
  @IsDate()
  Fecha_Terminacion: Date;

  @IsNotEmpty()
  @IsDate()
  Fecha_Conciliacion: Date;

  @IsNotEmpty()
  @IsString()
  Descripción: string;
}
