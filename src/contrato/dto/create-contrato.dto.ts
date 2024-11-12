import { IsNotEmpty, IsString, IsNumber, IsDate } from 'class-validator';

export class CreateContratoDto {
    
    @IsNotEmpty()
    @IsString()
    Codigo_Contrato: string;

  @IsNotEmpty()
  @IsString()
  Tipo_Contrato: string;

  @IsNotEmpty()
  @IsString()
  Tipo_Servicio: string;

  @IsNotEmpty()
  @IsString()
  Dirección: string;

  @IsNotEmpty()
  @IsNumber()
  Teléfono: number;

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
  Fecha_Consiliacion: Date;

  @IsNotEmpty()
  @IsString()
  Descripcion: string;
}
