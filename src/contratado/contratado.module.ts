import { Module } from '@nestjs/common';
import { ContratadosService } from './contratado.service';
import { ContratadoController } from './contratado.controller';

@Module({
  controllers: [ContratadoController],
  providers: [ContratadosService],
})
export class ContratadoModule {}
