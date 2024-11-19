import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContratadosService } from './contratado.service';
import { ContratadoController } from './contratado.controller';
import { Contratado } from './entities/contratado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Contratado])],
  controllers: [ContratadoController],
  providers: [ContratadosService],
  exports: [ContratadosService],
})
export class ContratadoModule {}
