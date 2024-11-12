import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContratosService } from './contratos.service';
import { ListadoContratosProveedoresAlimentos } from './entities/contratos-proveedores-alimentos.entity';
import { ListadoContratosServiciosComplementarios } from './entities/contratos-proveedores-servicios-complementarios.entity';
import { ContratosController } from './contratos.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ListadoContratosProveedoresAlimentos,
      ListadoContratosServiciosComplementarios,
    ]),
  ],
  controllers: [ContratosController],
  providers: [ContratosService],
})
export class ContratosModule {}
