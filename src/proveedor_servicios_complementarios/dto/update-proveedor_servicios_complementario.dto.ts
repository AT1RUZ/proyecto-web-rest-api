import { PartialType } from '@nestjs/mapped-types';
import { CreateProveedorServiciosComplementarioDto } from './create-proveedor_servicios_complementario.dto';

export class UpdateProveedorServiciosComplementarioDto extends PartialType(CreateProveedorServiciosComplementarioDto) {}
