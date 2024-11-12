import { PartialType } from '@nestjs/mapped-types';
import { CreateProveedoresAlimentoDto } from './create-proveedores_alimento.dto';

export class UpdateProveedoresAlimentoDto extends PartialType(CreateProveedoresAlimentoDto) {}
