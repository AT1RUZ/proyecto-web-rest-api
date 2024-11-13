import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContratosService } from './contratos.service';
import { ListadoContratosProveedoresAlimentos } from './entities/contratos-proveedores-alimentos.entity';
import { ListadoContratosServiciosComplementarios } from './entities/contratos-proveedores-servicios-complementarios.entity';
import { ContratosController } from './contratos.controller';
import { PlanIngresoAdopcionesDonaciones } from './entities/plan_ingresos_adopciones_donaciones.entity';
import { ProgramaActividadesAnimal } from './entities/programa_actividades_animal.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ListadoContratosProveedoresAlimentos,
      ListadoContratosServiciosComplementarios,
      PlanIngresoAdopcionesDonaciones,
      ProgramaActividadesAnimal,
    ]),
  ],
  controllers: [ContratosController],
  providers: [ContratosService],
})
export class ContratosModule {}
