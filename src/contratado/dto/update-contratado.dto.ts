import { PartialType } from '@nestjs/mapped-types';
import { CreateContratadoDto } from './create-contratado.dto';

export class UpdateContratadoDto extends PartialType(CreateContratadoDto) {}
