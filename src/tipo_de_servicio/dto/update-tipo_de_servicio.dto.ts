import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoDeServicioDto } from './create-tipo_de_servicio.dto';

export class UpdateTipoDeServicioDto extends PartialType(CreateTipoDeServicioDto) {}
