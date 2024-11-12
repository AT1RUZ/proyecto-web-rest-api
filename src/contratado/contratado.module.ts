import { Module } from '@nestjs/common';
import { ContratadoService } from './contratado.service';
import { ContratadoController } from './contratado.controller';

@Module({
  controllers: [ContratadoController],
  providers: [ContratadoService],
})
export class ContratadoModule {}
