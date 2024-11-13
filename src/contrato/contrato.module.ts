import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContratosService } from './contrato.service';
import { ContratosController } from './contrato.controller';
import { Contrato } from './entities/contrato.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Contrato])],
  controllers: [ContratosController],
  providers: [ContratosService],
  exports: [ContratosService],
})
export class ContratosModule {}
